import type { LegalDocument, LegalDocumentId } from "../legal";
import type { Locale } from "../../types/theme";

export const legalGroupA: Partial<
  Record<Locale, Record<LegalDocumentId, LegalDocument>>
> = {
  nl: {
    terms: {
      title: "Gebruiksvoorwaarden",
      summary:
        "Dit is een werkversie voor een mogelijke toekomstige TalkChat-dienst. Dit is geen gebruiksklare juridische overeenkomst.",
      draftNotice:
        "CONCEPT — JURIDISCHE BEOORDELING VEREIST: vóór een openbare lancering moeten de identiteit en contactgegevens van de exploitant, het toepasselijke recht, de aansprakelijkheidsvoorwaarden en de definitieve voorwaarden worden ingevuld en door een gekwalificeerde professional worden beoordeeld.",
      reviewedAt: "Concept — geen ingangsdatum.",
      sections: [
        {
          heading: "1. Huidige projectstatus",
          paragraphs: [
            "TalkChat gebruikt Supabase Auth voor accounts, aanmelden en wachtwoordherstel. Berichtenverkeer, opslag van gesprekken en moderatie zijn niet geïmplementeerd.",
            "Dit concept vermeldt onderwerpen die aan de orde moeten komen als een dienst wordt gelanceerd. Het betekent niet dat er momenteel een dienst, ondersteuningskanaal of moderatieproces beschikbaar is.",
          ],
        },
        {
          heading: "2. Beoogde toegang en minimumleeftijd",
          paragraphs: [
            "De interface vraagt om een geboortedatum en controleert lokaal vóór registratie of iemand minimaal 13 jaar oud is. Dit is geen identiteitscontrole en er wordt geen leeftijdsregel aan de serverzijde afgedwongen.",
            "De minimumleeftijd, de verificatiemethode en de regels voor minderjarigen moeten vóór de lancering worden beoordeeld voor elk land waar de dienst mogelijk wordt aangeboden.",
          ],
        },
        {
          heading: "3. Verwacht gedrag als er een dienst bestaat",
          paragraphs: [
            "Gebruikers van een toekomstige dienst moeten zich houden aan de toepasselijke wetgeving en de communityrichtlijnen. Misbruik, pogingen tot ongeoorloofde toegang, identiteitsfraude en inhoud die de rechten van anderen schendt, vereisen gepubliceerde regels en een vastgestelde beroepsprocedure.",
            "Er is geen daadwerkelijke sanctie-, moderatie- of beroepsprocedure actief.",
          ],
        },
        {
          heading: "4. Inhoud en rechten",
          paragraphs: [
            "Rechten op inhoud, eventuele beperkte toestemmingen die nodig zijn om een toekomstige dienst te exploiteren en regels voor onwettige of gemelde inhoud moeten in een definitieve versie worden vastgelegd. Dit concept verleent noch claimt een licentie op gebruikersinhoud.",
          ],
        },
        {
          heading:
            "5. Beschikbaarheid, aansprakelijkheid en beëindiging van de dienst",
          paragraphs: [
            "Deze versie bevat geen toezegging over beschikbaarheid, het bewaren van berichten of de continuïteit van de dienst. Disclaimers, aansprakelijkheidsbeperkingen, beëindigings-, export- en verwijderingsregels moeten vóór de lancering worden opgesteld en aan het toepasselijke recht worden getoetst.",
          ],
        },
        {
          heading: "6. Exploitant, toepasselijk recht en contact",
          paragraphs: [
            "De juridische identiteit, het adres en de contactgegevens van de exploitant, het toepasselijke recht en de bevoegde rechtbanken zijn niet vermeld. Deze gegevens mogen niet worden verzonnen en moeten vóór publicatie worden ingevuld.",
          ],
        },
      ],
      relatedTitle: "Gerelateerde informatie",
      related: [
        { label: "Privacybeleid", to: "/legal/privacy" },
        { label: "Communityrichtlijnen", to: "/legal/community" },
        { label: "Beveiligingsprincipes", to: "/legal/security" },
      ],
      backHome: "Terug naar home",
    },
    privacy: {
      title: "Privacybeleid",
      summary:
        "Deze pagina beschrijft de huidige gegevensverwerking van TalkChat en de informatie die vóór een openbare lancering nog moet worden vastgesteld.",
      draftNotice:
        "CONCEPT — JURIDISCHE BEOORDELING VEREIST: dit is geen juridisch advies of garantie van naleving. Doeleinden, rechtsgrondslagen, verwerkingsverantwoordelijken, ontvangers, bewaartermijnen en rechten moeten vóór de lancering voor de relevante rechtsgebieden worden vastgelegd en beoordeeld.",
      reviewedAt: "Concept — geen ingangsdatum.",
      sections: [
        {
          heading: "1. Gegevens die de huidige versie gebruikt",
          paragraphs: [
            "Tijdens registratie en aanmelding worden het e-mailadres en wachtwoord rechtstreeks naar het geconfigureerde Supabase-project gestuurd voor Supabase Auth. De weergavenaam wordt als accountmetadata verstuurd. De geboortedatum en de aanvaarding van de voorwaarden worden alleen in de browser gebruikt en niet verzonden.",
            "De Supabase SDK beheert het bewaren van de sessie in de browser. Andere formulierwaarden blijven tijdelijk in het paginageheugen; uw browser kan onafhankelijk daarvan aanbieden velden te onthouden via automatisch aanvullen.",
            "Thema- en taalvoorkeuren worden afzonderlijk opgeslagen in de lokale opslag van de browser. Als die opslag niet beschikbaar is, worden ze alleen voor het huidige bezoek bewaard.",
          ],
        },
        {
          heading: "2. Externe diensten en logbestanden",
          paragraphs: [
            "Supabase verwerkt gegevens die nodig zijn voor authenticatie. E-mailbezorging is afhankelijk van de projectconfiguratie en de SMTP-provider; deze configuratie is niet gecontroleerd. Er is geen analysedienst of TalkChat-berichtenfunctie geïmplementeerd. De hostingprovider en netwerkinfrastructuur kunnen ook verbindingsgegevens verwerken of logbestanden bijhouden.",
          ],
        },
        {
          heading: "3. Mogelijke gegevens in een toekomstige dienst",
          paragraphs: [
            "De gegevens die een toekomstige dienst daadwerkelijk verzamelt, zijn nog niet vastgesteld. Het kan gaan om accountgegevens en inhoud of metadata die nodig zijn om de dienst te laten werken, maar er is nog geen volledige lijst, doel of rechtsgrondslag bepaald.",
            "Ontvangers, verwerkers, mogelijke doorgiften buiten de gekozen regio, bewaartermijnen, back-upregels en verwijderprocedures moeten nog worden vastgesteld. Er wordt momenteel geen automatische verwijdering of specifieke bewaartermijn beloofd.",
          ],
        },
        {
          heading: "4. Rechten en verzoeken",
          paragraphs: [
            "De rechten van personen, de manier waarop zij die kunnen uitoefenen, reactietermijnen en de relevante autoriteit hangen mede af van de locatie van betrokkenen, de exploitant van de dienst en het toepasselijke recht. Deze gegevens, de verwerkingsverantwoordelijke en een geldig contactkanaal moeten vóór de lancering worden toegevoegd.",
            "Deze demo heeft geen kanaal voor verzoeken om inzage, correctie, verwijdering of het indienen van een klacht.",
          ],
        },
        {
          heading: "5. Privacy en versleuteling",
          paragraphs: [
            "Het bestaan van deze pagina betekent niet dat gesprekken end-to-end zijn versleuteld. Deze versie heeft geen berichtensysteem of E2EE-versleuteling. Toekomstige versleuteling en de beperkingen daarvan moeten na technisch ontwerp en beoordeling worden beschreven.",
          ],
        },
      ],
      relatedTitle: "Gerelateerde pagina’s",
      related: [
        { label: "Gebruiksvoorwaarden", to: "/legal/terms" },
        { label: "Beveiligingsprincipes", to: "/legal/security" },
        { label: "Inhoud melden", to: "/legal/report" },
      ],
      backHome: "Terug naar home",
    },
    community: {
      title: "Communityrichtlijnen",
      summary:
        "Voorgestelde principes voor gesprekken als TalkChat een berichtendienst wordt.",
      draftNotice:
        "CONCEPT — TalkChat biedt momenteel geen berichtenverkeer of moderatie. Deze richtlijnen worden niet door een operationeel systeem gehandhaafd.",
      reviewedAt: "Voorgestelde principes — geen ingangsdatum.",
      sections: [
        {
          heading: "Respect en veiligheid",
          paragraphs: [
            "Behandel anderen met respect. Bedreigingen, gerichte intimidatie, haat, pesterijen en het aanmoedigen van geweld horen niet thuis in een veilige gemeenschap.",
            "Deel geen privégegevens van een ander zonder toestemming. Doe u niet voor als iemand anders en probeer niet zonder toestemming toegang te krijgen tot een account of apparaat.",
          ],
        },
        {
          heading: "Inhoud en ongewenste benadering",
          paragraphs: [
            "Verstuur geen onwettige inhoud, fraude, malware, spam of herhaalde ongewenste verzoeken. Respecteer auteursrechten en andere toepasselijke rechten.",
            "Deze principes zijn een redactioneel voorstel. Definities van verboden inhoud, uitzonderingen, mogelijke maatregelen en beroepsmogelijkheden moeten vóór de lancering worden vastgelegd.",
          ],
        },
        {
          heading: "Minderjarigen en meldingen",
          paragraphs: [
            "Benader minderjarigen niet op ongepaste wijze en deel geen afbeeldingen of informatie die hen in gevaar kunnen brengen. Beschermingsregels, de afhandeling van meldingen en escalatie moeten vóór een openbare lancering met passende waarborgen worden ontworpen.",
            "De demo heeft geen meldings- of moderatiefunctie. Raadpleeg de speciale pagina voor meer informatie over deze beperking.",
          ],
        },
        {
          heading: "Handhaving",
          paragraphs: [
            "Deze versie heeft geen moderatieteam, blokkeerfunctie of sanctie- en beroepsprocedure. Vertrouw niet op deze richtlijnen alsof ze tot daadwerkelijk ingrijpen leiden.",
          ],
        },
      ],
      relatedTitle: "Gerelateerde pagina’s",
      related: [
        { label: "Inhoud melden", to: "/legal/report" },
        { label: "Beveiligingsprincipes", to: "/legal/security" },
        { label: "Privacybeleid", to: "/legal/privacy" },
      ],
      backHome: "Terug naar home",
    },
    report: {
      title: "Inhoud of een account melden",
      summary:
        "De onderstaande informatie beschrijft een mogelijk toekomstig proces; dit is geen meldingsformulier.",
      draftNotice:
        "ER WORDT GEEN MELDING VERZONDEN: TalkChat heeft nog geen berichtenfunctie, meldknop, beoordelingsteam of gepubliceerd meldingscontactadres.",
      reviewedAt: "Prototype-informatie — vóór de lancering herzien.",
      sections: [
        {
          heading: "Melden is nog niet beschikbaar",
          paragraphs: [
            "Deze pagina verstuurt geen melding en verzamelt geen bewijs. Gebruik de registratie- of aanmeldformulieren niet om een probleem te melden; die zijn uitsluitend bedoeld voor accountauthenticatie.",
            "Er zijn geen e-mailadressen of contactgegevens voor meldingen vermeld, omdat er geen operationeel kanaal is vastgesteld. Deze pagina kan geen verzoek ontvangen of verwerken.",
          ],
        },
        {
          heading:
            "Informatie om voor een toekomstige melding voor te bereiden",
          paragraphs: [
            "Als een dienst met een speciale functie wordt gelanceerd, kan het nuttig zijn de betreffende inhoud of het account, de vindplaats, de reden van de melding en een geschat tijdstip te beschrijven. Deel alleen strikt noodzakelijke informatie en verspreid geen persoonsgegevens of gevoelige inhoud in het openbaar.",
          ],
        },
        {
          heading: "Dringende situaties",
          paragraphs: [
            "TalkChat houdt deze pagina niet in de gaten en kan niet op noodgevallen reageren. Neem bij direct gevaar contact op met de hulpdiensten of bevoegde autoriteiten waar u woont.",
          ],
        },
        {
          heading: "Wat vóór de lancering moet worden vastgesteld",
          bullets: [
            "Een operationeel en toegankelijk meldingskanaal.",
            "Categorieën, indicatieve termijnen, afhandelingsregels en bewaarde informatie.",
            "Bescherming van melders, kennisgevingen en een beroepsprocedure.",
            "De verantwoordelijkheden van de exploitant en de regels in relevante rechtsgebieden.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Gerelateerde pagina’s",
      related: [
        { label: "Communityrichtlijnen", to: "/legal/community" },
        { label: "Privacybeleid", to: "/legal/privacy" },
      ],
      backHome: "Terug naar home",
    },
    security: {
      title: "Beveiligingsprincipes",
      summary:
        "Deze pagina onderscheidt de beperkingen van de demo van doelen die vóór een echte dienst moeten worden ontworpen.",
      draftNotice:
        "GEEN BEVEILIGINGSGARANTIE: de onderstaande principes zijn ontwerpdoelen. Ze beschrijven geen reeds geïmplementeerde of gecontroleerde beschermingsmaatregelen.",
      reviewedAt: "Prototype-informatie — vóór de lancering herzien.",
      sections: [
        {
          heading: "Huidige projectstatus",
          paragraphs: [
            "Supabase Auth biedt accountregistratie, aanmelden, sessiebeheer en wachtwoordherstel. Deze frontend implementeert geen berichtenverkeer, end-to-endversleuteling, beveiligde back-ups, automatische verwijdering, monitoring, serverzijdige limieten voor pogingen of incidentresponsproces.",
            "De routebeveiliging aan de frontend is geen autorisatiegrens en vervangt geen serverzijdige controles of Supabase RLS-beleidsregels. Er zijn geen tabellen voor berichten of profielen geïmplementeerd.",
          ],
        },
        {
          heading: "Voorgestelde doelen voor een toekomstige versie",
          bullets: [
            "Beperk de verzamelde gegevens en toegang tot wat noodzakelijk is.",
            "Bescherm accounts en sessies, controleer machtigingen aan de serverzijde en test toegangsregels.",
            "Gebruik versleutelde verbindingen tijdens transport en houd geheimen buiten code die aan de browser wordt geleverd.",
            "Beoordeel een grondig getoetst E2EE-protocol voordat end-to-endversleuteling wordt beloofd.",
            "Leg back-ups, herstelsleutels, bewaring en hersteltests vast voordat deze worden aangekondigd.",
            "Plan updates, controles, geminimaliseerde logbestanden en respons op kwetsbaarheden.",
          ],
          paragraphs: [],
        },
        {
          heading: "Beperkingen en contact voor beveiligingsproblemen",
          paragraphs: [
            "Deze doelen vormen geen certificering of garantie van absolute bescherming. De verantwoordelijke voor beveiliging, het meldingskanaal, reactietermijnen en openbare contactgegevens zijn nog niet vastgesteld. Vermeld geen persoonsgegevens of geheimen in demoformulieren.",
          ],
        },
      ],
      relatedTitle: "Gerelateerde pagina’s",
      related: [
        { label: "Privacybeleid", to: "/legal/privacy" },
        { label: "Gebruiksvoorwaarden", to: "/legal/terms" },
        { label: "Inhoud melden", to: "/legal/report" },
      ],
      backHome: "Terug naar home",
    },
  },
  de: {
    terms: {
      title: "Nutzungsbedingungen",
      summary:
        "Dies ist ein Arbeitsentwurf für einen möglichen zukünftigen TalkChat-Dienst. Er ist keine sofort verwendbare rechtliche Vereinbarung.",
      draftNotice:
        "ENTWURF — RECHTLICHE PRÜFUNG ERFORDERLICH: Vor einer öffentlichen Einführung müssen die Identität und Kontaktdaten des Betreibers, das anwendbare Recht, die Haftungsbedingungen und die endgültigen Bedingungen ergänzt und von einer qualifizierten Fachperson geprüft werden.",
      reviewedAt: "Entwurf — kein Inkrafttretensdatum.",
      sections: [
        {
          heading: "1. Aktueller Projektstatus",
          paragraphs: [
            "TalkChat verwendet Supabase Auth für Konten, die Anmeldung und die Passwortwiederherstellung. Nachrichten, die Speicherung von Unterhaltungen und die Moderation sind nicht implementiert.",
            "Dieser Entwurf führt Themen auf, die bei einer Einführung des Dienstes zu behandeln wären. Er bedeutet nicht, dass derzeit ein Dienst, ein Supportkanal oder ein Moderationsverfahren verfügbar ist.",
          ],
        },
        {
          heading: "2. Vorgesehener Zugang und Mindestalter",
          paragraphs: [
            "Die Benutzeroberfläche fragt nach dem Geburtsdatum und prüft vor der Registrierung lokal, ob ein Mindestalter von 13 Jahren erreicht ist. Dies ist keine Identitätsprüfung; serverseitig wird keine Altersregel durchgesetzt.",
            "Das Mindestalter, die Verifizierungsmethode und die Regeln für Minderjährige müssen vor der Einführung für jedes Land geprüft werden, in dem der Dienst möglicherweise angeboten wird.",
          ],
        },
        {
          heading: "3. Erwartetes Verhalten bei einem bestehenden Dienst",
          paragraphs: [
            "Nutzer eines zukünftigen Dienstes müssten die geltenden Gesetze und die Community-Richtlinien einhalten. Missbrauch, Versuche unbefugten Zugriffs, Identitätsbetrug und Inhalte, die Rechte anderer verletzen, müssten durch veröffentlichte Regeln und ein festgelegtes Beschwerdeverfahren geregelt werden.",
            "Es gibt kein tatsächliches Sanktionen-, Moderations- oder Beschwerdeverfahren.",
          ],
        },
        {
          heading: "4. Inhalte und Rechte",
          paragraphs: [
            "Rechte an Inhalten, gegebenenfalls erforderliche begrenzte Nutzungsrechte für den Betrieb eines zukünftigen Dienstes sowie Regeln für rechtswidrige oder gemeldete Inhalte müssen in einer endgültigen Fassung festgelegt werden. Dieser Entwurf gewährt oder beansprucht keine Lizenz an Nutzerinhalten.",
          ],
        },
        {
          heading: "5. Verfügbarkeit, Haftung und Beendigung des Dienstes",
          paragraphs: [
            "Diese Fassung enthält keine Zusage zur Verfügbarkeit, Aufbewahrung von Nachrichten oder Kontinuität des Dienstes. Haftungsausschlüsse und -beschränkungen sowie Regeln zu Kündigung, Export und Löschung müssen vor der Einführung formuliert und anhand des anwendbaren Rechts geprüft werden.",
          ],
        },
        {
          heading: "6. Betreiber, anwendbares Recht und Kontakt",
          paragraphs: [
            "Die rechtliche Identität, Anschrift und Kontaktdaten des Betreibers, das anwendbare Recht und die zuständigen Gerichte sind nicht angegeben. Sie dürfen nicht erfunden werden und müssen vor der Veröffentlichung ergänzt werden.",
          ],
        },
      ],
      relatedTitle: "Weiterführende Informationen",
      related: [
        { label: "Datenschutzerklärung", to: "/legal/privacy" },
        { label: "Community-Richtlinien", to: "/legal/community" },
        { label: "Sicherheitsgrundsätze", to: "/legal/security" },
      ],
      backHome: "Zurück zur Startseite",
    },
    privacy: {
      title: "Datenschutzerklärung",
      summary:
        "Diese Seite beschreibt die derzeitige Datenverarbeitung von TalkChat und die Informationen, die vor einer öffentlichen Einführung noch festgelegt werden müssen.",
      draftNotice:
        "ENTWURF — RECHTLICHE PRÜFUNG ERFORDERLICH: Dies ist weder Rechtsberatung noch eine Garantie der Rechtskonformität. Zwecke, Rechtsgrundlagen, Verantwortliche, Empfänger, Speicherfristen und Rechte müssen vor der Einführung für die einschlägigen Rechtsordnungen festgelegt und geprüft werden.",
      reviewedAt: "Entwurf — kein Inkrafttretensdatum.",
      sections: [
        {
          heading: "1. Von der aktuellen Version verwendete Daten",
          paragraphs: [
            "Bei der Registrierung und Anmeldung werden E-Mail-Adresse und Passwort direkt an das konfigurierte Supabase-Projekt für Supabase Auth übermittelt. Der Anzeigename wird als Kontometadatum gesendet. Geburtsdatum und Zustimmung zu den Bedingungen werden nur im Browser verwendet und nicht übermittelt.",
            "Das Supabase-SDK verwaltet die Speicherung der Sitzung im Browser. Andere Formularwerte bleiben vorübergehend im Seitenspeicher; Ihr Browser kann unabhängig davon anbieten, Felder über die automatische Ausfüllfunktion zu speichern.",
            "Design- und Spracheinstellungen werden getrennt im lokalen Speicher des Browsers abgelegt. Ist dieser Speicher nicht verfügbar, bleiben sie nur während des aktuellen Besuchs erhalten.",
          ],
        },
        {
          heading: "2. Externe Dienste und Protokolle",
          paragraphs: [
            "Supabase verarbeitet Daten, die für die Authentifizierung erforderlich sind. Die E-Mail-Zustellung hängt von der Projektkonfiguration und dem SMTP-Anbieter ab; diese Konfiguration wurde nicht überprüft. Es sind weder ein Analysedienst noch eine TalkChat-Nachrichtenfunktion implementiert. Auch der Hostinganbieter und die Netzwerkinfrastruktur können Verbindungsdaten verarbeiten oder Protokolle führen.",
          ],
        },
        {
          heading: "3. Mögliche Daten in einem zukünftigen Dienst",
          paragraphs: [
            "Welche Daten ein zukünftiger Dienst tatsächlich erfasst, ist noch nicht festgelegt. Dazu könnten Kontoinformationen und für den Betrieb erforderliche Inhalte oder Metadaten gehören; eine vollständige Liste, ein Zweck oder eine Rechtsgrundlage wurde jedoch noch nicht bestimmt.",
            "Empfänger, Auftragsverarbeiter, mögliche Übermittlungen außerhalb der gewählten Region, Speicherfristen, Sicherungsregeln und Löschverfahren sind noch festzulegen. Eine automatische Löschung oder bestimmte Speicherfrist wird derzeit nicht zugesagt.",
          ],
        },
        {
          heading: "4. Rechte und Anfragen",
          paragraphs: [
            "Die Rechte betroffener Personen, ihre Ausübung, Antwortfristen und die zuständige Behörde hängen unter anderem vom Aufenthaltsort der Personen, dem Dienstbetreiber und dem anwendbaren Recht ab. Diese Einzelheiten, der Verantwortliche und eine gültige Kontaktmöglichkeit müssen vor der Einführung ergänzt werden.",
            "Diese Demo bietet keinen Kanal für Anfragen auf Auskunft, Berichtigung, Löschung oder Beschwerde.",
          ],
        },
        {
          heading: "5. Datenschutz und Verschlüsselung",
          paragraphs: [
            "Diese Seite bedeutet nicht, dass Unterhaltungen Ende-zu-Ende-verschlüsselt sind. Diese Version verfügt weder über ein Nachrichtensystem noch über E2EE-Verschlüsselung. Künftige Verschlüsselung und ihre Einschränkungen müssen nach technischer Konzeption und Prüfung beschrieben werden.",
          ],
        },
      ],
      relatedTitle: "Zugehörige Seiten",
      related: [
        { label: "Nutzungsbedingungen", to: "/legal/terms" },
        { label: "Sicherheitsgrundsätze", to: "/legal/security" },
        { label: "Inhalte melden", to: "/legal/report" },
      ],
      backHome: "Zurück zur Startseite",
    },
    community: {
      title: "Community-Richtlinien",
      summary:
        "Vorgeschlagene Grundsätze für Gespräche, falls TalkChat zu einem Nachrichtendienst wird.",
      draftNotice:
        "ENTWURF — TalkChat bietet derzeit weder Nachrichten noch Moderation. Diese Richtlinien werden nicht durch ein betriebsbereites System durchgesetzt.",
      reviewedAt: "Vorgeschlagene Grundsätze — kein Inkrafttretensdatum.",
      sections: [
        {
          heading: "Respekt und Sicherheit",
          paragraphs: [
            "Behandeln Sie andere mit Respekt. Drohungen, gezielte Belästigung, Hass, Einschüchterung und die Ermutigung zu Gewalt haben in einer sicheren Gemeinschaft keinen Platz.",
            "Teilen Sie ohne Erlaubnis keine privaten Informationen anderer Personen. Geben Sie sich nicht als andere aus und versuchen Sie nicht, ohne Berechtigung auf ein Konto oder Gerät zuzugreifen.",
          ],
        },
        {
          heading: "Inhalte und unerwünschte Kontaktaufnahme",
          paragraphs: [
            "Versenden Sie keine rechtswidrigen Inhalte, Betrugsversuche, Schadsoftware, Spam oder wiederholte unerwünschte Werbung. Beachten Sie Urheberrechte und andere geltende Rechte.",
            "Diese Grundsätze sind ein redaktioneller Vorschlag. Definitionen verbotener Inhalte, Ausnahmen, mögliche Maßnahmen und Beschwerdewege müssen vor der Einführung festgelegt werden.",
          ],
        },
        {
          heading: "Minderjährige und Meldungen",
          paragraphs: [
            "Sprechen Sie Minderjährige nicht auf unangemessene Weise an und teilen Sie keine Bilder oder Informationen, die sie gefährden könnten. Schutzregeln, die Bearbeitung von Meldungen und Eskalationsverfahren müssen vor einem öffentlichen Start mit angemessenen Schutzmaßnahmen gestaltet werden.",
            "Die Demo verfügt über keine Melde- oder Moderationsfunktion. Auf der entsprechenden Seite finden Sie weitere Informationen zu dieser Einschränkung.",
          ],
        },
        {
          heading: "Durchsetzung",
          paragraphs: [
            "Diese Version verfügt über kein Moderationsteam, keine Sperrfunktion und kein Sanktions- oder Beschwerdeverfahren. Verlassen Sie sich nicht auf diese Richtlinien, als würden sie ein tatsächliches Eingreifen bewirken.",
          ],
        },
      ],
      relatedTitle: "Zugehörige Seiten",
      related: [
        { label: "Inhalte melden", to: "/legal/report" },
        { label: "Sicherheitsgrundsätze", to: "/legal/security" },
        { label: "Datenschutzerklärung", to: "/legal/privacy" },
      ],
      backHome: "Zurück zur Startseite",
    },
    report: {
      title: "Inhalte oder ein Konto melden",
      summary:
        "Die folgenden Informationen beschreiben ein mögliches zukünftiges Verfahren; sie sind kein Meldeformular.",
      draftNotice:
        "ES WIRD KEINE MELDUNG GESENDET: TalkChat verfügt noch nicht über Nachrichten, eine Meldeschaltfläche, ein Prüfungsteam oder eine veröffentlichte Kontaktadresse für Meldungen.",
      reviewedAt: "Prototyp-Information — vor der Einführung prüfen.",
      sections: [
        {
          heading: "Meldungen sind noch nicht möglich",
          paragraphs: [
            "Diese Seite sendet keine Meldung und sammelt keine Beweise. Verwenden Sie die Registrierungs- oder Anmeldeformulare nicht, um ein Problem zu melden; sie dienen ausschließlich der Kontoauthentifizierung.",
            "Es sind keine E-Mail-Adresse oder Kontaktdaten für Meldungen angegeben, da kein betriebsbereiter Kanal festgelegt wurde. Diese Seite kann keine Anfrage entgegennehmen oder bearbeiten.",
          ],
        },
        {
          heading: "Informationen für eine zukünftige Meldung",
          paragraphs: [
            "Falls ein Dienst mit einer speziellen Funktion startet, kann es hilfreich sein, den betreffenden Inhalt oder das Konto, den Fundort, den Meldegrund und einen ungefähren Zeitpunkt zu beschreiben. Teilen Sie nur unbedingt erforderliche Informationen und veröffentlichen Sie keine personenbezogenen Daten oder sensiblen Inhalte.",
          ],
        },
        {
          heading: "Dringende Situationen",
          paragraphs: [
            "TalkChat überwacht diese Seite nicht und kann in Notfällen nicht reagieren. Bei unmittelbarer Gefahr wenden Sie sich an den Rettungsdienst oder die zuständigen Behörden an Ihrem Wohnort.",
          ],
        },
        {
          heading: "Was vor der Einführung festgelegt werden muss",
          bullets: [
            "Ein betriebsbereiter und zugänglicher Meldekanal.",
            "Kategorien, Richtzeiten, Bearbeitungsregeln und gespeicherte Informationen.",
            "Schutz meldender Personen, Benachrichtigungen und ein Beschwerdeverfahren.",
            "Die Verantwortlichkeiten des Betreibers und die Regeln in den relevanten Rechtsordnungen.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Zugehörige Seiten",
      related: [
        { label: "Community-Richtlinien", to: "/legal/community" },
        { label: "Datenschutzerklärung", to: "/legal/privacy" },
      ],
      backHome: "Zurück zur Startseite",
    },
    security: {
      title: "Sicherheitsgrundsätze",
      summary:
        "Diese Seite unterscheidet die Einschränkungen der Demo von Zielen, die vor einem echten Dienst konzipiert werden müssten.",
      draftNotice:
        "KEINE SICHERHEITSGARANTIE: Die folgenden Grundsätze sind Entwurfsziele. Sie beschreiben keine bereits implementierten oder geprüften Schutzmaßnahmen.",
      reviewedAt: "Prototyp-Information — vor der Einführung prüfen.",
      sections: [
        {
          heading: "Aktueller Projektstatus",
          paragraphs: [
            "Supabase Auth ermöglicht die Kontoerstellung, Anmeldung, Sitzungsverwaltung und Passwortwiederherstellung. Dieses Frontend implementiert weder Nachrichten noch Ende-zu-Ende-Verschlüsselung, sichere Sicherungskopien, automatische Löschung, Überwachung, serverseitige Versuchsbeschränkungen oder ein Verfahren zur Reaktion auf Sicherheitsvorfälle.",
            "Die Routensperre im Frontend ist keine Autorisierungsgrenze und ersetzt weder serverseitige Prüfungen noch Supabase-RLS-Richtlinien. Tabellen für Nachrichten oder Profile sind nicht implementiert.",
          ],
        },
        {
          heading: "Vorgeschlagene Ziele für eine zukünftige Version",
          bullets: [
            "Erfasste Daten minimieren und den Zugriff auf das Notwendige beschränken.",
            "Konten und Sitzungen schützen, Berechtigungen serverseitig prüfen und Zugriffsregeln testen.",
            "Verschlüsselte Verbindungen bei der Übertragung verwenden und Geheimnisse aus an den Browser ausgeliefertem Code heraushalten.",
            "Ein bewährtes E2EE-Protokoll prüfen, bevor Ende-zu-Ende-Verschlüsselung zugesagt wird.",
            "Sicherungen, Wiederherstellungsschlüssel, Aufbewahrung und Wiederherstellungstests festlegen, bevor diese angekündigt werden.",
            "Aktualisierungen, Prüfungen, minimierte Protokolle und den Umgang mit Schwachstellen planen.",
          ],
          paragraphs: [],
        },
        {
          heading: "Einschränkungen und Kontakt bei Sicherheitsproblemen",
          paragraphs: [
            "Diese Ziele sind weder eine Zertifizierung noch eine Garantie absoluter Sicherheit. Die Sicherheitsverantwortlichen, der Offenlegungskanal, Reaktionsfristen und öffentliche Kontaktdaten sind noch nicht festgelegt. Geben Sie in Demoformularen keine personenbezogenen Daten oder Geheimnisse an.",
          ],
        },
      ],
      relatedTitle: "Zugehörige Seiten",
      related: [
        { label: "Datenschutzerklärung", to: "/legal/privacy" },
        { label: "Nutzungsbedingungen", to: "/legal/terms" },
        { label: "Inhalte melden", to: "/legal/report" },
      ],
      backHome: "Zurück zur Startseite",
    },
  },
  es: {
    terms: {
      title: "Condiciones del servicio",
      summary:
        "Este es un borrador de trabajo para un posible servicio futuro de TalkChat. No es un acuerdo legal listo para utilizar.",
      draftNotice:
        "BORRADOR — SE REQUIERE REVISIÓN JURÍDICA: antes de cualquier lanzamiento público, deben completarse la identidad y los datos de contacto del operador, la legislación aplicable, las condiciones de responsabilidad y las condiciones definitivas, y todo ello debe ser revisado por un profesional cualificado.",
      reviewedAt: "Borrador — sin fecha de entrada en vigor.",
      sections: [
        {
          heading: "1. Estado actual del proyecto",
          paragraphs: [
            "TalkChat utiliza Supabase Auth para las cuentas, el inicio de sesión y la recuperación de contraseñas. No están implementados la mensajería, el almacenamiento de conversaciones ni la moderación.",
            "Este borrador enumera los temas que habría que abordar si se lanzara un servicio. No significa que hoy haya disponible un servicio, un canal de asistencia o un proceso de moderación.",
          ],
        },
        {
          heading: "2. Acceso previsto y edad mínima",
          paragraphs: [
            "La interfaz solicita la fecha de nacimiento y comprueba localmente que se tenga al menos 13 años antes del registro. Esto no es una verificación de identidad y no se aplica ninguna regla de edad en el servidor.",
            "La edad mínima, el método de verificación y las reglas aplicables a menores deben revisarse antes del lanzamiento en cada país donde pudiera ofrecerse el servicio.",
          ],
        },
        {
          heading: "3. Conducta esperada si existe un servicio",
          paragraphs: [
            "Los usuarios de un futuro servicio tendrían que cumplir la legislación aplicable y las normas de la comunidad. El abuso, los intentos de acceso no autorizado, la suplantación de identidad y el contenido que infrinja los derechos de otras personas requerirían normas publicadas y un proceso de apelación definido.",
            "No existe ningún proceso real de sanción, moderación o apelación.",
          ],
        },
        {
          heading: "4. Contenido y derechos",
          paragraphs: [
            "Los derechos sobre el contenido, los permisos limitados que fueran necesarios para operar un futuro servicio y las reglas sobre contenido ilegal o denunciado deben especificarse en una versión definitiva. Este borrador no concede ni reivindica ninguna licencia sobre el contenido de los usuarios.",
          ],
        },
        {
          heading:
            "5. Disponibilidad, responsabilidad y finalización del servicio",
          paragraphs: [
            "Esta versión no promete disponibilidad, conservación de mensajes ni continuidad del servicio. Las exenciones y limitaciones de responsabilidad, así como las reglas de cancelación, exportación y eliminación, deben redactarse y revisarse conforme a la legislación aplicable antes del lanzamiento.",
          ],
        },
        {
          heading: "6. Operador, legislación aplicable y contacto",
          paragraphs: [
            "No se indican la identidad jurídica, la dirección ni los datos de contacto del operador, la legislación aplicable ni los tribunales competentes. No deben inventarse y deberán completarse antes de la publicación.",
          ],
        },
      ],
      relatedTitle: "Información relacionada",
      related: [
        { label: "Política de privacidad", to: "/legal/privacy" },
        { label: "Normas de la comunidad", to: "/legal/community" },
        { label: "Principios de seguridad", to: "/legal/security" },
      ],
      backHome: "Volver al inicio",
    },
    privacy: {
      title: "Política de privacidad",
      summary:
        "Esta página describe el tratamiento actual de datos de TalkChat y la información que aún debe definirse antes de un lanzamiento público.",
      draftNotice:
        "BORRADOR — SE REQUIERE REVISIÓN JURÍDICA: esto no es asesoramiento jurídico ni una garantía de cumplimiento. Los fines, las bases jurídicas, los responsables, los destinatarios, los periodos de conservación y los derechos deben especificarse y revisarse para las jurisdicciones pertinentes antes del lanzamiento.",
      reviewedAt: "Borrador — sin fecha de entrada en vigor.",
      sections: [
        {
          heading: "1. Datos utilizados por la versión actual",
          paragraphs: [
            "Durante el registro y el inicio de sesión, la dirección de correo electrónico y la contraseña se envían directamente al proyecto de Supabase configurado para Supabase Auth. El nombre visible se envía como metadato de la cuenta. La fecha de nacimiento y la aceptación de las condiciones se utilizan solo en el navegador y no se envían.",
            "El SDK de Supabase gestiona la persistencia de la sesión en el navegador. Los demás valores del formulario permanecen temporalmente en la memoria de la página; el navegador puede ofrecer por separado recordar campos mediante su función de autocompletado.",
            "Las preferencias de tema e idioma se guardan por separado en el almacenamiento local del navegador. Si este almacenamiento no está disponible, solo se conservan durante la visita actual.",
          ],
        },
        {
          heading: "2. Servicios externos y registros",
          paragraphs: [
            "Supabase trata los datos necesarios para la autenticación. El envío de correos electrónicos depende de la configuración del proyecto y del proveedor SMTP; dicha configuración no se ha verificado. No están implementados ningún servicio de analítica ni la mensajería de TalkChat. El proveedor de alojamiento y la infraestructura de red también pueden tratar datos de conexión o conservar registros.",
          ],
        },
        {
          heading: "3. Posibles datos de un servicio futuro",
          paragraphs: [
            "Aún no se han definido los datos que recogería realmente un servicio futuro. Podrían incluir información de la cuenta y contenido o metadatos necesarios para operar el servicio, pero todavía no se ha decidido ninguna lista exhaustiva, finalidad o base jurídica.",
            "Quedan por determinar los destinatarios, encargados del tratamiento, posibles transferencias fuera de la región elegida, periodos de conservación, reglas de copias de seguridad y procedimientos de eliminación. Actualmente no se promete la eliminación automática ni un periodo de conservación específico.",
          ],
        },
        {
          heading: "4. Derechos y solicitudes",
          paragraphs: [
            "Los derechos de las personas, cómo ejercerlos, los plazos de respuesta y la autoridad pertinente dependen, entre otros factores, del lugar donde se encuentren, del operador del servicio y de la legislación aplicable. Estos datos, el responsable del tratamiento y un medio de contacto válido deben añadirse antes del lanzamiento.",
            "Esta demostración no dispone de un canal para solicitudes de acceso, rectificación, supresión o reclamación.",
          ],
        },
        {
          heading: "5. Privacidad y cifrado",
          paragraphs: [
            "La existencia de esta página no significa que las conversaciones estén cifradas de extremo a extremo. Esta versión no tiene sistema de mensajería ni cifrado E2EE. Cualquier cifrado futuro y sus limitaciones deberán describirse tras su diseño técnico y revisión.",
          ],
        },
      ],
      relatedTitle: "Páginas relacionadas",
      related: [
        { label: "Condiciones del servicio", to: "/legal/terms" },
        { label: "Principios de seguridad", to: "/legal/security" },
        { label: "Cómo denunciar contenido", to: "/legal/report" },
      ],
      backHome: "Volver al inicio",
    },
    community: {
      title: "Normas de la comunidad",
      summary:
        "Principios propuestos para las conversaciones si TalkChat se convierte en un servicio de mensajería.",
      draftNotice:
        "BORRADOR — TalkChat no ofrece actualmente mensajería ni moderación. Estas normas no las aplica ningún sistema operativo.",
      reviewedAt: "Principios propuestos — sin fecha de entrada en vigor.",
      sections: [
        {
          heading: "Respeto y seguridad",
          paragraphs: [
            "Trata a los demás con respeto. Las amenazas, el acoso dirigido, el odio, la intimidación y el fomento de la violencia no tienen cabida en una comunidad segura.",
            "No compartas información privada de otra persona sin su permiso. No suplantes a otras personas ni intentes acceder a una cuenta o dispositivo sin autorización.",
          ],
        },
        {
          heading: "Contenido y contacto no solicitado",
          paragraphs: [
            "No envíes contenido ilegal, fraudes, programas maliciosos, spam ni solicitudes no deseadas reiteradas. Respeta los derechos de autor y otros derechos aplicables.",
            "Estos principios son una propuesta editorial. Las definiciones de contenido prohibido, las excepciones, las posibles medidas y las vías de apelación deben especificarse antes del lanzamiento.",
          ],
        },
        {
          heading: "Menores y denuncias",
          paragraphs: [
            "No te dirijas a menores de forma inapropiada ni compartas imágenes o información que pueda ponerlos en riesgo. Las normas de protección, la gestión de denuncias y la escalada deben diseñarse con salvaguardias adecuadas antes de cualquier lanzamiento público.",
            "La demostración no dispone de funciones de denuncia ni moderación. Consulta la página específica para conocer esta limitación.",
          ],
        },
        {
          heading: "Aplicación",
          paragraphs: [
            "Esta versión no tiene equipo de moderación, mecanismo de bloqueo ni proceso de sanción o apelación. No confíes en estas normas como si fueran una intervención real.",
          ],
        },
      ],
      relatedTitle: "Páginas relacionadas",
      related: [
        { label: "Cómo denunciar contenido", to: "/legal/report" },
        { label: "Principios de seguridad", to: "/legal/security" },
        { label: "Política de privacidad", to: "/legal/privacy" },
      ],
      backHome: "Volver al inicio",
    },
    report: {
      title: "Denunciar contenido o una cuenta",
      summary:
        "La información siguiente describe un posible proceso futuro; no es un formulario de denuncia.",
      draftNotice:
        "NO SE ENVÍA NINGUNA DENUNCIA: TalkChat aún no tiene mensajería, botón de denuncia, equipo de revisión ni una dirección pública para denuncias.",
      reviewedAt: "Información del prototipo — revisar antes del lanzamiento.",
      sections: [
        {
          heading: "La función de denuncia aún no está disponible",
          paragraphs: [
            "Esta página no envía denuncias ni recopila pruebas. No utilices los formularios de registro o inicio de sesión para informar de un problema; sirven únicamente para la autenticación de la cuenta.",
            "No se indica ningún correo electrónico ni dato de contacto para denuncias porque no se ha definido un canal operativo. Esta página no puede recibir ni tramitar solicitudes.",
          ],
        },
        {
          heading: "Información que conviene preparar para una futura denuncia",
          paragraphs: [
            "Si se lanza un servicio con una función específica, puede ser útil describir el contenido o la cuenta afectados, dónde aparecen, el motivo de la denuncia y una hora aproximada. Comparte únicamente la información estrictamente necesaria y evita difundir públicamente datos personales o contenido sensible.",
          ],
        },
        {
          heading: "Situaciones urgentes",
          paragraphs: [
            "TalkChat no supervisa esta página y no puede responder a emergencias. Si existe un peligro inmediato, contacta con los servicios de emergencia o las autoridades competentes de tu lugar de residencia.",
          ],
        },
        {
          heading: "Qué debe definirse antes del lanzamiento",
          bullets: [
            "Un canal de denuncia operativo y accesible.",
            "Categorías, plazos orientativos, reglas de gestión e información conservada.",
            "Protección de quienes denuncian, notificaciones y un proceso de apelación.",
            "Las responsabilidades del operador y las normas de las jurisdicciones pertinentes.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Páginas relacionadas",
      related: [
        { label: "Normas de la comunidad", to: "/legal/community" },
        { label: "Política de privacidad", to: "/legal/privacy" },
      ],
      backHome: "Volver al inicio",
    },
    security: {
      title: "Principios de seguridad",
      summary:
        "Esta página distingue las limitaciones de la demostración de los objetivos que habría que diseñar antes de ofrecer un servicio real.",
      draftNotice:
        "SIN GARANTÍA DE SEGURIDAD: los principios siguientes son objetivos de diseño. No describen protecciones ya implementadas ni auditadas.",
      reviewedAt: "Información del prototipo — revisar antes del lanzamiento.",
      sections: [
        {
          heading: "Estado actual del proyecto",
          paragraphs: [
            "Supabase Auth proporciona el registro de cuentas, el inicio de sesión, la gestión de sesiones y la recuperación de contraseñas. Este frontend no implementa mensajería, cifrado de extremo a extremo, copias de seguridad seguras, eliminación automática, supervisión, límites de intentos en el servidor ni un proceso de respuesta a incidentes.",
            "La protección de rutas del frontend no es una frontera de autorización y no sustituye las comprobaciones del servidor ni las políticas RLS de Supabase. No están implementadas tablas de mensajes ni de perfiles.",
          ],
        },
        {
          heading: "Objetivos propuestos para una versión futura",
          bullets: [
            "Minimizar los datos recopilados y limitar el acceso a lo necesario.",
            "Proteger cuentas y sesiones, verificar permisos en el servidor y probar las reglas de acceso.",
            "Utilizar conexiones cifradas durante el tránsito y mantener los secretos fuera del código distribuido al navegador.",
            "Evaluar un protocolo E2EE bien revisado antes de afirmar que existe cifrado de extremo a extremo.",
            "Definir copias de seguridad, claves de recuperación, conservación y pruebas de restauración antes de anunciarlas.",
            "Planificar actualizaciones, revisiones, registros minimizados y respuesta ante vulnerabilidades.",
          ],
          paragraphs: [],
        },
        {
          heading: "Limitaciones y contacto de seguridad",
          paragraphs: [
            "Estos objetivos no constituyen una certificación ni una garantía de protección absoluta. Aún no se han definido la persona responsable de seguridad, el canal de divulgación, los plazos de respuesta ni los datos de contacto públicos. No incluyas datos personales ni secretos en los formularios de demostración.",
          ],
        },
      ],
      relatedTitle: "Páginas relacionadas",
      related: [
        { label: "Política de privacidad", to: "/legal/privacy" },
        { label: "Condiciones del servicio", to: "/legal/terms" },
        { label: "Cómo denunciar contenido", to: "/legal/report" },
      ],
      backHome: "Volver al inicio",
    },
  },
  pt: {
    terms: {
      title: "Termos de Serviço",
      summary:
        "Este é um rascunho de trabalho para um possível serviço futuro da TalkChat. Não é um acordo jurídico pronto para utilização.",
      draftNotice:
        "RASCUNHO — REVISÃO JURÍDICA NECESSÁRIA: antes de qualquer lançamento público, a identidade e os dados de contacto do operador, a legislação aplicável, os termos de responsabilidade e as condições finais devem ser preenchidos e revistos por um profissional qualificado.",
      reviewedAt: "Rascunho — sem data de entrada em vigor.",
      sections: [
        {
          heading: "1. Estado atual do projeto",
          paragraphs: [
            "A TalkChat utiliza o Supabase Auth para contas, início de sessão e recuperação de palavras-passe. As mensagens, o armazenamento de conversas e a moderação não estão implementados.",
            "Este rascunho enumera assuntos a tratar caso um serviço seja lançado. Não significa que exista atualmente um serviço, canal de apoio ou processo de moderação disponível.",
          ],
        },
        {
          heading: "2. Acesso previsto e idade mínima",
          paragraphs: [
            "A interface solicita a data de nascimento e verifica localmente se a pessoa tem pelo menos 13 anos antes do registo. Isto não é uma verificação de identidade e não é aplicada qualquer regra de idade no servidor.",
            "A idade mínima, o método de verificação e as regras aplicáveis a menores devem ser revistos, antes do lançamento, para cada país onde o serviço possa ser oferecido.",
          ],
        },
        {
          heading: "3. Conduta esperada caso exista um serviço",
          paragraphs: [
            "Os utilizadores de um futuro serviço teriam de cumprir a legislação aplicável e as regras da comunidade. Abusos, tentativas de acesso não autorizado, usurpação de identidade e conteúdos que violem os direitos de terceiros exigiriam regras publicadas e um processo de recurso definido.",
            "Não está em funcionamento qualquer processo real de sanção, moderação ou recurso.",
          ],
        },
        {
          heading: "4. Conteúdos e direitos",
          paragraphs: [
            "Os direitos sobre os conteúdos, as eventuais permissões limitadas necessárias para operar um futuro serviço e as regras relativas a conteúdos ilícitos ou denunciados devem ser especificados numa versão final. Este rascunho não concede nem reivindica qualquer licença sobre conteúdos dos utilizadores.",
          ],
        },
        {
          heading: "5. Disponibilidade, responsabilidade e fim do serviço",
          paragraphs: [
            "Esta versão não assume qualquer compromisso quanto à disponibilidade, conservação de mensagens ou continuidade do serviço. As exclusões e limitações de responsabilidade, bem como as regras de rescisão, exportação e eliminação, devem ser redigidas e revistas à luz da legislação aplicável antes do lançamento.",
          ],
        },
        {
          heading: "6. Operador, legislação aplicável e contacto",
          paragraphs: [
            "A identidade jurídica, o endereço e os dados de contacto do operador, a legislação aplicável e os tribunais competentes não estão indicados. Não devem ser inventados e têm de ser preenchidos antes da publicação.",
          ],
        },
      ],
      relatedTitle: "Informações relacionadas",
      related: [
        { label: "Política de Privacidade", to: "/legal/privacy" },
        { label: "Regras da Comunidade", to: "/legal/community" },
        { label: "Princípios de Segurança", to: "/legal/security" },
      ],
      backHome: "Voltar ao início",
    },
    privacy: {
      title: "Política de Privacidade",
      summary:
        "Esta página descreve o tratamento atual de dados pela TalkChat e as informações que ainda têm de ser definidas antes de um lançamento público.",
      draftNotice:
        "RASCUNHO — REVISÃO JURÍDICA NECESSÁRIA: isto não é aconselhamento jurídico nem uma garantia de conformidade. As finalidades, bases legais, responsáveis pelo tratamento, destinatários, períodos de conservação e direitos devem ser especificados e revistos para as jurisdições relevantes antes do lançamento.",
      reviewedAt: "Rascunho — sem data de entrada em vigor.",
      sections: [
        {
          heading: "1. Dados utilizados pela versão atual",
          paragraphs: [
            "Durante o registo e o início de sessão, o endereço de e-mail e a palavra-passe são enviados diretamente para o projeto Supabase configurado para o Supabase Auth. O nome de apresentação é enviado como metadado da conta. A data de nascimento e a aceitação dos termos são utilizadas apenas no navegador e não são enviadas.",
            "O SDK do Supabase gere a persistência da sessão no navegador. Os restantes valores dos formulários permanecem temporariamente na memória da página; o navegador pode, de forma independente, oferecer-se para memorizar campos através da funcionalidade de preenchimento automático.",
            "As preferências de tema e idioma são guardadas separadamente no armazenamento local do navegador. Se esse armazenamento não estiver disponível, são mantidas apenas durante a visita atual.",
          ],
        },
        {
          heading: "2. Serviços externos e registos",
          paragraphs: [
            "O Supabase trata os dados necessários à autenticação. O envio de e-mails depende da configuração do projeto e do fornecedor SMTP; essa configuração não foi verificada. Não estão implementados qualquer serviço de análise nem a funcionalidade de mensagens da TalkChat. O fornecedor de alojamento e a infraestrutura de rede também podem tratar dados de ligação ou manter registos.",
          ],
        },
        {
          heading: "3. Possíveis dados de um serviço futuro",
          paragraphs: [
            "Os dados que um futuro serviço irá efetivamente recolher ainda não foram definidos. Poderão incluir informações da conta e conteúdos ou metadados necessários ao funcionamento do serviço, mas ainda não foi decidida qualquer lista exaustiva, finalidade ou base legal.",
            "Os destinatários, subcontratantes, eventuais transferências para fora da região escolhida, períodos de conservação, regras de cópia de segurança e procedimentos de eliminação ainda têm de ser determinados. Atualmente, não é prometida a eliminação automática nem um período de conservação específico.",
          ],
        },
        {
          heading: "4. Direitos e pedidos",
          paragraphs: [
            "Os direitos das pessoas, a forma de os exercer, os prazos de resposta e a autoridade relevante dependem, entre outros fatores, da localização das pessoas, do operador do serviço e da legislação aplicável. Estes elementos, o responsável pelo tratamento e um meio de contacto válido têm de ser acrescentados antes do lançamento.",
            "Esta demonstração não dispõe de um canal para pedidos de acesso, retificação, apagamento ou reclamação.",
          ],
        },
        {
          heading: "5. Privacidade e encriptação",
          paragraphs: [
            "A existência desta página não significa que as conversas sejam encriptadas de ponta a ponta. Esta versão não tem sistema de mensagens nem encriptação E2EE. Qualquer encriptação futura e as suas limitações devem ser descritas após conceção técnica e revisão.",
          ],
        },
      ],
      relatedTitle: "Páginas relacionadas",
      related: [
        { label: "Termos de Serviço", to: "/legal/terms" },
        { label: "Princípios de Segurança", to: "/legal/security" },
        { label: "Como denunciar conteúdo", to: "/legal/report" },
      ],
      backHome: "Voltar ao início",
    },
    community: {
      title: "Regras da Comunidade",
      summary:
        "Princípios propostos para conversas caso a TalkChat se torne um serviço de mensagens.",
      draftNotice:
        "RASCUNHO — A TalkChat não disponibiliza atualmente mensagens nem moderação. Estas regras não são aplicadas por um sistema operacional.",
      reviewedAt: "Princípios propostos — sem data de entrada em vigor.",
      sections: [
        {
          heading: "Respeito e segurança",
          paragraphs: [
            "Trate os outros com respeito. Ameaças, assédio direcionado, ódio, intimidação e incentivo à violência não têm lugar numa comunidade segura.",
            "Não partilhe informações privadas de outra pessoa sem autorização. Não se faça passar por outras pessoas nem tente aceder a uma conta ou dispositivo sem autorização.",
          ],
        },
        {
          heading: "Conteúdo e solicitações",
          paragraphs: [
            "Não envie conteúdo ilegal, fraude, software malicioso, spam ou solicitações indesejadas repetidas. Respeite os direitos de autor e outros direitos aplicáveis.",
            "Estes princípios são uma proposta editorial. As definições de conteúdo proibido, exceções, medidas possíveis e vias de recurso têm de ser especificadas antes do lançamento.",
          ],
        },
        {
          heading: "Menores e denúncias",
          paragraphs: [
            "Não aborde menores de forma inadequada nem partilhe imagens ou informações que os possam pôr em risco. As regras de proteção, o tratamento de denúncias e os procedimentos de escalonamento devem ser concebidos com salvaguardas adequadas antes de qualquer lançamento público.",
            "A demonstração não dispõe de funcionalidades de denúncia ou moderação. Consulte a página dedicada para conhecer esta limitação.",
          ],
        },
        {
          heading: "Aplicação",
          paragraphs: [
            "Esta versão não tem equipa de moderação, mecanismo de bloqueio nem processo de sanção ou recurso. Não confie nestas regras como se correspondessem a uma intervenção real.",
          ],
        },
      ],
      relatedTitle: "Páginas relacionadas",
      related: [
        { label: "Como denunciar conteúdo", to: "/legal/report" },
        { label: "Princípios de Segurança", to: "/legal/security" },
        { label: "Política de Privacidade", to: "/legal/privacy" },
      ],
      backHome: "Voltar ao início",
    },
    report: {
      title: "Denunciar conteúdo ou uma conta",
      summary:
        "As informações abaixo descrevem um possível processo futuro; não são um formulário de denúncia.",
      draftNotice:
        "NÃO É ENVIADA QUALQUER DENÚNCIA: a TalkChat ainda não tem mensagens, botão de denúncia, equipa de análise nem endereço público de contacto para denúncias.",
      reviewedAt: "Informação do protótipo — rever antes do lançamento.",
      sections: [
        {
          heading: "A funcionalidade de denúncia ainda não está disponível",
          paragraphs: [
            "Esta página não envia denúncias nem recolhe provas. Não utilize os formulários de registo ou início de sessão para denunciar um problema; destinam-se apenas à autenticação da conta.",
            "Não é indicado qualquer endereço de e-mail ou dado de contacto para denúncias, porque não foi definido um canal operacional. Esta página não pode receber nem processar um pedido.",
          ],
        },
        {
          heading: "Informações a preparar para uma futura denúncia",
          paragraphs: [
            "Se for lançado um serviço com uma funcionalidade dedicada, poderá ser útil descrever o conteúdo ou a conta em causa, onde aparece, o motivo da denúncia e uma hora aproximada. Partilhe apenas as informações estritamente necessárias e evite divulgar publicamente dados pessoais ou conteúdos sensíveis.",
          ],
        },
        {
          heading: "Situações urgentes",
          paragraphs: [
            "A TalkChat não monitoriza esta página e não pode responder a emergências. Em caso de perigo imediato, contacte os serviços de emergência ou as autoridades competentes do local onde vive.",
          ],
        },
        {
          heading: "O que tem de ser definido antes do lançamento",
          bullets: [
            "Um canal de denúncia operacional e acessível.",
            "Categorias, prazos indicativos, regras de tratamento e informações conservadas.",
            "Proteção de quem denuncia, notificações e um processo de recurso.",
            "As responsabilidades do operador e as regras das jurisdições relevantes.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Páginas relacionadas",
      related: [
        { label: "Regras da Comunidade", to: "/legal/community" },
        { label: "Política de Privacidade", to: "/legal/privacy" },
      ],
      backHome: "Voltar ao início",
    },
    security: {
      title: "Princípios de Segurança",
      summary:
        "Esta página distingue as limitações da demonstração dos objetivos que teriam de ser concebidos antes de um serviço real.",
      draftNotice:
        "SEM GARANTIA DE SEGURANÇA: os princípios abaixo são objetivos de conceção. Não descrevem proteções já implementadas ou auditadas.",
      reviewedAt: "Informação do protótipo — rever antes do lançamento.",
      sections: [
        {
          heading: "Estado atual do projeto",
          paragraphs: [
            "O Supabase Auth permite o registo de contas, o início de sessão, a gestão de sessões e a recuperação de palavras-passe. Este frontend não implementa mensagens, encriptação de ponta a ponta, cópias de segurança seguras, eliminação automática, monitorização, limites de tentativas no servidor nem um processo de resposta a incidentes.",
            "A proteção de rotas no frontend não é uma fronteira de autorização e não substitui as verificações no servidor nem as políticas RLS do Supabase. Não estão implementadas tabelas de mensagens ou perfis.",
          ],
        },
        {
          heading: "Objetivos propostos para uma versão futura",
          bullets: [
            "Minimizar os dados recolhidos e limitar o acesso ao que for necessário.",
            "Proteger contas e sessões, verificar permissões no servidor e testar as regras de acesso.",
            "Utilizar ligações encriptadas em trânsito e manter segredos fora do código disponibilizado ao navegador.",
            "Avaliar um protocolo E2EE bem revisto antes de afirmar que existe encriptação de ponta a ponta.",
            "Definir cópias de segurança, chaves de recuperação, conservação e testes de restauro antes de os anunciar.",
            "Planear atualizações, revisões, registos minimizados e resposta a vulnerabilidades.",
          ],
          paragraphs: [],
        },
        {
          heading: "Limitações e contacto de segurança",
          paragraphs: [
            "Estes objetivos não constituem uma certificação nem uma garantia de proteção absoluta. O responsável pela segurança, o canal de divulgação, os prazos de resposta e os dados de contacto públicos ainda não foram definidos. Não inclua dados pessoais nem segredos nos formulários de demonstração.",
          ],
        },
      ],
      relatedTitle: "Páginas relacionadas",
      related: [
        { label: "Política de Privacidade", to: "/legal/privacy" },
        { label: "Termos de Serviço", to: "/legal/terms" },
        { label: "Como denunciar conteúdo", to: "/legal/report" },
      ],
      backHome: "Voltar ao início",
    },
  },
  it: {
    terms: {
      title: "Termini di servizio",
      summary:
        "Questa è una bozza di lavoro per un possibile futuro servizio TalkChat. Non è un accordo legale pronto all’uso.",
      draftNotice:
        "BOZZA — È NECESSARIA UNA REVISIONE LEGALE: prima di qualsiasi lancio pubblico, l’identità e i recapiti del gestore, la legge applicabile, i termini di responsabilità e le condizioni definitive devono essere completati e verificati da un professionista qualificato.",
      reviewedAt: "Bozza — nessuna data di entrata in vigore.",
      sections: [
        {
          heading: "1. Stato attuale del progetto",
          paragraphs: [
            "TalkChat utilizza Supabase Auth per gli account, l’accesso e il recupero della password. La messaggistica, l’archiviazione delle conversazioni e la moderazione non sono implementate.",
            "Questa bozza elenca gli argomenti da affrontare qualora il servizio venga lanciato. Non significa che oggi siano disponibili un servizio, un canale di assistenza o un processo di moderazione.",
          ],
        },
        {
          heading: "2. Accesso previsto ed età minima",
          paragraphs: [
            "L’interfaccia richiede la data di nascita e verifica localmente che l’età minima sia di 13 anni prima della registrazione. Non si tratta di una verifica dell’identità e non viene applicata alcuna regola sull’età lato server.",
            "L’età minima, il metodo di verifica e le regole per i minori devono essere verificati prima del lancio per ogni Paese in cui il servizio potrebbe essere offerto.",
          ],
        },
        {
          heading: "3. Comportamento previsto se il servizio esiste",
          paragraphs: [
            "Gli utenti di un futuro servizio dovrebbero rispettare le leggi applicabili e le regole della community. Abusi, tentativi di accesso non autorizzato, impersonificazione e contenuti che violano i diritti altrui richiederebbero regole pubblicate e una procedura di ricorso definita.",
            "Non è operativo alcun sistema reale di sanzioni, moderazione o ricorso.",
          ],
        },
        {
          heading: "4. Contenuti e diritti",
          paragraphs: [
            "I diritti sui contenuti, le eventuali autorizzazioni limitate necessarie per gestire un futuro servizio e le regole sui contenuti illegali o segnalati devono essere specificati in una versione definitiva. Questa bozza non concede né rivendica alcuna licenza sui contenuti degli utenti.",
          ],
        },
        {
          heading: "5. Disponibilità, responsabilità e cessazione del servizio",
          paragraphs: [
            "Questa versione non offre garanzie di disponibilità, conservazione dei messaggi o continuità del servizio. Le esclusioni e limitazioni di responsabilità, nonché le regole di cessazione, esportazione ed eliminazione, devono essere redatte e verificate alla luce della legge applicabile prima del lancio.",
          ],
        },
        {
          heading: "6. Gestore, legge applicabile e contatti",
          paragraphs: [
            "L’identità legale, l’indirizzo e i recapiti del gestore, la legge applicabile e i tribunali competenti non sono indicati. Non devono essere inventati e dovranno essere completati prima della pubblicazione.",
          ],
        },
      ],
      relatedTitle: "Informazioni correlate",
      related: [
        { label: "Informativa sulla privacy", to: "/legal/privacy" },
        { label: "Regole della community", to: "/legal/community" },
        { label: "Principi di sicurezza", to: "/legal/security" },
      ],
      backHome: "Torna alla home",
    },
    privacy: {
      title: "Informativa sulla privacy",
      summary:
        "Questa pagina descrive il trattamento attuale dei dati da parte di TalkChat e le informazioni ancora da definire prima di un lancio pubblico.",
      draftNotice:
        "BOZZA — È NECESSARIA UNA REVISIONE LEGALE: questo testo non costituisce consulenza legale né una garanzia di conformità. Finalità, basi giuridiche, titolari, destinatari, periodi di conservazione e diritti devono essere specificati e verificati per le giurisdizioni pertinenti prima del lancio.",
      reviewedAt: "Bozza — nessuna data di entrata in vigore.",
      sections: [
        {
          heading: "1. Dati utilizzati dalla versione attuale",
          paragraphs: [
            "Durante la registrazione e l’accesso, l’indirizzo e-mail e la password vengono inviati direttamente al progetto Supabase configurato per Supabase Auth. Il nome visualizzato viene inviato come metadato dell’account. La data di nascita e l’accettazione dei termini vengono utilizzate solo nel browser e non vengono inviate.",
            "L’SDK di Supabase gestisce la persistenza della sessione nel browser. Gli altri valori del modulo rimangono temporaneamente nella memoria della pagina; il browser può autonomamente offrire di ricordare i campi tramite la funzione di compilazione automatica.",
            "Le preferenze di tema e lingua vengono memorizzate separatamente nell’archivio locale del browser. Se tale archivio non è disponibile, vengono conservate solo per la visita corrente.",
          ],
        },
        {
          heading: "2. Servizi esterni e registri",
          paragraphs: [
            "Supabase tratta i dati necessari all’autenticazione. L’invio delle e-mail dipende dalla configurazione del progetto e dal provider SMTP; tale configurazione non è stata verificata. Non sono implementati servizi di analisi né la messaggistica TalkChat. Anche il provider di hosting e l’infrastruttura di rete possono trattare dati di connessione o conservare registri.",
          ],
        },
        {
          heading: "3. Possibili dati di un servizio futuro",
          paragraphs: [
            "I dati effettivamente raccolti da un futuro servizio non sono ancora stati definiti. Potrebbero includere informazioni dell’account e contenuti o metadati necessari al funzionamento del servizio, ma non è stata ancora stabilita una lista esaustiva, una finalità o una base giuridica.",
            "Restano da determinare destinatari, responsabili del trattamento, eventuali trasferimenti al di fuori della regione scelta, periodi di conservazione, regole di backup e procedure di eliminazione. Al momento non viene promessa l’eliminazione automatica né uno specifico periodo di conservazione.",
          ],
        },
        {
          heading: "4. Diritti e richieste",
          paragraphs: [
            "I diritti delle persone, le modalità per esercitarli, i tempi di risposta e l’autorità competente dipendono anche dal luogo in cui si trovano le persone, dal gestore del servizio e dalla legge applicabile. Questi dettagli, il titolare del trattamento e un mezzo di contatto valido devono essere aggiunti prima del lancio.",
            "Questa demo non dispone di un canale per richieste di accesso, rettifica, cancellazione o reclamo.",
          ],
        },
        {
          heading: "5. Privacy e crittografia",
          paragraphs: [
            "La presenza di questa pagina non significa che le conversazioni siano crittografate end-to-end. Questa versione non dispone di un sistema di messaggistica né di crittografia E2EE. Qualsiasi crittografia futura e i relativi limiti dovranno essere descritti dopo la progettazione tecnica e la revisione.",
          ],
        },
      ],
      relatedTitle: "Pagine correlate",
      related: [
        { label: "Termini di servizio", to: "/legal/terms" },
        { label: "Principi di sicurezza", to: "/legal/security" },
        { label: "Come segnalare contenuti", to: "/legal/report" },
      ],
      backHome: "Torna alla home",
    },
    community: {
      title: "Regole della community",
      summary:
        "Principi proposti per le conversazioni nel caso in cui TalkChat diventi un servizio di messaggistica.",
      draftNotice:
        "BOZZA — TalkChat al momento non offre messaggistica né moderazione. Queste regole non sono applicate da un sistema operativo.",
      reviewedAt: "Principi proposti — nessuna data di entrata in vigore.",
      sections: [
        {
          heading: "Rispetto e sicurezza",
          paragraphs: [
            "Tratta gli altri con rispetto. Minacce, molestie mirate, odio, intimidazioni e incitamento alla violenza non hanno posto in una community sicura.",
            "Non condividere le informazioni private di un’altra persona senza il suo permesso. Non impersonare altre persone e non tentare di accedere a un account o dispositivo senza autorizzazione.",
          ],
        },
        {
          heading: "Contenuti e sollecitazioni",
          paragraphs: [
            "Non inviare contenuti illegali, frodi, malware, spam o sollecitazioni indesiderate ripetute. Rispetta il diritto d’autore e gli altri diritti applicabili.",
            "Questi principi sono una proposta editoriale. Le definizioni di contenuti vietati, le eccezioni, le possibili misure e le procedure di ricorso devono essere specificate prima del lancio.",
          ],
        },
        {
          heading: "Minori e segnalazioni",
          paragraphs: [
            "Non prendere di mira i minori in modo inappropriato e non condividere immagini o informazioni che potrebbero metterli a rischio. Le regole di tutela, la gestione delle segnalazioni e le procedure di escalation devono essere progettate con adeguate garanzie prima di qualsiasi lancio pubblico.",
            "La demo non dispone di funzioni di segnalazione o moderazione. Consulta la pagina dedicata per conoscere questa limitazione.",
          ],
        },
        {
          heading: "Applicazione",
          paragraphs: [
            "Questa versione non dispone di un team di moderazione, di un meccanismo di blocco né di una procedura di sanzione e ricorso. Non fare affidamento su queste regole come se comportassero un intervento effettivo.",
          ],
        },
      ],
      relatedTitle: "Pagine correlate",
      related: [
        { label: "Come segnalare contenuti", to: "/legal/report" },
        { label: "Principi di sicurezza", to: "/legal/security" },
        { label: "Informativa sulla privacy", to: "/legal/privacy" },
      ],
      backHome: "Torna alla home",
    },
    report: {
      title: "Segnalare contenuti o un account",
      summary:
        "Le informazioni seguenti descrivono una possibile procedura futura; non costituiscono un modulo di segnalazione.",
      draftNotice:
        "NON VIENE INVIATA ALCUNA SEGNALAZIONE: TalkChat non dispone ancora di messaggistica, un pulsante di segnalazione, un team di revisione o un indirizzo pubblico per le segnalazioni.",
      reviewedAt: "Informazioni del prototipo — da rivedere prima del lancio.",
      sections: [
        {
          heading: "La funzione di segnalazione non è ancora disponibile",
          paragraphs: [
            "Questa pagina non invia segnalazioni né raccoglie prove. Non utilizzare i moduli di registrazione o accesso per segnalare un problema: servono esclusivamente per l’autenticazione dell’account.",
            "Non sono indicati indirizzi e-mail o recapiti per le segnalazioni perché non è stato definito alcun canale operativo. Questa pagina non può ricevere né elaborare richieste.",
          ],
        },
        {
          heading: "Informazioni da preparare per una futura segnalazione",
          paragraphs: [
            "Se verrà lanciato un servizio con una funzione dedicata, potrebbe essere utile descrivere il contenuto o l’account interessato, dove compare, il motivo della segnalazione e un orario approssimativo. Condividi solo le informazioni strettamente necessarie ed evita di diffondere pubblicamente dati personali o contenuti sensibili.",
          ],
        },
        {
          heading: "Situazioni urgenti",
          paragraphs: [
            "TalkChat non monitora questa pagina e non può rispondere alle emergenze. In caso di pericolo immediato, contatta i servizi di emergenza o le autorità competenti del luogo in cui vivi.",
          ],
        },
        {
          heading: "Cosa deve essere definito prima del lancio",
          bullets: [
            "Un canale di segnalazione operativo e accessibile.",
            "Categorie, tempi indicativi, regole di gestione e informazioni conservate.",
            "Protezione per chi effettua segnalazioni, notifiche e una procedura di ricorso.",
            "Le responsabilità del gestore e le regole delle giurisdizioni pertinenti.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Pagine correlate",
      related: [
        { label: "Regole della community", to: "/legal/community" },
        { label: "Informativa sulla privacy", to: "/legal/privacy" },
      ],
      backHome: "Torna alla home",
    },
    security: {
      title: "Principi di sicurezza",
      summary:
        "Questa pagina distingue i limiti della demo dagli obiettivi che dovrebbero essere progettati prima di un servizio reale.",
      draftNotice:
        "NESSUNA GARANZIA DI SICUREZZA: i principi seguenti sono obiettivi di progettazione. Non descrivono protezioni già implementate o verificate.",
      reviewedAt: "Informazioni del prototipo — da rivedere prima del lancio.",
      sections: [
        {
          heading: "Stato attuale del progetto",
          paragraphs: [
            "Supabase Auth fornisce la registrazione degli account, l’accesso, la gestione delle sessioni e il recupero della password. Questo frontend non implementa messaggistica, crittografia end-to-end, backup sicuri, eliminazione automatica, monitoraggio, limiti ai tentativi lato server o un processo di risposta agli incidenti.",
            "La protezione delle route nel frontend non è un confine di autorizzazione e non sostituisce i controlli lato server né le policy RLS di Supabase. Non sono implementate tabelle per messaggi o profili.",
          ],
        },
        {
          heading: "Obiettivi proposti per una versione futura",
          bullets: [
            "Ridurre al minimo i dati raccolti e limitare l’accesso a quanto necessario.",
            "Proteggere account e sessioni, verificare le autorizzazioni lato server e testare le regole di accesso.",
            "Utilizzare connessioni crittografate in transito e tenere i segreti fuori dal codice distribuito al browser.",
            "Valutare un protocollo E2EE ben collaudato prima di dichiarare la crittografia end-to-end.",
            "Definire backup, chiavi di recupero, conservazione e test di ripristino prima di annunciarli.",
            "Pianificare aggiornamenti, verifiche, registri minimizzati e risposta alle vulnerabilità.",
          ],
          paragraphs: [],
        },
        {
          heading: "Limiti e contatto per la sicurezza",
          paragraphs: [
            "Questi obiettivi non costituiscono una certificazione né una garanzia di protezione assoluta. Il responsabile della sicurezza, il canale di divulgazione, i tempi di risposta e i recapiti pubblici non sono ancora stati definiti. Non inserire dati personali o segreti nei moduli demo.",
          ],
        },
      ],
      relatedTitle: "Pagine correlate",
      related: [
        { label: "Informativa sulla privacy", to: "/legal/privacy" },
        { label: "Termini di servizio", to: "/legal/terms" },
        { label: "Come segnalare contenuti", to: "/legal/report" },
      ],
      backHome: "Torna alla home",
    },
  },
  pl: {
    terms: {
      title: "Warunki korzystania z usługi",
      summary:
        "To roboczy projekt warunków dla możliwej przyszłej usługi TalkChat. Nie jest to gotowa do użycia umowa prawna.",
      draftNotice:
        "PROJEKT — WYMAGANA WERYFIKACJA PRAWNA: przed publicznym uruchomieniem należy uzupełnić tożsamość i dane kontaktowe operatora, właściwe prawo, warunki odpowiedzialności oraz ostateczne postanowienia, a następnie zlecić ich weryfikację wykwalifikowanemu specjaliście.",
      reviewedAt: "Projekt — brak daty wejścia w życie.",
      sections: [
        {
          heading: "1. Obecny stan projektu",
          paragraphs: [
            "TalkChat korzysta z Supabase Auth do obsługi kont, logowania i odzyskiwania hasła. Wiadomości, przechowywanie rozmów i moderacja nie są zaimplementowane.",
            "Ten projekt wymienia kwestie do rozstrzygnięcia w przypadku uruchomienia usługi. Nie oznacza, że obecnie dostępna jest usługa, kanał pomocy ani proces moderacji.",
          ],
        },
        {
          heading: "2. Planowany dostęp i minimalny wiek",
          paragraphs: [
            "Interfejs prosi o datę urodzenia i lokalnie sprawdza, czy przed rejestracją użytkownik ma co najmniej 13 lat. Nie jest to weryfikacja tożsamości, a po stronie serwera nie jest egzekwowana żadna reguła dotycząca wieku.",
            "Minimalny wiek, metoda weryfikacji i zasady dotyczące osób małoletnich muszą zostać sprawdzone przed uruchomieniem dla każdego kraju, w którym usługa może być oferowana.",
          ],
        },
        {
          heading: "3. Oczekiwane zachowanie, jeśli usługa będzie dostępna",
          paragraphs: [
            "Użytkownicy przyszłej usługi powinni przestrzegać obowiązującego prawa i zasad społeczności. Nadużycia, próby nieuprawnionego dostępu, podszywanie się pod inne osoby i treści naruszające prawa innych wymagałyby opublikowanych zasad oraz określonej procedury odwoławczej.",
            "Nie działa żaden rzeczywisty system sankcji, moderacji ani odwołań.",
          ],
        },
        {
          heading: "4. Treści i prawa",
          paragraphs: [
            "Prawa do treści, ewentualne ograniczone uprawnienia niezbędne do prowadzenia przyszłej usługi oraz zasady dotyczące treści niezgodnych z prawem lub zgłoszonych należy określić w wersji ostatecznej. Ten projekt nie udziela ani nie zastrzega licencji do treści użytkowników.",
          ],
        },
        {
          heading: "5. Dostępność, odpowiedzialność i zakończenie usługi",
          paragraphs: [
            "Ta wersja nie zawiera zobowiązania dotyczącego dostępności, przechowywania wiadomości ani ciągłości usługi. Wyłączenia i ograniczenia odpowiedzialności oraz zasady rozwiązania umowy, eksportu i usuwania danych należy opracować i zweryfikować zgodnie z obowiązującym prawem przed uruchomieniem.",
          ],
        },
        {
          heading: "6. Operator, właściwe prawo i kontakt",
          paragraphs: [
            "Nie podano tożsamości prawnej, adresu ani danych kontaktowych operatora, właściwego prawa ani właściwych sądów. Nie wolno ich wymyślać; należy je uzupełnić przed publikacją.",
          ],
        },
      ],
      relatedTitle: "Powiązane informacje",
      related: [
        { label: "Polityka prywatności", to: "/legal/privacy" },
        { label: "Zasady społeczności", to: "/legal/community" },
        { label: "Zasady bezpieczeństwa", to: "/legal/security" },
      ],
      backHome: "Powrót do strony głównej",
    },
    privacy: {
      title: "Polityka prywatności",
      summary:
        "Ta strona opisuje obecne przetwarzanie danych przez TalkChat oraz informacje, które należy jeszcze określić przed publicznym uruchomieniem.",
      draftNotice:
        "PROJEKT — WYMAGANA WERYFIKACJA PRAWNA: nie jest to porada prawna ani gwarancja zgodności z przepisami. Cele, podstawy prawne, administratorzy, odbiorcy, okresy przechowywania i prawa należy określić oraz zweryfikować dla odpowiednich jurysdykcji przed uruchomieniem.",
      reviewedAt: "Projekt — brak daty wejścia w życie.",
      sections: [
        {
          heading: "1. Dane wykorzystywane przez obecną wersję",
          paragraphs: [
            "Podczas rejestracji i logowania adres e-mail oraz hasło są wysyłane bezpośrednio do skonfigurowanego projektu Supabase na potrzeby Supabase Auth. Nazwa wyświetlana jest wysyłana jako metadane konta. Data urodzenia i akceptacja warunków są wykorzystywane wyłącznie w przeglądarce i nie są wysyłane.",
            "SDK Supabase zarządza utrwalaniem sesji w przeglądarce. Pozostałe wartości formularza pozostają tymczasowo w pamięci strony; przeglądarka może niezależnie proponować zapamiętywanie pól za pomocą funkcji autouzupełniania.",
            "Preferencje motywu i języka są przechowywane oddzielnie w pamięci lokalnej przeglądarki. Jeśli pamięć ta jest niedostępna, są zachowywane tylko na czas bieżącej wizyty.",
          ],
        },
        {
          heading: "2. Usługi zewnętrzne i dzienniki",
          paragraphs: [
            "Supabase przetwarza dane niezbędne do uwierzytelniania. Wysyłka wiadomości e-mail zależy od konfiguracji projektu i dostawcy SMTP; konfiguracja ta nie została zweryfikowana. Nie zaimplementowano usługi analitycznej ani funkcji wiadomości TalkChat. Dostawca hostingu i infrastruktura sieciowa mogą również przetwarzać dane połączeń lub prowadzić dzienniki.",
          ],
        },
        {
          heading: "3. Możliwe dane przyszłej usługi",
          paragraphs: [
            "Dane rzeczywiście zbierane przez przyszłą usługę nie zostały jeszcze określone. Mogą obejmować informacje o koncie oraz treści lub metadane potrzebne do działania usługi, ale nie ustalono jeszcze wyczerpującego wykazu, celu ani podstawy prawnej.",
            "Odbiorcy, podmioty przetwarzające, możliwe transfery poza wybrany region, okresy przechowywania, zasady tworzenia kopii zapasowych i procedury usuwania pozostają do ustalenia. Obecnie nie obiecuje się automatycznego usuwania ani określonego okresu przechowywania.",
          ],
        },
        {
          heading: "4. Prawa i wnioski",
          paragraphs: [
            "Prawa osób, sposób ich wykonywania, terminy odpowiedzi i właściwy organ zależą między innymi od miejsca pobytu tych osób, operatora usługi i obowiązującego prawa. Te szczegóły, administrator danych i prawidłowy sposób kontaktu należy dodać przed uruchomieniem.",
            "Ta wersja demonstracyjna nie ma kanału do składania wniosków o dostęp, sprostowanie, usunięcie ani skarg.",
          ],
        },
        {
          heading: "5. Prywatność i szyfrowanie",
          paragraphs: [
            "Obecność tej strony nie oznacza, że rozmowy są szyfrowane metodą end-to-end. Ta wersja nie ma systemu wiadomości ani szyfrowania E2EE. Każde przyszłe szyfrowanie i jego ograniczenia należy opisać po opracowaniu technicznym i weryfikacji.",
          ],
        },
      ],
      relatedTitle: "Powiązane strony",
      related: [
        { label: "Warunki korzystania z usługi", to: "/legal/terms" },
        { label: "Zasady bezpieczeństwa", to: "/legal/security" },
        { label: "Jak zgłosić treść", to: "/legal/report" },
      ],
      backHome: "Powrót do strony głównej",
    },
    community: {
      title: "Zasady społeczności",
      summary:
        "Proponowane zasady rozmów na wypadek, gdyby TalkChat stał się usługą przesyłania wiadomości.",
      draftNotice:
        "PROJEKT — TalkChat nie oferuje obecnie wiadomości ani moderacji. Zasady te nie są egzekwowane przez działający system.",
      reviewedAt: "Proponowane zasady — brak daty wejścia w życie.",
      sections: [
        {
          heading: "Szacunek i bezpieczeństwo",
          paragraphs: [
            "Traktuj innych z szacunkiem. Groźby, ukierunkowane nękanie, nienawiść, zastraszanie i zachęcanie do przemocy nie mają miejsca w bezpiecznej społeczności.",
            "Nie udostępniaj prywatnych informacji o innej osobie bez jej zgody. Nie podszywaj się pod innych ani nie próbuj uzyskiwać dostępu do konta lub urządzenia bez upoważnienia.",
          ],
        },
        {
          heading: "Treści i niechciane kontakty",
          paragraphs: [
            "Nie wysyłaj treści niezgodnych z prawem, oszustw, złośliwego oprogramowania, spamu ani powtarzających się niechcianych próśb. Przestrzegaj praw autorskich i innych obowiązujących praw.",
            "Te zasady są propozycją redakcyjną. Definicje zakazanych treści, wyjątki, możliwe działania i ścieżki odwoławcze należy określić przed uruchomieniem.",
          ],
        },
        {
          heading: "Osoby małoletnie i zgłoszenia",
          paragraphs: [
            "Nie nawiązuj niewłaściwego kontaktu z osobami małoletnimi ani nie udostępniaj zdjęć lub informacji, które mogłyby narazić je na niebezpieczeństwo. Zasady ochrony, obsługę zgłoszeń i eskalację należy zaprojektować z odpowiednimi zabezpieczeniami przed publicznym uruchomieniem.",
            "Wersja demonstracyjna nie ma funkcji zgłaszania ani moderacji. Szczegółowe informacje o tym ograniczeniu znajdują się na dedykowanej stronie.",
          ],
        },
        {
          heading: "Egzekwowanie zasad",
          paragraphs: [
            "Ta wersja nie ma zespołu moderacji, mechanizmu blokowania ani procedury sankcji i odwołań. Nie polegaj na tych zasadach tak, jakby zapewniały rzeczywistą interwencję.",
          ],
        },
      ],
      relatedTitle: "Powiązane strony",
      related: [
        { label: "Jak zgłosić treść", to: "/legal/report" },
        { label: "Zasady bezpieczeństwa", to: "/legal/security" },
        { label: "Polityka prywatności", to: "/legal/privacy" },
      ],
      backHome: "Powrót do strony głównej",
    },
    report: {
      title: "Zgłaszanie treści lub konta",
      summary:
        "Poniższe informacje opisują możliwy przyszły proces; nie jest to formularz zgłoszeniowy.",
      draftNotice:
        "ZGŁOSZENIE NIE ZOSTANIE WYSŁANE: TalkChat nie ma jeszcze wiadomości, przycisku zgłoszenia, zespołu weryfikującego ani opublikowanego adresu kontaktowego do zgłoszeń.",
      reviewedAt: "Informacje o prototypie — sprawdzić przed uruchomieniem.",
      sections: [
        {
          heading: "Zgłaszanie nie jest jeszcze dostępne",
          paragraphs: [
            "Ta strona nie wysyła zgłoszeń ani nie zbiera dowodów. Nie używaj formularzy rejestracji ani logowania do zgłaszania problemu; służą wyłącznie do uwierzytelniania konta.",
            "Nie podano adresu e-mail ani danych kontaktowych do zgłoszeń, ponieważ nie określono działającego kanału. Ta strona nie może przyjmować ani obsługiwać wniosków.",
          ],
        },
        {
          heading:
            "Informacje do przygotowania na potrzeby przyszłego zgłoszenia",
          paragraphs: [
            "Jeśli usługa zostanie uruchomiona z dedykowaną funkcją, pomocne może być opisanie treści lub konta, którego dotyczy zgłoszenie, miejsca występowania, powodu zgłoszenia i przybliżonej godziny. Udostępniaj wyłącznie informacje niezbędne i unikaj publicznego rozpowszechniania danych osobowych lub wrażliwych treści.",
          ],
        },
        {
          heading: "Sytuacje nagłe",
          paragraphs: [
            "TalkChat nie monitoruje tej strony i nie może reagować w nagłych wypadkach. W razie bezpośredniego zagrożenia skontaktuj się ze służbami ratunkowymi lub właściwymi organami w miejscu zamieszkania.",
          ],
        },
        {
          heading: "Co należy ustalić przed uruchomieniem",
          bullets: [
            "Działający i dostępny kanał zgłoszeń.",
            "Kategorie, orientacyjne terminy, zasady obsługi i przechowywane informacje.",
            "Ochrona osób zgłaszających, powiadomienia i procedura odwoławcza.",
            "Obowiązki operatora i zasady obowiązujące w odpowiednich jurysdykcjach.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Powiązane strony",
      related: [
        { label: "Zasady społeczności", to: "/legal/community" },
        { label: "Polityka prywatności", to: "/legal/privacy" },
      ],
      backHome: "Powrót do strony głównej",
    },
    security: {
      title: "Zasady bezpieczeństwa",
      summary:
        "Ta strona odróżnia ograniczenia wersji demonstracyjnej od celów, które należałoby zaprojektować przed uruchomieniem prawdziwej usługi.",
      draftNotice:
        "BRAK GWARANCJI BEZPIECZEŃSTWA: poniższe zasady to cele projektowe. Nie opisują zabezpieczeń już wdrożonych ani poddanych audytowi.",
      reviewedAt: "Informacje o prototypie — sprawdzić przed uruchomieniem.",
      sections: [
        {
          heading: "Obecny stan projektu",
          paragraphs: [
            "Supabase Auth zapewnia rejestrację kont, logowanie, obsługę sesji i odzyskiwanie hasła. Ten frontend nie implementuje wiadomości, szyfrowania end-to-end, bezpiecznych kopii zapasowych, automatycznego usuwania, monitorowania, serwerowych limitów prób ani procesu reagowania na incydenty.",
            "Ochrona tras po stronie frontendu nie stanowi granicy autoryzacji i nie zastępuje kontroli serwerowych ani zasad RLS Supabase. Nie zaimplementowano tabel wiadomości ani profili.",
          ],
        },
        {
          heading: "Proponowane cele przyszłej wersji",
          bullets: [
            "Ograniczyć zbierane dane i dostęp do informacji niezbędnych.",
            "Chronić konta i sesje, weryfikować uprawnienia po stronie serwera i testować reguły dostępu.",
            "Korzystać z szyfrowanych połączeń podczas przesyłania danych i nie umieszczać sekretów w kodzie dostarczanym do przeglądarki.",
            "Ocenić sprawdzony protokół E2EE przed deklarowaniem szyfrowania end-to-end.",
            "Określić kopie zapasowe, klucze odzyskiwania, przechowywanie i testy przywracania przed ich ogłoszeniem.",
            "Zaplanować aktualizacje, przeglądy, ograniczone dzienniki i reagowanie na podatności.",
          ],
          paragraphs: [],
        },
        {
          heading: "Ograniczenia i kontakt w sprawach bezpieczeństwa",
          paragraphs: [
            "Cele te nie stanowią certyfikacji ani gwarancji całkowitej ochrony. Osoba odpowiedzialna za bezpieczeństwo, kanał ujawniania, terminy reakcji i publiczne dane kontaktowe nie zostały jeszcze określone. Nie umieszczaj danych osobowych ani sekretów w formularzach demonstracyjnych.",
          ],
        },
      ],
      relatedTitle: "Powiązane strony",
      related: [
        { label: "Polityka prywatności", to: "/legal/privacy" },
        { label: "Warunki korzystania z usługi", to: "/legal/terms" },
        { label: "Jak zgłosić treść", to: "/legal/report" },
      ],
      backHome: "Powrót do strony głównej",
    },
  },
  uk: {
    terms: {
      title: "Умови користування",
      summary:
        "Це робочий проєкт для можливої майбутньої служби TalkChat. Це не готова до використання юридична угода.",
      draftNotice:
        "ПРОЄКТ — ПОТРІБНА ЮРИДИЧНА ПЕРЕВІРКА: перед будь-яким публічним запуском необхідно доповнити ідентифікаційні та контактні дані оператора, застосовне право, умови відповідальності й остаточні положення та передати їх на перевірку кваліфікованому фахівцю.",
      reviewedAt: "Проєкт — дата набрання чинності відсутня.",
      sections: [
        {
          heading: "1. Поточний стан проєкту",
          paragraphs: [
            "TalkChat використовує Supabase Auth для облікових записів, входу та відновлення пароля. Обмін повідомленнями, зберігання розмов і модерацію не реалізовано.",
            "У цьому проєкті перелічено питання, які потрібно буде розглянути, якщо службу буде запущено. Це не означає, що сьогодні доступні служба, канал підтримки або процес модерації.",
          ],
        },
        {
          heading: "2. Запланований доступ і мінімальний вік",
          paragraphs: [
            "Інтерфейс запитує дату народження та локально перевіряє, чи виповнилося користувачеві щонайменше 13 років, перш ніж дозволити реєстрацію. Це не перевірка особи; на сервері правила щодо віку не застосовуються.",
            "Мінімальний вік, спосіб перевірки та правила для неповнолітніх необхідно перевірити до запуску в кожній країні, де службу можуть пропонувати.",
          ],
        },
        {
          heading: "3. Очікувана поведінка в разі запуску служби",
          paragraphs: [
            "Користувачі майбутньої служби мають дотримуватися чинного законодавства та правил спільноти. Зловживання, спроби несанкціонованого доступу, видавання себе за іншу особу та контент, що порушує права інших, потребуватимуть оприлюднених правил і визначеної процедури оскарження.",
            "Жодна реальна процедура застосування санкцій, модерації чи оскарження не діє.",
          ],
        },
        {
          heading: "4. Контент і права",
          paragraphs: [
            "Права на контент, обмежені дозволи, потрібні для роботи майбутньої служби, а також правила щодо незаконного контенту чи контенту, на який надійшла скарга, необхідно визначити в остаточній версії. Цей проєкт не надає і не заявляє ліцензій на користувацький контент.",
          ],
        },
        {
          heading:
            "5. Доступність, відповідальність і припинення роботи служби",
          paragraphs: [
            "Ця версія не містить зобов’язань щодо доступності, зберігання повідомлень або безперервності роботи служби. Відмови від відповідальності, її обмеження, а також правила припинення, експорту й видалення потрібно підготувати та перевірити відповідно до застосовного права до запуску.",
          ],
        },
        {
          heading: "6. Оператор, застосовне право та контакти",
          paragraphs: [
            "Юридичну особу оператора, адресу й контактні дані, застосовне право та компетентні суди не зазначено. Їх не можна вигадувати; ці відомості потрібно додати до публікації.",
          ],
        },
      ],
      relatedTitle: "Пов’язана інформація",
      related: [
        { label: "Політика конфіденційності", to: "/legal/privacy" },
        { label: "Правила спільноти", to: "/legal/community" },
        { label: "Принципи безпеки", to: "/legal/security" },
      ],
      backHome: "На головну",
    },
    privacy: {
      title: "Політика конфіденційності",
      summary:
        "На цій сторінці описано поточну обробку даних TalkChat та інформацію, яку ще потрібно визначити до публічного запуску.",
      draftNotice:
        "ПРОЄКТ — ПОТРІБНА ЮРИДИЧНА ПЕРЕВІРКА: це не юридична консультація і не гарантія дотримання вимог. Мету, правові підстави, контролерів, одержувачів, строки зберігання та права необхідно визначити й перевірити для відповідних юрисдикцій до запуску.",
      reviewedAt: "Проєкт — дата набрання чинності відсутня.",
      sections: [
        {
          heading: "1. Дані, які використовує поточна версія",
          paragraphs: [
            "Під час реєстрації та входу адреса електронної пошти й пароль надсилаються безпосередньо до налаштованого проєкту Supabase для Supabase Auth. Відображуване ім’я надсилається як метадані облікового запису. Дата народження та згода з умовами використовуються лише в браузері й не надсилаються.",
            "SDK Supabase керує збереженням сеансу в браузері. Інші значення форми тимчасово залишаються в пам’яті сторінки; браузер може окремо запропонувати запам’ятати поля за допомогою автозаповнення.",
            "Налаштування теми й мови зберігаються окремо в локальному сховищі браузера. Якщо воно недоступне, налаштування зберігаються лише протягом поточного відвідування.",
          ],
        },
        {
          heading: "2. Зовнішні служби та журнали",
          paragraphs: [
            "Supabase обробляє дані, необхідні для автентифікації. Надсилання електронних листів залежить від конфігурації проєкту та постачальника SMTP; цю конфігурацію не перевіряли. Аналітичну службу та функцію обміну повідомленнями TalkChat не реалізовано. Постачальник хостингу й мережева інфраструктура також можуть обробляти дані про підключення або вести журнали.",
          ],
        },
        {
          heading: "3. Можливі дані майбутньої служби",
          paragraphs: [
            "Дані, які фактично збиратиме майбутня служба, ще не визначено. Вони можуть містити інформацію облікового запису та контент або метадані, потрібні для роботи служби, але повний перелік, мету чи правову підставу поки не встановлено.",
            "Потрібно визначити одержувачів, обробників, можливе передавання за межі вибраного регіону, строки зберігання, правила резервного копіювання та процедури видалення. Наразі не обіцяється автоматичне видалення чи конкретний строк зберігання.",
          ],
        },
        {
          heading: "4. Права та запити",
          paragraphs: [
            "Права людей, порядок їх реалізації, строки відповіді та відповідний орган частково залежать від місця проживання людей, оператора служби й застосовного права. Ці відомості, контролера даних і дійсний спосіб зв’язку необхідно додати до запуску.",
            "У цій демонстраційній версії немає каналу для запитів на доступ, виправлення, видалення чи подання скарги.",
          ],
        },
        {
          heading: "5. Конфіденційність і шифрування",
          paragraphs: [
            "Наявність цієї сторінки не означає, що розмови зашифровані наскрізним шифруванням. У цій версії немає системи обміну повідомленнями чи шифрування E2EE. Майбутнє шифрування та його обмеження потрібно описати після технічного проєктування й перевірки.",
          ],
        },
      ],
      relatedTitle: "Пов’язані сторінки",
      related: [
        { label: "Умови користування", to: "/legal/terms" },
        { label: "Принципи безпеки", to: "/legal/security" },
        { label: "Як повідомити про контент", to: "/legal/report" },
      ],
      backHome: "На головну",
    },
    community: {
      title: "Правила спільноти",
      summary:
        "Запропоновані принципи спілкування на випадок, якщо TalkChat стане службою обміну повідомленнями.",
      draftNotice:
        "ПРОЄКТ — наразі TalkChat не надає можливості обмінюватися повідомленнями та не здійснює модерацію. Ці правила не застосовуються діючою системою.",
      reviewedAt: "Запропоновані принципи — дата набрання чинності відсутня.",
      sections: [
        {
          heading: "Повага та безпека",
          paragraphs: [
            "Ставтеся до інших із повагою. Погрози, цілеспрямоване переслідування, ненависть, залякування та заохочення до насильства не мають місця в безпечній спільноті.",
            "Не поширюйте приватну інформацію про іншу людину без її дозволу. Не видавайте себе за інших і не намагайтеся отримати доступ до облікового запису чи пристрою без дозволу.",
          ],
        },
        {
          heading: "Контент і небажані звернення",
          paragraphs: [
            "Не надсилайте незаконний контент, шахрайські матеріали, зловмисне програмне забезпечення, спам або повторні небажані пропозиції. Поважайте авторське право та інші застосовні права.",
            "Ці принципи є редакційною пропозицією. Визначення забороненого контенту, винятки, можливі заходи та порядок оскарження необхідно встановити до запуску.",
          ],
        },
        {
          heading: "Неповнолітні та повідомлення",
          paragraphs: [
            "Не звертайтеся до неповнолітніх неналежним чином і не поширюйте зображення чи інформацію, які можуть наразити їх на небезпеку. Правила захисту, обробку повідомлень і ескалацію потрібно розробити з відповідними гарантіями до будь-якого публічного запуску.",
            "У демонстраційній версії немає функції повідомлення чи модерації. Докладніше про це обмеження дивіться на спеціальній сторінці.",
          ],
        },
        {
          heading: "Застосування правил",
          paragraphs: [
            "У цій версії немає команди модераторів, механізму блокування чи процедури санкцій та оскарження. Не покладайтеся на ці правила як на гарантію реального втручання.",
          ],
        },
      ],
      relatedTitle: "Пов’язані сторінки",
      related: [
        { label: "Як повідомити про контент", to: "/legal/report" },
        { label: "Принципи безпеки", to: "/legal/security" },
        { label: "Політика конфіденційності", to: "/legal/privacy" },
      ],
      backHome: "На головну",
    },
    report: {
      title: "Повідомити про контент або обліковий запис",
      summary:
        "Наведена нижче інформація описує можливий майбутній процес; це не форма для повідомлень.",
      draftNotice:
        "ПОВІДОМЛЕННЯ НЕ НАДСИЛАЄТЬСЯ: у TalkChat ще немає обміну повідомленнями, кнопки скарги, команди перевірки чи оприлюдненої адреси для повідомлень.",
      reviewedAt: "Інформація про прототип — переглянути до запуску.",
      sections: [
        {
          heading: "Функція повідомлення ще недоступна",
          paragraphs: [
            "Ця сторінка не надсилає повідомлень і не збирає докази. Не використовуйте форми реєстрації чи входу, щоб повідомити про проблему: вони призначені лише для автентифікації облікового запису.",
            "Адресу електронної пошти чи контактні дані для повідомлень не зазначено, оскільки діючого каналу не визначено. Ця сторінка не може отримувати чи обробляти запити.",
          ],
        },
        {
          heading: "Інформація для підготовки майбутнього повідомлення",
          paragraphs: [
            "Якщо буде запущено службу зі спеціальною функцією, може бути корисно описати відповідний контент або обліковий запис, де він з’являється, причину повідомлення та приблизний час. Надсилайте лише суворо необхідну інформацію й не поширюйте публічно персональні дані чи чутливий контент.",
          ],
        },
        {
          heading: "Невідкладні ситуації",
          paragraphs: [
            "TalkChat не стежить за цією сторінкою й не може реагувати на надзвичайні ситуації. У разі безпосередньої небезпеки зверніться до екстрених служб або компетентних органів за місцем проживання.",
          ],
        },
        {
          heading: "Що необхідно визначити до запуску",
          bullets: [
            "Діючий і доступний канал для повідомлень.",
            "Категорії, орієнтовні строки, правила розгляду та інформація, що зберігається.",
            "Захист заявників, сповіщення та процедура оскарження.",
            "Обов’язки оператора й правила відповідних юрисдикцій.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Пов’язані сторінки",
      related: [
        { label: "Правила спільноти", to: "/legal/community" },
        { label: "Політика конфіденційності", to: "/legal/privacy" },
      ],
      backHome: "На головну",
    },
    security: {
      title: "Принципи безпеки",
      summary:
        "На цій сторінці розмежовано обмеження демонстраційної версії та цілі, які потрібно розробити до створення справжньої служби.",
      draftNotice:
        "БЕЗ ГАРАНТІЇ БЕЗПЕКИ: наведені нижче принципи є цілями проєктування. Вони не описують уже впроваджені чи перевірені засоби захисту.",
      reviewedAt: "Інформація про прототип — переглянути до запуску.",
      sections: [
        {
          heading: "Поточний стан проєкту",
          paragraphs: [
            "Supabase Auth забезпечує реєстрацію облікових записів, вхід, керування сеансами та відновлення пароля. Цей фронтенд не реалізує обмін повідомленнями, наскрізне шифрування, безпечні резервні копії, автоматичне видалення, моніторинг, серверні обмеження кількості спроб або процес реагування на інциденти.",
            "Захист маршрутів у фронтенді не є межею авторизації та не замінює серверні перевірки чи політики RLS Supabase. Таблиці повідомлень або профілів не реалізовано.",
          ],
        },
        {
          heading: "Запропоновані цілі майбутньої версії",
          bullets: [
            "Мінімізувати збирання даних і обмежити доступ лише необхідною інформацією.",
            "Захищати облікові записи й сеанси, перевіряти дозволи на сервері та тестувати правила доступу.",
            "Використовувати зашифровані з’єднання під час передавання даних і не включати секрети до коду, що доставляється браузеру.",
            "Оцінити перевірений протокол E2EE до будь-яких заяв про наскрізне шифрування.",
            "Визначити резервні копії, ключі відновлення, строки зберігання й тести відновлення до їх анонсування.",
            "Планувати оновлення, перевірки, мінімізовані журнали та реагування на вразливості.",
          ],
          paragraphs: [],
        },
        {
          heading: "Обмеження та контакти з питань безпеки",
          paragraphs: [
            "Ці цілі не є сертифікацією чи гарантією абсолютного захисту. Відповідального за безпеку, канал розкриття інформації, строки реагування та публічні контактні дані ще не визначено. Не вводьте персональні дані чи секрети у форми демонстраційної версії.",
          ],
        },
      ],
      relatedTitle: "Пов’язані сторінки",
      related: [
        { label: "Політика конфіденційності", to: "/legal/privacy" },
        { label: "Умови користування", to: "/legal/terms" },
        { label: "Як повідомити про контент", to: "/legal/report" },
      ],
      backHome: "На головну",
    },
  },
  ru: {
    terms: {
      title: "Условия использования",
      summary:
        "Это рабочий проект условий для возможного будущего сервиса TalkChat. Это не готовое к использованию юридическое соглашение.",
      draftNotice:
        "ПРОЕКТ — ТРЕБУЕТСЯ ЮРИДИЧЕСКАЯ ПРОВЕРКА: до любого публичного запуска необходимо указать сведения об операторе и его контакты, применимое право, условия ответственности и окончательные положения, а затем передать их на проверку квалифицированному специалисту.",
      reviewedAt: "Проект — дата вступления в силу не установлена.",
      sections: [
        {
          heading: "1. Текущее состояние проекта",
          paragraphs: [
            "TalkChat использует Supabase Auth для учетных записей, входа и восстановления пароля. Обмен сообщениями, хранение переписки и модерация не реализованы.",
            "В этом проекте перечислены вопросы, которые потребуется решить в случае запуска сервиса. Это не означает, что сейчас доступны сервис, канал поддержки или процесс модерации.",
          ],
        },
        {
          heading: "2. Планируемый доступ и минимальный возраст",
          paragraphs: [
            "Интерфейс запрашивает дату рождения и локально проверяет, исполнилось ли пользователю 13 лет, прежде чем разрешить регистрацию. Это не проверка личности; на стороне сервера возрастные правила не применяются.",
            "Минимальный возраст, способ проверки и правила для несовершеннолетних необходимо проверить до запуска в каждой стране, где может предлагаться сервис.",
          ],
        },
        {
          heading: "3. Ожидаемое поведение в случае запуска сервиса",
          paragraphs: [
            "Пользователи будущего сервиса должны будут соблюдать применимое законодательство и правила сообщества. Злоупотребления, попытки несанкционированного доступа, выдача себя за другого человека и контент, нарушающий права других лиц, потребуют опубликованных правил и установленного порядка обжалования.",
            "Реальные санкции, модерация или процесс обжалования не применяются.",
          ],
        },
        {
          heading: "4. Контент и права",
          paragraphs: [
            "Права на контент, ограниченные разрешения, необходимые для работы будущего сервиса, а также правила в отношении незаконного контента или контента, на который поступила жалоба, должны быть определены в окончательной версии. Этот проект не предоставляет и не заявляет лицензию на пользовательский контент.",
          ],
        },
        {
          heading:
            "5. Доступность, ответственность и прекращение работы сервиса",
          paragraphs: [
            "Эта версия не содержит обязательств по доступности, хранению сообщений или непрерывной работе сервиса. Отказ от ответственности, ее ограничения, а также правила прекращения работы, экспорта и удаления необходимо подготовить и проверить с учетом применимого права до запуска.",
          ],
        },
        {
          heading: "6. Оператор, применимое право и контакты",
          paragraphs: [
            "Юридическое наименование, адрес и контактные данные оператора, применимое право и компетентные суды не указаны. Их нельзя придумывать; эти сведения необходимо добавить до публикации.",
          ],
        },
      ],
      relatedTitle: "Связанная информация",
      related: [
        { label: "Политика конфиденциальности", to: "/legal/privacy" },
        { label: "Правила сообщества", to: "/legal/community" },
        { label: "Принципы безопасности", to: "/legal/security" },
      ],
      backHome: "На главную",
    },
    privacy: {
      title: "Политика конфиденциальности",
      summary:
        "На этой странице описана текущая обработка данных TalkChat и сведения, которые еще предстоит определить до публичного запуска.",
      draftNotice:
        "ПРОЕКТ — ТРЕБУЕТСЯ ЮРИДИЧЕСКАЯ ПРОВЕРКА: это не юридическая консультация и не гарантия соблюдения требований. Цели, правовые основания, операторы, получатели, сроки хранения и права необходимо определить и проверить для соответствующих юрисдикций до запуска.",
      reviewedAt: "Проект — дата вступления в силу не установлена.",
      sections: [
        {
          heading: "1. Данные, используемые текущей версией",
          paragraphs: [
            "При регистрации и входе адрес электронной почты и пароль напрямую передаются в настроенный проект Supabase для Supabase Auth. Отображаемое имя передается в качестве метаданных учетной записи. Дата рождения и принятие условий используются только в браузере и не отправляются.",
            "SDK Supabase управляет сохранением сеанса в браузере. Остальные значения формы временно хранятся в памяти страницы; браузер может отдельно предложить запоминать поля с помощью функции автозаполнения.",
            "Настройки темы и языка хранятся отдельно в локальном хранилище браузера. Если оно недоступно, настройки сохраняются только на время текущего посещения.",
          ],
        },
        {
          heading: "2. Внешние службы и журналы",
          paragraphs: [
            "Supabase обрабатывает данные, необходимые для аутентификации. Доставка электронных писем зависит от конфигурации проекта и поставщика SMTP; эта конфигурация не проверялась. Служба аналитики и функция обмена сообщениями TalkChat не реализованы. Поставщик хостинга и сетевая инфраструктура также могут обрабатывать данные о подключении или вести журналы.",
          ],
        },
        {
          heading: "3. Возможные данные будущего сервиса",
          paragraphs: [
            "Данные, которые будет фактически собирать будущий сервис, еще не определены. Они могут включать сведения об учетной записи и контент или метаданные, необходимые для работы сервиса, однако исчерпывающий перечень, цель или правовое основание пока не установлены.",
            "Необходимо определить получателей, обработчиков, возможную передачу данных за пределы выбранного региона, сроки хранения, правила резервного копирования и процедуры удаления. Автоматическое удаление или конкретный срок хранения сейчас не обещаются.",
          ],
        },
        {
          heading: "4. Права и запросы",
          paragraphs: [
            "Права людей, порядок их осуществления, сроки ответа и соответствующий орган зависят, помимо прочего, от местонахождения людей, оператора сервиса и применимого права. Эти сведения, оператор данных и действительный способ связи должны быть добавлены до запуска.",
            "В этой демонстрационной версии нет канала для запросов на доступ, исправление, удаление или подачу жалобы.",
          ],
        },
        {
          heading: "5. Конфиденциальность и шифрование",
          paragraphs: [
            "Наличие этой страницы не означает, что переписка зашифрована сквозным шифрованием. В этой версии нет системы обмена сообщениями или шифрования E2EE. Будущее шифрование и его ограничения необходимо описать после технического проектирования и проверки.",
          ],
        },
      ],
      relatedTitle: "Связанные страницы",
      related: [
        { label: "Условия использования", to: "/legal/terms" },
        { label: "Принципы безопасности", to: "/legal/security" },
        { label: "Как сообщить о контенте", to: "/legal/report" },
      ],
      backHome: "На главную",
    },
    community: {
      title: "Правила сообщества",
      summary:
        "Предлагаемые принципы общения на случай, если TalkChat станет сервисом обмена сообщениями.",
      draftNotice:
        "ПРОЕКТ — сейчас TalkChat не предоставляет обмен сообщениями и модерацию. Эти правила не применяются действующей системой.",
      reviewedAt:
        "Предлагаемые принципы — дата вступления в силу не установлена.",
      sections: [
        {
          heading: "Уважение и безопасность",
          paragraphs: [
            "Относитесь к другим с уважением. Угрозам, целенаправленной травле, ненависти, запугиванию и призывам к насилию нет места в безопасном сообществе.",
            "Не раскрывайте личную информацию другого человека без его разрешения. Не выдавайте себя за других и не пытайтесь получить доступ к учетной записи или устройству без разрешения.",
          ],
        },
        {
          heading: "Контент и нежелательные обращения",
          paragraphs: [
            "Не отправляйте незаконный контент, мошеннические материалы, вредоносное ПО, спам или повторные нежелательные обращения. Соблюдайте авторские и другие применимые права.",
            "Эти принципы являются редакционным предложением. Определения запрещенного контента, исключения, возможные меры и порядок обжалования необходимо установить до запуска.",
          ],
        },
        {
          heading: "Несовершеннолетние и жалобы",
          paragraphs: [
            "Не обращайтесь к несовершеннолетним ненадлежащим образом и не распространяйте изображения или информацию, которые могут подвергнуть их опасности. Правила защиты, обработку жалоб и эскалацию необходимо разработать с надлежащими гарантиями до любого публичного запуска.",
            "В демонстрационной версии нет функции подачи жалоб или модерации. Подробнее об этом ограничении можно узнать на специальной странице.",
          ],
        },
        {
          heading: "Применение правил",
          paragraphs: [
            "В этой версии нет команды модерации, механизма блокировки или процедуры санкций и обжалования. Не полагайтесь на эти правила как на гарантию реального вмешательства.",
          ],
        },
      ],
      relatedTitle: "Связанные страницы",
      related: [
        { label: "Как сообщить о контенте", to: "/legal/report" },
        { label: "Принципы безопасности", to: "/legal/security" },
        { label: "Политика конфиденциальности", to: "/legal/privacy" },
      ],
      backHome: "На главную",
    },
    report: {
      title: "Сообщить о контенте или учетной записи",
      summary:
        "Ниже описан возможный будущий процесс; это не форма для жалобы.",
      draftNotice:
        "ЖАЛОБА НЕ ОТПРАВЛЯЕТСЯ: в TalkChat пока нет обмена сообщениями, кнопки жалобы, команды проверки или опубликованного адреса для обращений.",
      reviewedAt: "Информация о прототипе — проверить до запуска.",
      sections: [
        {
          heading: "Функция подачи жалоб пока недоступна",
          paragraphs: [
            "Эта страница не отправляет жалобы и не собирает доказательства. Не используйте формы регистрации или входа для сообщения о проблеме: они предназначены только для аутентификации учетной записи.",
            "Адрес электронной почты и контактные данные для жалоб не указаны, поскольку действующий канал не определен. Эта страница не может принять или обработать запрос.",
          ],
        },
        {
          heading: "Что подготовить для будущей жалобы",
          paragraphs: [
            "Если будет запущен сервис со специальной функцией, может быть полезно описать соответствующий контент или учетную запись, где они встречаются, причину жалобы и примерное время. Передавайте только строго необходимую информацию и не публикуйте личные данные или конфиденциальный контент.",
          ],
        },
        {
          heading: "Срочные ситуации",
          paragraphs: [
            "TalkChat не отслеживает эту страницу и не может реагировать на чрезвычайные ситуации. При непосредственной опасности обратитесь в экстренные службы или компетентные органы по месту жительства.",
          ],
        },
        {
          heading: "Что необходимо определить до запуска",
          bullets: [
            "Действующий и доступный канал для жалоб.",
            "Категории, ориентировочные сроки, правила рассмотрения и сохраняемая информация.",
            "Защита заявителей, уведомления и процедура обжалования.",
            "Обязанности оператора и правила соответствующих юрисдикций.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "Связанные страницы",
      related: [
        { label: "Правила сообщества", to: "/legal/community" },
        { label: "Политика конфиденциальности", to: "/legal/privacy" },
      ],
      backHome: "На главную",
    },
    security: {
      title: "Принципы безопасности",
      summary:
        "На этой странице ограничения демонстрационной версии отделены от целей, которые необходимо разработать до создания реального сервиса.",
      draftNotice:
        "БЕЗ ГАРАНТИИ БЕЗОПАСНОСТИ: изложенные ниже принципы являются целями проектирования. Они не описывают уже реализованные или проверенные меры защиты.",
      reviewedAt: "Информация о прототипе — проверить до запуска.",
      sections: [
        {
          heading: "Текущее состояние проекта",
          paragraphs: [
            "Supabase Auth обеспечивает регистрацию учетных записей, вход, управление сеансами и восстановление пароля. В этой клиентской части не реализованы обмен сообщениями, сквозное шифрование, защищенные резервные копии, автоматическое удаление, мониторинг, серверные ограничения числа попыток или процесс реагирования на инциденты.",
            "Защита маршрутов во frontend не является границей авторизации и не заменяет серверные проверки или политики RLS Supabase. Таблицы сообщений и профилей не реализованы.",
          ],
        },
        {
          heading: "Предлагаемые цели для будущей версии",
          bullets: [
            "Сократить объем собираемых данных и ограничить доступ только необходимыми сведениями.",
            "Защищать учетные записи и сеансы, проверять разрешения на сервере и тестировать правила доступа.",
            "Использовать шифрование соединений при передаче данных и не включать секреты в код, доставляемый браузеру.",
            "Оценить проверенный протокол E2EE до заявлений о сквозном шифровании.",
            "Определить резервное копирование, ключи восстановления, хранение данных и тесты восстановления до их анонсирования.",
            "Планировать обновления, проверки, минимизацию журналов и реагирование на уязвимости.",
          ],
          paragraphs: [],
        },
        {
          heading: "Ограничения и контакты по вопросам безопасности",
          paragraphs: [
            "Эти цели не являются сертификацией или гарантией абсолютной защиты. Ответственный за безопасность, канал раскрытия информации, сроки реагирования и публичные контактные данные пока не определены. Не указывайте личные данные или секреты в демонстрационных формах.",
          ],
        },
      ],
      relatedTitle: "Связанные страницы",
      related: [
        { label: "Политика конфиденциальности", to: "/legal/privacy" },
        { label: "Условия использования", to: "/legal/terms" },
        { label: "Как сообщить о контенте", to: "/legal/report" },
      ],
      backHome: "На главную",
    },
  },
  tr: {
    terms: {
      title: "Hizmet Koşulları",
      summary:
        "Bu metin, gelecekte sunulması olası bir TalkChat hizmeti için hazırlanmış çalışma taslağıdır. Kullanıma hazır bir hukuki sözleşme değildir.",
      draftNotice:
        "TASLAK — HUKUKİ İNCELEME GEREKLİ: Herhangi bir herkese açık lansmandan önce işletmecinin kimliği ve iletişim bilgileri, uygulanacak hukuk, sorumluluk koşulları ve nihai şartlar tamamlanmalı ve yetkin bir uzman tarafından incelenmelidir.",
      reviewedAt: "Taslak — yürürlük tarihi yoktur.",
      sections: [
        {
          heading: "1. Projenin mevcut durumu",
          paragraphs: [
            "TalkChat; hesaplar, oturum açma ve parola kurtarma için Supabase Auth kullanır. Mesajlaşma, konuşmaların saklanması ve moderasyon uygulanmamıştır.",
            "Bu taslak, hizmetin başlatılması hâlinde ele alınması gereken konuları listeler. Bugün bir hizmetin, destek kanalının veya moderasyon sürecinin kullanılabilir olduğu anlamına gelmez.",
          ],
        },
        {
          heading: "2. Öngörülen erişim ve asgari yaş",
          paragraphs: [
            "Arayüz doğum tarihi ister ve kayıt öncesinde asgari 13 yaş koşulunu yerel olarak denetler. Bu bir kimlik doğrulaması değildir ve sunucu tarafında yaş kuralı uygulanmaz.",
            "Asgari yaş, doğrulama yöntemi ve reşit olmayanlara ilişkin kurallar, hizmetin sunulabileceği her ülke için lansmandan önce incelenmelidir.",
          ],
        },
        {
          heading: "3. Hizmet sunulursa beklenen davranış",
          paragraphs: [
            "Gelecekteki hizmetin kullanıcılarının yürürlükteki yasalara ve topluluk kurallarına uyması gerekir. Kötüye kullanım, yetkisiz erişim girişimleri, kimliğe bürünme ve başkalarının haklarını ihlal eden içerikler için yayımlanmış kurallar ve tanımlı bir itiraz süreci gerekir.",
            "Gerçek bir yaptırım, moderasyon veya itiraz süreci yürürlükte değildir.",
          ],
        },
        {
          heading: "4. İçerik ve haklar",
          paragraphs: [
            "İçerik üzerindeki haklar, gelecekteki hizmeti işletmek için gerekebilecek sınırlı izinler ve yasa dışı ya da bildirilen içeriklere ilişkin kurallar nihai sürümde belirtilmelidir. Bu taslak, kullanıcı içeriğine ilişkin herhangi bir lisans vermez veya talep etmez.",
          ],
        },
        {
          heading: "5. Kullanılabilirlik, sorumluluk ve hizmetin sona ermesi",
          paragraphs: [
            "Bu sürüm kullanılabilirlik, mesajların saklanması veya hizmetin sürekliliği konusunda taahhütte bulunmaz. Sorumluluk reddi ve sınırlamaları ile fesih, dışa aktarma ve silme kuralları lansmandan önce hazırlanmalı ve yürürlükteki hukuk açısından incelenmelidir.",
          ],
        },
        {
          heading: "6. İşletmeci, uygulanacak hukuk ve iletişim",
          paragraphs: [
            "İşletmecinin tüzel kimliği, adresi ve iletişim bilgileri, uygulanacak hukuk ve yetkili mahkemeler belirtilmemiştir. Bunlar uydurulmamalı ve yayımdan önce tamamlanmalıdır.",
          ],
        },
      ],
      relatedTitle: "İlgili bilgiler",
      related: [
        { label: "Gizlilik Politikası", to: "/legal/privacy" },
        { label: "Topluluk Kuralları", to: "/legal/community" },
        { label: "Güvenlik İlkeleri", to: "/legal/security" },
      ],
      backHome: "Ana sayfaya dön",
    },
    privacy: {
      title: "Gizlilik Politikası",
      summary:
        "Bu sayfa TalkChat'in mevcut veri işleme faaliyetlerini ve herkese açık lansmandan önce hâlâ belirlenmesi gereken bilgileri açıklar.",
      draftNotice:
        "TASLAK — HUKUKİ İNCELEME GEREKLİ: Bu metin hukuki tavsiye veya mevzuata uygunluk garantisi değildir. Amaçlar, hukuki dayanaklar, veri sorumluları, alıcılar, saklama süreleri ve haklar lansmandan önce ilgili yargı bölgeleri için belirlenmeli ve incelenmelidir.",
      reviewedAt: "Taslak — yürürlük tarihi yoktur.",
      sections: [
        {
          heading: "1. Mevcut sürümün kullandığı veriler",
          paragraphs: [
            "Kayıt ve oturum açma sırasında e-posta adresi ve parola, Supabase Auth için yapılandırılmış Supabase projesine doğrudan gönderilir. Görünen ad hesap üst verisi olarak gönderilir. Doğum tarihi ve koşulların kabulü yalnızca tarayıcıda kullanılır ve gönderilmez.",
            "Supabase SDK, oturumun tarayıcıda kalıcılığını yönetir. Diğer form değerleri sayfanın belleğinde geçici olarak tutulur; tarayıcınız otomatik doldurma özelliğiyle alanları hatırlamayı ayrıca önerebilir.",
            "Tema ve dil tercihleri tarayıcının yerel depolama alanında ayrı ayrı saklanır. Bu depolama kullanılamıyorsa tercihler yalnızca mevcut ziyaret boyunca korunur.",
          ],
        },
        {
          heading: "2. Harici hizmetler ve günlükler",
          paragraphs: [
            "Supabase, kimlik doğrulama için gereken verileri işler. E-posta gönderimi projenin yapılandırmasına ve SMTP sağlayıcısına bağlıdır; bu yapılandırma doğrulanmamıştır. Herhangi bir analiz hizmeti veya TalkChat mesajlaşma özelliği uygulanmamıştır. Barındırma sağlayıcısı ve ağ altyapısı da bağlantı verilerini işleyebilir veya günlük tutabilir.",
          ],
        },
        {
          heading: "3. Gelecekteki bir hizmette olası veriler",
          paragraphs: [
            "Gelecekteki bir hizmetin fiilen toplayacağı veriler henüz tanımlanmamıştır. Hesap bilgileri ile hizmeti işletmek için gereken içerik veya üst veriler söz konusu olabilir; ancak kapsamlı bir liste, amaç veya hukuki dayanak henüz belirlenmemiştir.",
            "Alıcılar, veri işleyenler, seçilen bölge dışına olası aktarımlar, saklama süreleri, yedekleme kuralları ve silme prosedürleri belirlenmeyi beklemektedir. Şu anda otomatik silme veya belirli bir saklama süresi taahhüt edilmemektedir.",
          ],
        },
        {
          heading: "4. Haklar ve başvurular",
          paragraphs: [
            "Kişilerin hakları, bu hakları kullanma biçimleri, yanıt süreleri ve ilgili makam; kişilerin bulunduğu yere, hizmet işletmecisine ve yürürlükteki hukuka bağlıdır. Bu ayrıntılar, veri sorumlusu ve geçerli bir iletişim yöntemi lansmandan önce eklenmelidir.",
            "Bu demoda erişim, düzeltme, silme veya şikâyet başvuruları için bir kanal yoktur.",
          ],
        },
        {
          heading: "5. Gizlilik ve şifreleme",
          paragraphs: [
            "Bu sayfanın varlığı, konuşmaların uçtan uca şifrelendiği anlamına gelmez. Bu sürümde mesajlaşma sistemi veya E2EE şifrelemesi yoktur. Gelecekteki şifreleme ve sınırlamaları, teknik tasarım ve incelemenin ardından açıklanmalıdır.",
          ],
        },
      ],
      relatedTitle: "İlgili sayfalar",
      related: [
        { label: "Hizmet Koşulları", to: "/legal/terms" },
        { label: "Güvenlik İlkeleri", to: "/legal/security" },
        { label: "İçerik nasıl bildirilir?", to: "/legal/report" },
      ],
      backHome: "Ana sayfaya dön",
    },
    community: {
      title: "Topluluk Kuralları",
      summary:
        "TalkChat bir mesajlaşma hizmetine dönüşürse konuşmalar için önerilen ilkeler.",
      draftNotice:
        "TASLAK — TalkChat şu anda mesajlaşma veya moderasyon sunmamaktadır. Bu kurallar işleyen bir sistem tarafından uygulanmamaktadır.",
      reviewedAt: "Önerilen ilkeler — yürürlük tarihi yoktur.",
      sections: [
        {
          heading: "Saygı ve güvenlik",
          paragraphs: [
            "Başkalarına saygılı davranın. Tehdit, hedefli taciz, nefret, yıldırma ve şiddeti teşvik etme güvenli bir toplulukta yeri olmayan davranışlardır.",
            "Başka bir kişinin özel bilgilerini izni olmadan paylaşmayın. Başkalarının kimliğine bürünmeyin ve izin olmadan bir hesaba ya da cihaza erişmeye çalışmayın.",
          ],
        },
        {
          heading: "İçerik ve istenmeyen talepler",
          paragraphs: [
            "Yasa dışı içerik, dolandırıcılık, kötü amaçlı yazılım, spam veya tekrarlanan istenmeyen talepler göndermeyin. Telif haklarına ve diğer geçerli haklara saygı gösterin.",
            "Bu ilkeler editoryal bir öneridir. Yasaklı içeriğin tanımları, istisnalar, olası önlemler ve itiraz yolları lansmandan önce belirlenmelidir.",
          ],
        },
        {
          heading: "Reşit olmayanlar ve bildirimler",
          paragraphs: [
            "Reşit olmayan kişileri uygunsuz biçimde hedef almayın ve onları riske atabilecek görselleri ya da bilgileri paylaşmayın. Koruma kuralları, bildirimlerin ele alınması ve üst mercilere iletim, herkese açık lansmandan önce uygun güvence ve önlemlerle tasarlanmalıdır.",
            "Demoda bildirim veya moderasyon özelliği yoktur. Bu sınırlama hakkında bilgi için ilgili sayfaya bakın.",
          ],
        },
        {
          heading: "Uygulama",
          paragraphs: [
            "Bu sürümde moderasyon ekibi, engelleme mekanizması ya da yaptırım ve itiraz süreci yoktur. Gerçek bir müdahale sağlıyormuş gibi bu kurallara güvenmeyin.",
          ],
        },
      ],
      relatedTitle: "İlgili sayfalar",
      related: [
        { label: "İçerik nasıl bildirilir?", to: "/legal/report" },
        { label: "Güvenlik İlkeleri", to: "/legal/security" },
        { label: "Gizlilik Politikası", to: "/legal/privacy" },
      ],
      backHome: "Ana sayfaya dön",
    },
    report: {
      title: "İçeriği veya hesabı bildirme",
      summary:
        "Aşağıdaki bilgiler gelecekte uygulanabilecek bir süreci açıklar; bu bir bildirim formu değildir.",
      draftNotice:
        "HİÇBİR BİLDİRİM GÖNDERİLMEZ: TalkChat'te henüz mesajlaşma, bildirim düğmesi, inceleme ekibi veya yayımlanmış bir bildirim iletişim adresi yoktur.",
      reviewedAt: "Prototip bilgisi — lansmandan önce gözden geçirilmeli.",
      sections: [
        {
          heading: "Bildirim özelliği henüz kullanılamıyor",
          paragraphs: [
            "Bu sayfa bildirim göndermez veya kanıt toplamaz. Bir sorunu bildirmek için kayıt ya da oturum açma formlarını kullanmayın; bunlar yalnızca hesap kimlik doğrulaması içindir.",
            "İşleyen bir kanal tanımlanmadığından bildirimler için e-posta adresi veya iletişim bilgisi verilmemiştir. Bu sayfa bir başvuruyu alamaz veya işleyemez.",
          ],
        },
        {
          heading: "Gelecekteki bir bildirim için hazırlanacak bilgiler",
          paragraphs: [
            "Özel bir özelliğe sahip hizmet başlatılırsa ilgili içeriği veya hesabı, nerede göründüğünü, bildirim nedenini ve yaklaşık zamanı açıklamak yararlı olabilir. Yalnızca kesinlikle gerekli bilgileri paylaşın ve kişisel verileri ya da hassas içerikleri herkese açık biçimde yaymaktan kaçının.",
          ],
        },
        {
          heading: "Acil durumlar",
          paragraphs: [
            "TalkChat bu sayfayı izlemez ve acil durumlara yanıt veremez. Yakın bir tehlike varsa yaşadığınız yerdeki acil servislerle veya yetkili makamlarla iletişime geçin.",
          ],
        },
        {
          heading: "Lansmandan önce belirlenmesi gerekenler",
          bullets: [
            "İşleyen ve erişilebilir bir bildirim kanalı.",
            "Kategoriler, tahmini süreler, ele alma kuralları ve saklanan bilgiler.",
            "Bildirimde bulunanların korunması, bildirimler ve bir itiraz süreci.",
            "İşletmecinin sorumlulukları ve ilgili yargı bölgelerindeki kurallar.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "İlgili sayfalar",
      related: [
        { label: "Topluluk Kuralları", to: "/legal/community" },
        { label: "Gizlilik Politikası", to: "/legal/privacy" },
      ],
      backHome: "Ana sayfaya dön",
    },
    security: {
      title: "Güvenlik İlkeleri",
      summary:
        "Bu sayfa, demonun sınırlamalarını gerçek bir hizmetten önce tasarlanması gereken hedeflerden ayırır.",
      draftNotice:
        "GÜVENLİK GARANTİSİ YOKTUR: aşağıdaki ilkeler tasarım hedefleridir. Hâlihazırda uygulanmış veya denetlenmiş korumaları açıklamaz.",
      reviewedAt: "Prototip bilgisi — lansmandan önce gözden geçirilmeli.",
      sections: [
        {
          heading: "Projenin mevcut durumu",
          paragraphs: [
            "Supabase Auth hesap kaydı, oturum açma, oturum yönetimi ve parola kurtarma olanağı sağlar. Bu frontend; mesajlaşma, uçtan uca şifreleme, güvenli yedekler, otomatik silme, izleme, sunucu tarafında deneme sınırları veya olay müdahale süreci uygulamaz.",
            "Frontend'deki rota koruması bir yetkilendirme sınırı değildir ve sunucu tarafı denetimlerin ya da Supabase RLS politikalarının yerini tutmaz. Mesaj veya profil tabloları uygulanmamıştır.",
          ],
        },
        {
          heading: "Gelecek sürüm için önerilen hedefler",
          bullets: [
            "Toplanan verileri en aza indirin ve erişimi gerekli olanlarla sınırlayın.",
            "Hesapları ve oturumları koruyun, izinleri sunucu tarafında doğrulayın ve erişim kurallarını test edin.",
            "Aktarım sırasında şifreli bağlantılar kullanın ve sırları tarayıcıya dağıtılan kodun dışında tutun.",
            "Uçtan uca şifreleme iddiasında bulunmadan önce iyi incelenmiş bir E2EE protokolünü değerlendirin.",
            "Yedekleri, kurtarma anahtarlarını, saklama sürelerini ve geri yükleme testlerini duyurmadan önce tanımlayın.",
            "Güncellemeleri, incelemeleri, en aza indirilmiş günlükleri ve güvenlik açıklarına müdahaleyi planlayın.",
          ],
          paragraphs: [],
        },
        {
          heading: "Sınırlamalar ve güvenlik iletişim kanalı",
          paragraphs: [
            "Bu hedefler bir sertifika veya mutlak koruma garantisi değildir. Güvenlik sorumlusu, açıklama kanalı, yanıt süreleri ve kamuya açık iletişim bilgileri henüz belirlenmemiştir. Demo formlarına kişisel veri veya sır eklemeyin.",
          ],
        },
      ],
      relatedTitle: "İlgili sayfalar",
      related: [
        { label: "Gizlilik Politikası", to: "/legal/privacy" },
        { label: "Hizmet Koşulları", to: "/legal/terms" },
        { label: "İçerik nasıl bildirilir?", to: "/legal/report" },
      ],
      backHome: "Ana sayfaya dön",
    },
  },
  ar: {
    terms: {
      title: "شروط الخدمة",
      summary:
        "هذه مسودة عمل لخدمة TalkChat مستقبلية محتملة، وليست اتفاقية قانونية جاهزة للاستخدام.",
      draftNotice:
        "مسودة — يلزم إجراء مراجعة قانونية: قبل أي إطلاق عام، يجب استكمال هوية المشغّل وبيانات الاتصال به، والقانون الواجب التطبيق، وشروط المسؤولية، والأحكام النهائية، ومراجعتها من مختص مؤهل.",
      reviewedAt: "مسودة — لا يوجد تاريخ سريان.",
      sections: [
        {
          heading: "1. الحالة الحالية للمشروع",
          paragraphs: [
            "يستخدم TalkChat خدمة Supabase Auth للحسابات وتسجيل الدخول واستعادة كلمات المرور. لم تُنفّذ المراسلة أو تخزين المحادثات أو الإشراف.",
            "تسرد هذه المسودة موضوعات ينبغي تناولها إذا أُطلقت خدمة. ولا تعني أن خدمة أو قناة دعم أو عملية إشراف متاحة اليوم.",
          ],
        },
        {
          heading: "2. الوصول المقصود والحد الأدنى للعمر",
          paragraphs: [
            "تطلب الواجهة تاريخ الميلاد وتتحقق محليًا من بلوغ الحد الأدنى للعمر، وهو 13 عامًا، قبل التسجيل. هذا ليس تحققًا من الهوية، ولا تُطبّق أي قاعدة للعمر على الخادم.",
            "يجب مراجعة الحد الأدنى للعمر وطريقة التحقق والقواعد الخاصة بالقاصرين قبل الإطلاق في كل بلد قد تُقدَّم فيه الخدمة.",
          ],
        },
        {
          heading: "3. السلوك المتوقع في حال وجود الخدمة",
          paragraphs: [
            "سيُطلب من مستخدمي الخدمة المستقبلية الامتثال للقوانين المعمول بها وإرشادات المجتمع. وسيتطلب التعامل مع إساءة الاستخدام ومحاولات الوصول غير المصرح به وانتحال الشخصية والمحتوى المنتهك لحقوق الآخرين قواعد منشورة وإجراء استئناف محددًا.",
            "لا توجد آلية فعلية للعقوبات أو الإشراف أو الاستئناف قيد التشغيل.",
          ],
        },
        {
          heading: "4. المحتوى والحقوق",
          paragraphs: [
            "يجب تحديد الحقوق المتعلقة بالمحتوى، وأي أذونات محدودة لازمة لتشغيل خدمة مستقبلية، والقواعد الخاصة بالمحتوى غير القانوني أو المُبلّغ عنه في نسخة نهائية. لا تمنح هذه المسودة ترخيصًا لمحتوى المستخدمين ولا تدّعيه.",
          ],
        },
        {
          heading: "5. التوافر والمسؤولية وإنهاء الخدمة",
          paragraphs: [
            "لا تتضمن هذه النسخة أي التزام بالتوافر أو الاحتفاظ بالرسائل أو استمرارية الخدمة. يجب إعداد إخلاءات المسؤولية وحدودها، وقواعد الإنهاء والتصدير والحذف، ومراجعتها بموجب القانون المعمول به قبل الإطلاق.",
          ],
        },
        {
          heading: "6. المشغّل والقانون الواجب التطبيق والاتصال",
          paragraphs: [
            "لم تُذكر الهوية القانونية للمشغّل أو عنوانه أو بيانات الاتصال به أو القانون الواجب التطبيق أو المحاكم المختصة. ويجب عدم اختلاق هذه المعلومات، بل استكمالها قبل النشر.",
          ],
        },
      ],
      relatedTitle: "معلومات ذات صلة",
      related: [
        { label: "سياسة الخصوصية", to: "/legal/privacy" },
        { label: "إرشادات المجتمع", to: "/legal/community" },
        { label: "مبادئ الأمان", to: "/legal/security" },
      ],
      backHome: "العودة إلى الصفحة الرئيسية",
    },
    privacy: {
      title: "سياسة الخصوصية",
      summary:
        "تصف هذه الصفحة ممارسات TalkChat الحالية في معالجة البيانات والمعلومات التي لا يزال يتعين تحديدها قبل الإطلاق العام.",
      draftNotice:
        "مسودة — يلزم إجراء مراجعة قانونية: هذا النص ليس مشورة قانونية ولا ضمانًا للامتثال. يجب تحديد الأغراض والأسس القانونية ومتحكمي البيانات والجهات المستلمة وفترات الاحتفاظ والحقوق ومراجعتها للولايات القضائية المعنية قبل الإطلاق.",
      reviewedAt: "مسودة — لا يوجد تاريخ سريان.",
      sections: [
        {
          heading: "1. البيانات التي تستخدمها النسخة الحالية",
          paragraphs: [
            "أثناء التسجيل وتسجيل الدخول، يُرسل عنوان البريد الإلكتروني وكلمة المرور مباشرةً إلى مشروع Supabase المُعدّ لخدمة Supabase Auth. ويُرسل اسم العرض بوصفه بيانات وصفية للحساب. لا يُستخدم تاريخ الميلاد وقبول الشروط إلا في المتصفح ولا يُرسلان.",
            "تدير حزمة Supabase SDK استمرار الجلسة في المتصفح. وتبقى قيم النماذج الأخرى مؤقتًا في ذاكرة الصفحة؛ وقد يعرض المتصفح، بصورة مستقلة، حفظ الحقول باستخدام ميزة الملء التلقائي.",
            "تُحفظ تفضيلات المظهر واللغة كلٌّ على حدة في التخزين المحلي للمتصفح. وإذا لم يتوفر هذا التخزين، فلا تُحفظ إلا طوال الزيارة الحالية.",
          ],
        },
        {
          heading: "2. الخدمات الخارجية والسجلات",
          paragraphs: [
            "تعالج Supabase البيانات اللازمة للمصادقة. ويعتمد إرسال البريد الإلكتروني على إعدادات المشروع ومزوّد SMTP؛ ولم يتم التحقق من هذه الإعدادات. لم تُنفّذ أي خدمة للتحليلات أو ميزة مراسلة في TalkChat. وقد يعالج مزوّد الاستضافة والبنية التحتية للشبكة أيضًا بيانات الاتصال أو يحتفظان بالسجلات.",
          ],
        },
        {
          heading: "3. بيانات محتملة في خدمة مستقبلية",
          paragraphs: [
            "لم تُحدد بعد البيانات التي ستجمعها خدمة مستقبلية فعليًا. وقد تشمل معلومات الحساب والمحتوى أو البيانات الوصفية اللازمة لتشغيل الخدمة، لكن لم تُعتمد حتى الآن قائمة شاملة أو غرض أو أساس قانوني.",
            "لا يزال يتعين تحديد الجهات المستلمة ومعالجي البيانات وعمليات النقل المحتملة خارج المنطقة المحددة وفترات الاحتفاظ وقواعد النسخ الاحتياطي وإجراءات الحذف. ولا يوجد حاليًا وعد بالحذف التلقائي أو بفترة احتفاظ محددة.",
          ],
        },
        {
          heading: "4. الحقوق والطلبات",
          paragraphs: [
            "تعتمد حقوق الأفراد وطرق ممارستها ومواعيد الرد والجهة المختصة، جزئيًا، على مكان وجود الأفراد ومشغّل الخدمة والقانون الواجب التطبيق. ويجب إضافة هذه التفاصيل ومتحكم البيانات ووسيلة اتصال صالحة قبل الإطلاق.",
            "لا توفر هذه النسخة التجريبية قناة لطلبات الوصول أو التصحيح أو المحو أو تقديم الشكاوى.",
          ],
        },
        {
          heading: "5. الخصوصية والتشفير",
          paragraphs: [
            "لا يعني وجود هذه الصفحة أن المحادثات مشفرة من طرف إلى طرف. لا تتضمن هذه النسخة نظام مراسلة أو تشفيرًا من طرف إلى طرف (E2EE). ويجب وصف أي تشفير مستقبلي وحدوده بعد التصميم التقني والمراجعة.",
          ],
        },
      ],
      relatedTitle: "صفحات ذات صلة",
      related: [
        { label: "شروط الخدمة", to: "/legal/terms" },
        { label: "مبادئ الأمان", to: "/legal/security" },
        { label: "كيفية الإبلاغ عن محتوى", to: "/legal/report" },
      ],
      backHome: "العودة إلى الصفحة الرئيسية",
    },
    community: {
      title: "إرشادات المجتمع",
      summary: "مبادئ مقترحة للمحادثات إذا أصبحت TalkChat خدمة مراسلة.",
      draftNotice:
        "مسودة — لا توفر TalkChat حاليًا المراسلة أو الإشراف. ولا يفرض نظام تشغيلي هذه الإرشادات.",
      reviewedAt: "مبادئ مقترحة — لا يوجد تاريخ سريان.",
      sections: [
        {
          heading: "الاحترام والأمان",
          paragraphs: [
            "عاملوا الآخرين باحترام. فالتهديدات والتحرش الموجّه والكراهية والترهيب والتحريض على العنف لا مكان لها في مجتمع آمن.",
            "لا تشاركوا المعلومات الخاصة بشخص آخر دون إذنه. ولا تنتحلوا شخصية الآخرين أو تحاولوا الوصول إلى حساب أو جهاز دون تصريح.",
          ],
        },
        {
          heading: "المحتوى والطلبات غير المرغوب فيها",
          paragraphs: [
            "لا ترسلوا محتوى غير قانوني أو احتيالًا أو برمجيات ضارة أو رسائل مزعجة أو طلبات متكررة غير مرغوب فيها. واحترموا حقوق النشر والحقوق الأخرى المعمول بها.",
            "هذه المبادئ مقترح تحريري. ويجب تحديد تعريفات المحتوى المحظور والاستثناءات والتدابير المحتملة وسبل الاستئناف قبل الإطلاق.",
          ],
        },
        {
          heading: "القاصرون والإبلاغ",
          paragraphs: [
            "لا تستهدفوا القاصرين على نحو غير ملائم، ولا تشاركوا صورًا أو معلومات قد تعرضهم للخطر. ويجب تصميم قواعد الحماية ومعالجة البلاغات والتصعيد بضمانات مناسبة قبل أي إطلاق عام.",
            "لا تتضمن النسخة التجريبية وظيفة للإبلاغ أو الإشراف. يُرجى الرجوع إلى الصفحة المخصصة للاطلاع على هذا القيد.",
          ],
        },
        {
          heading: "إنفاذ الإرشادات",
          paragraphs: [
            "لا يوجد في هذه النسخة فريق إشراف أو آلية حظر أو إجراء للعقوبات والاستئناف. لا تعتمدوا على هذه الإرشادات كما لو كانت تؤدي إلى تدخل فعلي.",
          ],
        },
      ],
      relatedTitle: "صفحات ذات صلة",
      related: [
        { label: "كيفية الإبلاغ عن محتوى", to: "/legal/report" },
        { label: "مبادئ الأمان", to: "/legal/security" },
        { label: "سياسة الخصوصية", to: "/legal/privacy" },
      ],
      backHome: "العودة إلى الصفحة الرئيسية",
    },
    report: {
      title: "الإبلاغ عن محتوى أو حساب",
      summary:
        "تصف المعلومات أدناه عملية مستقبلية محتملة؛ وليست نموذجًا للإبلاغ.",
      draftNotice:
        "لن يُرسل أي بلاغ: لا تتضمن TalkChat حتى الآن مراسلة أو زرًا للإبلاغ أو فريق مراجعة أو عنوان اتصال منشورًا للإبلاغ.",
      reviewedAt: "معلومات النموذج الأولي — تُراجع قبل الإطلاق.",
      sections: [
        {
          heading: "ميزة الإبلاغ غير متاحة بعد",
          paragraphs: [
            "لا ترسل هذه الصفحة بلاغًا ولا تجمع أدلة. لا تستخدموا نماذج التسجيل أو تسجيل الدخول للإبلاغ عن مشكلة؛ فهي مخصصة لمصادقة الحساب فقط.",
            "لم يُذكر عنوان بريد إلكتروني أو بيانات اتصال للإبلاغ لأنه لم يتم تحديد قناة تشغيلية. ولا يمكن لهذه الصفحة تلقي طلب أو معالجته.",
          ],
        },
        {
          heading: "معلومات ينبغي إعدادها لبلاغ مستقبلي",
          paragraphs: [
            "إذا أُطلقت خدمة تتضمن ميزة مخصصة، فقد يكون من المفيد وصف المحتوى أو الحساب المعني، ومكان ظهوره، وسبب الإبلاغ، والوقت التقريبي. لا تشاركوا إلا المعلومات الضرورية تمامًا، وتجنبوا نشر البيانات الشخصية أو المحتوى الحساس علنًا.",
          ],
        },
        {
          heading: "الحالات العاجلة",
          paragraphs: [
            "لا تراقب TalkChat هذه الصفحة ولا يمكنها الاستجابة لحالات الطوارئ. إذا كان هناك خطر وشيك، فاتصلوا بخدمات الطوارئ أو السلطات المختصة في مكان إقامتكم.",
          ],
        },
        {
          heading: "ما يجب تحديده قبل الإطلاق",
          bullets: [
            "قناة إبلاغ تشغيلية يسهل الوصول إليها.",
            "الفئات والجداول الزمنية الإرشادية وقواعد المعالجة والمعلومات المحتفَظ بها.",
            "حماية المبلّغين والإشعارات وإجراء للاستئناف.",
            "مسؤوليات المشغّل والقواعد المعمول بها في الولايات القضائية ذات الصلة.",
          ],
          paragraphs: [],
        },
      ],
      relatedTitle: "صفحات ذات صلة",
      related: [
        { label: "إرشادات المجتمع", to: "/legal/community" },
        { label: "سياسة الخصوصية", to: "/legal/privacy" },
      ],
      backHome: "العودة إلى الصفحة الرئيسية",
    },
    security: {
      title: "مبادئ الأمان",
      summary:
        "تميّز هذه الصفحة بين قيود النسخة التجريبية والأهداف التي ينبغي تصميمها قبل إنشاء خدمة حقيقية.",
      draftNotice:
        "لا يوجد ضمان للأمان: المبادئ الواردة أدناه أهداف تصميمية، ولا تصف وسائل حماية نُفذت أو خضعت للتدقيق.",
      reviewedAt: "معلومات النموذج الأولي — تُراجع قبل الإطلاق.",
      sections: [
        {
          heading: "الحالة الحالية للمشروع",
          paragraphs: [
            "يوفر Supabase Auth تسجيل الحسابات وتسجيل الدخول وإدارة الجلسات واستعادة كلمات المرور. ولا تنفذ هذه الواجهة الأمامية المراسلة أو التشفير من طرف إلى طرف أو النسخ الاحتياطية الآمنة أو الحذف التلقائي أو المراقبة أو تحديد محاولات الوصول على الخادم أو عملية الاستجابة للحوادث.",
            "إن حارس المسارات في الواجهة الأمامية ليس حدًا للتفويض ولا يحل محل الفحوص على الخادم أو سياسات RLS في Supabase. ولم تُنفذ جداول للرسائل أو الملفات الشخصية.",
          ],
        },
        {
          heading: "أهداف مقترحة لنسخة مستقبلية",
          bullets: [
            "تقليل البيانات المجمعة إلى أدنى حد وحصر الوصول فيما يلزم.",
            "حماية الحسابات والجلسات، والتحقق من الأذونات على الخادم، واختبار قواعد الوصول.",
            "استخدام اتصالات مشفرة أثناء النقل وإبقاء الأسرار خارج الشيفرة المقدمة إلى المتصفح.",
            "تقييم بروتوكول E2EE خضع لمراجعة جيدة قبل الادعاء بتوفير تشفير من طرف إلى طرف.",
            "تحديد النسخ الاحتياطية ومفاتيح الاسترداد والاحتفاظ واختبارات الاستعادة قبل الإعلان عنها.",
            "التخطيط للتحديثات والمراجعات والسجلات المحدودة والاستجابة للثغرات الأمنية.",
          ],
          paragraphs: [],
        },
        {
          heading: "القيود والتواصل بشأن الأمان",
          paragraphs: [
            "لا تمثل هذه الأهداف شهادة أو ضمانًا للحماية المطلقة. ولم يُحدد بعد المسؤول عن الأمان أو قناة الإفصاح أو الجداول الزمنية للاستجابة أو بيانات الاتصال العامة. لا تُدرجوا بيانات شخصية أو أسرارًا في نماذج النسخة التجريبية.",
          ],
        },
      ],
      relatedTitle: "صفحات ذات صلة",
      related: [
        { label: "سياسة الخصوصية", to: "/legal/privacy" },
        { label: "شروط الخدمة", to: "/legal/terms" },
        { label: "كيفية الإبلاغ عن محتوى", to: "/legal/report" },
      ],
      backHome: "العودة إلى الصفحة الرئيسية",
    },
  },
};
