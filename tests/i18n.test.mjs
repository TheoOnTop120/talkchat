import assert from "node:assert/strict";
import test from "node:test";
import {
  getMessageCatalog,
  loadMessageCatalog,
  messageLocales,
  translate,
} from "../src/i18n/messages.ts";
import {
  applyLocaleToDocument,
  formatDate,
  formatNumber,
  getInitialLocale,
  getLocaleDirection,
  locales,
  normalizeLocale,
  pluralCategory,
  saveLocale,
} from "../src/i18n/locales.ts";
import { getLegalDocument, loadLegalCatalog } from "../src/i18n/legal.ts";

test("all 41 advertised locales have a complete, non-empty message catalog", async () => {
  assert.equal(locales.length, 41);
  assert.equal(new Set(locales.map(({ code }) => code)).size, 41);
  assert.deepEqual(
    [...messageLocales].sort(),
    locales.map(({ code }) => code).sort(),
  );

  await Promise.all(locales.map(({ code }) => loadMessageCatalog(code)));
  const expectedKeys = Object.keys(getMessageCatalog("fr")).sort();
  for (const { code } of locales) {
    const catalog = getMessageCatalog(code);
    assert.deepEqual(Object.keys(catalog).sort(), expectedKeys, code);
    for (const [key, value] of Object.entries(catalog)) {
      assert.equal(typeof value, "string", `${code}.${key}`);
      assert.ok(value.trim(), `${code}.${key} is empty`);
    }
  }
});

test("all locales include complete legal document drafts with preserved routes", async () => {
  await Promise.all(locales.map(({ code }) => loadLegalCatalog(code)));
  const documentIds = ["terms", "privacy", "community", "report", "security"];

  for (const { code } of locales) {
    for (const id of documentIds) {
      const document = getLegalDocument(code, id);
      assert.ok(document.title.trim(), `${code}.${id}.title`);
      assert.ok(document.summary.trim(), `${code}.${id}.summary`);
      assert.ok(document.draftNotice.trim(), `${code}.${id}.draftNotice`);
      assert.ok(document.sections.length, `${code}.${id}.sections`);
      for (const section of document.sections) {
        assert.ok(section.heading.trim(), `${code}.${id}.section heading`);
        assert.ok(
          section.paragraphs.every((paragraph) => paragraph.trim()),
          `${code}.${id}.paragraph`,
        );
        assert.ok(
          !section.bullets || section.bullets.every((bullet) => bullet.trim()),
          `${code}.${id}.bullet`,
        );
      }
      assert.deepEqual(
        document.related.map(({ to }) => to).sort(),
        getLegalDocument("en", id)
          .related.map(({ to }) => to)
          .sort(),
        `${code}.${id}.related routes`,
      );
    }
  }
});

test("unknown interface keys fail explicitly instead of falling back silently", () => {
  assert.throws(
    () => translate("en", "This is user content"),
    /Missing translation/,
  );
});

test("language selection persists and browser locale detection handles BCP 47 variants", () => {
  const values = new Map();
  const storage = {
    getItem: (key) => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  };

  assert.equal(getInitialLocale(storage, ["de-AT", "en-US"]), "de");
  assert.equal(normalizeLocale("zh-TW"), "zh-Hant");
  assert.equal(normalizeLocale("zh-CN"), "zh-Hans");
  assert.equal(normalizeLocale("no-NO"), "nb");
  assert.equal(normalizeLocale("sr-RS"), "sr-Latn");
  assert.equal(normalizeLocale("not-a-locale"), undefined);

  saveLocale("ar", storage);
  assert.equal(getInitialLocale(storage, ["en-US"]), "ar");
  assert.equal(getInitialLocale(null, ["xx", "fr-CA"]), "fr");
});

test("RTL locales set document direction while LTR locales reset it", () => {
  const root = { lang: "", dir: "" };

  applyLocaleToDocument("ar", root);
  assert.deepEqual(root, { lang: "ar", dir: "rtl" });
  assert.equal(getLocaleDirection("he"), "rtl");
  assert.equal(getLocaleDirection("fa"), "rtl");
  assert.equal(getLocaleDirection("ur"), "rtl");

  applyLocaleToDocument("en", root);
  assert.deepEqual(root, { lang: "en", dir: "ltr" });
});

test("numbers, dates, and plurals use native locale-aware Intl formatters", () => {
  assert.notEqual(formatNumber(1234.5, "fr"), formatNumber(1234.5, "en"));
  assert.notEqual(
    formatDate(new Date("2025-03-08T12:00:00Z"), "fr"),
    formatDate(new Date("2025-03-08T12:00:00Z"), "en"),
  );
  assert.equal(pluralCategory(1, "en"), "one");
  assert.equal(pluralCategory(2, "ru"), "few");
});

test("user-provided text is not an interface translation key or translation input", () => {
  const originalMessage = "Salut, comment ça va ?";
  assert.throws(() => translate("en", originalMessage), /Missing translation/);
  assert.equal(originalMessage, "Salut, comment ça va ?");
});
