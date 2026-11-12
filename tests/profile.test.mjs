import assert from "node:assert/strict";
import test from "node:test";
import { getAuthErrorKey } from "../src/services/auth.ts";
import {
  normalizeUsername,
  validateProfileUsername,
  validateUsername,
} from "../src/utils/forms.ts";

test("username validation normalizes case and trims surrounding whitespace", () => {
  assert.equal(normalizeUsername("  Alice_1.  "), "alice_1.");
  assert.equal(validateUsername("  Alice_1.  "), undefined);
});

test("username validation enforces length and allowed characters", () => {
  for (const username of ["ab", "a".repeat(21), "has space", "name-tag", "étoile"]) {
    assert.equal(validateUsername(username), "invalid", username);
  }
  for (const username of ["abc", "a_b", "a.b", "a".repeat(20)]) {
    assert.equal(validateUsername(username), undefined, username);
  }
});

test("username validation rejects reserved names without regard to case", () => {
  assert.equal(validateUsername("Admin"), "reserved");
  assert.equal(validateUsername(" TalkChat "), "reserved");
  assert.equal(validateUsername("Introuvable"), "reserved");
  assert.equal(validateUsername("intrble"), "reserved");
  assert.equal(validateUsername("   "), "required");
});

test("unconfirmed email errors receive a clear auth message key", () => {
  assert.equal(getAuthErrorKey(new Error("Email not confirmed")), "authEmailNotConfirmed");
});

test("profile username validation preserves unchanged legacy usernames only", () => {
  const legacyUsername = "a_username_longer_than_20";
  assert.equal(legacyUsername.length, 25);
  assert.equal(validateProfileUsername(legacyUsername, legacyUsername), undefined);
  assert.equal(validateProfileUsername(`${legacyUsername}x`, legacyUsername), "invalid");
  assert.equal(validateUsername(legacyUsername), "invalid");
});