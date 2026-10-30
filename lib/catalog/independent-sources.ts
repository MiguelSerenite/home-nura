/**
 * Independent testers' own overview pages, linked from the category hubs
 * of the matching locale ("Unabhängige Tests anderer Prüfstellen").
 * Homenura runs no tests: it links the testers' pages so readers can
 * check them, and never quotes their scores. Each URL was fetched (HTTP
 * 200, final URL after redirects) and its title read on SOURCES_CHECKED_ON;
 * tests/lib/catalog/independent-sources.test.ts guards the hosts.
 */
import type { Lang } from '@/lib/i18n'

export interface IndependentSource {
  publisher: string
  /** The page's own title, so the link says exactly what it opens. */
  title: string
  url: string
}

export const SOURCES_CHECKED_ON = '2026-10-30'

/** Testers a locale may link, by host. */
export const TESTER_HOSTS: Partial<Record<Lang, Record<string, string>>> = {
  de: { 'www.test.de': 'Stiftung Warentest', 'www.chip.de': 'CHIP', 'www.oekotest.de': 'ÖKO-TEST' },
}

export const INDEPENDENT_SOURCES: Readonly<Record<string, Partial<Record<Lang, readonly IndependentSource[]>>>> = {
  'airfryers': {
    de: [
      { publisher: "Stiftung Warentest", title: "Heißluftfritteusen im Test: Die besten Airfryer", url: "https://www.test.de/Heissluftfritteusen-im-Test-5115675-0/" },
      { publisher: "CHIP", title: "Die besten Heißluftfritteusen: Von unserem Testcenter geprüft", url: "https://www.chip.de/bestenlisten/Bestenliste-Heissluftfritteusen--index/index/id/4711/" },
    ],
  },
  'balances': {
    de: [
      { publisher: "Stiftung Warentest", title: "Küchenwaagen im Test: Die besten sind günstig und genau", url: "https://www.test.de/Kuechenwaagen-im-Test-5508869-0/" },
      { publisher: "CHIP", title: "Küchenwaagen: Getestete Modelle im Überblick", url: "https://www.chip.de/bestenlisten/Bestenliste-Kuechenwaagen--index/index/id/1400/" },
    ],
  },
  'prises-connectees': {
    de: [
      { publisher: "Stiftung Warentest", title: "Smart Home: Die besten smarten Steckdosen", url: "https://www.test.de/Smart-Home-Die-besten-smarten-Steckdosen-6258139-0/" },
      { publisher: "CHIP", title: "Die besten smarten Steckdosen im Test", url: "https://www.chip.de/bestenlisten/Bestenliste-Smarte-Steckdosen--index/index/id/1133/" },
    ],
  },
  'thermostats': {
    de: [
      { publisher: "Stiftung Warentest", title: "Smarte Heizkörperthermostate im Test: Klüger heizen per Handy", url: "https://www.test.de/Heizkoerperthermostat-Test-5115581-0/" },
      { publisher: "CHIP", title: "Smarte Heizkörperthermostate im Test: Geld und Energie sparen", url: "https://www.chip.de/bestenlisten/Bestenliste-Smarte-Heizkoerperthermostate--index/index/id/1450/" },
    ],
  },
  'solaire-balcon': {
    de: [
      { publisher: "Stiftung Warentest", title: "Balkonkraftwerk-Test: Die besten mit 800 Watt", url: "https://www.test.de/balkonkraftwerk-test-5501703-0/" },
    ],
  },
  'eclairage-connecte': {
    de: [
      { publisher: "Stiftung Warentest", title: "Smarte Lampen im Test: Licht auf Befehl – für unter 20 Euro", url: "https://www.test.de/Smarte-Lampen-im-Test-6072402-0/" },
    ],
  },
  'capteurs-qualite-air': {
    de: [
      { publisher: "Stiftung Warentest", title: "CO2-Messgeräte und -Ampeln im Test", url: "https://www.test.de/CO2-Messgeraete-und-CO2-Ampeln-im-Test-5709239-0/" },
    ],
  },
  'hubs-domotique': {
    de: [
      { publisher: "Stiftung Warentest", title: "Smart-Home-Systeme im Test: Mein Heim ist mein Butler", url: "https://www.test.de/Smart-Home-Systeme-im-Test-5198446-0/" },
    ],
  },
  'bornes-recharge-ve': {
    de: [
      { publisher: "Stiftung Warentest", title: "Wallboxen im Test (2022)", url: "https://www.test.de/Wallboxen-im-Test-5427770-0/" },
    ],
  },
  'sonnettes-video': {
    de: [
      { publisher: "Stiftung Warentest", title: "Smarte Türklingeln im Test: Guck mal, wer da klingelt", url: "https://www.test.de/Smarte-Tuerklingeln-im-Test-Guck-mal-wer-da-klingelt-6334627-0/" },
    ],
  },
  'cameras-interieur': {
    de: [
      { publisher: "Stiftung Warentest", title: "Überwachungskamera im Test: Schutz für innen und außen", url: "https://www.test.de/Test-Ueberwachungskameras-5231510-0/" },
      { publisher: "CHIP", title: "Die besten Überwachungskamera 2026 im Test", url: "https://www.chip.de/bestenlisten/Bestenliste-UEberwachungskameras--index/index/id/1137/" },
    ],
  },
  'cameras-exterieur': {
    de: [
      { publisher: "Stiftung Warentest", title: "Überwachungskamera im Test: Schutz für innen und außen", url: "https://www.test.de/Test-Ueberwachungskameras-5231510-0/" },
      { publisher: "CHIP", title: "Die besten Überwachungskamera 2026 im Test", url: "https://www.chip.de/bestenlisten/Bestenliste-UEberwachungskameras--index/index/id/1137/" },
    ],
  },
  'serrures-connectees': {
    de: [
      { publisher: "Stiftung Warentest", title: "Smarte Türschlösser im Test: Nicht alle sind sicher", url: "https://www.test.de/Smarte-Tuerschloesser-im-Test-Nicht-alle-sind-sicher-5655666-0/" },
      { publisher: "CHIP", title: "Smarte Türschlösser: Von unserem Testcenter geprüft", url: "https://www.chip.de/bestenlisten/Bestenliste-Smartes-Tuerschloss--index/index/id/1135/" },
    ],
  },
  'alarmes': {
    de: [
      { publisher: "Stiftung Warentest", title: "Alarmanlagen zum Selbsteinbau: Nur eine einzige Anlage ist akzeptabel", url: "https://www.test.de/Test-Alarmanlagen-4542938-0/" },
    ],
  },
  'detecteurs-fumee-co': {
    de: [
      { publisher: "Stiftung Warentest", title: "Rauchmelder im Test: Die besten Rauchwarnmelder", url: "https://www.test.de/Rauchmelder-im-Test-4957385-0/" },
      { publisher: "CHIP", title: "Rauchmelder 2026: Auf Funktion, Ausstattung und Handhabung geprüft", url: "https://www.chip.de/bestenlisten/Bestenliste-Rauchmelder--index/index/id/451/" },
    ],
  },
  'trackers-objets': {
    de: [
      { publisher: "Stiftung Warentest", title: "Bluetooth-Tracker im Test: AirTag und bessere Alternativen", url: "https://www.test.de/Bluetooth-Tracker-im-Test-AirTag-und-bessere-Alternativen-6268057-0/" },
    ],
  },
  'coffres-forts-connectes': {
    de: [
      { publisher: "Stiftung Warentest", title: "Tresore: Zwei konnten selbst wir nicht öffnen", url: "https://www.test.de/Test-Tresore-und-Safes-5243581-0/" },
    ],
  },
  'purificateurs-air': {
    de: [
      { publisher: "Stiftung Warentest", title: "Luftreiniger im Test: Keine Chance für dicke Luft", url: "https://www.test.de/Luftreiniger-im-Test-5579439-0/" },
      { publisher: "CHIP", title: "Die besten Luftreiniger laut unserem Testcenter", url: "https://www.chip.de/bestenlisten/Bestenliste-Luftreiniger--index/index/id/2222/" },
    ],
  },
  'humidificateurs': {
    de: [
      { publisher: "Stiftung Warentest", title: "Luftbefeuchter im Test: Nein zur Keimschleuder − ja zum Feuchtekick", url: "https://www.test.de/Luftbefeuchter-im-Test-Gute-Verdunster-ab-130-Euro-4957429-0/" },
      { publisher: "CHIP", title: "Vergleich: Luftbefeuchter im Test", url: "https://www.chip.de/bestenlisten/Bestenliste-Luftbefeuchter--index/index/id/1214/" },
      { publisher: "ÖKO-TEST", title: "Luftbefeuchter-Test: Fünf Bakterienschleudern entlarvt", url: "https://www.oekotest.de/bauen-wohnen/Luftbefeuchter-Test-Fuenf-Bakterienschleudern-entlarvt_111548_1.html" },
    ],
  },
  'deshumidificateurs': {
    de: [
      { publisher: "Stiftung Warentest", title: "Luftentfeuchter im Test: Was sie leisten – und was nicht", url: "https://www.test.de/Luftentfeuchter-Was-sie-leisten-und-was-nicht-5780477-0/" },
      { publisher: "ÖKO-TEST", title: "Luftentfeuchter-Test: Nur ein Raumentfeuchter \"sehr gut\"", url: "https://www.oekotest.de/bauen-wohnen/Luftentfeuchter-Test-Nur-ein-Raumentfeuchter-sehr-gut_111435_1.html" },
    ],
  },
  'climatiseurs-mobiles': {
    de: [
      { publisher: "Stiftung Warentest", title: "Mobile Klimaanlagen im Test: Flexibel, aber wenig effizient", url: "https://www.test.de/Mobile-Klimaanlagen-im-Test-Flexibel-aber-wenig-effizient-6228399-0/" },
    ],
  },
  'ventilateurs': {
    de: [
      { publisher: "Stiftung Warentest", title: "Ventilatoren im Test: Welcher macht richtig schönen Wind?", url: "https://www.test.de/Ventilatoren-im-Test-5058132-0/" },
      { publisher: "CHIP", title: "Die besten Ventilatoren im Test 2026", url: "https://www.chip.de/bestenlisten/Bestenliste-Ventilatoren--index/index/id/1337/" },
    ],
  },
  'stations-meteo': {
    de: [
      { publisher: "CHIP", title: "Wetterstationen: Bestenliste aller getesteten Modelle", url: "https://www.chip.de/bestenlisten/Bestenliste-Wetterstationen--index/index/id/511/" },
    ],
  },
  'aspirateurs-robots': {
    de: [
      { publisher: "Stiftung Warentest", title: "Saugroboter & Wischroboter im Test", url: "https://www.test.de/Saugroboter-im-Test-4806685-0/" },
      { publisher: "CHIP", title: "Saugroboter-Vergleich 2026", url: "https://www.chip.de/bestenlisten/Bestenliste-Saugroboter--index/index/id/1432/" },
      { publisher: "ÖKO-TEST", title: "Saugroboter-Test: Vorwerk, iRobot und Co. im Vergleich", url: "https://www.oekotest.de/bauen-wohnen/Saugroboter-Test-Vorwerk-iRobot-und-Co-im-Vergleich_111031_1.html" },
    ],
  },
  'aspirateurs-laveurs': {
    de: [
      { publisher: "Stiftung Warentest", title: "Saugroboter & Wischroboter im Test", url: "https://www.test.de/Saugroboter-im-Test-4806685-0/" },
    ],
  },
  'laveurs-vitres': {
    de: [
      { publisher: "Stiftung Warentest", title: "Fensterputzroboter im Test: Klare Scheiben dank putzigem Roboter", url: "https://www.test.de/Fensterputzroboter-im-Test-Klare-Scheiben-dank-putzigem-Roboter-5312221-0/" },
      { publisher: "CHIP", title: "Fensterputzroboter-Vergleich 2026", url: "https://www.chip.de/bestenlisten/Bestenliste-Fensterputzroboter--index/index/id/87424/" },
    ],
  },
  'aspirateurs-balais': {
    de: [
      { publisher: "Stiftung Warentest", title: "Staubsauger im Test: Akkustaubsauger vs. Bodenstaubsauger", url: "https://www.test.de/Staubsauger-im-Test-1838262-0/" },
      { publisher: "CHIP", title: "Akku-Staubsauger im Test 2026", url: "https://www.chip.de/bestenlisten/Bestenliste-Akku-Staubsauger--index/index/id/1478/" },
    ],
  },
  'nettoyeurs-vapeur': {
    de: [
      { publisher: "Stiftung Warentest", title: "Dampfreiniger im Test: Kärcher dampft am besten", url: "https://www.test.de/Dampfreiniger-im-Test-Kaercher-dampft-am-besten-1523412-0/" },
    ],
  },
  'fers-centrales-vapeur': {
    de: [
      { publisher: "Stiftung Warentest", title: "Dampfbügeleisen und Dampfbügelstationen im Test", url: "https://www.test.de/Buegeleisen-im-Test-5098871-0/" },
      { publisher: "CHIP", title: "Die besten Bügeleisen: Von unserem Testcenter geprüft", url: "https://www.chip.de/bestenlisten/Bestenliste-Buegeleisen--index/index/id/48925/" },
      { publisher: "ÖKO-TEST", title: "Bügeleisen im Test: Wie gut Dampfbügeleisen im Vergleich bügeln", url: "https://www.oekotest.de/bauen-wohnen/Buegeleisen-im-Test-Wie-gut-Dampfbuegeleisen-im-Vergleich-buegeln_111628_1.html" },
    ],
  },
  'lave-vaisselle-connectes': {
    de: [
      { publisher: "Stiftung Warentest", title: "Geschirrspüler im Test: Die besten Spülmaschinen", url: "https://www.test.de/Geschirrspueler-im-Test-4685888-0/" },
    ],
  },
  'lave-linge-connectes': {
    de: [
      { publisher: "Stiftung Warentest", title: "Waschmaschinen im Test: Die Besten sind gründlich, sparsam und langlebig", url: "https://www.test.de/Waschmaschinen-im-Test-4296800-0/" },
    ],
  },
  'tondeuses-robots': {
    de: [
      { publisher: "Stiftung Warentest", title: "Mähroboter im Test: Gute Rasenpflege geht auch drahtlos", url: "https://www.test.de/Maehroboter-im-Test-4698387-0/" },
      { publisher: "CHIP", title: "Die besten Mähroboter 2026", url: "https://www.chip.de/bestenlisten/Bestenliste-Maehroboter--index/index/id/2026/" },
    ],
  },
  'arrosage-connecte': {
    de: [
      { publisher: "Stiftung Warentest", title: "Bewässerungscomputer im Test: Regen nach Plan", url: "https://www.test.de/bewaesserungscomputer-test-5311365-0/" },
    ],
  },
  'robots-piscine': {
    de: [
      { publisher: "CHIP", title: "Poolroboter: Bewertete Modelle nach Note sortiert im Überblick", url: "https://www.chip.de/bestenlisten/Bestenliste-Poolroboter--index/index/id/654/" },
    ],
  },
  'stations-recharge-outdoor': {
    de: [
      { publisher: "Stiftung Warentest", title: "Powerstations im Test: Steckdosen für unterwegs", url: "https://www.test.de/Powerstation-Test-6023127-0/" },
      { publisher: "CHIP", title: "Solargenerator-Test 2026: Testsieger und Preis-Leistungs-Wertungen", url: "https://www.chip.de/bestenlisten/Bestenliste-Solargeneratoren--index/index/id/1134/" },
    ],
  },
}

export function getIndependentSources(categorySlug: string, lang: Lang): readonly IndependentSource[] {
  return INDEPENDENT_SOURCES[categorySlug]?.[lang] ?? []
}
