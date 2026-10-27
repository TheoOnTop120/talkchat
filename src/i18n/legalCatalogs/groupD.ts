import type { LegalDocument, LegalDocumentId } from "../legal";
import type { Locale } from "../../types/theme";

type SectionInput = Pick<
  LegalDocument["sections"][number],
  "heading" | "paragraphs"
> &
  Partial<Pick<LegalDocument["sections"][number], "bullets">>;

const p = (heading: string, ...paragraphs: string[]): SectionInput => ({
  heading,
  paragraphs,
});
const b = (heading: string, ...bullets: string[]): SectionInput => ({
  heading,
  paragraphs: [],
  bullets,
});
const document = (
  title: string,
  summary: string,
  draftNotice: string,
  reviewedAt: string,
  sections: SectionInput[],
  relatedTitle: string,
  related: LegalDocument["related"],
  backHome: string,
): LegalDocument => ({
  title,
  summary,
  draftNotice,
  reviewedAt,
  sections,
  relatedTitle,
  related,
  backHome,
});

export const legalGroupD: Partial<
  Record<Locale, Record<LegalDocumentId, LegalDocument>>
> = {
  hu: {
    terms: document(
      "Felhasználási feltételek",
      "Ez egy lehetséges jövőbeli TalkChat-szolgáltatáshoz készült munkaváltozat. Nem használatra kész jogi megállapodás.",
      "TERVEZET — JOGI FELÜLVIZSGÁLAT SZÜKSÉGES: nyilvános indulás előtt meg kell adni az üzemeltető személyét és elérhetőségeit, az alkalmazandó jogot és a felelősségi feltételeket, a végleges feltételeket pedig képzett szakemberrel felül kell vizsgáltatni.",
      "Tervezet — nincs hatálybalépési dátum.",
      [
        p(
          "1. A projekt jelenlegi állapota",
          "A TalkChat a Supabase Auth szolgáltatást használja a fiókokhoz, a bejelentkezéshez és a jelszó-helyreállításhoz. Az üzenetküldés, a beszélgetések tárolása és a moderálás nincs megvalósítva.",
          "Ez a tervezet azokat a témákat sorolja fel, amelyekkel egy szolgáltatás elindítása esetén foglalkozni kell. Nem jelenti azt, hogy jelenleg üzenetküldő szolgáltatás, ügyféltámogatási csatorna vagy moderálási folyamat áll rendelkezésre.",
        ),
        p(
          "2. Tervezett hozzáférés és alsó korhatár",
          "A felület születési dátumot kér, és regisztráció előtt helyben ellenőrzi a 13 éves alsó korhatárt. Ez nem személyazonosság-ellenőrzés, és a szerver nem érvényesít életkorra vonatkozó szabályt.",
          "Az alsó korhatárt, az ellenőrzés módját és a kiskorúakra vonatkozó szabályokat indulás előtt minden olyan ország tekintetében felül kell vizsgálni, ahol a szolgáltatást kínálhatják.",
        ),
        p(
          "3. Elvárt magatartás egy esetleges szolgáltatás esetén",
          "Egy jövőbeli szolgáltatás felhasználóinak be kellene tartaniuk az alkalmazandó jogszabályokat és a közösségi szabályokat. A visszaéléseket, a jogosulatlan hozzáférési kísérleteket, a személyazonossággal való visszaélést és mások jogait sértő tartalmakat közzétett szabályok és meghatározott fellebbezési folyamat alapján kellene kezelni.",
          "Jelenleg nincs működő szankcionálás, moderálás vagy fellebbezési eljárás.",
        ),
        p(
          "4. Tartalom és jogok",
          "A tartalmakhoz fűződő jogokat, a jövőbeli szolgáltatás működtetéséhez szükséges korlátozott engedélyeket, valamint a jogellenes vagy bejelentett tartalmakra vonatkozó szabályokat a végleges változatban kell meghatározni. Ez a tervezet nem biztosít és nem is állít felhasználói tartalomra vonatkozó licencet.",
        ),
        p(
          "5. Elérhetőség, felelősség és a szolgáltatás megszüntetése",
          "Ez a változat nem vállal rendelkezésre állási, üzenetmegőrzési vagy szolgáltatásfolytonossági kötelezettséget. A felelősségkizárásokat és -korlátozásokat, a megszüntetés, az export és a törlés szabályait az alkalmazandó jog szerint kell kidolgozni és indulás előtt felülvizsgálni.",
        ),
        p(
          "6. Üzemeltető, alkalmazandó jog és kapcsolat",
          "Az üzemeltető jogi személye, címe, elérhetőségei, az alkalmazandó jog és az illetékes bíróságok nincsenek megadva. Ezeket nem szabad kitalálni, és közzététel előtt ki kell egészíteni.",
        ),
      ],
      "Kapcsolódó információk",
      [
        { label: "Adatvédelmi tájékoztató", to: "/legal/privacy" },
        { label: "Közösségi irányelvek", to: "/legal/community" },
        { label: "Biztonsági alapelvek", to: "/legal/security" },
      ],
      "Vissza a főoldalra",
    ),
    privacy: document(
      "Adatvédelmi tájékoztató",
      "Ez az oldal a TalkChat jelenlegi adatkezelését és azokat az információkat mutatja be, amelyeket nyilvános indulás előtt még meg kell határozni.",
      "TERVEZET — JOGI FELÜLVIZSGÁLAT SZÜKSÉGES: ez nem jogi tanácsadás és nem megfelelőségi garancia. A célokat, jogalapokat, adatkezelőket, címzetteket, megőrzési időket és jogokat az indulás előtt meg kell határozni és az érintett joghatóságokra tekintettel felül kell vizsgálni.",
      "Tervezet — nincs hatálybalépési dátum.",
      [
        p(
          "1. A jelenlegi változat által használt adatok",
          "Regisztrációkor és bejelentkezéskor az e-mail-cím és a jelszó közvetlenül a Supabase Auth használatára beállított Supabase-projekthez kerül. A megjelenített név fiókmetaadatként kerül továbbításra. A születési dátumot és a feltételek elfogadását csak a böngésző használja, és ezeket nem küldi el.",
          "A Supabase SDK kezeli a munkamenet böngészőbeli megőrzését. Az űrlapok egyéb értékei ideiglenesen az oldal memóriájában maradnak; a böngésző ettől függetlenül felajánlhatja a mezők megjegyzését az automatikus kitöltés funkciójával.",
          "A téma- és nyelvi beállításokat külön tárolja a böngésző helyi tárhelye. Ha ez nem érhető el, csak az aktuális látogatás idejére maradnak meg.",
        ),
        p(
          "2. Külső szolgáltatások és naplók",
          "A Supabase az azonosításhoz szükséges adatokat kezeli. Az e-mailek kézbesítése a projekt beállításaitól és SMTP-szolgáltatójától függ; ezt a beállítást nem ellenőrizték. Nincs megvalósítva analitikai szolgáltatás vagy TalkChat-üzenetküldés. A tárhelyszolgáltató és a hálózati infrastruktúra szintén kezelhet kapcsolati adatokat vagy vezethet naplókat.",
        ),
        p(
          "3. Egy jövőbeli szolgáltatás lehetséges adatai",
          "Egy jövőbeli szolgáltatás által ténylegesen gyűjtött adatokat még nem határozták meg. Ezek közé tartozhatnak a fiókadatok, valamint a működéshez szükséges tartalmak vagy metaadatok, de jelenleg nincs véglegesítve teljes körű lista, cél vagy jogalap.",
          "A címzetteket, adatfeldolgozókat, a kiválasztott régión kívüli esetleges adattovábbításokat, a megőrzési időket, a biztonsági mentések szabályait és a törlési eljárásokat még meg kell határozni. Jelenleg nincs ígéret automatikus törlésre vagy meghatározott megőrzési időre.",
        ),
        p(
          "4. Jogok és kérelmek",
          "Az érintettek jogai, gyakorlásuk módja, a válaszadási határidők és az illetékes hatóság részben az érintettek lakóhelyétől, a szolgáltatás üzemeltetőjétől és az alkalmazandó jogtól függnek. Ezeket a részleteket, az adatkezelőt és egy érvényes kapcsolattartási módot indulás előtt meg kell adni.",
          "Ez a bemutató nem biztosít csatornát hozzáférési, helyesbítési, törlési vagy panaszbeadványokhoz.",
        ),
        p(
          "5. Adatvédelem és titkosítás",
          "Az oldal megléte nem jelenti azt, hogy a beszélgetések végpontok között titkosítottak. Ebben a változatban nincs üzenetküldő rendszer vagy E2EE-titkosítás. A jövőbeli titkosítást és annak korlátait műszaki tervezés és felülvizsgálat után kell ismertetni.",
        ),
      ],
      "Kapcsolódó oldalak",
      [
        { label: "Felhasználási feltételek", to: "/legal/terms" },
        { label: "Biztonsági alapelvek", to: "/legal/security" },
        { label: "Tartalom bejelentése", to: "/legal/report" },
      ],
      "Vissza a főoldalra",
    ),
    community: document(
      "Közösségi irányelvek",
      "Javasolt alapelvek a beszélgetésekhez arra az esetre, ha a TalkChat üzenetküldő szolgáltatássá válik.",
      "TERVEZET — a TalkChat jelenleg nem biztosít üzenetküldést vagy moderálást. Ezeket az irányelveket működő rendszer nem érvényesíti.",
      "Javasolt alapelvek — nincs hatálybalépési dátum.",
      [
        p(
          "Tisztelet és biztonság",
          "Bánj tisztelettel másokkal. A fenyegetésnek, a célzott zaklatásnak, a gyűlöletnek, a megfélemlítésnek és az erőszakra buzdításnak nincs helye egy biztonságos közösségben.",
          "Ne oszd meg mások személyes adatait engedély nélkül. Ne add ki magad másnak, és ne próbálj engedély nélkül hozzáférni fiókhoz vagy eszközhöz.",
        ),
        p(
          "Tartalom és kéretlen megkeresések",
          "Ne küldj jogellenes tartalmat, csalást, kártevőt, levélszemetet vagy ismétlődő, kéretlen megkereséseket. Tartsd tiszteletben a szerzői jogokat és az egyéb alkalmazandó jogokat.",
          "Ezek az alapelvek szerkesztési javaslatot jelentenek. Az indulás előtt meg kell határozni a tiltott tartalom fogalmát, a kivételeket, a lehetséges intézkedéseket és a fellebbezési lehetőségeket.",
        ),
        p(
          "Kiskorúak és bejelentések",
          "Ne célozz meg nem megfelelő módon kiskorúakat, és ne ossz meg olyan képeket vagy információkat, amelyek veszélybe sodorhatják őket. A gyermekvédelmi szabályokat, a bejelentések kezelését és az eszkalációt megfelelő óvintézkedésekkel kell megtervezni minden nyilvános indulás előtt.",
          "A bemutatóban nincs bejelentési vagy moderálási funkció. A korlátozásról a külön oldalon olvashatsz.",
        ),
        p(
          "Érvényesítés",
          "Ebben a változatban nincs moderációs csapat, tiltási mechanizmus, illetve szankcionálási és fellebbezési folyamat. Ne hagyatkozz ezekre az irányelvekre tényleges beavatkozásként.",
        ),
      ],
      "Kapcsolódó oldalak",
      [
        { label: "Tartalom bejelentése", to: "/legal/report" },
        { label: "Biztonsági alapelvek", to: "/legal/security" },
        { label: "Adatvédelmi tájékoztató", to: "/legal/privacy" },
      ],
      "Vissza a főoldalra",
    ),
    report: document(
      "Tartalom vagy fiók bejelentése",
      "Az alábbi információk egy lehetséges jövőbeli folyamatot írnak le; ez nem bejelentő űrlap.",
      "NEM KÜLDÜNK BEJELENTÉST: a TalkChatben még nincs üzenetküldés, bejelentés gomb, felülvizsgálati csapat vagy közzétett bejelentési kapcsolattartási cím.",
      "Prototípus-információ — indulás előtt felülvizsgálandó.",
      [
        p(
          "A bejelentés még nem érhető el",
          "Ez az oldal nem küld bejelentést és nem gyűjt bizonyítékot. Probléma bejelentésére ne használd a regisztrációs vagy bejelentkezési űrlapokat; azok kizárólag a fiók hitelesítésére szolgálnak.",
          "Nem tüntetünk fel bejelentési e-mail-címet vagy kapcsolattartási adatokat, mert még nem határoztak meg működő csatornát. Ez az oldal nem tud kérelmet fogadni vagy feldolgozni.",
        ),
        p(
          "Jövőbeli bejelentéshez előkészítendő információk",
          "Ha egy szolgáltatás külön funkcióval indul, hasznos lehet leírni a tartalmat vagy fiókot, annak helyét, a bejelentés okát és a hozzávetőleges időpontot. Csak feltétlenül szükséges információt ossz meg, és kerüld a személyes adatok vagy érzékeny tartalmak nyilvános terjesztését.",
        ),
        p(
          "Sürgős helyzetek",
          "A TalkChat nem figyeli ezt az oldalt, és nem tud vészhelyzetekre reagálni. Közvetlen veszély esetén fordulj a lakóhelyed szerinti sürgősségi szolgálatokhoz vagy illetékes hatóságokhoz.",
        ),
        b(
          "Amit indulás előtt meg kell határozni",
          "Működő és hozzáférhető bejelentési csatorna.",
          "Kategóriák, tájékoztató jellegű határidők, kezelési szabályok és megőrzött információk.",
          "A bejelentők védelme, értesítések és fellebbezési folyamat.",
          "Az üzemeltető felelősségei és az érintett joghatóságok szabályai.",
        ),
      ],
      "Kapcsolódó oldalak",
      [
        { label: "Közösségi irányelvek", to: "/legal/community" },
        { label: "Adatvédelmi tájékoztató", to: "/legal/privacy" },
      ],
      "Vissza a főoldalra",
    ),
    security: document(
      "Biztonsági alapelvek",
      "Ez az oldal megkülönbözteti a bemutató korlátait azoktól a céloktól, amelyeket egy valódi szolgáltatás előtt kellene megtervezni.",
      "NINCS BIZTONSÁGI GARANCIA: az alábbi alapelvek tervezési célok. Nem már megvalósított vagy auditált védelmi intézkedéseket írnak le.",
      "Prototípus-információ — indulás előtt felülvizsgálandó.",
      [
        p(
          "A projekt jelenlegi állapota",
          "A Supabase Auth biztosítja a fiókregisztrációt, a bejelentkezést, a munkamenet kezelését és a jelszó-helyreállítást. Ez a frontend nem valósít meg üzenetküldést, végpontok közötti titkosítást, biztonságos biztonsági mentéseket, automatikus törlést, felügyeletet, szerveroldali próbálkozáskorlátozást vagy incidenskezelési folyamatot.",
          "A frontend útvonalvédelme nem jogosultsági határ, és nem helyettesíti a szerveroldali ellenőrzéseket vagy a Supabase RLS-szabályait. Nincsenek megvalósítva üzenet- vagy profiladatbázis-táblák.",
        ),
        b(
          "Javasolt célok egy jövőbeli változathoz",
          "A gyűjtött adatok minimalizálása, a hozzáférés szükséges mértékre korlátozása.",
          "A fiókok és munkamenetek védelme, a jogosultságok szerveroldali ellenőrzése és a hozzáférési szabályok tesztelése.",
          "Titkosított adatátvitel használata, valamint a titkok távol tartása a böngészőbe továbbított kódtól.",
          "Megfelelően felülvizsgált E2EE-protokoll vizsgálata, mielőtt végpontok közötti titkosítást ígérnénk.",
          "A biztonsági mentések, helyreállítási kulcsok, megőrzés és visszaállítási tesztek meghatározása bejelentésük előtt.",
          "Frissítések, felülvizsgálatok, minimalizált naplózás és sérülékenység-kezelés megtervezése.",
        ),
        p(
          "Korlátok és biztonsági kapcsolattartás",
          "Ezek a célok nem jelentenek tanúsítást vagy abszolút védelemre vonatkozó garanciát. A biztonságért felelős személyt, a sérülékenységek bejelentési csatornáját, a válaszadási határidőket és a nyilvános elérhetőségeket még nem határozták meg. A bemutató űrlapjain ne adj meg személyes adatokat vagy titkokat.",
        ),
      ],
      "Kapcsolódó oldalak",
      [
        { label: "Adatvédelmi tájékoztató", to: "/legal/privacy" },
        { label: "Felhasználási feltételek", to: "/legal/terms" },
        { label: "Tartalom bejelentése", to: "/legal/report" },
      ],
      "Vissza a főoldalra",
    ),
  },
  bg: {
    terms: document(
      "Условия за ползване",
      "Това е работен проект за евентуална бъдеща услуга TalkChat. Той не представлява готово за използване правно споразумение.",
      "ПРОЕКТ — НЕОБХОДИМ Е ПРАВЕН ПРЕГЛЕД: преди публичното стартиране трябва да бъдат посочени самоличността и данните за контакт на оператора, приложимото право и условията за отговорност, а окончателните условия трябва да бъдат изготвени и прегледани от квалифициран специалист.",
      "Проект — няма дата на влизане в сила.",
      [
        p(
          "1. Текущо състояние на проекта",
          "TalkChat използва Supabase Auth за акаунти, влизане и възстановяване на парола. Обменът на съобщения, съхранението на разговори и модерирането не са реализирани.",
          "Този проект изброява теми, които трябва да бъдат разгледани, ако услугата стартира. Това не означава, че днес има услуга за съобщения, канал за поддръжка или процес за модериране.",
        ),
        p(
          "2. Предвиден достъп и минимална възраст",
          "Интерфейсът изисква дата на раждане и локално проверява минимална възраст от 13 години преди регистрация. Това не е проверка на самоличността и на сървъра не се прилага правило за възраст.",
          "Минималната възраст, методът за проверка и правилата за непълнолетни трябва да бъдат прегледани за всяка държава, в която услугата може да се предлага, преди стартирането.",
        ),
        p(
          "3. Очаквано поведение при наличие на услуга",
          "Потребителите на бъдеща услуга ще трябва да спазват приложимото право и правилата на общността. Злоупотреби, опити за неразрешен достъп, представяне за друго лице и съдържание, което нарушава правата на други лица, ще трябва да се разглеждат съгласно публикувани правила и определен процес за обжалване.",
          "Не се прилагат реални санкции, модериране или процедура за обжалване.",
        ),
        p(
          "4. Съдържание и права",
          "Правата върху съдържанието, ограничените разрешения, необходими за работата на бъдеща услуга, както и правилата за незаконно или докладвано съдържание трябва да бъдат посочени в окончателна версия. Този проект нито предоставя, нито претендира за лиценз върху потребителско съдържание.",
        ),
        p(
          "5. Наличност, отговорност и прекратяване на услугата",
          "Тази версия не поема ангажимент за наличност, съхранение на съобщения или непрекъснатост на услугата. Отказите от отговорност, ограниченията на отговорността и правилата за прекратяване, експортиране и изтриване трябва да бъдат изготвени и прегледани съгласно приложимото право преди стартирането.",
        ),
        p(
          "6. Оператор, приложимо право и контакт",
          "Не са посочени правната самоличност, адресът и данните за контакт на оператора, приложимото право и компетентните съдилища. Те не трябва да бъдат измисляни и трябва да бъдат добавени преди публикуване.",
        ),
      ],
      "Свързана информация",
      [
        { label: "Политика за поверителност", to: "/legal/privacy" },
        { label: "Правила на общността", to: "/legal/community" },
        { label: "Принципи за сигурност", to: "/legal/security" },
      ],
      "Обратно към началната страница",
    ),
    privacy: document(
      "Политика за поверителност",
      "Тази страница описва текущата обработка на данни от TalkChat и информацията, която трябва да бъде уточнена преди публично стартиране.",
      "ПРОЕКТ — НЕОБХОДИМ Е ПРАВЕН ПРЕГЛЕД: това не е правен съвет или гаранция за съответствие. Целите, правните основания, администраторите, получателите, сроковете за съхранение и правата трябва да бъдат уточнени и прегледани за съответните юрисдикции преди стартирането.",
      "Проект — няма дата на влизане в сила.",
      [
        p(
          "1. Данни, използвани от текущата версия",
          "При регистрация и влизане имейл адресът и паролата се изпращат директно към конфигурирания проект Supabase за Supabase Auth. Показваното име се изпраща като метаданни на акаунта. Датата на раждане и приемането на условията се използват само в браузъра и не се изпращат.",
          "SDK на Supabase управлява запазването на сесията в браузъра. Другите стойности от формулярите остават временно в паметта на страницата; браузърът може отделно да предложи запаметяване на полетата чрез функцията си за автоматично попълване.",
          "Предпочитанията за тема и език се съхраняват отделно в локалното хранилище на браузъра. Ако то не е налично, се запазват само за текущото посещение.",
        ),
        p(
          "2. Външни услуги и журнали",
          "Supabase обработва данните, необходими за удостоверяване. Доставката на имейли зависи от конфигурацията на проекта и неговия SMTP доставчик; тази конфигурация не е проверена. Не са реализирани услуга за анализи или функция за съобщения на TalkChat. Доставчикът на хостинг и мрежовата инфраструктура също може да обработва данни за връзката или да води журнали.",
        ),
        p(
          "3. Възможни данни при бъдеща услуга",
          "Данните, които действително ще събира бъдеща услуга, още не са определени. Те може да включват информация за акаунта и съдържание или метаданни, необходими за работата на услугата, но засега не е одобрен изчерпателен списък, цел или правно основание.",
          "Получателите, обработващите данни, евентуалните трансфери извън избрания регион, сроковете за съхранение, правилата за резервни копия и процедурите за изтриване предстои да бъдат определени. Понастоящем не се обещава автоматично изтриване или конкретен срок за съхранение.",
        ),
        p(
          "4. Права и искания",
          "Правата на лицата, начинът за упражняването им, сроковете за отговор и компетентният орган зависят отчасти от местонахождението на лицата, оператора на услугата и приложимото право. Тези подробности, администраторът на данни и валиден начин за контакт трябва да бъдат добавени преди стартирането.",
          "Тази демонстрация няма канал за искания за достъп, коригиране, изтриване или жалби.",
        ),
        p(
          "5. Поверителност и криптиране",
          "Наличието на тази страница не означава, че разговорите са криптирани от край до край. Тази версия няма система за съобщения или E2EE криптиране. Всяко бъдещо криптиране и ограниченията му трябва да бъдат описани след техническо проектиране и преглед.",
        ),
      ],
      "Свързани страници",
      [
        { label: "Условия за ползване", to: "/legal/terms" },
        { label: "Принципи за сигурност", to: "/legal/security" },
        { label: "Как да докладвате съдържание", to: "/legal/report" },
      ],
      "Обратно към началната страница",
    ),
    community: document(
      "Правила на общността",
      "Предложени принципи за разговорите, ако TalkChat стане услуга за съобщения.",
      "ПРОЕКТ — TalkChat понастоящем не предоставя съобщения или модериране. Тези правила не се прилагат от действаща система.",
      "Предложени принципи — няма дата на влизане в сила.",
      [
        p(
          "Уважение и безопасност",
          "Отнасяйте се с уважение към другите. Заплахите, целенасоченият тормоз, омразата, сплашването и насърчаването на насилие нямат място в безопасна общност.",
          "Не споделяйте лична информация за друг човек без разрешение. Не се представяйте за други лица и не опитвайте да получите достъп до акаунт или устройство без разрешение.",
        ),
        p(
          "Съдържание и нежелани съобщения",
          "Не изпращайте незаконно съдържание, измами, злонамерен софтуер, спам или повтарящи се нежелани съобщения. Спазвайте авторските права и другите приложими права.",
          "Тези принципи са редакционно предложение. Преди стартирането трябва да бъдат уточнени определенията за забранено съдържание, изключенията, възможните мерки и начините за обжалване.",
        ),
        p(
          "Непълнолетни и докладване",
          "Не насочвайте неподходящо съдържание към непълнолетни и не споделяйте изображения или информация, които могат да ги изложат на риск. Правилата за закрила, обработката на сигнали и ескалацията трябва да бъдат проектирани с подходящи защити преди публично стартиране.",
          "Демонстрацията няма функция за докладване или модериране. Вижте специалната страница за това ограничение.",
        ),
        p(
          "Прилагане",
          "Тази версия няма екип за модериране, механизъм за блокиране или процес за санкции и обжалване. Не разчитайте на тези правила като на реална намеса.",
        ),
      ],
      "Свързани страници",
      [
        { label: "Как да докладвате съдържание", to: "/legal/report" },
        { label: "Принципи за сигурност", to: "/legal/security" },
        { label: "Политика за поверителност", to: "/legal/privacy" },
      ],
      "Обратно към началната страница",
    ),
    report: document(
      "Докладване на съдържание или акаунт",
      "Информацията по-долу описва възможен бъдещ процес; това не е формуляр за докладване.",
      "НЕ СЕ ИЗПРАЩА ДОКЛАД: TalkChat все още няма съобщения, бутон за докладване, екип за преглед или публикуван адрес за контакт при докладване.",
      "Информация за прототип — преглед преди стартиране.",
      [
        p(
          "Докладването все още не е достъпно",
          "Тази страница не изпраща доклад и не събира доказателства. Не използвайте формулярите за регистрация или влизане, за да докладвате проблем; те служат само за удостоверяване на акаунта.",
          "Не е посочен имейл адрес или друга информация за контакт за докладване, защото не е определен действащ канал. Тази страница не може да получава или обработва искане.",
        ),
        p(
          "Информация за подготовка на бъдещ доклад",
          "Ако услугата стартира със специална функция, може да е полезно да опишете съдържанието или акаунта, къде се появява, причината за доклада и приблизителния час. Споделяйте само строго необходимата информация и избягвайте публичното разпространяване на лични данни или чувствително съдържание.",
        ),
        p(
          "Спешни ситуации",
          "TalkChat не наблюдава тази страница и не може да реагира при спешни случаи. При непосредствена опасност се свържете със спешните служби или компетентните органи там, където живеете.",
        ),
        b(
          "Какво трябва да бъде определено преди стартиране",
          "Действащ и достъпен канал за докладване.",
          "Категории, ориентировъчни срокове, правила за обработка и съхранявана информация.",
          "Защита на подателите, уведомления и процедура за обжалване.",
          "Отговорностите на оператора и правилата в съответните юрисдикции.",
        ),
      ],
      "Свързани страници",
      [
        { label: "Правила на общността", to: "/legal/community" },
        { label: "Политика за поверителност", to: "/legal/privacy" },
      ],
      "Обратно към началната страница",
    ),
    security: document(
      "Принципи за сигурност",
      "Тази страница разграничава ограниченията на демонстрацията от целите, които трябва да бъдат проектирани преди създаването на реална услуга.",
      "НЯМА ГАРАНЦИЯ ЗА СИГУРНОСТ: принципите по-долу са цели за проектиране. Те не описват вече внедрени или одитирани защити.",
      "Информация за прототип — преглед преди стартиране.",
      [
        p(
          "Текущо състояние на проекта",
          "Supabase Auth осигурява регистрация на акаунти, влизане, управление на сесии и възстановяване на парола. Този интерфейс не реализира съобщения, криптиране от край до край, защитени резервни копия, автоматично изтриване, наблюдение, сървърни ограничения на опитите или процес за реакция при инциденти.",
          "Защитата на маршрути във фронтенда не е граница за оторизация и не замества сървърните проверки или политиките RLS на Supabase. Няма реализирани таблици за съобщения или профили.",
        ),
        b(
          "Предложени цели за бъдеща версия",
          "Ограничаване на събираните данни и достъпа само до необходимото.",
          "Защита на акаунтите и сесиите, сървърна проверка на разрешенията и тестване на правилата за достъп.",
          "Използване на криптирани връзки при пренос и недопускане на тайни в кода, доставян до браузъра.",
          "Оценка на добре прегледан E2EE протокол преди твърдение за криптиране от край до край.",
          "Определяне на резервните копия, ключовете за възстановяване, сроковете за съхранение и тестовете за възстановяване преди обявяването им.",
          "Планиране на актуализации, прегледи, минимизирани журнали и реакция при уязвимости.",
        ),
        p(
          "Ограничения и контакт за сигурността",
          "Тези цели не представляват сертификация или гаранция за абсолютна защита. Отговорникът по сигурността, каналът за разкриване на уязвимости, сроковете за отговор и публичните данни за контакт все още не са определени. Не включвайте лични данни или тайни във формулярите на демонстрацията.",
        ),
      ],
      "Свързани страници",
      [
        { label: "Политика за поверителност", to: "/legal/privacy" },
        { label: "Условия за ползване", to: "/legal/terms" },
        { label: "Как да докладвате съдържание", to: "/legal/report" },
      ],
      "Обратно към началната страница",
    ),
  },
  hr: {
    terms: document(
      "Uvjeti korištenja",
      "Ovo je radni nacrt za moguću buduću uslugu TalkChat. Nije pravni sporazum spreman za uporabu.",
      "NACRT — POTREBAN JE PRAVNI PREGLED: prije javnog pokretanja potrebno je navesti identitet i kontaktne podatke operatora, mjerodavno pravo i uvjete odgovornosti, a konačne uvjete dovršiti i dati na pregled kvalificiranom stručnjaku.",
      "Nacrt — nema datuma stupanja na snagu.",
      [
        p(
          "1. Trenutačno stanje projekta",
          "TalkChat koristi Supabase Auth za račune, prijavu i oporavak lozinke. Razmjena poruka, pohrana razgovora i moderiranje nisu implementirani.",
          "Ovaj nacrt navodi teme koje treba razmotriti ako se usluga pokrene. To ne znači da su danas dostupni usluga razmjene poruka, kanal podrške ili postupak moderiranja.",
        ),
        p(
          "2. Predviđeni pristup i minimalna dob",
          "Sučelje traži datum rođenja i lokalno provjerava minimalnu dob od 13 godina prije registracije. To nije provjera identiteta, a poslužitelj ne provodi pravilo o dobi.",
          "Minimalnu dob, način provjere i pravila za maloljetnike potrebno je pregledati za svaku državu u kojoj bi se usluga mogla nuditi, prije pokretanja.",
        ),
        p(
          "3. Očekivano ponašanje ako usluga postoji",
          "Korisnici buduće usluge trebali bi poštovati mjerodavne zakone i pravila zajednice. Zlouporabe, pokušaje neovlaštenog pristupa, lažno predstavljanje i sadržaj koji krši tuđa prava trebalo bi obrađivati prema objavljenim pravilima i utvrđenom postupku žalbe.",
          "Ne provode se stvarne sankcije, moderiranje ni postupak žalbe.",
        ),
        p(
          "4. Sadržaj i prava",
          "Prava na sadržaj, ograničena dopuštenja potrebna za rad buduće usluge i pravila o nezakonitom sadržaju ili sadržaju prijavljenom za pregled moraju se navesti u konačnoj verziji. Ovaj nacrt ne dodjeljuje niti polaže pravo na licencu za korisnički sadržaj.",
        ),
        p(
          "5. Dostupnost, odgovornost i prestanak usluge",
          "Ova verzija ne daje jamstvo dostupnosti, zadržavanja poruka ni kontinuiteta usluge. Odricanja od odgovornosti, njezina ograničenja te pravila o prestanku, izvozu i brisanju moraju se sastaviti i pregledati u skladu s mjerodavnim pravom prije pokretanja.",
        ),
        p(
          "6. Operator, mjerodavno pravo i kontakt",
          "Pravni identitet operatora, adresa, kontaktni podaci, mjerodavno pravo i nadležni sudovi nisu navedeni. Ne smiju se izmišljati i moraju se dodati prije objave.",
        ),
      ],
      "Povezane informacije",
      [
        { label: "Pravila o privatnosti", to: "/legal/privacy" },
        { label: "Pravila zajednice", to: "/legal/community" },
        { label: "Sigurnosna načela", to: "/legal/security" },
      ],
      "Natrag na početnu stranicu",
    ),
    privacy: document(
      "Pravila o privatnosti",
      "Ova stranica opisuje trenutačnu obradu podataka u TalkChatu i informacije koje treba utvrditi prije javnog pokretanja.",
      "NACRT — POTREBAN JE PRAVNI PREGLED: ovo nije pravni savjet ni jamstvo usklađenosti. Svrhe, pravne osnove, voditelji obrade, primatelji, razdoblja čuvanja i prava moraju se utvrditi i pregledati za relevantne jurisdikcije prije pokretanja.",
      "Nacrt — nema datuma stupanja na snagu.",
      [
        p(
          "1. Podaci koje koristi trenutačna verzija",
          "Tijekom registracije i prijave adresa e-pošte i lozinka šalju se izravno konfiguriranom projektu Supabase za Supabase Auth. Prikazno ime šalje se kao metapodatak računa. Datum rođenja i prihvaćanje uvjeta koriste se samo u pregledniku i ne šalju se.",
          "Supabase SDK upravlja održavanjem sesije u pregledniku. Ostale vrijednosti obrazaca privremeno ostaju u memoriji stranice; preglednik može zasebno ponuditi pamćenje polja putem automatskog popunjavanja.",
          "Postavke teme i jezika zasebno se čuvaju u lokalnoj pohrani preglednika. Ako pohrana nije dostupna, čuvaju se samo tijekom trenutačnog posjeta.",
        ),
        p(
          "2. Vanjske usluge i zapisnici",
          "Supabase obrađuje podatke potrebne za autentifikaciju. Dostava e-pošte ovisi o konfiguraciji projekta i SMTP pružatelju; ta konfiguracija nije provjerena. Nisu implementirani analitička usluga ni TalkChatova funkcija razmjene poruka. Pružatelj hostinga i mrežna infrastruktura također mogu obrađivati podatke o povezivanju ili voditi zapisnike.",
        ),
        p(
          "3. Mogući podaci buduće usluge",
          "Podaci koje će buduća usluga stvarno prikupljati još nisu utvrđeni. Mogli bi obuhvaćati podatke o računu te sadržaj ili metapodatke potrebne za rad usluge, ali još nije određena iscrpna lista, svrha ni pravna osnova.",
          "Primatelji, izvršitelji obrade, mogući prijenosi izvan odabrane regije, razdoblja čuvanja, pravila sigurnosnih kopija i postupci brisanja tek se trebaju utvrditi. Trenutačno se ne obećava automatsko brisanje ni određeno razdoblje čuvanja.",
        ),
        p(
          "4. Prava i zahtjevi",
          "Prava pojedinaca, način njihova ostvarivanja, rokovi odgovora i nadležno tijelo djelomično ovise o lokaciji pojedinaca, operatoru usluge i mjerodavnom pravu. Te pojedinosti, voditelj obrade i valjan način kontakta moraju se dodati prije pokretanja.",
          "Ova demonstracija nema kanal za zahtjeve za pristup, ispravak, brisanje ili pritužbe.",
        ),
        p(
          "5. Privatnost i šifriranje",
          "Postojanje ove stranice ne znači da su razgovori šifrirani s kraja na kraj. Ova verzija nema sustav za razmjenu poruka ni E2EE šifriranje. Svako buduće šifriranje i njegova ograničenja treba opisati nakon tehničkog oblikovanja i pregleda.",
        ),
      ],
      "Povezane stranice",
      [
        { label: "Uvjeti korištenja", to: "/legal/terms" },
        { label: "Sigurnosna načela", to: "/legal/security" },
        { label: "Kako prijaviti sadržaj", to: "/legal/report" },
      ],
      "Natrag na početnu stranicu",
    ),
    community: document(
      "Pravila zajednice",
      "Predložena načela za razgovore ako TalkChat postane usluga za razmjenu poruka.",
      "NACRT — TalkChat trenutačno ne pruža razmjenu poruka ni moderiranje. Operativni sustav ne provodi ova pravila.",
      "Predložena načela — nema datuma stupanja na snagu.",
      [
        p(
          "Poštovanje i sigurnost",
          "Ophodite se prema drugima s poštovanjem. Prijetnje, ciljano uznemiravanje, mržnja, zastrašivanje i poticanje na nasilje nemaju mjesto u sigurnoj zajednici.",
          "Ne dijelite tuđe privatne podatke bez dopuštenja. Ne predstavljajte se kao druga osoba i ne pokušavajte bez odobrenja pristupiti računu ili uređaju.",
        ),
        p(
          "Sadržaj i neželjeno kontaktiranje",
          "Ne šaljite nezakonit sadržaj, prijevare, zlonamjerni softver, neželjenu poštu ni ponavljane neželjene poruke. Poštujte autorska i druga primjenjiva prava.",
          "Ova su načela urednički prijedlog. Prije pokretanja treba utvrditi definicije zabranjenog sadržaja, iznimke, moguće mjere i načine žalbe.",
        ),
        p(
          "Maloljetnici i prijavljivanje",
          "Nemojte neprimjereno ciljano pristupati maloljetnicima niti dijeliti slike ili informacije koje bi ih mogle ugroziti. Pravila zaštite, obrada prijava i eskalacija moraju se osmisliti uz odgovarajuće zaštitne mjere prije svakog javnog pokretanja.",
          "Demonstracija nema značajku prijave ni moderiranja. O tom ograničenju pročitajte na posebnoj stranici.",
        ),
        p(
          "Provedba",
          "Ova verzija nema tim za moderiranje, mehanizam blokiranja ni postupak sankcioniranja i žalbe. Nemojte se oslanjati na ova pravila kao na stvarnu intervenciju.",
        ),
      ],
      "Povezane stranice",
      [
        { label: "Kako prijaviti sadržaj", to: "/legal/report" },
        { label: "Sigurnosna načela", to: "/legal/security" },
        { label: "Pravila o privatnosti", to: "/legal/privacy" },
      ],
      "Natrag na početnu stranicu",
    ),
    report: document(
      "Prijava sadržaja ili računa",
      "Informacije u nastavku opisuju mogući budući postupak; ovo nije obrazac za prijavu.",
      "PRIJAVA SE NE ŠALJE: TalkChat još nema razmjenu poruka, gumb za prijavu, tim za pregled ni objavljenu adresu za prijavu.",
      "Informacije o prototipu — pregledati prije pokretanja.",
      [
        p(
          "Prijavljivanje još nije dostupno",
          "Ova stranica ne šalje prijavu niti prikuplja dokaze. Nemojte koristiti obrasce za registraciju ili prijavu da biste prijavili problem; služe samo za autentifikaciju računa.",
          "Nisu navedeni adresa e-pošte ni kontaktni podaci za prijave jer nije utvrđen operativni kanal. Ova stranica ne može zaprimiti ni obraditi zahtjev.",
        ),
        p(
          "Informacije koje treba pripremiti za buduću prijavu",
          "Ako se usluga pokrene s namjenskom značajkom, može biti korisno opisati sadržaj ili račun, gdje se pojavljuje, razlog prijave i približno vrijeme. Dijelite samo informacije koje su nužno potrebne i izbjegavajte javno širenje osobnih podataka ili osjetljivog sadržaja.",
        ),
        p(
          "Hitne situacije",
          "TalkChat ne nadzire ovu stranicu i ne može reagirati u hitnim slučajevima. Ako postoji neposredna opasnost, obratite se hitnim službama ili nadležnim tijelima ondje gdje živite.",
        ),
        b(
          "Što treba utvrditi prije pokretanja",
          "Operativan i pristupačan kanal za prijavu.",
          "Kategorije, okvirni rokovi, pravila postupanja i podaci koji se čuvaju.",
          "Zaštita prijavitelja, obavijesti i postupak žalbe.",
          "Odgovornosti operatora i pravila u relevantnim jurisdikcijama.",
        ),
      ],
      "Povezane stranice",
      [
        { label: "Pravila zajednice", to: "/legal/community" },
        { label: "Pravila o privatnosti", to: "/legal/privacy" },
      ],
      "Natrag na početnu stranicu",
    ),
    security: document(
      "Sigurnosna načela",
      "Ova stranica razlikuje ograničenja demonstracije od ciljeva koje bi trebalo osmisliti prije stvarne usluge.",
      "NEMA SIGURNOSNOG JAMSTVA: načela u nastavku ciljevi su oblikovanja. Ne opisuju zaštite koje su već implementirane ili revidirane.",
      "Informacije o prototipu — pregledati prije pokretanja.",
      [
        p(
          "Trenutačno stanje projekta",
          "Supabase Auth omogućuje registraciju računa, prijavu, upravljanje sesijama i oporavak lozinke. Ovaj frontend ne implementira razmjenu poruka, šifriranje s kraja na kraj, sigurne sigurnosne kopije, automatsko brisanje, nadzor, poslužiteljska ograničenja pokušaja ni postupak odgovora na incidente.",
          "Zaštita ruta u frontendu nije granica autorizacije i ne zamjenjuje provjere na poslužitelju ni Supabaseova pravila RLS. Nisu implementirane tablice za poruke ni profile.",
        ),
        b(
          "Predloženi ciljevi za buduću verziju",
          "Smanjiti količinu prikupljenih podataka i ograničiti pristup na ono što je potrebno.",
          "Zaštititi račune i sesije, provjeravati dopuštenja na poslužitelju i testirati pravila pristupa.",
          "Koristiti šifrirane veze tijekom prijenosa i držati tajne izvan koda koji se isporučuje pregledniku.",
          "Procijeniti dobro pregledan E2EE protokol prije tvrdnje o šifriranju s kraja na kraj.",
          "Definirati sigurnosne kopije, ključeve za oporavak, čuvanje podataka i testove obnove prije nego što ih se najavi.",
          "Planirati ažuriranja, preglede, minimizirane zapisnike i odgovor na ranjivosti.",
        ),
        p(
          "Ograničenja i kontakt za sigurnost",
          "Ti ciljevi nisu certifikacija ni jamstvo apsolutne zaštite. Odgovorna osoba za sigurnost, kanal za prijavu ranjivosti, rokovi odgovora i javni kontaktni podaci još nisu utvrđeni. U obrasce demonstracije nemojte unositi osobne podatke ni tajne.",
        ),
      ],
      "Povezane stranice",
      [
        { label: "Pravila o privatnosti", to: "/legal/privacy" },
        { label: "Uvjeti korištenja", to: "/legal/terms" },
        { label: "Kako prijaviti sadržaj", to: "/legal/report" },
      ],
      "Natrag na početnu stranicu",
    ),
  },
  "sr-Latn": {
    terms: document(
      "Uslovi korišćenja",
      "Ovo je radni nacrt za moguću buduću uslugu TalkChat. Nije pravni sporazum spreman za upotrebu.",
      "NACRT — POTREBAN JE PRAVNI PREGLED: pre javnog pokretanja potrebno je navesti identitet i kontakt podatke operatera, merodavno pravo i uslove odgovornosti, a konačne uslove dovršiti i dati na pregled kvalifikovanom stručnjaku.",
      "Nacrt — nema datuma stupanja na snagu.",
      [
        p(
          "1. Trenutno stanje projekta",
          "TalkChat koristi Supabase Auth za naloge, prijavljivanje i oporavak lozinke. Razmena poruka, čuvanje razgovora i moderacija nisu implementirani.",
          "Ovaj nacrt navodi teme koje treba razmotriti ako se usluga pokrene. To ne znači da su danas dostupni usluga razmene poruka, kanal podrške ili postupak moderacije.",
        ),
        p(
          "2. Predviđeni pristup i minimalna starost",
          "Interfejs traži datum rođenja i lokalno proverava minimalnu starost od 13 godina pre registracije. To nije provera identiteta, a server ne primenjuje pravilo o starosti.",
          "Minimalnu starost, način provere i pravila za maloletnike treba pregledati za svaku državu u kojoj bi usluga mogla da se nudi, pre pokretanja.",
        ),
        p(
          "3. Očekivano ponašanje ako usluga postoji",
          "Korisnici buduće usluge trebalo bi da poštuju merodavne zakone i pravila zajednice. Zloupotrebe, pokušaje neovlašćenog pristupa, lažno predstavljanje i sadržaj koji krši prava drugih trebalo bi obrađivati prema objavljenim pravilima i utvrđenom postupku žalbe.",
          "Ne sprovode se stvarne sankcije, moderacija ni postupak žalbe.",
        ),
        p(
          "4. Sadržaj i prava",
          "Prava na sadržaj, ograničene dozvole potrebne za rad buduće usluge i pravila o nezakonitom sadržaju ili sadržaju prijavljenom za pregled moraju biti navedeni u konačnoj verziji. Ovaj nacrt ne dodeljuje niti polaže pravo na licencu za korisnički sadržaj.",
        ),
        p(
          "5. Dostupnost, odgovornost i prestanak usluge",
          "Ova verzija ne daje obećanje o dostupnosti, čuvanju poruka ili kontinuitetu usluge. Odricanja od odgovornosti, njena ograničenja i pravila o prestanku, izvozu i brisanju moraju biti sastavljeni i pregledani u skladu sa merodavnim pravom pre pokretanja.",
        ),
        p(
          "6. Operater, merodavno pravo i kontakt",
          "Pravni identitet operatera, adresa, kontakt podaci, merodavno pravo i nadležni sudovi nisu navedeni. Ne smeju se izmišljati i moraju se dopuniti pre objavljivanja.",
        ),
      ],
      "Povezane informacije",
      [
        { label: "Politika privatnosti", to: "/legal/privacy" },
        { label: "Pravila zajednice", to: "/legal/community" },
        { label: "Bezbednosni principi", to: "/legal/security" },
      ],
      "Nazad na početnu stranu",
    ),
    privacy: document(
      "Politika privatnosti",
      "Ova stranica opisuje trenutnu obradu podataka u TalkChat-u i informacije koje treba utvrditi pre javnog pokretanja.",
      "NACRT — POTREBAN JE PRAVNI PREGLED: ovo nije pravni savet ni garancija usklađenosti. Svrhe, pravni osnovi, rukovaoci, primaoci, periodi čuvanja i prava moraju biti utvrđeni i pregledani za relevantne jurisdikcije pre pokretanja.",
      "Nacrt — nema datuma stupanja na snagu.",
      [
        p(
          "1. Podaci koje koristi trenutna verzija",
          "Tokom registracije i prijavljivanja, imejl adresa i lozinka šalju se direktno konfigurisanom Supabase projektu za Supabase Auth. Prikazano ime šalje se kao metapodatak naloga. Datum rođenja i prihvatanje uslova koriste se samo u pregledaču i ne šalju se.",
          "Supabase SDK upravlja čuvanjem sesije u pregledaču. Ostale vrednosti obrazaca privremeno ostaju u memoriji stranice; pregledač može nezavisno da ponudi pamćenje polja pomoću funkcije automatskog popunjavanja.",
          "Podešavanja teme i jezika čuvaju se odvojeno u lokalnom skladištu pregledača. Ako skladište nije dostupno, ostaju sačuvana samo tokom trenutne posete.",
        ),
        p(
          "2. Spoljne usluge i evidencije",
          "Supabase obrađuje podatke potrebne za autentifikaciju. Dostava imejlova zavisi od konfiguracije projekta i SMTP provajdera; ta konfiguracija nije proverena. Nisu implementirani analitička usluga ni TalkChat funkcija razmene poruka. Provajder hostinga i mrežna infrastruktura takođe mogu da obrađuju podatke o vezi ili vode evidencije.",
        ),
        p(
          "3. Mogući podaci buduće usluge",
          "Podaci koje će buduća usluga zaista prikupljati još nisu utvrđeni. Mogu obuhvatati informacije o nalogu i sadržaj ili metapodatke potrebne za rad usluge, ali još nije usvojen iscrpan spisak, svrha ni pravni osnov.",
          "Primaoci, obrađivači, mogući prenosi izvan izabranog regiona, periodi čuvanja, pravila rezervnih kopija i postupci brisanja tek treba da se utvrde. Trenutno se ne obećava automatsko brisanje niti određeni period čuvanja.",
        ),
        p(
          "4. Prava i zahtevi",
          "Prava pojedinaca, način njihovog ostvarivanja, rokovi za odgovor i nadležni organ delimično zavise od mesta boravka pojedinaca, operatera usluge i merodavnog prava. Ovi detalji, rukovalac podacima i važeći način kontakta moraju se dodati pre pokretanja.",
          "Ova demonstracija nema kanal za zahteve za pristup, ispravku, brisanje ili pritužbe.",
        ),
        p(
          "5. Privatnost i šifrovanje",
          "Postojanje ove stranice ne znači da su razgovori šifrovani od kraja do kraja. Ova verzija nema sistem za razmenu poruka ni E2EE šifrovanje. Svako buduće šifrovanje i njegova ograničenja treba opisati nakon tehničkog projektovanja i pregleda.",
        ),
      ],
      "Povezane stranice",
      [
        { label: "Uslovi korišćenja", to: "/legal/terms" },
        { label: "Bezbednosni principi", to: "/legal/security" },
        { label: "Kako prijaviti sadržaj", to: "/legal/report" },
      ],
      "Nazad na početnu stranu",
    ),
    community: document(
      "Pravila zajednice",
      "Predloženi principi za razgovore ako TalkChat postane usluga za razmenu poruka.",
      "NACRT — TalkChat trenutno ne pruža razmenu poruka ni moderaciju. Ova pravila ne sprovodi operativni sistem.",
      "Predloženi principi — nema datuma stupanja na snagu.",
      [
        p(
          "Poštovanje i bezbednost",
          "Ophodite se prema drugima s poštovanjem. Pretnje, ciljano uznemiravanje, mržnja, zastrašivanje i podsticanje na nasilje nemaju mesta u bezbednoj zajednici.",
          "Ne delite privatne podatke druge osobe bez dozvole. Ne predstavljajte se kao neko drugi i ne pokušavajte da pristupite nalogu ili uređaju bez ovlašćenja.",
        ),
        p(
          "Sadržaj i neželjeno kontaktiranje",
          "Ne šaljite nezakonit sadržaj, prevare, zlonamerni softver, neželjenu poštu niti ponovljene neželjene poruke. Poštujte autorska i druga primenljiva prava.",
          "Ovi principi su urednički predlog. Pre pokretanja treba utvrditi definicije zabranjenog sadržaja, izuzetke, moguće mere i načine žalbe.",
        ),
        p(
          "Maloletnici i prijavljivanje",
          "Nemojte neprimereno usmeravati sadržaj ka maloletnicima niti deliti slike ili informacije koje bi ih mogle ugroziti. Pravila zaštite, obrada prijava i eskalacija moraju biti osmišljeni uz odgovarajuće mere zaštite pre svakog javnog pokretanja.",
          "Demonstracija nema funkciju za prijavljivanje ni moderaciju. Više o ovom ograničenju pogledajte na posebnoj stranici.",
        ),
        p(
          "Sprovođenje",
          "Ova verzija nema tim za moderaciju, mehanizam blokiranja ni postupak za sankcije i žalbe. Nemojte se oslanjati na ova pravila kao na stvarnu intervenciju.",
        ),
      ],
      "Povezane stranice",
      [
        { label: "Kako prijaviti sadržaj", to: "/legal/report" },
        { label: "Bezbednosni principi", to: "/legal/security" },
        { label: "Politika privatnosti", to: "/legal/privacy" },
      ],
      "Nazad na početnu stranu",
    ),
    report: document(
      "Prijava sadržaja ili naloga",
      "Informacije u nastavku opisuju mogući budući postupak; ovo nije obrazac za prijavu.",
      "PRIJAVA SE NE ŠALJE: TalkChat još nema razmenu poruka, dugme za prijavu, tim za pregled niti objavljenu adresu za prijavu.",
      "Informacije o prototipu — pregledati pre pokretanja.",
      [
        p(
          "Prijavljivanje još nije dostupno",
          "Ova stranica ne šalje prijavu niti prikuplja dokaze. Nemojte koristiti obrasce za registraciju ili prijavljivanje da biste prijavili problem; oni služe samo za autentifikaciju naloga.",
          "Nisu navedeni imejl adresa ni kontakt podaci za prijavu jer operativni kanal nije definisan. Ova stranica ne može da primi niti obradi zahtev.",
        ),
        p(
          "Informacije koje treba pripremiti za buduću prijavu",
          "Ako se usluga pokrene s posebnom funkcijom, može biti korisno opisati sadržaj ili nalog, gde se pojavljuje, razlog prijave i približno vreme. Delite samo informacije koje su strogo neophodne i izbegavajte javno širenje ličnih podataka ili osetljivog sadržaja.",
        ),
        p(
          "Hitne situacije",
          "TalkChat ne nadgleda ovu stranicu i ne može da reaguje u hitnim slučajevima. Ako postoji neposredna opasnost, obratite se hitnim službama ili nadležnim organima tamo gde živite.",
        ),
        b(
          "Šta treba definisati pre pokretanja",
          "Operativan i pristupačan kanal za prijavljivanje.",
          "Kategorije, okvirni rokovi, pravila obrade i informacije koje se čuvaju.",
          "Zaštita podnosilaca prijava, obaveštenja i postupak žalbe.",
          "Odgovornosti operatera i pravila u relevantnim jurisdikcijama.",
        ),
      ],
      "Povezane stranice",
      [
        { label: "Pravila zajednice", to: "/legal/community" },
        { label: "Politika privatnosti", to: "/legal/privacy" },
      ],
      "Nazad na početnu stranu",
    ),
    security: document(
      "Bezbednosni principi",
      "Ova stranica razlikuje ograničenja demonstracije od ciljeva koje treba osmisliti pre stvarne usluge.",
      "NEMA GARANCIJE BEZBEDNOSTI: principi u nastavku predstavljaju ciljeve projektovanja. Ne opisuju zaštite koje su već implementirane ili proverene revizijom.",
      "Informacije o prototipu — pregledati pre pokretanja.",
      [
        p(
          "Trenutno stanje projekta",
          "Supabase Auth omogućava registraciju naloga, prijavljivanje, upravljanje sesijama i oporavak lozinke. Ovaj frontend ne implementira razmenu poruka, šifrovanje od kraja do kraja, bezbedne rezervne kopije, automatsko brisanje, nadzor, serverska ograničenja pokušaja niti postupak reagovanja na incidente.",
          "Zaštita ruta u frontendu nije granica autorizacije i ne zamenjuje serverske provere ni Supabase RLS pravila. Nisu implementirane tabele za poruke ni profile.",
        ),
        b(
          "Predloženi ciljevi za buduću verziju",
          "Smanjiti prikupljanje podataka i ograničiti pristup samo na ono što je neophodno.",
          "Zaštititi naloge i sesije, proveravati dozvole na serveru i testirati pravila pristupa.",
          "Koristiti šifrovane veze tokom prenosa i držati tajne izvan koda koji se isporučuje pregledaču.",
          "Proceniti dobro pregledan E2EE protokol pre tvrdnje o šifrovanju od kraja do kraja.",
          "Definisati rezervne kopije, ključeve za oporavak, čuvanje podataka i testove obnavljanja pre njihovog najavljivanja.",
          "Planirati ažuriranja, preglede, minimizovane evidencije i reagovanje na ranjivosti.",
        ),
        p(
          "Ograničenja i kontakt za bezbednost",
          "Ovi ciljevi nisu sertifikat niti garancija apsolutne zaštite. Odgovorno lice za bezbednost, kanal za prijavu ranjivosti, rokovi odgovora i javni kontakt podaci još nisu utvrđeni. U obrasce demonstracije ne unosite lične podatke ni tajne.",
        ),
      ],
      "Povezane stranice",
      [
        { label: "Politika privatnosti", to: "/legal/privacy" },
        { label: "Uslovi korišćenja", to: "/legal/terms" },
        { label: "Kako prijaviti sadržaj", to: "/legal/report" },
      ],
      "Nazad na početnu stranu",
    ),
  },
  sl: {
    terms: document(
      "Pogoji uporabe",
      "To je delovni osnutek za morebitno prihodnjo storitev TalkChat. Ne gre za pravni dogovor, pripravljen za uporabo.",
      "OSNUTEK — POTREBEN JE PRAVNI PREGLED: pred javnim zagonom je treba dopolniti identiteto in kontaktne podatke upravljavca, veljavno pravo in pogoje odgovornosti, končne pogoje pa mora pregledati usposobljen strokovnjak.",
      "Osnutek — brez datuma začetka veljavnosti.",
      [
        p(
          "1. Trenutno stanje projekta",
          "TalkChat uporablja Supabase Auth za račune, prijavo in obnovitev gesla. Sporočanje, shranjevanje pogovorov in moderiranje niso implementirani.",
          "Ta osnutek navaja teme, ki jih je treba obravnavati, če se storitev zažene. Ne pomeni, da so danes na voljo storitev sporočanja, kanal za podporo ali postopek moderiranja.",
        ),
        p(
          "2. Predviden dostop in najnižja starost",
          "Vmesnik zahteva datum rojstva in pred registracijo lokalno preveri najnižjo starost 13 let. To ni preverjanje identitete, strežnik pa ne uveljavlja starostnega pravila.",
          "Najnižjo starost, način preverjanja in pravila za mladoletnike je treba pred zagonom pregledati za vsako državo, v kateri bi se storitev lahko ponujala.",
        ),
        p(
          "3. Pričakovano vedenje, če bo storitev na voljo",
          "Uporabniki prihodnje storitve bi morali spoštovati veljavno pravo in pravila skupnosti. Zlorabe, poskuse nepooblaščenega dostopa, lažno predstavljanje in vsebine, ki kršijo pravice drugih, bi bilo treba obravnavati po objavljenih pravilih in določenem pritožbenem postopku.",
          "Dejansko sankcioniranje, moderiranje ali pritožbeni postopek se ne izvajajo.",
        ),
        p(
          "4. Vsebina in pravice",
          "Pravice na vsebinah, omejena dovoljenja, potrebna za delovanje prihodnje storitve, ter pravila o nezakonitih ali prijavljenih vsebinah je treba določiti v končni različici. Ta osnutek ne podeljuje in ne uveljavlja licence za uporabniške vsebine.",
        ),
        p(
          "5. Razpoložljivost, odgovornost in prenehanje storitve",
          "Ta različica ne zagotavlja razpoložljivosti, hrambe sporočil ali neprekinjenega delovanja storitve. Izjave o omejitvi odgovornosti, omejitve odgovornosti ter pravila o prenehanju, izvozu in izbrisu je treba pred zagonom pripraviti in pregledati glede na veljavno pravo.",
        ),
        p(
          "6. Upravljavec, veljavno pravo in stik",
          "Pravna identiteta upravljavca, naslov, kontaktni podatki, veljavno pravo in pristojna sodišča niso navedeni. Ne smemo si jih izmisliti; dopolniti jih je treba pred objavo.",
        ),
      ],
      "Povezane informacije",
      [
        { label: "Pravilnik o zasebnosti", to: "/legal/privacy" },
        { label: "Pravila skupnosti", to: "/legal/community" },
        { label: "Varnostna načela", to: "/legal/security" },
      ],
      "Nazaj na domačo stran",
    ),
    privacy: document(
      "Pravilnik o zasebnosti",
      "Ta stran opisuje trenutno obdelavo podatkov v TalkChatu in informacije, ki jih je treba določiti pred javnim zagonom.",
      "OSNUTEK — POTREBEN JE PRAVNI PREGLED: to ni pravni nasvet ali jamstvo skladnosti. Namene, pravne podlage, upravljavce, prejemnike, roke hrambe in pravice je treba pred zagonom določiti in pregledati za ustrezne jurisdikcije.",
      "Osnutek — brez datuma začetka veljavnosti.",
      [
        p(
          "1. Podatki, ki jih uporablja trenutna različica",
          "Med registracijo in prijavo se e-poštni naslov in geslo pošljeta neposredno v konfigurirani projekt Supabase za Supabase Auth. Prikazno ime se pošlje kot metapodatek računa. Datum rojstva in sprejem pogojev se uporabljata samo v brskalniku in se ne pošiljata.",
          "Supabase SDK upravlja ohranjanje seje v brskalniku. Druge vrednosti obrazcev začasno ostanejo v pomnilniku strani; brskalnik lahko neodvisno ponudi shranjevanje polj s funkcijo samodejnega izpolnjevanja.",
          "Nastavitve teme in jezika so ločeno shranjene v lokalni shrambi brskalnika. Če shramba ni na voljo, se ohranijo samo za trenutni obisk.",
        ),
        p(
          "2. Zunanje storitve in dnevniki",
          "Supabase obdeluje podatke, potrebne za preverjanje pristnosti. Dostava e-pošte je odvisna od konfiguracije projekta in ponudnika SMTP; ta konfiguracija ni bila preverjena. Analitična storitev in funkcija sporočanja TalkChat nista implementirani. Ponudnik gostovanja in omrežna infrastruktura lahko prav tako obdelujeta podatke o povezavi ali vodita dnevnike.",
        ),
        p(
          "3. Možni podatki prihodnje storitve",
          "Podatki, ki jih bo prihodnja storitev dejansko zbirala, še niso določeni. Lahko vključujejo podatke o računu ter vsebine ali metapodatke, potrebne za delovanje storitve, vendar izčrpen seznam, namen ali pravna podlaga še niso določeni.",
          "Prejemnike, obdelovalce, morebitne prenose zunaj izbrane regije, roke hrambe, pravila varnostnih kopij in postopke izbrisa je še treba določiti. Samodejni izbris ali določena doba hrambe trenutno nista obljubljena.",
        ),
        p(
          "4. Pravice in zahteve",
          "Pravice posameznikov, način njihovega uveljavljanja, roki za odgovor in pristojni organ so deloma odvisni od lokacije posameznikov, upravljavca storitve in veljavnega prava. Te podrobnosti, upravljavca podatkov in veljaven način stika je treba dodati pred zagonom.",
          "Ta predstavitev nima kanala za zahteve za dostop, popravek, izbris ali pritožbe.",
        ),
        p(
          "5. Zasebnost in šifriranje",
          "Obstoj te strani ne pomeni, da so pogovori šifrirani od začetka do konca. Ta različica nima sistema za sporočanje ali šifriranja E2EE. Morebitno prihodnje šifriranje in njegove omejitve je treba opisati po tehničnem načrtovanju in pregledu.",
        ),
      ],
      "Povezane strani",
      [
        { label: "Pogoji uporabe", to: "/legal/terms" },
        { label: "Varnostna načela", to: "/legal/security" },
        { label: "Kako prijaviti vsebino", to: "/legal/report" },
      ],
      "Nazaj na domačo stran",
    ),
    community: document(
      "Pravila skupnosti",
      "Predlagana načela za pogovore, če TalkChat postane storitev za sporočanje.",
      "OSNUTEK — TalkChat trenutno ne zagotavlja sporočanja ali moderiranja. Operativni sistem teh pravil ne uveljavlja.",
      "Predlagana načela — brez datuma začetka veljavnosti.",
      [
        p(
          "Spoštovanje in varnost",
          "Do drugih se vedite spoštljivo. Grožnje, ciljno nadlegovanje, sovraštvo, ustrahovanje in spodbujanje nasilja ne sodijo v varno skupnost.",
          "Ne delite zasebnih podatkov druge osebe brez dovoljenja. Ne predstavljajte se kot druga oseba in ne poskušajte brez dovoljenja dostopati do računa ali naprave.",
        ),
        p(
          "Vsebina in neželeno nagovarjanje",
          "Ne pošiljajte nezakonitih vsebin, goljufij, zlonamerne programske opreme, neželene pošte ali ponavljajočih se nezaželenih sporočil. Spoštujte avtorske in druge veljavne pravice.",
          "Ta načela so uredniški predlog. Pred zagonom je treba določiti opredelitve prepovedanih vsebin, izjeme, možne ukrepe in pritožbene poti.",
        ),
        p(
          "Mladoletniki in prijave",
          "Mladoletnikov ne nagovarjajte na neprimeren način in ne delite slik ali informacij, ki bi jih lahko ogrozile. Pravila zaščite, obravnavo prijav in stopnjevanje je treba pred javnim zagonom zasnovati z ustreznimi varovali.",
          "Predstavitev nima funkcije za prijave ali moderiranje. O tej omejitvi preberite na namenski strani.",
        ),
        p(
          "Uveljavljanje pravil",
          "Ta različica nima ekipe za moderiranje, mehanizma za blokiranje ali postopka sankcioniranja in pritožb. Na ta pravila se ne zanašajte kot na dejanski ukrep.",
        ),
      ],
      "Povezane strani",
      [
        { label: "Kako prijaviti vsebino", to: "/legal/report" },
        { label: "Varnostna načela", to: "/legal/security" },
        { label: "Pravilnik o zasebnosti", to: "/legal/privacy" },
      ],
      "Nazaj na domačo stran",
    ),
    report: document(
      "Prijava vsebine ali računa",
      "Spodnje informacije opisujejo možen prihodnji postopek; to ni obrazec za prijavo.",
      "PRIJAVA NI POSLANA: TalkChat še nima sporočanja, gumba za prijavo, ekipe za pregled ali objavljenega kontaktnega naslova za prijave.",
      "Informacije o prototipu — pregled pred zagonom.",
      [
        p(
          "Prijavljanje še ni na voljo",
          "Ta stran ne pošlje prijave in ne zbira dokazov. Za prijavo težave ne uporabljajte obrazcev za registracijo ali prijavo; namenjeni so samo preverjanju pristnosti računa.",
          "E-poštni naslov za prijave in kontaktni podatki niso navedeni, ker operativni kanal še ni določen. Ta stran ne more prejeti ali obdelati zahteve.",
        ),
        p(
          "Informacije za pripravo prihodnje prijave",
          "Če se storitev začne uporabljati z namensko funkcijo, je lahko koristno opisati vsebino ali račun, kje se pojavlja, razlog za prijavo in približen čas. Delite samo nujno potrebne informacije in se izogibajte javnemu razkrivanju osebnih podatkov ali občutljivih vsebin.",
        ),
        p(
          "Nujni primeri",
          "TalkChat te strani ne spremlja in se ne more odzvati na nujne primere. Ob neposredni nevarnosti se obrnite na nujne službe ali pristojne organe v kraju svojega prebivališča.",
        ),
        b(
          "Kaj je treba določiti pred zagonom",
          "Delujoč in dostopen kanal za prijave.",
          "Kategorije, okvirni roki, pravila obravnave in podatki, ki se hranijo.",
          "Zaščita prijaviteljev, obvestila in pritožbeni postopek.",
          "Odgovornosti upravljavca in pravila v ustreznih jurisdikcijah.",
        ),
      ],
      "Povezane strani",
      [
        { label: "Pravila skupnosti", to: "/legal/community" },
        { label: "Pravilnik o zasebnosti", to: "/legal/privacy" },
      ],
      "Nazaj na domačo stran",
    ),
    security: document(
      "Varnostna načela",
      "Ta stran razlikuje med omejitvami predstavitve in cilji, ki bi jih bilo treba zasnovati pred uvedbo prave storitve.",
      "NI VARNOSTNEGA JAMSTVA: spodnja načela so cilji zasnove. Ne opisujejo že uvedenih ali revidiranih zaščitnih ukrepov.",
      "Informacije o prototipu — pregled pred zagonom.",
      [
        p(
          "Trenutno stanje projekta",
          "Supabase Auth omogoča registracijo računov, prijavo, upravljanje sej in obnovitev gesla. Ta frontend ne implementira sporočanja, šifriranja od začetka do konca, varnih varnostnih kopij, samodejnega izbrisa, nadzora, strežniških omejitev poskusov ali postopka odzivanja na incidente.",
          "Zaščita poti v frontendu ni meja za avtorizacijo in ne nadomešča strežniških preverjanj ali pravil Supabase RLS. Tabele za sporočila ali profile niso implementirane.",
        ),
        b(
          "Predlagani cilji prihodnje različice",
          "Zmanjšati količino zbranih podatkov in omejiti dostop na potrebno.",
          "Zaščititi račune in seje, preverjati dovoljenja na strežniku ter preizkusiti pravila dostopa.",
          "Uporabljati šifrirane povezave med prenosom in skrivnosti ohraniti zunaj kode, poslane v brskalnik.",
          "Pred trditvijo o šifriranju od začetka do konca oceniti dobro pregledan protokol E2EE.",
          "Pred objavo določiti varnostne kopije, obnovitvene ključe, hrambo in preizkuse obnove.",
          "Načrtovati posodobitve, preglede, minimizirane dnevnike in odzivanje na ranljivosti.",
        ),
        p(
          "Omejitve in varnostni stik",
          "Ti cilji niso certifikat ali jamstvo za popolno zaščito. Odgovorna oseba za varnost, kanal za razkritje, roki odziva in javni kontaktni podatki še niso določeni. V obrazce predstavitve ne vnašajte osebnih podatkov ali skrivnosti.",
        ),
      ],
      "Povezane strani",
      [
        { label: "Pravilnik o zasebnosti", to: "/legal/privacy" },
        { label: "Pogoji uporabe", to: "/legal/terms" },
        { label: "Kako prijaviti vsebino", to: "/legal/report" },
      ],
      "Nazaj na domačo stran",
    ),
  },
  lt: {
    terms: document(
      "Naudojimo sąlygos",
      "Tai darbinis galimos būsimos „TalkChat“ paslaugos projektas. Tai nėra parengta naudoti teisinė sutartis.",
      "PROJEKTAS — BŪTINA TEISINĖ PERŽIŪRA: prieš viešą paslaugos paleidimą būtina nurodyti operatoriaus tapatybę ir kontaktinius duomenis, taikytiną teisę bei atsakomybės sąlygas, o galutines sąlygas turi parengti ir peržiūrėti kvalifikuotas specialistas.",
      "Projektas — įsigaliojimo datos nėra.",
      [
        p(
          "1. Dabartinė projekto būklė",
          "„TalkChat“ naudoja „Supabase Auth“ paskyroms, prisijungimui ir slaptažodžio atkūrimui. Susirašinėjimas, pokalbių saugojimas ir moderavimas neįgyvendinti.",
          "Šiame projekte išvardytos temos, kurias reikėtų aptarti paleidus paslaugą. Tai nereiškia, kad šiuo metu veikia susirašinėjimo paslauga, pagalbos kanalas ar moderavimo procesas.",
        ),
        p(
          "2. Numatoma prieiga ir minimalus amžius",
          "Sąsaja prašo gimimo datos ir prieš registraciją vietoje patikrina, ar asmeniui yra bent 13 metų. Tai nėra tapatybės patvirtinimas, o serveris amžiaus taisyklės netaiko.",
          "Prieš paleidimą kiekvienoje šalyje, kurioje paslauga gali būti siūloma, būtina peržiūrėti minimalų amžių, tikrinimo būdą ir nepilnamečiams taikomas taisykles.",
        ),
        p(
          "3. Tikėtinas elgesys, jei paslauga bus teikiama",
          "Būsimos paslaugos naudotojai turėtų laikytis taikytinų įstatymų ir bendruomenės taisyklių. Piktnaudžiavimas, bandymai gauti neteisėtą prieigą, apsimetimas kitu asmeniu ir kitų teises pažeidžiantis turinys turėtų būti sprendžiami pagal paskelbtas taisykles ir nustatytą apeliacijos procesą.",
          "Tikros sankcijos, moderavimas ar apeliacijų procesas šiuo metu nevykdomi.",
        ),
        p(
          "4. Turinys ir teisės",
          "Teises į turinį, ribotus leidimus, reikalingus būsimai paslaugai teikti, ir neteisėto ar pranešto turinio taisykles būtina apibrėžti galutinėje versijoje. Šiuo projektu nesuteikiama ir nepretenduojama į licenciją naudotojų turiniui.",
        ),
        p(
          "5. Prieinamumas, atsakomybė ir paslaugos pabaiga",
          "Šioje versijoje negarantuojamas prieinamumas, pranešimų saugojimas ar paslaugos tęstinumas. Atsakomybės atsisakymo ir apribojimo nuostatas, nutraukimo, eksporto ir ištrynimo taisykles būtina parengti ir peržiūrėti pagal taikytiną teisę prieš paleidimą.",
        ),
        p(
          "6. Operatorius, taikytina teisė ir kontaktai",
          "Operatoriaus teisinė tapatybė, adresas, kontaktiniai duomenys, taikytina teisė ir kompetentingi teismai nenurodyti. Jų negalima išgalvoti; juos būtina pateikti prieš paskelbiant.",
        ),
      ],
      "Susijusi informacija",
      [
        { label: "Privatumo politika", to: "/legal/privacy" },
        { label: "Bendruomenės gairės", to: "/legal/community" },
        { label: "Saugumo principai", to: "/legal/security" },
      ],
      "Grįžti į pradžios puslapį",
    ),
    privacy: document(
      "Privatumo politika",
      "Šiame puslapyje aprašomas dabartinis „TalkChat“ duomenų tvarkymas ir informacija, kurią dar reikia nustatyti prieš viešą paleidimą.",
      "PROJEKTAS — BŪTINA TEISINĖ PERŽIŪRA: tai nėra teisinė konsultacija ar atitikties garantija. Prieš paleidimą būtina nustatyti tikslus, teisinius pagrindus, duomenų valdytojus, gavėjus, saugojimo laikotarpius ir teises bei juos peržiūrėti atitinkamose jurisdikcijose.",
      "Projektas — įsigaliojimo datos nėra.",
      [
        p(
          "1. Dabartinės versijos naudojami duomenys",
          "Registruojantis ir prisijungiant el. pašto adresas bei slaptažodis tiesiogiai siunčiami į sukonfigūruotą „Supabase“ projektą, skirtą „Supabase Auth“. Rodomas vardas siunčiamas kaip paskyros metaduomenys. Gimimo data ir sutikimas su sąlygomis naudojami tik naršyklėje ir nesiunčiami.",
          "„Supabase“ SDK tvarko sesijos išsaugojimą naršyklėje. Kitos formų reikšmės laikinai lieka puslapio atmintyje; naršyklė gali atskirai pasiūlyti išsaugoti laukus naudodama automatinio pildymo funkciją.",
          "Temos ir kalbos nuostatos atskirai saugomos naršyklės vietinėje saugykloje. Jei saugykla nepasiekiama, jos išsaugomos tik dabartinio apsilankymo metu.",
        ),
        p(
          "2. Išorinės paslaugos ir žurnalai",
          "„Supabase“ tvarko autentifikavimui reikalingus duomenis. El. laiškų pristatymas priklauso nuo projekto konfigūracijos ir SMTP teikėjo; ši konfigūracija nebuvo patikrinta. Analitikos paslauga ar „TalkChat“ susirašinėjimo funkcija neįgyvendinta. Prieglobos teikėjas ir tinklo infrastruktūra taip pat gali tvarkyti ryšio duomenis arba saugoti žurnalus.",
        ),
        p(
          "3. Galimi būsimos paslaugos duomenys",
          "Duomenys, kuriuos iš tikrųjų rinks būsima paslauga, dar nenustatyti. Tai galėtų būti paskyros informacija ir paslaugai veikti būtinas turinys ar metaduomenys, tačiau kol kas nepatvirtintas išsamus sąrašas, tikslas ar teisinis pagrindas.",
          "Gavėjus, duomenų tvarkytojus, galimą perdavimą už pasirinkto regiono ribų, saugojimo laikotarpius, atsarginių kopijų taisykles ir ištrynimo procedūras dar reikia nustatyti. Šiuo metu nežadamas nei automatinis ištrynimas, nei konkretus saugojimo laikotarpis.",
        ),
        p(
          "4. Teisės ir prašymai",
          "Asmenų teisės, jų įgyvendinimo būdas, atsakymo terminai ir kompetentinga institucija iš dalies priklauso nuo asmenų buvimo vietos, paslaugos operatoriaus ir taikytinos teisės. Šią informaciją, duomenų valdytoją ir galiojantį kontaktavimo būdą būtina pateikti prieš paleidimą.",
          "Šioje demonstracinėje versijoje nėra kanalo prašymams dėl prieigos, ištaisymo, ištrynimo ar skundams pateikti.",
        ),
        p(
          "5. Privatumas ir šifravimas",
          "Šio puslapio buvimas nereiškia, kad pokalbiai šifruojami nuo galo iki galo. Šioje versijoje nėra susirašinėjimo sistemos ar E2EE šifravimo. Bet kokį būsimą šifravimą ir jo apribojimus reikia aprašyti atlikus techninį projektavimą ir peržiūrą.",
        ),
      ],
      "Susiję puslapiai",
      [
        { label: "Naudojimo sąlygos", to: "/legal/terms" },
        { label: "Saugumo principai", to: "/legal/security" },
        { label: "Kaip pranešti apie turinį", to: "/legal/report" },
      ],
      "Grįžti į pradžios puslapį",
    ),
    community: document(
      "Bendruomenės gairės",
      "Siūlomi pokalbių principai tuo atveju, jei „TalkChat“ taps susirašinėjimo paslauga.",
      "PROJEKTAS — šiuo metu „TalkChat“ neteikia susirašinėjimo ar moderavimo paslaugų. Šių gairių nevykdo jokia veikianti sistema.",
      "Siūlomi principai — įsigaliojimo datos nėra.",
      [
        p(
          "Pagarba ir saugumas",
          "Su kitais elkitės pagarbiai. Grasinimams, kryptingam priekabiavimui, neapykantai, bauginimui ir smurto skatinimui saugioje bendruomenėje nėra vietos.",
          "Be leidimo nesidalykite kito asmens privačia informacija. Neapsimetinėkite kitu asmeniu ir nebandykite be leidimo pasiekti paskyros ar įrenginio.",
        ),
        p(
          "Turinys ir nepageidaujami kreipiniai",
          "Nesiųskite neteisėto turinio, sukčiavimo pranešimų, kenkėjiškų programų, brukalo ar pakartotinių nepageidaujamų kreipinių. Gerbkite autorių teises ir kitas taikytinas teises.",
          "Šie principai yra redakcinis pasiūlymas. Prieš paleidimą būtina apibrėžti draudžiamą turinį, išimtis, galimas priemones ir apeliacijų būdus.",
        ),
        p(
          "Nepilnamečiai ir pranešimai",
          "Netikslingai nenukreipkite turinio į nepilnamečius ir nesidalykite vaizdais ar informacija, kuri galėtų jiems pakenkti. Apsaugos taisykles, pranešimų tvarkymą ir eskalavimą būtina parengti numatant tinkamas apsaugos priemones prieš viešą paleidimą.",
          "Demonstracinėje versijoje nėra pranešimo ar moderavimo funkcijos. Apie šį apribojimą skaitykite atskirame puslapyje.",
        ),
        p(
          "Taisyklių vykdymas",
          "Šioje versijoje nėra moderavimo komandos, blokavimo mechanizmo ar sankcijų ir apeliacijų proceso. Nepasikliaukite šiomis gairėmis kaip realia intervencija.",
        ),
      ],
      "Susiję puslapiai",
      [
        { label: "Kaip pranešti apie turinį", to: "/legal/report" },
        { label: "Saugumo principai", to: "/legal/security" },
        { label: "Privatumo politika", to: "/legal/privacy" },
      ],
      "Grįžti į pradžios puslapį",
    ),
    report: document(
      "Pranešti apie turinį arba paskyrą",
      "Toliau pateikta informacija apibūdina galimą būsimą procesą; tai nėra pranešimo forma.",
      "PRANEŠIMAS NEIŠSIUNČIAMAS: „TalkChat“ dar neturi susirašinėjimo, pranešimo mygtuko, peržiūros komandos ar paskelbto pranešimų kontaktinio adreso.",
      "Prototipo informacija — peržiūrėti prieš paleidimą.",
      [
        p(
          "Pranešimų teikimas dar nepasiekiamas",
          "Šis puslapis nesiunčia pranešimo ir nerenka įrodymų. Nenaudokite registracijos ar prisijungimo formų problemai pranešti; jos skirtos tik paskyros autentifikavimui.",
          "Pranešimų el. pašto adresas ir kontaktiniai duomenys nenurodyti, nes nenustatytas veikiantis kanalas. Šis puslapis negali gauti ar tvarkyti prašymo.",
        ),
        p(
          "Informacija, kurią verta paruošti būsimam pranešimui",
          "Jei paslauga bus paleista su specialia funkcija, gali būti naudinga aprašyti turinį ar paskyrą, kur jis rodomas, pranešimo priežastį ir apytikslį laiką. Dalinkitės tik būtinai reikalinga informacija ir neviešinkite asmens duomenų ar jautraus turinio.",
        ),
        p(
          "Skubios situacijos",
          "„TalkChat“ nestebi šio puslapio ir negali reaguoti į nelaimes. Esant tiesioginiam pavojui, kreipkitės į skubiosios pagalbos tarnybas arba kompetentingas institucijas savo gyvenamojoje vietoje.",
        ),
        b(
          "Ką būtina nustatyti prieš paleidimą",
          "Veikiantis ir prieinamas pranešimų kanalas.",
          "Kategorijos, orientaciniai terminai, tvarkymo taisyklės ir saugoma informacija.",
          "Pranešėjų apsauga, pranešimai ir apeliacijos procesas.",
          "Operatoriaus atsakomybė ir atitinkamose jurisdikcijose taikomos taisyklės.",
        ),
      ],
      "Susiję puslapiai",
      [
        { label: "Bendruomenės gairės", to: "/legal/community" },
        { label: "Privatumo politika", to: "/legal/privacy" },
      ],
      "Grįžti į pradžios puslapį",
    ),
    security: document(
      "Saugumo principai",
      "Šiame puslapyje demonstracinės versijos apribojimai atskiriami nuo tikslų, kuriuos reikėtų suprojektuoti prieš kuriant tikrą paslaugą.",
      "SAUGUMO GARANTIJOS NĖRA: toliau pateikti principai yra projektavimo tikslai. Jie neaprašo jau įgyvendintų ar audituotų apsaugos priemonių.",
      "Prototipo informacija — peržiūrėti prieš paleidimą.",
      [
        p(
          "Dabartinė projekto būklė",
          "„Supabase Auth“ suteikia paskyrų registravimą, prisijungimą, sesijų tvarkymą ir slaptažodžio atkūrimą. Ši sąsaja neįgyvendina susirašinėjimo, tiesioginio šifravimo, saugių atsarginių kopijų, automatinio ištrynimo, stebėsenos, serverio bandymų ribojimo ar reagavimo į incidentus proceso.",
          "Sąsajos maršrutų apsauga nėra autorizacijos riba ir nepakeičia serverio patikrų ar „Supabase“ RLS politikų. Pranešimų ar profilių lentelės neįgyvendintos.",
        ),
        b(
          "Siūlomi būsimos versijos tikslai",
          "Mažinti renkamų duomenų kiekį ir apriboti prieigą tik prie to, kas būtina.",
          "Apsaugoti paskyras ir sesijas, tikrinti leidimus serverio pusėje ir išbandyti prieigos taisykles.",
          "Naudoti šifruotus ryšius perduodant duomenis ir nelaikyti paslapčių naršyklei pateikiamame kode.",
          "Įvertinti gerai peržiūrėtą E2EE protokolą prieš teigiant, kad taikomas tiesioginis šifravimas.",
          "Prieš paskelbiant apibrėžti atsargines kopijas, atkūrimo raktus, saugojimą ir atkūrimo bandymus.",
          "Planuoti atnaujinimus, patikras, minimizuotus žurnalus ir reagavimą į pažeidžiamumus.",
        ),
        p(
          "Apribojimai ir saugumo kontaktai",
          "Šie tikslai nėra sertifikatas ar absoliučios apsaugos garantija. Už saugumą atsakingas asmuo, pažeidžiamumų atskleidimo kanalas, atsakymo terminai ir viešieji kontaktiniai duomenys dar nenustatyti. Demonstracinėse formose nenurodykite asmens duomenų ar paslapčių.",
        ),
      ],
      "Susiję puslapiai",
      [
        { label: "Privatumo politika", to: "/legal/privacy" },
        { label: "Naudojimo sąlygos", to: "/legal/terms" },
        { label: "Kaip pranešti apie turinį", to: "/legal/report" },
      ],
      "Grįžti į pradžios puslapį",
    ),
  },
  lv: {
    terms: document(
      "Lietošanas noteikumi",
      "Šis ir darba projekts iespējamam nākotnes TalkChat pakalpojumam. Tas nav lietošanai gatavs juridisks līgums.",
      "PROJEKTS — NEPIECIEŠAMA JURIDISKĀ PĀRBAUDE: pirms publiskas palaišanas jānorāda operatora identitāte un kontaktinformācija, piemērojamie tiesību akti un atbildības noteikumi, bet galīgie noteikumi jāpabeidz un jāpārbauda kvalificētam speciālistam.",
      "Projekts — nav spēkā stāšanās datuma.",
      [
        p(
          "1. Pašreizējais projekta stāvoklis",
          "TalkChat izmanto Supabase Auth kontiem, pierakstīšanās un paroles atkopšanas funkcijām. Ziņojumapmaiņa, sarunu glabāšana un moderēšana nav ieviesta.",
          "Šajā projektā uzskaitīti jautājumi, kas jārisina, ja pakalpojums tiks palaists. Tas nenozīmē, ka pašlaik ir pieejams ziņojumapmaiņas pakalpojums, atbalsta kanāls vai moderēšanas process.",
        ),
        p(
          "2. Plānotā piekļuve un minimālais vecums",
          "Saskarne pieprasa dzimšanas datumu un pirms reģistrācijas lokāli pārbauda, vai lietotājs ir sasniedzis minimālo 13 gadu vecumu. Tā nav identitātes pārbaude, un serveris vecuma noteikumu nepiemēro.",
          "Pirms palaišanas katrā valstī, kurā pakalpojumu varētu piedāvāt, jāpārskata minimālais vecums, pārbaudes veids un noteikumi attiecībā uz nepilngadīgajiem.",
        ),
        p(
          "3. Sagaidāmā rīcība, ja pakalpojums būs pieejams",
          "Nākotnes pakalpojuma lietotājiem būtu jāievēro piemērojamie tiesību akti un kopienas noteikumi. Ļaunprātīga rīcība, nesankcionētas piekļuves mēģinājumi, uzdošanās par citu personu un saturs, kas pārkāpj citu personu tiesības, būtu jāizskata saskaņā ar publicētiem noteikumiem un noteiktu apelācijas procesu.",
          "Pašlaik netiek piemērotas reālas sankcijas, veikta moderēšana vai nodrošināts apelācijas process.",
        ),
        p(
          "4. Saturs un tiesības",
          "Tiesības uz saturu, ierobežotās atļaujas, kas vajadzīgas nākotnes pakalpojuma darbībai, kā arī noteikumi par nelikumīgu vai ziņotu saturu jāprecizē galīgajā versijā. Šis projekts nepiešķir un nepretendē uz licenci lietotāju saturam.",
        ),
        p(
          "5. Pieejamība, atbildība un pakalpojuma izbeigšana",
          "Šī versija nesniedz solījumus par pieejamību, ziņojumu glabāšanu vai pakalpojuma nepārtrauktību. Atrunas, atbildības ierobežojumi un izbeigšanas, eksporta un dzēšanas noteikumi pirms palaišanas jāsagatavo un jāpārskata atbilstoši piemērojamajiem tiesību aktiem.",
        ),
        p(
          "6. Operators, piemērojamie tiesību akti un kontaktinformācija",
          "Operatora juridiskā identitāte, adrese, kontaktinformācija, piemērojamie tiesību akti un kompetentās tiesas nav norādītas. Tās nedrīkst izdomāt, un informācija jāpapildina pirms publicēšanas.",
        ),
      ],
      "Saistītā informācija",
      [
        { label: "Privātuma politika", to: "/legal/privacy" },
        { label: "Kopienas vadlīnijas", to: "/legal/community" },
        { label: "Drošības principi", to: "/legal/security" },
      ],
      "Atpakaļ uz sākumlapu",
    ),
    privacy: document(
      "Privātuma politika",
      "Šajā lapā aprakstīta TalkChat pašreizējā datu apstrāde un informācija, kas vēl jānosaka pirms publiskas palaišanas.",
      "PROJEKTS — NEPIECIEŠAMA JURIDISKĀ PĀRBAUDE: tas nav juridisks padoms vai atbilstības garantija. Pirms palaišanas jānosaka un attiecīgajās jurisdikcijās jāpārskata nolūki, tiesiskais pamats, pārziņi, saņēmēji, glabāšanas termiņi un tiesības.",
      "Projekts — nav spēkā stāšanās datuma.",
      [
        p(
          "1. Pašreizējā versijā izmantotie dati",
          "Reģistrējoties un pierakstoties, e-pasta adrese un parole tiek nosūtīta tieši konfigurētajam Supabase projektam, kas izmanto Supabase Auth. Parādāmais vārds tiek nosūtīts kā konta metadati. Dzimšanas datums un piekrišana noteikumiem tiek izmantoti tikai pārlūkprogrammā un netiek nosūtīti.",
          "Supabase SDK pārvalda sesijas saglabāšanu pārlūkprogrammā. Citas veidlapu vērtības īslaicīgi paliek lapas atmiņā; pārlūkprogramma neatkarīgi var piedāvāt saglabāt laukus, izmantojot automātiskās aizpildes funkciju.",
          "Motīva un valodas preferences tiek glabātas atsevišķi pārlūkprogrammas lokālajā krātuvē. Ja krātuve nav pieejama, tās tiek saglabātas tikai pašreizējā apmeklējuma laikā.",
        ),
        p(
          "2. Ārējie pakalpojumi un žurnāli",
          "Supabase apstrādā autentifikācijai nepieciešamos datus. E-pasta piegāde ir atkarīga no projekta konfigurācijas un SMTP pakalpojumu sniedzēja; šī konfigurācija nav pārbaudīta. Analītikas pakalpojums un TalkChat ziņojumapmaiņas funkcija nav ieviesta. Arī mitināšanas pakalpojumu sniedzējs un tīkla infrastruktūra var apstrādāt savienojuma datus vai veidot žurnālus.",
        ),
        p(
          "3. Iespējamie dati nākotnes pakalpojumā",
          "Dati, ko nākotnes pakalpojums faktiski vāks, vēl nav noteikti. Tie varētu ietvert konta informāciju un pakalpojuma darbībai nepieciešamu saturu vai metadatus, taču pašlaik nav apstiprināts izsmeļošs saraksts, nolūks vai tiesiskais pamats.",
          "Saņēmēji, apstrādātāji, iespējamā pārsūtīšana ārpus izvēlētā reģiona, glabāšanas termiņi, dublēšanas noteikumi un dzēšanas procedūras vēl jānosaka. Pašlaik netiek solīta ne automātiska dzēšana, ne konkrēts glabāšanas termiņš.",
        ),
        p(
          "4. Tiesības un pieprasījumi",
          "Personu tiesības, to īstenošanas kārtība, atbildes termiņi un kompetentā iestāde daļēji ir atkarīga no personu atrašanās vietas, pakalpojuma operatora un piemērojamajiem tiesību aktiem. Šī informācija, datu pārzinis un derīgs saziņas veids jāpievieno pirms palaišanas.",
          "Šajā demonstrācijā nav kanāla piekļuves, labošanas, dzēšanas vai sūdzību pieprasījumiem.",
        ),
        p(
          "5. Privātums un šifrēšana",
          "Šīs lapas esamība nenozīmē, ka sarunas tiek šifrētas no gala līdz galam. Šajā versijā nav ziņojumapmaiņas sistēmas vai E2EE šifrēšanas. Jebkāda nākotnes šifrēšana un tās ierobežojumi jāapraksta pēc tehniskās izstrādes un pārskatīšanas.",
        ),
      ],
      "Saistītās lapas",
      [
        { label: "Lietošanas noteikumi", to: "/legal/terms" },
        { label: "Drošības principi", to: "/legal/security" },
        { label: "Kā ziņot par saturu", to: "/legal/report" },
      ],
      "Atpakaļ uz sākumlapu",
    ),
    community: document(
      "Kopienas vadlīnijas",
      "Ierosināti sarunu principi gadījumam, ja TalkChat kļūst par ziņojumapmaiņas pakalpojumu.",
      "PROJEKTS — TalkChat pašlaik nenodrošina ziņojumapmaiņu vai moderēšanu. Darbojoša sistēma šīs vadlīnijas neīsteno.",
      "Ierosinātie principi — nav spēkā stāšanās datuma.",
      [
        p(
          "Cieņa un drošība",
          "Izturieties pret citiem ar cieņu. Drošā kopienā nav vietas draudiem, mērķētai uzmākšanai, naidam, iebiedēšanai un kūdīšanai uz vardarbību.",
          "Bez atļaujas neizpaudiet citas personas privāto informāciju. Neuzdodieties par citiem un nemēģiniet bez atļaujas piekļūt kontam vai ierīcei.",
        ),
        p(
          "Saturs un nevēlami uzaicinājumi",
          "Nesūtiet nelikumīgu saturu, krāpniecību, ļaunprogrammatūru, surogātpastu vai atkārtotus nevēlamus uzaicinājumus. Ievērojiet autortiesības un citas piemērojamās tiesības.",
          "Šie principi ir redakcionāls priekšlikums. Pirms palaišanas jānosaka aizliegtā satura definīcijas, izņēmumi, iespējamie pasākumi un apelācijas iespējas.",
        ),
        p(
          "Nepilngadīgie un ziņošana",
          "Neuzrunājiet nepilngadīgos neatbilstošā veidā un neizplatiet attēlus vai informāciju, kas viņus varētu apdraudēt. Aizsardzības noteikumi, ziņojumu izskatīšana un eskalācija jāizstrādā ar atbilstošiem aizsardzības pasākumiem pirms publiskas palaišanas.",
          "Demonstrācijā nav ziņošanas vai moderēšanas funkcijas. Informāciju par šo ierobežojumu skatiet atsevišķajā lapā.",
        ),
        p(
          "Noteikumu izpilde",
          "Šajā versijā nav moderēšanas komandas, bloķēšanas mehānisma vai sankciju un apelācijas procesa. Neuzskatiet šīs vadlīnijas par reālu iejaukšanos.",
        ),
      ],
      "Saistītās lapas",
      [
        { label: "Kā ziņot par saturu", to: "/legal/report" },
        { label: "Drošības principi", to: "/legal/security" },
        { label: "Privātuma politika", to: "/legal/privacy" },
      ],
      "Atpakaļ uz sākumlapu",
    ),
    report: document(
      "Ziņot par saturu vai kontu",
      "Tālāk sniegtā informācija apraksta iespējamu nākotnes procesu; tā nav ziņošanas veidlapa.",
      "ZIŅOJUMS NETIEK NOSŪTĪTS: TalkChat vēl nav ziņojumapmaiņas, ziņošanas pogas, pārskatīšanas komandas vai publicētas ziņošanas kontaktadreses.",
      "Prototipa informācija — jāpārskata pirms palaišanas.",
      [
        p(
          "Ziņošana vēl nav pieejama",
          "Šī lapa nenosūta ziņojumu un nevāc pierādījumus. Neizmantojiet reģistrācijas vai pierakstīšanās veidlapas, lai ziņotu par problēmu; tās paredzētas tikai konta autentifikācijai.",
          "Ziņošanas e-pasta adrese un kontaktinformācija nav norādīta, jo nav noteikts darbības kanāls. Šī lapa nevar saņemt vai apstrādāt pieprasījumu.",
        ),
        p(
          "Informācija, ko sagatavot turpmākam ziņojumam",
          "Ja pakalpojums tiks palaists ar īpašu funkciju, var būt noderīgi aprakstīt saturu vai kontu, tā atrašanās vietu, ziņojuma iemeslu un aptuveno laiku. Kopīgojiet tikai absolūti nepieciešamo informāciju un izvairieties no personas datu vai sensitīva satura publiskas izplatīšanas.",
        ),
        p(
          "Steidzamas situācijas",
          "TalkChat šo lapu neuzrauga un nevar reaģēt ārkārtas situācijās. Tiešu briesmu gadījumā sazinieties ar neatliekamās palīdzības dienestiem vai kompetentajām iestādēm savā dzīvesvietā.",
        ),
        b(
          "Kas jānosaka pirms palaišanas",
          "Darbotiesspējīgs un pieejams ziņošanas kanāls.",
          "Kategorijas, aptuvenie termiņi, izskatīšanas noteikumi un glabājamā informācija.",
          "Ziņotāju aizsardzība, paziņojumi un apelācijas process.",
          "Operatora pienākumi un noteikumi attiecīgajās jurisdikcijās.",
        ),
      ],
      "Saistītās lapas",
      [
        { label: "Kopienas vadlīnijas", to: "/legal/community" },
        { label: "Privātuma politika", to: "/legal/privacy" },
      ],
      "Atpakaļ uz sākumlapu",
    ),
    security: document(
      "Drošības principi",
      "Šajā lapā demonstrācijas ierobežojumi ir nošķirti no mērķiem, kas būtu jāizstrādā pirms reāla pakalpojuma izveides.",
      "DROŠĪBAS GARANTIJAS NAV: tālāk minētie principi ir izstrādes mērķi. Tie neapraksta jau ieviestus vai auditētus aizsardzības pasākumus.",
      "Prototipa informācija — jāpārskata pirms palaišanas.",
      [
        p(
          "Pašreizējais projekta stāvoklis",
          "Supabase Auth nodrošina kontu reģistrāciju, pierakstīšanos, sesiju apstrādi un paroles atkopšanu. Šī saskarne neievieš ziņojumapmaiņu, pilnīgu šifrēšanu no gala līdz galam, drošas rezerves kopijas, automātisku dzēšanu, uzraudzību, servera mēģinājumu ierobežojumus vai reaģēšanas procesu uz incidentiem.",
          "Maršrutu aizsardzība saskarnē nav autorizācijas robeža un neaizstāj servera pārbaudes vai Supabase RLS politikas. Ziņojumu vai profilu tabulas nav ieviestas.",
        ),
        b(
          "Ierosinātie nākotnes versijas mērķi",
          "Samazināt vāktos datus un ierobežot piekļuvi tikai nepieciešamajam.",
          "Aizsargāt kontus un sesijas, pārbaudīt atļaujas servera pusē un testēt piekļuves noteikumus.",
          "Izmantot šifrētus savienojumus datu pārsūtīšanai un neiekļaut noslēpumus pārlūkprogrammai piegādātajā kodā.",
          "Izvērtēt rūpīgi pārbaudītu E2EE protokolu, pirms apgalvot, ka tiek izmantota pilnīga šifrēšana.",
          "Pirms paziņošanas noteikt rezerves kopijas, atkopšanas atslēgas, glabāšanu un atjaunošanas testus.",
          "Plānot atjauninājumus, pārbaudes, minimizētus žurnālus un reaģēšanu uz ievainojamībām.",
        ),
        p(
          "Ierobežojumi un drošības kontakts",
          "Šie mērķi nav sertifikācija vai absolūtas aizsardzības garantija. Drošības atbildīgā persona, ievainojamību atklāšanas kanāls, atbildes termiņi un publiskā kontaktinformācija vēl nav noteikta. Demonstrācijas veidlapās neievadiet personas datus vai noslēpumus.",
        ),
      ],
      "Saistītās lapas",
      [
        { label: "Privātuma politika", to: "/legal/privacy" },
        { label: "Lietošanas noteikumi", to: "/legal/terms" },
        { label: "Kā ziņot par saturu", to: "/legal/report" },
      ],
      "Atpakaļ uz sākumlapu",
    ),
  },
  et: {
    terms: document(
      "Kasutustingimused",
      "See on võimaliku tulevase TalkChati teenuse tööversioon. Tegemist ei ole kasutusvalmis õiguslepinguga.",
      "KAVAND — VAJALIK ON ÕIGUSLIK LÄBIVAATUS: enne avalikku käivitamist tuleb esitada operaatori identiteet ja kontaktandmed, kohaldatav õigus ja vastutuse tingimused ning lasta lõplikud tingimused kvalifitseeritud spetsialistil üle vaadata.",
      "Kavand — jõustumiskuupäev puudub.",
      [
        p(
          "1. Projekti praegune seis",
          "TalkChat kasutab kontode, sisselogimise ja parooli taastamise jaoks teenust Supabase Auth. Sõnumivahetus, vestluste salvestamine ja modereerimine ei ole rakendatud.",
          "Kavand loetleb teemad, mida tuleks käsitleda teenuse käivitamisel. See ei tähenda, et praegu oleks saadaval sõnumiteenus, tugikanal või modereerimisprotsess.",
        ),
        p(
          "2. Kavandatud juurdepääs ja vanuse alampiir",
          "Liides küsib sünnikuupäeva ja kontrollib enne registreerimist kohapeal, kas kasutaja on vähemalt 13-aastane. See ei ole isikusamasuse kontroll ning serveris vanusepiirangut ei jõustata.",
          "Enne käivitamist tuleb vanuse alampiir, kontrollimeetod ja alaealistega seotud reeglid üle vaadata igas riigis, kus teenust võidakse pakkuda.",
        ),
        p(
          "3. Oodatav käitumine võimaliku teenuse korral",
          "Tulevase teenuse kasutajad peaksid järgima kohaldatavaid seadusi ja kogukonna reegleid. Väärkasutust, loata juurdepääsu katseid, teisena esinemist ja teiste õigusi rikkuvat sisu tuleks käsitleda avaldatud reeglite ja kindlaksmääratud vaideprotsessi alusel.",
          "Tegelikku sanktsioneerimist, modereerimist ega vaideprotsessi ei toimu.",
        ),
        p(
          "4. Sisu ja õigused",
          "Sisuõigused, tulevase teenuse käitamiseks vajalikud piiratud load ning ebaseadusliku või teatatud sisu reeglid tuleb lõplikus versioonis määratleda. See kavand ei anna kasutaja sisule litsentsi ega väida, et selline litsents on olemas.",
        ),
        p(
          "5. Kättesaadavus, vastutus ja teenuse lõpetamine",
          "See versioon ei võta kohustust tagada kättesaadavust, sõnumite säilitamist ega teenuse järjepidevust. Vastutuse välistused ja piirangud ning lõpetamise, ekspordi ja kustutamise reeglid tuleb enne käivitamist koostada ja kohaldatava õiguse alusel läbi vaadata.",
        ),
        p(
          "6. Operaator, kohaldatav õigus ja kontakt",
          "Operaatori juriidiline identiteet, aadress, kontaktandmed, kohaldatav õigus ja pädevad kohtud ei ole esitatud. Neid andmeid ei tohi välja mõelda ning need tuleb enne avaldamist lisada.",
        ),
      ],
      "Seotud teave",
      [
        { label: "Privaatsuspoliitika", to: "/legal/privacy" },
        { label: "Kogukonna juhised", to: "/legal/community" },
        { label: "Turvapõhimõtted", to: "/legal/security" },
      ],
      "Tagasi avalehele",
    ),
    privacy: document(
      "Privaatsuspoliitika",
      "Sellel lehel kirjeldatakse TalkChati praegust andmetöötlust ja teavet, mis tuleb enne avalikku käivitamist veel kindlaks määrata.",
      "KAVAND — VAJALIK ON ÕIGUSLIK LÄBIVAATUS: see ei ole õigusnõu ega vastavuse garantii. Eesmärgid, õiguslikud alused, vastutavad töötlejad, saajad, säilitustähtajad ja õigused tuleb enne käivitamist määratleda ning asjaomaste jurisdiktsioonide jaoks läbi vaadata.",
      "Kavand — jõustumiskuupäev puudub.",
      [
        p(
          "1. Praeguses versioonis kasutatavad andmed",
          "Registreerumisel ja sisselogimisel saadetakse e-posti aadress ja parool otse Supabase Authi kasutamiseks seadistatud Supabase'i projekti. Kuvanimi saadetakse konto metaandmetena. Sünnikuupäeva ja tingimustega nõustumist kasutatakse ainult brauseris ning neid ei saadeta.",
          "Supabase'i SDK haldab seansi säilitamist brauseris. Muud vormiväärtused jäävad ajutiselt lehe mällu; brauser võib eraldi pakkuda väljade meeldejätmist automaattäitmise funktsiooni abil.",
          "Teema- ja keele-eelistusi hoitakse brauseri kohalikus salvestusruumis eraldi. Kui salvestusruum pole saadaval, säilivad need ainult praeguse külastuse ajal.",
        ),
        p(
          "2. Välisteenused ja logid",
          "Supabase töötleb autentimiseks vajalikke andmeid. E-kirjade kohaletoimetamine sõltub projekti seadistusest ja SMTP-teenuse pakkujast; seda seadistust pole kontrollitud. Analüüsiteenus ega TalkChati sõnumsidefunktsioon pole rakendatud. Majutusteenuse pakkuja ja võrguinfrastruktuur võivad samuti töödelda ühenduse andmeid või pidada logisid.",
        ),
        p(
          "3. Võimaliku tulevase teenuse andmed",
          "Tulevase teenuse tegelikult kogutavaid andmeid pole veel määratletud. Need võivad hõlmata kontoteavet ning teenuse toimimiseks vajalikke sisuandmeid või metaandmeid, kuid ammendavat loetelu, eesmärki ega õiguslikku alust pole veel otsustatud.",
          "Saajad, volitatud töötlejad, võimalikud edastused valitud piirkonnast välja, säilitustähtajad, varundusreeglid ja kustutamistoimingud tuleb veel kindlaks määrata. Praegu ei lubata automaatset kustutamist ega kindlat säilitustähtaega.",
        ),
        p(
          "4. Õigused ja taotlused",
          "Inimeste õigused, nende kasutamise viis, vastamise tähtajad ja pädev asutus sõltuvad muu hulgas inimeste asukohast, teenuse operaatorist ja kohaldatavast õigusest. Need üksikasjad, vastutav töötleja ja kehtiv kontaktivõimalus tuleb enne käivitamist lisada.",
          "Sellel demoversioonil puudub kanal juurdepääsu-, parandamis-, kustutamis- või kaebusetaotluste esitamiseks.",
        ),
        p(
          "5. Privaatsus ja krüptimine",
          "Selle lehe olemasolu ei tähenda, et vestlused oleksid otspunktkrüpteeritud. Selles versioonis pole sõnumisüsteemi ega E2EE-krüptimist. Tulevast krüptimist ja selle piiranguid tuleb kirjeldada pärast tehnilist kavandamist ja läbivaatamist.",
        ),
      ],
      "Seotud lehed",
      [
        { label: "Kasutustingimused", to: "/legal/terms" },
        { label: "Turvapõhimõtted", to: "/legal/security" },
        { label: "Kuidas sisust teatada", to: "/legal/report" },
      ],
      "Tagasi avalehele",
    ),
    community: document(
      "Kogukonna juhised",
      "Kavandatud põhimõtted vestluste jaoks juhuks, kui TalkChatist saab sõnumiteenus.",
      "KAVAND — TalkChat ei paku praegu sõnumivahetust ega modereerimist. Need juhised ei ole toimiva süsteemi kaudu jõustatud.",
      "Kavandatud põhimõtted — jõustumiskuupäev puudub.",
      [
        p(
          "Austus ja turvalisus",
          "Suhtu teistesse lugupidavalt. Ähvardustel, sihitud ahistamisel, vihkamisel, hirmutamisel ja vägivallale õhutamisel pole turvalises kogukonnas kohta.",
          "Ära jaga teise inimese eraandmeid ilma loata. Ära esine kellegi teisena ega püüa loata kontole või seadmele juurde pääseda.",
        ),
        p(
          "Sisu ja soovimatu pöördumine",
          "Ära saada ebaseaduslikku sisu, pettusi, pahavara, rämpsposti ega korduvaid soovimatuid pöördumisi. Austa autoriõigusi ja muid kohaldatavaid õigusi.",
          "Need põhimõtted on toimetuslik ettepanek. Enne käivitamist tuleb määratleda keelatud sisu, erandid, võimalikud meetmed ja vaide esitamise viisid.",
        ),
        p(
          "Alaealised ja teatamine",
          "Ära sihi alaealisi sobimatul viisil ega jaga pilte või teavet, mis võiks neid ohtu seada. Kaitsemeetmed, teadete käsitlemine ja eskaleerimine tuleb enne avalikku käivitamist kavandada asjakohaseid kaitsemeetmeid rakendades.",
          "Demoversioonil puudub teatamis- või modereerimisfunktsioon. Selle piirangu kohta loe eraldi lehelt.",
        ),
        p(
          "Jõustamine",
          "Selles versioonis pole modereerimismeeskonda, blokeerimismehhanismi ega sanktsioonide ja vaiete protsessi. Ära tugine nendele juhistele kui tegelikule sekkumisele.",
        ),
      ],
      "Seotud lehed",
      [
        { label: "Kuidas sisust teatada", to: "/legal/report" },
        { label: "Turvapõhimõtted", to: "/legal/security" },
        { label: "Privaatsuspoliitika", to: "/legal/privacy" },
      ],
      "Tagasi avalehele",
    ),
    report: document(
      "Sisust või kontost teatamine",
      "Alltoodud teave kirjeldab võimalikku tulevast protsessi; see ei ole teatamisvorm.",
      "TEADET EI SAADA: TalkChatil pole veel sõnumivahetust, teatamisnuppu, läbivaatamismeeskonda ega avaldatud teatamise kontaktiaadressi.",
      "Prototüübi teave — vaadata üle enne käivitamist.",
      [
        p(
          "Teavitamine pole veel saadaval",
          "See leht ei saada teadet ega kogu tõendeid. Ära kasuta probleemi teatamiseks registreerumis- ega sisselogimisvorme; need on mõeldud ainult konto autentimiseks.",
          "Teatamise e-posti aadressi ega kontaktandmeid pole esitatud, sest toimivat kanalit pole määratletud. See leht ei saa taotlust vastu võtta ega töödelda.",
        ),
        p(
          "Teave, mida tulevase teate jaoks ette valmistada",
          "Kui teenus käivitatakse spetsiaalse funktsiooniga, võib olla kasulik kirjeldada sisu või kontot, selle asukohta, teatamise põhjust ja ligikaudset aega. Jaga ainult rangelt vajalikku teavet ning väldi isikuandmete või tundliku sisu avalikku levitamist.",
        ),
        p(
          "Kiireloomulised olukorrad",
          "TalkChat ei jälgi seda lehte ega saa hädaolukordadele reageerida. Vahetu ohu korral võta ühendust hädaabiteenistuse või oma elukohajärgse pädeva asutusega.",
        ),
        b(
          "Enne käivitamist tuleb määratleda",
          "Toimiv ja ligipääsetav teatamiskanal.",
          "Kategooriad, eeldatavad tähtajad, käsitlemise reeglid ja säilitatav teave.",
          "Teatajate kaitse, teavitused ja vaideprotsess.",
          "Operaatori kohustused ja asjaomastes jurisdiktsioonides kehtivad reeglid.",
        ),
      ],
      "Seotud lehed",
      [
        { label: "Kogukonna juhised", to: "/legal/community" },
        { label: "Privaatsuspoliitika", to: "/legal/privacy" },
      ],
      "Tagasi avalehele",
    ),
    security: document(
      "Turvapõhimõtted",
      "Sellel lehel eristatakse demo piiranguid eesmärkidest, mis tuleks kavandada enne päris teenuse loomist.",
      "TURVAGARANTII PUUDUB: alltoodud põhimõtted on kavandamise eesmärgid. Need ei kirjelda juba rakendatud ega auditeeritud kaitsemeetmeid.",
      "Prototüübi teave — vaadata üle enne käivitamist.",
      [
        p(
          "Projekti praegune seis",
          "Supabase Auth pakub konto registreerimist, sisselogimist, seansside haldamist ja parooli taastamist. See kasutajaliides ei rakenda sõnumivahetust, otspunktkrüptimist, turvalisi varukoopiaid, automaatset kustutamist, seiret, serveripoolseid katsete piiranguid ega intsidentidele reageerimise protsessi.",
          "Kasutajaliidese marsruudikaitse ei ole autoriseerimispiir ega asenda serveripoolseid kontrolle või Supabase'i RLS-reegleid. Sõnumi- ega profiilitabeleid pole rakendatud.",
        ),
        b(
          "Kavandatud eesmärgid tulevase versiooni jaoks",
          "Minimeerida kogutavaid andmeid ja piirata juurdepääs vajalikuga.",
          "Kaitsta kontosid ja seansse, kontrollida õigusi serveris ning testida juurdepääsureegleid.",
          "Kasutada andmeedastusel krüptitud ühendusi ja hoida saladused brauserisse edastatavast koodist eemal.",
          "Hinnata põhjalikult läbivaadatud E2EE-protokolli enne otspunktkrüptimise väitmist.",
          "Määratleda varukoopiad, taastevõtmed, säilitamine ja taastamise testid enne nende väljakuulutamist.",
          "Kavandada uuendused, ülevaatused, minimeeritud logid ja haavatavustele reageerimine.",
        ),
        p(
          "Piirangud ja turvakontakt",
          "Need eesmärgid ei ole sertifikaat ega absoluutse kaitse garantii. Turbe eest vastutaja, avalikustamise kanal, reageerimise tähtajad ja avalikud kontaktandmed pole veel määratletud. Ära sisesta demo vormidesse isikuandmeid ega saladusi.",
        ),
      ],
      "Seotud lehed",
      [
        { label: "Privaatsuspoliitika", to: "/legal/privacy" },
        { label: "Kasutustingimused", to: "/legal/terms" },
        { label: "Kuidas sisust teatada", to: "/legal/report" },
      ],
      "Tagasi avalehele",
    ),
  },
  ca: {
    terms: document(
      "Condicions del servei",
      "Aquest és un esborrany de treball per a un possible servei futur de TalkChat. No és un acord legal llest per fer servir.",
      "ESBORRANY — CAL UNA REVISIÓ LEGAL: abans de qualsevol llançament públic, cal completar la identitat i les dades de contacte de l’operador, la legislació aplicable i els termes de responsabilitat, i fer revisar les condicions definitives per un professional qualificat.",
      "Esborrany — sense data d’entrada en vigor.",
      [
        p(
          "1. Estat actual del projecte",
          "TalkChat utilitza Supabase Auth per als comptes, l’inici de sessió i la recuperació de contrasenyes. No s’han implementat la missatgeria, l’emmagatzematge de converses ni la moderació.",
          "Aquest esborrany enumera temes que caldria abordar si s’iniciés el servei. No vol dir que avui hi hagi un servei de missatgeria, un canal d’assistència o un procés de moderació disponible.",
        ),
        p(
          "2. Accés previst i edat mínima",
          "La interfície demana la data de naixement i comprova localment que es tingui una edat mínima de 13 anys abans de registrar-se. Això no és una verificació d’identitat i el servidor no aplica cap regla d’edat.",
          "Cal revisar l’edat mínima, el mètode de verificació i les normes per a menors a cada país on es pugui oferir el servei, abans del llançament.",
        ),
        p(
          "3. Conducta esperada si el servei existeix",
          "Els usuaris d’un servei futur haurien de complir la legislació aplicable i les normes de la comunitat. Els abusos, els intents d’accés no autoritzat, la suplantació d’identitat i els continguts que vulnerin els drets d’altres persones s’haurien de tractar segons unes normes publicades i un procés d’apel·lació definit.",
          "No hi ha cap sanció, moderació ni procés d’apel·lació real en funcionament.",
        ),
        p(
          "4. Continguts i drets",
          "Els drets sobre els continguts, els permisos limitats necessaris per operar un servei futur i les normes sobre continguts il·legals o denunciats s’han d’especificar en una versió definitiva. Aquest esborrany no concedeix ni reclama cap llicència sobre els continguts dels usuaris.",
        ),
        p(
          "5. Disponibilitat, responsabilitat i finalització del servei",
          "Aquesta versió no es compromet a garantir la disponibilitat, la conservació dels missatges ni la continuïtat del servei. Les exempcions i limitacions de responsabilitat, i les normes de finalització, exportació i supressió, s’han de redactar i revisar d’acord amb la legislació aplicable abans del llançament.",
        ),
        p(
          "6. Operador, legislació aplicable i contacte",
          "No s’hi indiquen la identitat jurídica de l’operador, l’adreça, les dades de contacte, la legislació aplicable ni els tribunals competents. No s’han d’inventar i cal completar-les abans de publicar el document.",
        ),
      ],
      "Informació relacionada",
      [
        { label: "Política de privadesa", to: "/legal/privacy" },
        { label: "Normes de la comunitat", to: "/legal/community" },
        { label: "Principis de seguretat", to: "/legal/security" },
      ],
      "Torna a l’inici",
    ),
    privacy: document(
      "Política de privadesa",
      "Aquesta pàgina descriu el tractament actual de dades de TalkChat i la informació que encara cal definir abans d’un llançament públic.",
      "ESBORRANY — CAL UNA REVISIÓ LEGAL: això no és assessorament jurídic ni una garantia de compliment. Abans del llançament, cal especificar i revisar, per a les jurisdiccions pertinents, les finalitats, les bases jurídiques, els responsables, els destinataris, els períodes de conservació i els drets.",
      "Esborrany — sense data d’entrada en vigor.",
      [
        p(
          "1. Dades utilitzades per la versió actual",
          "Durant el registre i l’inici de sessió, l’adreça electrònica i la contrasenya s’envien directament al projecte Supabase configurat per utilitzar Supabase Auth. El nom visible s’envia com a metadada del compte. La data de naixement i l’acceptació de les condicions només s’utilitzen al navegador i no s’envien.",
          "L’SDK de Supabase gestiona la persistència de la sessió al navegador. La resta de valors dels formularis romanen temporalment a la memòria de la pàgina; el navegador pot oferir independentment desar els camps mitjançant la funció d’emplenament automàtic.",
          "Les preferències de tema i d’idioma es desen per separat a l’emmagatzematge local del navegador. Si aquest emmagatzematge no està disponible, només es conserven durant la visita actual.",
        ),
        p(
          "2. Serveis externs i registres",
          "Supabase tracta les dades necessàries per a l’autenticació. L’enviament de correus electrònics depèn de la configuració del projecte i del proveïdor SMTP; aquesta configuració no s’ha verificat. No s’ha implementat cap servei d’analítica ni cap funció de missatgeria de TalkChat. El proveïdor d’allotjament i la infraestructura de xarxa també poden tractar dades de connexió o mantenir registres.",
        ),
        p(
          "3. Dades possibles d’un servei futur",
          "Encara no s’han definit les dades que recollirà realment un servei futur. Podrien incloure informació del compte i continguts o metadades necessaris per fer funcionar el servei, però encara no s’ha decidit cap llista exhaustiva, finalitat ni base jurídica.",
          "Encara cal determinar els destinataris, els encarregats del tractament, les possibles transferències fora de la regió seleccionada, els períodes de conservació, les normes de còpia de seguretat i els procediments de supressió. Actualment no es promet cap supressió automàtica ni cap període de conservació concret.",
        ),
        p(
          "4. Drets i sol·licituds",
          "Els drets de les persones, la manera d’exercir-los, els terminis de resposta i l’autoritat competent depenen, entre altres factors, del lloc on es troben les persones, de l’operador del servei i de la legislació aplicable. Cal afegir aquests detalls, el responsable del tractament i un mitjà de contacte vàlid abans del llançament.",
          "Aquesta demostració no disposa de cap canal per a sol·licituds d’accés, rectificació, supressió o reclamacions.",
        ),
        p(
          "5. Privadesa i xifratge",
          "La presència d’aquesta pàgina no vol dir que les converses estiguin xifrades d’extrem a extrem. Aquesta versió no té cap sistema de missatgeria ni xifratge E2EE. Qualsevol xifratge futur i les seves limitacions s’hauran de descriure després del disseny tècnic i la revisió.",
        ),
      ],
      "Pàgines relacionades",
      [
        { label: "Condicions del servei", to: "/legal/terms" },
        { label: "Principis de seguretat", to: "/legal/security" },
        { label: "Com denunciar contingut", to: "/legal/report" },
      ],
      "Torna a l’inici",
    ),
    community: document(
      "Normes de la comunitat",
      "Principis proposats per a les converses si TalkChat esdevé un servei de missatgeria.",
      "ESBORRANY — Actualment TalkChat no ofereix missatgeria ni moderació. Cap sistema operatiu no aplica aquestes normes.",
      "Principis proposats — sense data d’entrada en vigor.",
      [
        p(
          "Respecte i seguretat",
          "Tracta els altres amb respecte. Les amenaces, l’assetjament dirigit, l’odi, la intimidació i l’encoratjament de la violència no tenen cabuda en una comunitat segura.",
          "No comparteixis informació privada d’una altra persona sense permís. No et facis passar per ningú ni intentis accedir a un compte o dispositiu sense autorització.",
        ),
        p(
          "Continguts i sol·licituds no desitjades",
          "No enviïs contingut il·legal, frau, programari maliciós, correu brossa ni sol·licituds no desitjades reiterades. Respecta els drets d’autor i els altres drets aplicables.",
          "Aquests principis són una proposta editorial. Abans del llançament, cal definir els continguts prohibits, les excepcions, les possibles mesures i les vies d’apel·lació.",
        ),
        p(
          "Menors i denúncies",
          "No et dirigeixis de manera inadequada als menors ni comparteixis imatges o informació que els pugui posar en risc. Les normes de protecció, la gestió de denúncies i l’escalada s’han de dissenyar amb les salvaguardes adequades abans de qualsevol llançament públic.",
          "La demostració no té cap funció de denúncia ni de moderació. Consulta la pàgina específica per veure aquesta limitació.",
        ),
        p(
          "Aplicació de les normes",
          "Aquesta versió no té cap equip de moderació, mecanisme de bloqueig ni procés de sanció i apel·lació. No confiïs en aquestes normes com si fossin una intervenció real.",
        ),
      ],
      "Pàgines relacionades",
      [
        { label: "Com denunciar contingut", to: "/legal/report" },
        { label: "Principis de seguretat", to: "/legal/security" },
        { label: "Política de privadesa", to: "/legal/privacy" },
      ],
      "Torna a l’inici",
    ),
    report: document(
      "Denunciar contingut o un compte",
      "La informació següent descriu un possible procés futur; no és un formulari de denúncia.",
      "NO S’ENVIA CAP DENÚNCIA: TalkChat encara no té missatgeria, un botó de denúncia, un equip de revisió ni una adreça de contacte per a denúncies publicada.",
      "Informació del prototip — cal revisar-la abans del llançament.",
      [
        p(
          "La denúncia encara no està disponible",
          "Aquesta pàgina no envia cap denúncia ni recull proves. No facis servir els formularis de registre o d’inici de sessió per denunciar un problema; només serveixen per autenticar el compte.",
          "No s’hi indica cap adreça electrònica ni dada de contacte per denunciar perquè no s’ha definit cap canal operatiu. Aquesta pàgina no pot rebre ni tramitar cap sol·licitud.",
        ),
        p(
          "Informació que cal preparar per a una denúncia futura",
          "Si el servei es llança amb una funció específica, pot ser útil descriure el contingut o el compte, on apareix, el motiu de la denúncia i una hora aproximada. Comparteix només la informació estrictament necessària i evita difondre públicament dades personals o contingut sensible.",
        ),
        p(
          "Situacions urgents",
          "TalkChat no supervisa aquesta pàgina i no pot respondre a emergències. Si hi ha un perill immediat, contacta amb els serveis d’emergència o les autoritats competents del teu lloc de residència.",
        ),
        b(
          "Què cal definir abans del llançament",
          "Un canal de denúncia operatiu i accessible.",
          "Categories, terminis orientatius, normes de tramitació i informació conservada.",
          "Protecció de les persones denunciants, notificacions i un procés d’apel·lació.",
          "Les responsabilitats de l’operador i les normes de les jurisdiccions pertinents.",
        ),
      ],
      "Pàgines relacionades",
      [
        { label: "Normes de la comunitat", to: "/legal/community" },
        { label: "Política de privadesa", to: "/legal/privacy" },
      ],
      "Torna a l’inici",
    ),
    security: document(
      "Principis de seguretat",
      "Aquesta pàgina diferencia les limitacions de la demostració dels objectius que caldria dissenyar abans de crear un servei real.",
      "NO HI HA GARANTIA DE SEGURETAT: els principis següents són objectius de disseny. No descriuen proteccions ja implementades o auditades.",
      "Informació del prototip — cal revisar-la abans del llançament.",
      [
        p(
          "Estat actual del projecte",
          "Supabase Auth proporciona el registre de comptes, l’inici de sessió, la gestió de sessions i la recuperació de contrasenyes. Aquest frontend no implementa missatgeria, xifratge d’extrem a extrem, còpies de seguretat segures, supressió automàtica, supervisió, límits d’intents al servidor ni un procés de resposta a incidents.",
          "La protecció de rutes del frontend no és una frontera d’autorització i no substitueix les comprovacions del servidor ni les polítiques RLS de Supabase. No hi ha taules de missatges o perfils implementades.",
        ),
        b(
          "Objectius proposats per a una versió futura",
          "Minimitzar les dades recollides i limitar l’accés a allò que sigui necessari.",
          "Protegir els comptes i les sessions, verificar els permisos al servidor i provar les normes d’accés.",
          "Utilitzar connexions xifrades durant la transmissió i mantenir els secrets fora del codi lliurat al navegador.",
          "Avaluar un protocol E2EE ben revisat abans de fer cap afirmació sobre el xifratge d’extrem a extrem.",
          "Definir les còpies de seguretat, les claus de recuperació, la conservació i les proves de restauració abans d’anunciar-les.",
          "Planificar actualitzacions, revisions, registres minimitzats i resposta a vulnerabilitats.",
        ),
        p(
          "Limitacions i contacte de seguretat",
          "Aquests objectius no són una certificació ni una garantia de protecció absoluta. Encara no s’han definit la persona responsable de seguretat, el canal de divulgació, els terminis de resposta ni les dades de contacte públiques. No incloguis dades personals ni secrets als formularis de la demostració.",
        ),
      ],
      "Pàgines relacionades",
      [
        { label: "Política de privadesa", to: "/legal/privacy" },
        { label: "Condicions del servei", to: "/legal/terms" },
        { label: "Com denunciar contingut", to: "/legal/report" },
      ],
      "Torna a l’inici",
    ),
  },
};
