import Navbar from '@/components/Navbar'
import { SiteFooter } from '@/components/ui'
import Link from 'next/link'
import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'
import { resolveLang } from '@/lib/i18n'


interface CookieRow {
  name: string
  purpose: string
  duration: string
  provider: string
}

interface Section {
  heading: string
  body: string
}

interface PrivacyContent {
  title: string
  lastUpdated: string
  intro: string
  sections: Section[]
  cookiesHeading: string
  cookiesIntro: string
  cookiesTable: {
    headName: string
    headPurpose: string
    headDuration: string
    headProvider: string
    rows: CookieRow[]
  }
  rightsHeading: string
  rightsIntro: string
  rights: string[]
  contactHeading: string
  contactBody: string
  supervisoryHeading: string
  supervisoryBody: string
  backLink: string
}

const content: Record<string, PrivacyContent> = {
  fr: {
    title: 'Politique de Confidentialité',
    lastUpdated: 'Dernière mise à jour : avril 2026',
    intro: "Home Nura (édité par GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 Paris, SIRET 500 511 373 00051) respecte votre vie privée et s'engage à traiter vos données personnelles avec transparence, dans le strict respect du Règlement Général sur la Protection des Données (RGPD - Règlement UE 2016/679) et de la loi Informatique et Libertés modifiée.",
    sections: [
      {
        heading: '1. Responsable du traitement',
        body: "Le responsable du traitement est GROUPE SERENITE, SARL au capital de 15 000 €, immatriculée au RCS de Paris sous le n° 500 511 373. Directeur de la publication : Miguel MARIE. Contact : contact@homenura.com.",
      },
      {
        heading: '2. Données collectées',
        body: "Home Nura est un site éditorial sans compte utilisateur ni formulaire d'inscription. Nous ne collectons aucune donnée personnelle directe. Les seules données traitées sont : (a) les données techniques anonymisées collectées par notre hébergeur (adresse IP tronquée, type de navigateur, pages visitées) à des fins de performance et sécurité ; (b) les données de navigation anonymisées (nombre de visites, temps passé) via cookies de mesure d'audience le cas échéant ; (c) les emails que vous nous envoyez volontairement à contact@homenura.com.",
      },
      {
        heading: '3. Finalités et bases légales du traitement',
        body: "Nous traitons vos données sur les bases légales suivantes (article 6 du RGPD) : (a) Intérêt légitime (art. 6.1.f) — sécurité du site, détection des fraudes, prévention des abus, analyse statistique anonyme ; (b) Consentement (art. 6.1.a) — dépôt de cookies non essentiels (mesure d'audience, publicité), que vous pouvez accepter ou refuser via notre bandeau cookies ; (c) Exécution d'une demande (art. 6.1.b) — réponse à vos emails de contact.",
      },
      {
        heading: '4. Durées de conservation',
        body: "Logs de serveur (adresses IP tronquées) : 12 mois maximum. Emails reçus à contact@homenura.com : 3 ans à compter de la dernière interaction. Cookies techniques : durée de la session. Cookies de mesure d'audience : 13 mois maximum (recommandation CNIL). Cookies de liens affiliés Amazon : selon la politique d'Amazon (jusqu'à 24h).",
      },
      {
        heading: '5. Destinataires des données',
        body: "Vos données ne sont jamais vendues. Elles peuvent être partagées avec : notre hébergeur Vercel Inc. (États-Unis, encadré par les Clauses Contractuelles Types de la Commission européenne) pour l'exécution technique du service ; Amazon EU S.à r.l. dans le cadre du Programme Partenaires, lorsque vous cliquez sur un lien affilié ; les autorités administratives ou judiciaires sur réquisition légale.",
      },
      {
        heading: '6. Transferts hors Union européenne',
        body: "Certains sous-traitants (Vercel Inc., Amazon) peuvent traiter vos données en dehors de l'Union européenne, notamment aux États-Unis. Ces transferts sont encadrés par les garanties appropriées prévues par le RGPD (Clauses Contractuelles Types, décisions d'adéquation le cas échéant).",
      },
      {
        heading: '7. Sécurité',
        body: "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données : chiffrement TLS/HTTPS sur l'ensemble du site, en-têtes de sécurité HTTP (CSP, HSTS, X-Frame-Options), accès restreint aux logs, mises à jour régulières de l'infrastructure.",
      },
    ],
    cookiesHeading: '8. Cookies utilisés',
    cookiesIntro: 'Le tableau ci-dessous détaille les cookies déposés sur votre terminal. Les cookies non essentiels ne sont déposés qu\'après votre consentement via notre bandeau. Vous pouvez à tout moment retirer votre consentement en effaçant les cookies de votre navigateur.',
    cookiesTable: {
      headName: 'Cookie',
      headPurpose: 'Finalité',
      headDuration: 'Durée',
      headProvider: 'Émetteur',
      rows: [
        { name: 'cookie_consent', purpose: 'Mémorisation de votre choix de consentement', duration: '6 mois', provider: 'Home Nura (essentiel)' },
        { name: 'NEXT_LOCALE', purpose: 'Mémorisation de la langue choisie', duration: 'Session', provider: 'Home Nura (essentiel)' },
        { name: 'Amazon affiliate', purpose: 'Suivi du lien affilié pour attribution de commission', duration: 'Jusqu\'à 24h', provider: 'Amazon EU (tiers)' },
      ],
    },
    rightsHeading: '9. Vos droits',
    rightsIntro: "Conformément au RGPD (articles 15 à 22), vous disposez des droits suivants sur vos données personnelles :",
    rights: [
      "Droit d'accès : obtenir la confirmation que vos données sont traitées et en recevoir une copie",
      'Droit de rectification : corriger des données inexactes ou incomplètes',
      "Droit à l'effacement (« droit à l'oubli ») : demander la suppression de vos données",
      'Droit à la limitation du traitement : demander le gel temporaire du traitement',
      'Droit à la portabilité : recevoir vos données dans un format structuré et réutilisable',
      "Droit d'opposition : vous opposer au traitement fondé sur un intérêt légitime",
      "Droit de retirer votre consentement à tout moment, sans remise en cause de la licéité du traitement antérieur",
      'Droit de définir des directives post-mortem sur le sort de vos données',
    ],
    contactHeading: '10. Exercer vos droits',
    contactBody: "Pour exercer ces droits, contactez-nous à contact@homenura.com en précisant votre demande. Nous répondrons dans un délai maximal d'un mois (prorogeable de deux mois en cas de demande complexe). Une pièce d'identité pourra vous être demandée en cas de doute raisonnable sur votre identité.",
    supervisoryHeading: '11. Réclamation auprès de la CNIL',
    supervisoryBody: "Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de la Commission Nationale de l'Informatique et des Libertés (CNIL) : 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr.",
    backLink: "Retour à l'accueil",
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: April 2026',
    intro: "Home Nura (published by GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 Paris, France, SIRET 500 511 373 00051) respects your privacy and is committed to processing your personal data transparently, in strict compliance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679) and applicable national data protection laws.",
    sections: [
      {
        heading: '1. Data controller',
        body: "The data controller is GROUPE SERENITE, a French SARL (limited liability company) with share capital of €15,000, registered with the Paris Trade and Companies Register under no. 500 511 373. Publication director: Miguel MARIE. Contact: contact@homenura.com.",
      },
      {
        heading: '2. Data collected',
        body: "Home Nura is an editorial site with no user accounts or registration forms. We do not collect any direct personal data. The only data processed are: (a) anonymised technical data collected by our host (truncated IP address, browser type, pages visited) for performance and security purposes; (b) anonymised browsing data (visit count, time spent) via audience measurement cookies where applicable; (c) emails you voluntarily send to contact@homenura.com.",
      },
      {
        heading: '3. Purposes and legal bases',
        body: "We process your data on the following legal bases (GDPR article 6): (a) Legitimate interest (art. 6.1.f) — site security, fraud detection, abuse prevention, anonymous statistical analysis; (b) Consent (art. 6.1.a) — placement of non-essential cookies (audience measurement, advertising), which you can accept or decline via our cookie banner; (c) Performance of a request (art. 6.1.b) — replying to your contact emails.",
      },
      {
        heading: '4. Retention periods',
        body: "Server logs (truncated IP addresses): 12 months maximum. Emails received at contact@homenura.com: 3 years from the last interaction. Technical cookies: session duration. Audience measurement cookies: 13 months maximum (CNIL recommendation). Amazon affiliate cookies: according to Amazon's policy (up to 24 hours).",
      },
      {
        heading: '5. Data recipients',
        body: "Your data is never sold. It may be shared with: our host Vercel Inc. (United States, covered by the European Commission Standard Contractual Clauses) for technical service delivery; Amazon EU S.à r.l. under the Partner Program when you click an affiliate link; administrative or judicial authorities upon legal request.",
      },
      {
        heading: '6. Transfers outside the European Union',
        body: "Some processors (Vercel Inc., Amazon) may process your data outside the European Union, particularly in the United States. These transfers are governed by the appropriate safeguards provided by the GDPR (Standard Contractual Clauses, adequacy decisions where applicable).",
      },
      {
        heading: '7. Security',
        body: "We implement appropriate technical and organisational measures to protect your data: TLS/HTTPS encryption across the entire site, HTTP security headers (CSP, HSTS, X-Frame-Options), restricted log access, and regular infrastructure updates.",
      },
    ],
    cookiesHeading: '8. Cookies used',
    cookiesIntro: 'The table below details the cookies placed on your device. Non-essential cookies are only placed after your consent via our banner. You may withdraw consent at any time by clearing cookies in your browser.',
    cookiesTable: {
      headName: 'Cookie',
      headPurpose: 'Purpose',
      headDuration: 'Duration',
      headProvider: 'Issuer',
      rows: [
        { name: 'cookie_consent', purpose: 'Stores your consent choice', duration: '6 months', provider: 'Home Nura (essential)' },
        { name: 'NEXT_LOCALE', purpose: 'Stores your language preference', duration: 'Session', provider: 'Home Nura (essential)' },
        { name: 'Amazon affiliate', purpose: 'Tracks affiliate link for commission attribution', duration: 'Up to 24h', provider: 'Amazon EU (third party)' },
      ],
    },
    rightsHeading: '9. Your rights',
    rightsIntro: "Under the GDPR (articles 15 to 22), you have the following rights regarding your personal data:",
    rights: [
      'Right of access: obtain confirmation that your data is processed and receive a copy',
      'Right to rectification: correct inaccurate or incomplete data',
      'Right to erasure ("right to be forgotten"): request deletion of your data',
      'Right to restriction of processing: request temporary suspension',
      'Right to data portability: receive your data in a structured, reusable format',
      'Right to object: object to processing based on legitimate interest',
      'Right to withdraw consent at any time, without affecting the lawfulness of prior processing',
      'Right to define post-mortem directives on the fate of your data',
    ],
    contactHeading: '10. Exercising your rights',
    contactBody: "To exercise these rights, contact us at contact@homenura.com specifying your request. We will reply within one month (extendable by two months for complex requests). Proof of identity may be requested in case of reasonable doubt.",
    supervisoryHeading: '11. Complaint to the supervisory authority',
    supervisoryBody: "If after contacting us you believe your rights are not respected, you have the right to lodge a complaint with the French data protection authority (CNIL): 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr. You may also contact your local EU supervisory authority.",
    backLink: 'Back to home',
  },
  de: {
    title: 'Datenschutzerklärung',
    lastUpdated: 'Letzte Aktualisierung: April 2026',
    intro: "Home Nura (herausgegeben von GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 Paris, Frankreich, SIRET 500 511 373 00051) respektiert Ihre Privatsphäre und verpflichtet sich, Ihre personenbezogenen Daten transparent und in strikter Übereinstimmung mit der Datenschutz-Grundverordnung (DSGVO - Verordnung EU 2016/679) zu verarbeiten.",
    sections: [
      {
        heading: '1. Verantwortlicher',
        body: "Verantwortlich ist GROUPE SERENITE, eine französische SARL mit einem Stammkapital von 15.000 €, eingetragen im Handelsregister Paris unter der Nummer 500 511 373. Verantwortlicher Herausgeber: Miguel MARIE. Kontakt: contact@homenura.com.",
      },
      {
        heading: '2. Erhobene Daten',
        body: "Home Nura ist eine redaktionelle Website ohne Benutzerkonten oder Registrierungsformulare. Wir erheben keine direkten personenbezogenen Daten. Verarbeitet werden nur: (a) anonymisierte technische Daten, die von unserem Hoster erhoben werden (gekürzte IP-Adresse, Browsertyp, besuchte Seiten) zu Leistungs- und Sicherheitszwecken; (b) anonymisierte Browsing-Daten (Besuchszahl, Verweildauer) über Reichweiten-Cookies, sofern zutreffend; (c) E-Mails, die Sie freiwillig an contact@homenura.com senden.",
      },
      {
        heading: '3. Zwecke und Rechtsgrundlagen',
        body: "Wir verarbeiten Ihre Daten auf folgenden Rechtsgrundlagen (DSGVO Art. 6): (a) Berechtigtes Interesse (Art. 6 Abs. 1 lit. f) — Sicherheit der Website, Betrugserkennung, Missbrauchsprävention, anonyme statistische Analyse; (b) Einwilligung (Art. 6 Abs. 1 lit. a) — Setzen nicht wesentlicher Cookies (Reichweitenmessung, Werbung), die Sie über unser Cookie-Banner annehmen oder ablehnen können; (c) Erfüllung einer Anfrage (Art. 6 Abs. 1 lit. b) — Beantwortung Ihrer Kontakt-E-Mails.",
      },
      {
        heading: '4. Speicherdauer',
        body: "Serverlogs (gekürzte IP-Adressen): maximal 12 Monate. E-Mails an contact@homenura.com: 3 Jahre ab der letzten Interaktion. Technische Cookies: Sitzungsdauer. Reichweiten-Cookies: maximal 13 Monate (CNIL-Empfehlung). Amazon-Affiliate-Cookies: gemäß Amazon-Richtlinie (bis zu 24 Stunden).",
      },
      {
        heading: '5. Empfänger der Daten',
        body: "Ihre Daten werden niemals verkauft. Sie können weitergegeben werden an: unseren Hoster Vercel Inc. (USA, abgesichert durch EU-Standardvertragsklauseln) für die technische Diensterbringung; Amazon EU S.à r.l. im Rahmen des Partnerprogramms, wenn Sie auf einen Affiliate-Link klicken; Verwaltungs- oder Justizbehörden auf gesetzliche Anforderung.",
      },
      {
        heading: '6. Übermittlungen außerhalb der EU',
        body: "Einige Auftragsverarbeiter (Vercel Inc., Amazon) können Ihre Daten außerhalb der Europäischen Union verarbeiten, insbesondere in den USA. Diese Übermittlungen sind durch die in der DSGVO vorgesehenen geeigneten Garantien abgesichert (Standardvertragsklauseln, ggf. Angemessenheitsbeschlüsse).",
      },
      {
        heading: '7. Sicherheit',
        body: "Wir setzen angemessene technische und organisatorische Maßnahmen zum Schutz Ihrer Daten ein: TLS/HTTPS-Verschlüsselung auf der gesamten Website, HTTP-Sicherheitsheader (CSP, HSTS, X-Frame-Options), eingeschränkter Log-Zugriff und regelmäßige Infrastruktur-Updates.",
      },
    ],
    cookiesHeading: '8. Verwendete Cookies',
    cookiesIntro: 'Die folgende Tabelle führt die auf Ihrem Endgerät gesetzten Cookies auf. Nicht wesentliche Cookies werden erst nach Ihrer Einwilligung über unser Banner gesetzt. Sie können Ihre Einwilligung jederzeit durch Löschen der Cookies in Ihrem Browser widerrufen.',
    cookiesTable: {
      headName: 'Cookie',
      headPurpose: 'Zweck',
      headDuration: 'Dauer',
      headProvider: 'Anbieter',
      rows: [
        { name: 'cookie_consent', purpose: 'Speichert Ihre Einwilligungswahl', duration: '6 Monate', provider: 'Home Nura (essenziell)' },
        { name: 'NEXT_LOCALE', purpose: 'Speichert Ihre Sprachwahl', duration: 'Sitzung', provider: 'Home Nura (essenziell)' },
        { name: 'Amazon affiliate', purpose: 'Verfolgt den Affiliate-Link zur Provisionszuordnung', duration: 'Bis zu 24 Std.', provider: 'Amazon EU (Dritter)' },
      ],
    },
    rightsHeading: '9. Ihre Rechte',
    rightsIntro: "Gemäß DSGVO (Art. 15 bis 22) haben Sie folgende Rechte hinsichtlich Ihrer personenbezogenen Daten:",
    rights: [
      'Auskunftsrecht: Bestätigung der Verarbeitung und Erhalt einer Kopie',
      'Recht auf Berichtigung: Korrektur unrichtiger oder unvollständiger Daten',
      'Recht auf Löschung („Recht auf Vergessenwerden"): Löschung Ihrer Daten verlangen',
      'Recht auf Einschränkung der Verarbeitung: vorübergehende Aussetzung',
      'Recht auf Datenübertragbarkeit: Daten in strukturiertem, wiederverwendbarem Format erhalten',
      'Widerspruchsrecht: Widerspruch gegen Verarbeitung auf Grundlage berechtigten Interesses',
      'Recht auf Widerruf der Einwilligung jederzeit, ohne Auswirkung auf die vorherige Rechtmäßigkeit',
      'Recht, Richtlinien über den Umgang mit Ihren Daten nach Ihrem Tod festzulegen',
    ],
    contactHeading: '10. Ausübung Ihrer Rechte',
    contactBody: "Zur Ausübung dieser Rechte kontaktieren Sie uns unter contact@homenura.com mit Angabe Ihres Anliegens. Wir antworten innerhalb eines Monats (bei komplexen Anfragen um zwei Monate verlängerbar). Bei begründeten Zweifeln an Ihrer Identität kann ein Identitätsnachweis angefordert werden.",
    supervisoryHeading: '11. Beschwerde bei der Aufsichtsbehörde',
    supervisoryBody: "Wenn Sie nach unserer Kontaktaufnahme der Ansicht sind, dass Ihre Rechte nicht respektiert werden, haben Sie das Recht, eine Beschwerde bei Ihrer zuständigen Aufsichtsbehörde einzureichen. In Deutschland: die Datenschutzbehörde Ihres Bundeslandes. In Frankreich: CNIL, 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr.",
    backLink: 'Zurück zur Startseite',
  },
  es: {
    title: 'Política de Privacidad',
    lastUpdated: 'Última actualización: abril 2026',
    intro: "Home Nura (editado por GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 París, Francia, SIRET 500 511 373 00051) respeta su privacidad y se compromete a tratar sus datos personales con transparencia, en estricto cumplimiento del Reglamento General de Protección de Datos (RGPD - Reglamento UE 2016/679) y de la normativa nacional aplicable.",
    sections: [
      {
        heading: '1. Responsable del tratamiento',
        body: "El responsable del tratamiento es GROUPE SERENITE, SARL francesa con un capital social de 15.000 €, inscrita en el Registro Mercantil de París con el número 500 511 373. Director de publicación: Miguel MARIE. Contacto: contact@homenura.com.",
      },
      {
        heading: '2. Datos recopilados',
        body: "Home Nura es un sitio editorial sin cuentas de usuario ni formularios de registro. No recopilamos ningún dato personal directamente. Los únicos datos tratados son: (a) datos técnicos anonimizados recopilados por nuestro proveedor de alojamiento (dirección IP truncada, tipo de navegador, páginas visitadas) con fines de rendimiento y seguridad; (b) datos de navegación anonimizados (número de visitas, tiempo) mediante cookies de medición de audiencia cuando proceda; (c) correos electrónicos que usted envía voluntariamente a contact@homenura.com.",
      },
      {
        heading: '3. Finalidades y bases legales',
        body: "Tratamos sus datos sobre las siguientes bases legales (artículo 6 RGPD): (a) Interés legítimo (art. 6.1.f) — seguridad del sitio, detección de fraudes, prevención de abusos, análisis estadístico anónimo; (b) Consentimiento (art. 6.1.a) — colocación de cookies no esenciales (medición de audiencia, publicidad) que puede aceptar o rechazar mediante nuestro banner; (c) Ejecución de una solicitud (art. 6.1.b) — respuesta a sus correos de contacto.",
      },
      {
        heading: '4. Plazos de conservación',
        body: "Registros del servidor (IP truncadas): 12 meses máximo. Correos recibidos en contact@homenura.com: 3 años desde la última interacción. Cookies técnicas: duración de la sesión. Cookies de medición de audiencia: 13 meses máximo (recomendación AEPD/CNIL). Cookies de afiliación Amazon: según la política de Amazon (hasta 24 horas).",
      },
      {
        heading: '5. Destinatarios',
        body: "Sus datos nunca se venden. Pueden compartirse con: nuestro proveedor de alojamiento Vercel Inc. (Estados Unidos, amparado por las Cláusulas Contractuales Tipo de la Comisión Europea) para la ejecución técnica; Amazon EU S.à r.l. en el marco del Programa de Afiliados cuando hace clic en un enlace; autoridades administrativas o judiciales por requerimiento legal.",
      },
      {
        heading: '6. Transferencias fuera de la UE',
        body: "Algunos encargados (Vercel Inc., Amazon) pueden tratar sus datos fuera de la Unión Europea, especialmente en Estados Unidos. Estas transferencias están amparadas por las garantías adecuadas del RGPD (Cláusulas Contractuales Tipo, decisiones de adecuación cuando corresponda).",
      },
      {
        heading: '7. Seguridad',
        body: "Aplicamos medidas técnicas y organizativas adecuadas para proteger sus datos: cifrado TLS/HTTPS en todo el sitio, cabeceras de seguridad HTTP (CSP, HSTS, X-Frame-Options), acceso restringido a registros y actualizaciones periódicas de la infraestructura.",
      },
    ],
    cookiesHeading: '8. Cookies utilizadas',
    cookiesIntro: 'La siguiente tabla detalla las cookies colocadas en su dispositivo. Las cookies no esenciales solo se colocan tras su consentimiento mediante nuestro banner. Puede retirar su consentimiento en cualquier momento borrando las cookies de su navegador.',
    cookiesTable: {
      headName: 'Cookie',
      headPurpose: 'Finalidad',
      headDuration: 'Duración',
      headProvider: 'Emisor',
      rows: [
        { name: 'cookie_consent', purpose: 'Almacena su elección de consentimiento', duration: '6 meses', provider: 'Home Nura (esencial)' },
        { name: 'NEXT_LOCALE', purpose: 'Almacena su preferencia de idioma', duration: 'Sesión', provider: 'Home Nura (esencial)' },
        { name: 'Amazon affiliate', purpose: 'Rastrea el enlace de afiliado para atribución de comisión', duration: 'Hasta 24 h', provider: 'Amazon EU (tercero)' },
      ],
    },
    rightsHeading: '9. Sus derechos',
    rightsIntro: "Conforme al RGPD (artículos 15 a 22), dispone de los siguientes derechos sobre sus datos personales:",
    rights: [
      'Derecho de acceso: obtener confirmación del tratamiento y una copia',
      'Derecho de rectificación: corregir datos inexactos o incompletos',
      'Derecho de supresión ("derecho al olvido"): solicitar la eliminación',
      'Derecho a la limitación del tratamiento: solicitar la suspensión temporal',
      'Derecho a la portabilidad: recibir sus datos en formato estructurado',
      'Derecho de oposición: oponerse al tratamiento basado en interés legítimo',
      'Derecho a retirar su consentimiento en cualquier momento',
      'Derecho a definir directrices post mortem sobre sus datos',
    ],
    contactHeading: '10. Ejercicio de sus derechos',
    contactBody: "Para ejercer estos derechos, contáctenos en contact@homenura.com indicando su solicitud. Responderemos en un plazo máximo de un mes (prorrogable dos meses en casos complejos). Podrá solicitarse un documento de identidad en caso de duda razonable.",
    supervisoryHeading: '11. Reclamación ante la autoridad de control',
    supervisoryBody: "Si tras contactarnos considera que sus derechos no se respetan, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD - www.aepd.es) o ante su autoridad de control local. En Francia: CNIL, 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr.",
    backLink: 'Volver al inicio',
  },
  it: {
    title: 'Informativa sulla Privacy',
    lastUpdated: 'Ultimo aggiornamento: aprile 2026',
    intro: "Home Nura (edito da GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 Parigi, Francia, SIRET 500 511 373 00051) rispetta la tua privacy e si impegna a trattare i tuoi dati personali con trasparenza, nel pieno rispetto del Regolamento Generale sulla Protezione dei Dati (GDPR - Regolamento UE 2016/679) e della normativa nazionale applicabile.",
    sections: [
      {
        heading: '1. Titolare del trattamento',
        body: "Il titolare del trattamento è GROUPE SERENITE, SARL francese con capitale sociale di 15.000 €, iscritta al Registro delle Imprese di Parigi con il numero 500 511 373. Direttore della pubblicazione: Miguel MARIE. Contatto: contact@homenura.com.",
      },
      {
        heading: '2. Dati raccolti',
        body: "Home Nura è un sito editoriale senza account utente né moduli di registrazione. Non raccogliamo dati personali direttamente. I soli dati trattati sono: (a) dati tecnici anonimizzati raccolti dal nostro host (indirizzo IP troncato, tipo di browser, pagine visitate) per scopi di prestazione e sicurezza; (b) dati di navigazione anonimizzati (numero di visite, tempo) tramite cookie di misurazione dell'audience ove applicabile; (c) email che invii volontariamente a contact@homenura.com.",
      },
      {
        heading: '3. Finalità e basi giuridiche',
        body: "Trattiamo i tuoi dati sulle seguenti basi giuridiche (art. 6 GDPR): (a) Legittimo interesse (art. 6.1.f) — sicurezza del sito, rilevamento frodi, prevenzione abusi, analisi statistiche anonime; (b) Consenso (art. 6.1.a) — installazione di cookie non essenziali (misurazione audience, pubblicità) che puoi accettare o rifiutare tramite il nostro banner; (c) Esecuzione di una richiesta (art. 6.1.b) — risposta alle tue email di contatto.",
      },
      {
        heading: '4. Periodi di conservazione',
        body: "Log del server (IP troncati): massimo 12 mesi. Email ricevute a contact@homenura.com: 3 anni dall'ultima interazione. Cookie tecnici: durata della sessione. Cookie di misurazione audience: massimo 13 mesi (raccomandazione Garante/CNIL). Cookie affiliati Amazon: secondo la politica di Amazon (fino a 24 ore).",
      },
      {
        heading: '5. Destinatari',
        body: "I tuoi dati non vengono mai venduti. Possono essere condivisi con: il nostro host Vercel Inc. (Stati Uniti, coperto dalle Clausole Contrattuali Standard della Commissione Europea) per l'esecuzione tecnica; Amazon EU S.à r.l. nell'ambito del Programma Affiliazione quando clicchi su un link; autorità amministrative o giudiziarie su richiesta legale.",
      },
      {
        heading: '6. Trasferimenti extra-UE',
        body: "Alcuni responsabili del trattamento (Vercel Inc., Amazon) possono trattare i tuoi dati al di fuori dell'Unione Europea, in particolare negli Stati Uniti. Questi trasferimenti sono disciplinati dalle garanzie appropriate previste dal GDPR (Clausole Contrattuali Standard, decisioni di adeguatezza ove applicabili).",
      },
      {
        heading: '7. Sicurezza',
        body: "Adottiamo misure tecniche e organizzative adeguate per proteggere i tuoi dati: cifratura TLS/HTTPS su tutto il sito, header di sicurezza HTTP (CSP, HSTS, X-Frame-Options), accesso limitato ai log e aggiornamenti regolari dell'infrastruttura.",
      },
    ],
    cookiesHeading: '8. Cookie utilizzati',
    cookiesIntro: 'La tabella sottostante elenca i cookie installati sul tuo dispositivo. I cookie non essenziali vengono installati solo dopo il tuo consenso tramite il nostro banner. Puoi ritirare il consenso in qualsiasi momento cancellando i cookie dal tuo browser.',
    cookiesTable: {
      headName: 'Cookie',
      headPurpose: 'Finalità',
      headDuration: 'Durata',
      headProvider: 'Emittente',
      rows: [
        { name: 'cookie_consent', purpose: 'Memorizza la tua scelta di consenso', duration: '6 mesi', provider: 'Home Nura (essenziale)' },
        { name: 'NEXT_LOCALE', purpose: 'Memorizza la preferenza di lingua', duration: 'Sessione', provider: 'Home Nura (essenziale)' },
        { name: 'Amazon affiliate', purpose: 'Traccia il link affiliato per attribuzione della commissione', duration: 'Fino a 24h', provider: 'Amazon EU (terzo)' },
      ],
    },
    rightsHeading: '9. I tuoi diritti',
    rightsIntro: "Ai sensi del GDPR (articoli da 15 a 22), hai i seguenti diritti sui tuoi dati personali:",
    rights: [
      'Diritto di accesso: ottenere conferma del trattamento e ricevere una copia',
      'Diritto di rettifica: correggere dati inesatti o incompleti',
      'Diritto alla cancellazione ("diritto all\'oblio"): richiedere la rimozione',
      'Diritto alla limitazione del trattamento: sospensione temporanea',
      'Diritto alla portabilità: ricevere i dati in formato strutturato',
      'Diritto di opposizione: opporsi al trattamento basato sul legittimo interesse',
      'Diritto di revocare il consenso in qualsiasi momento',
      'Diritto di definire direttive post mortem sui tuoi dati',
    ],
    contactHeading: '10. Esercizio dei diritti',
    contactBody: "Per esercitare questi diritti, contattaci a contact@homenura.com specificando la tua richiesta. Risponderemo entro un mese (prorogabile di due mesi per richieste complesse). Un documento d'identità potrà essere richiesto in caso di ragionevole dubbio.",
    supervisoryHeading: '11. Reclamo all\'autorità di controllo',
    supervisoryBody: "Se dopo averci contattato ritieni che i tuoi diritti non siano rispettati, hai il diritto di presentare reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it) o all'autorità di controllo locale. In Francia: CNIL, 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr.",
    backLink: 'Torna alla home',
  },
  nl: {
    title: 'Privacybeleid',
    lastUpdated: 'Laatst bijgewerkt: april 2026',
    intro: "Home Nura (uitgegeven door GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 Parijs, Frankrijk, SIRET 500 511 373 00051) respecteert uw privacy en verbindt zich ertoe uw persoonsgegevens transparant te verwerken, in strikte naleving van de Algemene Verordening Gegevensbescherming (AVG - Verordening EU 2016/679) en de toepasselijke nationale wetgeving.",
    sections: [
      {
        heading: '1. Verwerkingsverantwoordelijke',
        body: "De verwerkingsverantwoordelijke is GROUPE SERENITE, een Franse SARL met een maatschappelijk kapitaal van € 15.000, ingeschreven in het handelsregister van Parijs onder nummer 500 511 373. Verantwoordelijke uitgever: Miguel MARIE. Contact: contact@homenura.com.",
      },
      {
        heading: '2. Verzamelde gegevens',
        body: "Home Nura is een redactionele website zonder gebruikersaccounts of registratieformulieren. Wij verzamelen geen persoonsgegevens rechtstreeks. De enige verwerkte gegevens zijn: (a) geanonimiseerde technische gegevens verzameld door onze hoster (afgekort IP-adres, browsertype, bezochte pagina's) voor prestatie- en beveiligingsdoeleinden; (b) geanonimiseerde navigatiegegevens (aantal bezoeken, tijdsduur) via analytische cookies waar van toepassing; (c) e-mails die u vrijwillig naar contact@homenura.com stuurt.",
      },
      {
        heading: '3. Doeleinden en rechtsgronden',
        body: "Wij verwerken uw gegevens op de volgende rechtsgronden (AVG artikel 6): (a) Gerechtvaardigd belang (art. 6.1.f) — beveiliging van de site, fraudedetectie, misbruikpreventie, anonieme statistische analyse; (b) Toestemming (art. 6.1.a) — plaatsen van niet-essentiële cookies (analytische, reclame) die u kunt accepteren of weigeren via onze cookiebanner; (c) Uitvoering van een verzoek (art. 6.1.b) — beantwoorden van uw contact-e-mails.",
      },
      {
        heading: '4. Bewaartermijnen',
        body: "Serverlogs (afgekorte IP-adressen): maximaal 12 maanden. E-mails ontvangen op contact@homenura.com: 3 jaar na de laatste interactie. Technische cookies: sessieduur. Analytische cookies: maximaal 13 maanden (aanbeveling AP/CNIL). Amazon affiliate-cookies: volgens het beleid van Amazon (tot 24 uur).",
      },
      {
        heading: '5. Ontvangers',
        body: "Uw gegevens worden nooit verkocht. Ze kunnen worden gedeeld met: onze hoster Vercel Inc. (Verenigde Staten, gedekt door de Standaardcontractbepalingen van de Europese Commissie) voor technische dienstverlening; Amazon EU S.à r.l. in het kader van het Partnerprogramma wanneer u op een link klikt; bestuurlijke of gerechtelijke autoriteiten op wettelijk verzoek.",
      },
      {
        heading: '6. Doorgifte buiten de EU',
        body: "Sommige verwerkers (Vercel Inc., Amazon) kunnen uw gegevens buiten de Europese Unie verwerken, met name in de Verenigde Staten. Deze doorgiften zijn gedekt door de passende waarborgen van de AVG (Standaardcontractbepalingen, adequaatheidsbesluiten waar van toepassing).",
      },
      {
        heading: '7. Beveiliging',
        body: "Wij nemen passende technische en organisatorische maatregelen om uw gegevens te beschermen: TLS/HTTPS-versleuteling over de hele site, HTTP-beveiligingsheaders (CSP, HSTS, X-Frame-Options), beperkte toegang tot logs en regelmatige infrastructuurupdates.",
      },
    ],
    cookiesHeading: '8. Gebruikte cookies',
    cookiesIntro: 'De onderstaande tabel geeft een overzicht van de cookies die op uw apparaat worden geplaatst. Niet-essentiële cookies worden pas geplaatst na uw toestemming via onze banner. U kunt uw toestemming op elk moment intrekken door de cookies in uw browser te verwijderen.',
    cookiesTable: {
      headName: 'Cookie',
      headPurpose: 'Doel',
      headDuration: 'Duur',
      headProvider: 'Uitgever',
      rows: [
        { name: 'cookie_consent', purpose: 'Slaat uw toestemmingskeuze op', duration: '6 maanden', provider: 'Home Nura (essentieel)' },
        { name: 'NEXT_LOCALE', purpose: 'Slaat uw taalvoorkeur op', duration: 'Sessie', provider: 'Home Nura (essentieel)' },
        { name: 'Amazon affiliate', purpose: 'Volgt de affiliate-link voor commissieattributie', duration: 'Tot 24 uur', provider: 'Amazon EU (derde)' },
      ],
    },
    rightsHeading: '9. Uw rechten',
    rightsIntro: "Krachtens de AVG (artikelen 15 tot 22) heeft u de volgende rechten met betrekking tot uw persoonsgegevens:",
    rights: [
      'Recht op inzage: bevestiging van verwerking en ontvangst van een kopie',
      'Recht op rectificatie: correctie van onjuiste of onvolledige gegevens',
      'Recht op wissing ("recht om vergeten te worden"): verwijdering aanvragen',
      'Recht op beperking van de verwerking: tijdelijke opschorting',
      'Recht op gegevensoverdraagbaarheid: gegevens ontvangen in gestructureerd formaat',
      'Recht van bezwaar: bezwaar tegen verwerking op basis van gerechtvaardigd belang',
      'Recht om toestemming op elk moment in te trekken',
      'Recht om richtlijnen post mortem over uw gegevens vast te leggen',
    ],
    contactHeading: '10. Uitoefening van uw rechten',
    contactBody: "Om deze rechten uit te oefenen, neem contact met ons op via contact@homenura.com met vermelding van uw verzoek. Wij antwoorden binnen één maand (verlengbaar met twee maanden voor complexe verzoeken). Een identiteitsbewijs kan worden gevraagd bij redelijke twijfel.",
    supervisoryHeading: '11. Klacht bij de toezichthoudende autoriteit',
    supervisoryBody: "Als u na contact met ons van mening bent dat uw rechten niet worden gerespecteerd, heeft u het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (www.autoriteitpersoonsgegevens.nl) of uw lokale toezichthoudende autoriteit. In Frankrijk: CNIL, 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr.",
    backLink: 'Terug naar home',
  },
  pl: {
    title: 'Polityka prywatności',
    lastUpdated: 'Ostatnia aktualizacja: kwiecień 2026',
    intro: 'Serwis Home Nura (wydawca: GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 Paris, SIRET 500 511 373 00051) szanuje Twoją prywatność i zobowiązuje się przetwarzać Twoje dane osobowe w sposób przejrzysty i ściśle zgodny z ogólnym rozporządzeniem o ochronie danych (RODO – rozporządzenie UE 2016/679) oraz francuską ustawą o ochronie danych osobowych (loi Informatique et Libertés) w aktualnym brzmieniu.',
    sections: [
      {
        heading: '1. Administrator danych',
        body: 'Administratorem danych jest GROUPE SERENITE, spółka SARL o kapitale zakładowym 15 000 euro, wpisana do Rejestru Handlowego i Spółek w Paryżu (RCS Paris) pod numerem 500 511 373. Osoba odpowiedzialna za publikację: Miguel MARIE. Kontakt: contact@homenura.com.',
      },
      {
        heading: '2. Zbierane dane',
        body: 'Home Nura to serwis redakcyjny bez kont użytkowników i formularzy rejestracyjnych. Nie zbieramy bezpośrednio żadnych danych osobowych. Przetwarzamy wyłącznie: (a) zanonimizowane dane techniczne zbierane przez naszego dostawcę hostingu (skrócony adres IP, typ przeglądarki, odwiedzone strony) w celu zapewnienia wydajności i bezpieczeństwa serwisu; (b) zanonimizowane dane o korzystaniu z serwisu (liczba odwiedzin, czas spędzony na stronie) zbierane za pomocą analitycznych plików cookie, jeśli są stosowane; (c) wiadomości e-mail, które dobrowolnie wysyłasz na adres contact@homenura.com.',
      },
      {
        heading: '3. Cele i podstawy prawne przetwarzania',
        body: 'Przetwarzamy Twoje dane na następujących podstawach prawnych (art. 6 RODO): (a) prawnie uzasadniony interes (art. 6 ust. 1 lit. f) — bezpieczeństwo serwisu, wykrywanie oszustw, zapobieganie nadużyciom, anonimowa analiza statystyczna; (b) zgoda (art. 6 ust. 1 lit. a) — zapisywanie plików cookie innych niż niezbędne (analityka, reklama), na które możesz się zgodzić lub nie za pomocą naszego banera dotyczącego plików cookie; (c) działania podejmowane na Twoje żądanie (art. 6 ust. 1 lit. b) — odpowiedzi na wiadomości, które do nas wysyłasz.',
      },
      {
        heading: '4. Okresy przechowywania',
        body: 'Logi serwera (skrócone adresy IP): maksymalnie 12 miesięcy. Wiadomości e-mail otrzymane na adres contact@homenura.com: 3 lata od ostatniego kontaktu. Techniczne pliki cookie: do końca sesji. Analityczne pliki cookie: maksymalnie 13 miesięcy (zalecenie francuskiego organu ochrony danych CNIL). Pliki cookie linków afiliacyjnych Amazon: zgodnie z polityką Amazon (do 24 godz.).',
      },
      {
        heading: '5. Odbiorcy danych',
        body: 'Nigdy nie sprzedajemy Twoich danych. Możemy je udostępniać: naszemu dostawcy hostingu, firmie Vercel Inc. (Stany Zjednoczone, na podstawie standardowych klauzul umownych Komisji Europejskiej), w celu technicznego zapewnienia działania serwisu; spółce Amazon EU S.à r.l. w ramach Programu Partnerskiego, gdy klikniesz link afiliacyjny; organom administracji lub sądom, jeśli zażądają tego na podstawie przepisów prawa.',
      },
      {
        heading: '6. Przekazywanie danych poza Unię Europejską',
        body: 'Niektóre podmioty przetwarzające (Vercel Inc., Amazon) mogą przetwarzać Twoje dane poza Unią Europejską, w szczególności w Stanach Zjednoczonych. Takie przekazywanie danych odbywa się z zastosowaniem odpowiednich zabezpieczeń przewidzianych w RODO (standardowe klauzule umowne, a w stosownych przypadkach decyzje stwierdzające odpowiedni stopień ochrony).',
      },
      {
        heading: '7. Bezpieczeństwo',
        body: 'Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane: szyfrowanie TLS/HTTPS w całym serwisie, nagłówki bezpieczeństwa HTTP (CSP, HSTS, X-Frame-Options), ograniczony dostęp do logów i regularne aktualizacje infrastruktury.',
      },
    ],
    cookiesHeading: '8. Używane pliki cookie',
    cookiesIntro: 'Poniższa tabela opisuje pliki cookie zapisywane na Twoim urządzeniu. Pliki cookie inne niż niezbędne zapisujemy dopiero wtedy, gdy wyrazisz na to zgodę za pomocą naszego banera. W każdej chwili możesz wycofać zgodę, usuwając pliki cookie w przeglądarce.',
    cookiesTable: {
      headName: 'Plik cookie',
      headPurpose: 'Cel',
      headDuration: 'Czas trwania',
      headProvider: 'Dostawca',
      rows: [
        {
          name: 'cookie_consent',
          purpose: 'Zapamiętanie Twojej decyzji w sprawie zgody',
          duration: '6 miesięcy',
          provider: 'Home Nura (niezbędne)',
        },
        {
          name: 'NEXT_LOCALE',
          purpose: 'Zapamiętanie wybranego języka',
          duration: 'Do końca sesji',
          provider: 'Home Nura (niezbędne)',
        },
        {
          name: 'Amazon affiliate',
          purpose: 'Śledzenie linku afiliacyjnego w celu przypisania prowizji',
          duration: 'Do 24 godz.',
          provider: 'Amazon EU (strona trzecia)',
        },
      ],
    },
    rightsHeading: '9. Twoje prawa',
    rightsIntro: 'Zgodnie z RODO (art. 15–22) przysługują Ci następujące prawa dotyczące Twoich danych osobowych:',
    rights: [
      'Prawo dostępu: uzyskanie potwierdzenia, że Twoje dane są przetwarzane, oraz otrzymanie ich kopii',
      'Prawo do sprostowania: poprawienie danych nieprawidłowych lub niekompletnych',
      'Prawo do usunięcia danych („prawo do bycia zapomnianym”): żądanie usunięcia Twoich danych',
      'Prawo do ograniczenia przetwarzania: żądanie tymczasowego wstrzymania przetwarzania',
      'Prawo do przenoszenia danych: otrzymanie swoich danych w ustrukturyzowanym formacie, który nadaje się do ponownego wykorzystania',
      'Prawo do sprzeciwu: możliwość sprzeciwienia się przetwarzaniu opartemu na prawnie uzasadnionym interesie',
      'Prawo do wycofania zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego dokonano przed jej wycofaniem',
      'Prawo do określenia, co ma się stać z Twoimi danymi po Twojej śmierci',
    ],
    contactHeading: '10. Jak skorzystać ze swoich praw',
    contactBody: 'Aby skorzystać z tych praw, napisz do nas na adres contact@homenura.com i opisz, czego dotyczy Twoje żądanie. Odpowiemy najpóźniej w ciągu miesiąca; w przypadku złożonego żądania termin ten może zostać przedłużony o kolejne dwa miesiące. Jeśli będziemy mieć uzasadnione wątpliwości co do Twojej tożsamości, możemy poprosić o dokument tożsamości.',
    supervisoryHeading: '11. Skarga do CNIL',
    supervisoryBody: 'Jeśli po kontakcie z nami uważasz, że Twoje prawa nie są przestrzegane, masz prawo wnieść skargę do francuskiego organu ochrony danych — Commission Nationale de l\'Informatique et des Libertés (CNIL): 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr. Możesz też złożyć skargę do organu nadzorczego w państwie UE, w którym mieszkasz.',
    backLink: 'Powrót do strony głównej',
  },
  sv: {
    title: 'Integritetspolicy',
    lastUpdated: 'Senast uppdaterad: april 2026',
    intro: 'Home Nura (som ges ut av GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 Paris, Frankrike, SIRET 500 511 373 00051) respekterar din integritet och behandlar dina personuppgifter öppet och i full överensstämmelse med dataskyddsförordningen (GDPR – EU-förordning 2016/679) och den franska dataskyddslagen (loi Informatique et Libertés) i dess ändrade lydelse.',
    sections: [
      {
        heading: '1. Personuppgiftsansvarig',
        body: 'Personuppgiftsansvarig är GROUPE SERENITE, ett franskt bolag med begränsat ansvar (SARL) med ett aktiekapital på 15 000 euro, registrerat i handels- och bolagsregistret i Paris (RCS) under nummer 500 511 373. Ansvarig för publiceringen: Miguel MARIE. Kontakt: contact@homenura.com.',
      },
      {
        heading: '2. Uppgifter som samlas in',
        body: 'Home Nura är en redaktionell webbplats utan användarkonton och utan registreringsformulär. Vi samlar inte in några personuppgifter direkt. De enda uppgifter som behandlas är: (a) anonymiserade tekniska uppgifter som vår webbhotellsleverantör samlar in (avkortad IP-adress, typ av webbläsare, besökta sidor) för prestanda och säkerhet; (b) anonymiserade uppgifter om hur webbplatsen används (antal besök, tid på sidan) via cookies för besöksstatistik, i förekommande fall; (c) mejl som du själv väljer att skicka till contact@homenura.com.',
      },
      {
        heading: '3. Ändamål och rättslig grund för behandlingen',
        body: 'Vi behandlar dina uppgifter med stöd av följande rättsliga grunder (artikel 6 i GDPR): (a) berättigat intresse (art. 6.1 f) – webbplatsens säkerhet, upptäckt av bedrägerier, förebyggande av missbruk och anonym statistisk analys; (b) samtycke (art. 6.1 a) – placering av cookies som inte är nödvändiga (besöksstatistik, annonsering), som du kan godkänna eller avvisa i vår cookiebanner; (c) hantering av en förfrågan (art. 6.1 b) – svar på mejl som du skickar till oss.',
      },
      {
        heading: '4. Lagringstid',
        body: 'Serverloggar (avkortade IP-adresser): högst 12 månader. Mejl till contact@homenura.com: 3 år från den senaste kontakten. Tekniska cookies: så länge sessionen pågår. Cookies för besöksstatistik: högst 13 månader (rekommendation från den franska dataskyddsmyndigheten CNIL). Cookies från Amazons affiliatelänkar: enligt Amazons policy (upp till 24 timmar).',
      },
      {
        heading: '5. Mottagare av uppgifterna',
        body: 'Dina uppgifter säljs aldrig. De kan delas med: vår webbhotellsleverantör Vercel Inc. (USA, omfattas av EU-kommissionens standardavtalsklausuler) för den tekniska driften av tjänsten; Amazon EU S.à r.l. inom ramen för Amazons partnerprogram, när du klickar på en affiliatelänk; förvaltningsmyndigheter eller rättsliga myndigheter när lagen kräver det.',
      },
      {
        heading: '6. Överföring till länder utanför EU',
        body: 'Vissa personuppgiftsbiträden (Vercel Inc., Amazon) kan behandla dina uppgifter utanför Europeiska unionen, särskilt i USA. Överföringarna omfattas av de lämpliga skyddsåtgärder som GDPR föreskriver (standardavtalsklausuler och, i förekommande fall, beslut om adekvat skyddsnivå).',
      },
      {
        heading: '7. Säkerhet',
        body: 'Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina uppgifter: TLS/HTTPS-kryptering på hela webbplatsen, HTTP-huvuden för säkerhet (CSP, HSTS, X-Frame-Options), begränsad åtkomst till loggarna och regelbundna uppdateringar av infrastrukturen.',
      },
    ],
    cookiesHeading: '8. Cookies som används',
    cookiesIntro: 'Tabellen nedan visar vilka cookies som placeras på din enhet. Cookies som inte är nödvändiga placeras först när du har gett ditt samtycke i vår banner. Du kan när som helst återkalla ditt samtycke genom att radera cookies i webbläsaren.',
    cookiesTable: {
      headName: 'Cookie',
      headPurpose: 'Ändamål',
      headDuration: 'Lagringstid',
      headProvider: 'Leverantör',
      rows: [
        {
          name: 'cookie_consent',
          purpose: 'Sparar ditt val om samtycke',
          duration: '6 månader',
          provider: 'Home Nura (nödvändig)',
        },
        {
          name: 'NEXT_LOCALE',
          purpose: 'Sparar det språk du har valt',
          duration: 'Session',
          provider: 'Home Nura (nödvändig)',
        },
        {
          name: 'Amazon affiliate',
          purpose: 'Spårar affiliatelänken så att provisionen kan tillskrivas rätt webbplats',
          duration: 'Upp till 24 timmar',
          provider: 'Amazon EU (tredje part)',
        },
      ],
    },
    rightsHeading: '9. Dina rättigheter',
    rightsIntro: 'Enligt GDPR (artiklarna 15–22) har du följande rättigheter när det gäller dina personuppgifter:',
    rights: [
      'Rätt till tillgång: få bekräftat att dina uppgifter behandlas och få en kopia av dem',
      'Rätt till rättelse: få felaktiga eller ofullständiga uppgifter korrigerade',
      'Rätt till radering (”rätten att bli bortglömd”): begära att dina uppgifter raderas',
      'Rätt till begränsning av behandling: begära att behandlingen tillfälligt stoppas',
      'Rätt till dataportabilitet: få ut dina uppgifter i ett strukturerat format som går att återanvända',
      'Rätt att invända: invända mot behandling som grundar sig på berättigat intresse',
      'Rätt att när som helst återkalla ditt samtycke, utan att det påverkar lagligheten i den behandling som skett dessförinnan',
      'Rätt att lämna anvisningar om vad som ska hända med dina uppgifter efter din död (en rättighet enligt fransk lag)',
    ],
    contactHeading: '10. Så utövar du dina rättigheter',
    contactBody: 'Vill du utöva dina rättigheter kontaktar du oss på contact@homenura.com och beskriver din begäran. Vi svarar inom högst en månad (tidsfristen kan förlängas med två månader om begäran är komplicerad). Om det finns rimliga tvivel om vem du är kan vi be dig styrka din identitet.',
    supervisoryHeading: '11. Klagomål till en tillsynsmyndighet',
    supervisoryBody: 'Om du, efter att ha kontaktat oss, anser att dina rättigheter inte respekteras har du rätt att lämna in ett klagomål till den franska dataskyddsmyndigheten, Commission Nationale de l\'Informatique et des Libertés (CNIL): 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 – www.cnil.fr. Du kan också vända dig till dataskyddsmyndigheten i det EU-land där du bor.',
    backLink: 'Tillbaka till startsidan',
  },
  us: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: April 2026',
    intro: 'Home Nura (published by GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 Paris, France, SIRET 500 511 373 00051) respects your privacy and is committed to processing your personal data transparently, in strict compliance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679) and applicable national data protection laws.',
    sections: [
      {
        heading: '1. Data controller',
        body: 'The data controller is GROUPE SERENITE, a French SARL (limited liability company) with share capital of €15,000, registered with the Paris Trade and Companies Register under no. 500 511 373. Publication director: Miguel MARIE. Contact: contact@homenura.com.',
      },
      {
        heading: '2. Data collected',
        body: 'Home Nura is an editorial site with no user accounts or registration forms. We do not collect any personal data directly. The only data processed are: (a) anonymized technical data collected by our host (truncated IP address, browser type, pages visited) for performance and security purposes; (b) anonymized browsing data (number of visits, time spent) via audience measurement cookies, where applicable; (c) emails you choose to send to contact@homenura.com.',
      },
      {
        heading: '3. Purposes and legal bases',
        body: 'We process your data on the following legal bases (GDPR article 6): (a) Legitimate interest (art. 6.1.f) — site security, fraud detection, abuse prevention, anonymous statistical analysis; (b) Consent (art. 6.1.a) — placement of non-essential cookies (audience measurement, advertising), which you can accept or decline via our cookie banner; (c) Performance of a request (art. 6.1.b) — replying to your contact emails.',
      },
      {
        heading: '4. Retention periods',
        body: 'Server logs (truncated IP addresses): 12 months maximum. Emails received at contact@homenura.com: 3 years from the last interaction. Technical cookies: session duration. Audience measurement cookies: 13 months maximum (CNIL recommendation). Amazon affiliate cookies: according to Amazon\'s policy (up to 24 hours).',
      },
      {
        heading: '5. Data recipients',
        body: 'Your data is never sold. It may be shared with: our host, Vercel Inc. (United States, covered by the European Commission\'s Standard Contractual Clauses), to deliver the service technically; Amazon EU S.à r.l., as part of the Amazon Associates program, when you click an affiliate link; and administrative or judicial authorities in response to a lawful request.',
      },
      {
        heading: '6. Transfers outside the European Union',
        body: 'Some processors (Vercel Inc., Amazon) may process your data outside the European Union, particularly in the United States. These transfers are governed by the appropriate safeguards provided by the GDPR (Standard Contractual Clauses, adequacy decisions where applicable).',
      },
      {
        heading: '7. Security',
        body: 'We implement appropriate technical and organizational measures to protect your data: TLS/HTTPS encryption across the entire site, HTTP security headers (CSP, HSTS, X-Frame-Options), restricted access to logs and regular infrastructure updates.',
      },
    ],
    cookiesHeading: '8. Cookies used',
    cookiesIntro: 'The table below details the cookies placed on your device. Non-essential cookies are only placed after your consent via our banner. You may withdraw consent at any time by clearing cookies in your browser.',
    cookiesTable: {
      headName: 'Cookie',
      headPurpose: 'Purpose',
      headDuration: 'Duration',
      headProvider: 'Issuer',
      rows: [
        {
          name: 'cookie_consent',
          purpose: 'Stores your consent choice',
          duration: '6 months',
          provider: 'Home Nura (essential)',
        },
        {
          name: 'NEXT_LOCALE',
          purpose: 'Stores your language preference',
          duration: 'Session',
          provider: 'Home Nura (essential)',
        },
        {
          name: 'Amazon affiliate',
          purpose: 'Tracks the affiliate link to attribute the commission',
          duration: 'Up to 24 hours',
          provider: 'Amazon EU (third party)',
        },
      ],
    },
    rightsHeading: '9. Your rights',
    rightsIntro: 'Under the GDPR (articles 15 to 22), you have the following rights regarding your personal data:',
    rights: [
      'Right of access: obtain confirmation that your data is processed and receive a copy',
      'Right to rectification: correct inaccurate or incomplete data',
      'Right to erasure ("right to be forgotten"): request deletion of your data',
      'Right to restriction of processing: request temporary suspension',
      'Right to data portability: receive your data in a structured, reusable format',
      'Right to object: object to processing based on legitimate interest',
      'Right to withdraw consent at any time, without affecting the lawfulness of prior processing',
      'Right to define post-mortem directives on the fate of your data',
    ],
    contactHeading: '10. Exercising your rights',
    contactBody: 'To exercise these rights, email us at contact@homenura.com and describe your request. We will reply within one month (extendable by two months for complex requests). If there is reasonable doubt about your identity, we may ask for proof of identity.',
    supervisoryHeading: '11. Complaint to the supervisory authority',
    supervisoryBody: 'If, after contacting us, you believe your rights have not been respected, you have the right to file a complaint with the French data protection authority (CNIL): 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr. If you live in the EU, you may also contact the supervisory authority in your own country.',
    backLink: 'Back to home',
  },
  ca: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated: April 2026',
    intro: 'Home Nura (published by GROUPE SERENITE, SARL, 60 Rue François 1er, 75008 Paris, France, SIRET 500 511 373 00051) respects your privacy and is committed to processing your personal data transparently, in strict compliance with the General Data Protection Regulation (GDPR - EU Regulation 2016/679) and applicable national data protection laws.',
    sections: [
      {
        heading: '1. Data controller',
        body: 'The data controller is GROUPE SERENITE, a French SARL (limited liability company) with share capital of €15,000, registered with the Paris Trade and Companies Register under no. 500 511 373. Publication director: Miguel MARIE. Contact: contact@homenura.com.',
      },
      {
        heading: '2. Data collected',
        body: 'Home Nura is an editorial site with no user accounts or registration forms. We do not collect any direct personal data. The only data processed are: (a) anonymized technical data collected by our host (truncated IP address, browser type, pages visited) for performance and security purposes; (b) anonymized browsing data (visit count, time spent) via audience measurement cookies where applicable; (c) emails you voluntarily send to contact@homenura.com.',
      },
      {
        heading: '3. Purposes and legal bases',
        body: 'We process your data on the following legal bases (GDPR article 6): (a) Legitimate interest (art. 6.1.f) — site security, fraud detection, abuse prevention, anonymous statistical analysis; (b) Consent (art. 6.1.a) — placement of non-essential cookies (audience measurement, advertising), which you can accept or decline via our cookie banner; (c) Performance of a request (art. 6.1.b) — replying to your contact emails.',
      },
      {
        heading: '4. Retention periods',
        body: 'Server logs (truncated IP addresses): 12 months maximum. Emails received at contact@homenura.com: 3 years from the last interaction. Technical cookies: session duration. Audience measurement cookies: 13 months maximum (CNIL recommendation). Amazon affiliate cookies: according to Amazon\'s policy (up to 24 hours).',
      },
      {
        heading: '5. Data recipients',
        body: 'Your data is never sold. It may be shared with: our host Vercel Inc. (United States, covered by the European Commission Standard Contractual Clauses) for technical service delivery; Amazon EU S.à r.l. under the Partner Program when you click an affiliate link; administrative or judicial authorities upon legal request.',
      },
      {
        heading: '6. Transfers outside the European Union',
        body: 'Some processors (Vercel Inc., Amazon) may process your data outside the European Union, particularly in the United States. These transfers are governed by the appropriate safeguards provided by the GDPR (Standard Contractual Clauses, adequacy decisions where applicable).',
      },
      {
        heading: '7. Security',
        body: 'We implement appropriate technical and organizational measures to protect your data: TLS/HTTPS encryption across the entire site, HTTP security headers (CSP, HSTS, X-Frame-Options), restricted log access, and regular infrastructure updates.',
      },
    ],
    cookiesHeading: '8. Cookies used',
    cookiesIntro: 'The table below details the cookies placed on your device. Non-essential cookies are only placed after your consent via our banner. You may withdraw consent at any time by clearing cookies in your browser.',
    cookiesTable: {
      headName: 'Cookie',
      headPurpose: 'Purpose',
      headDuration: 'Duration',
      headProvider: 'Issuer',
      rows: [
        {
          name: 'cookie_consent',
          purpose: 'Stores your consent choice',
          duration: '6 months',
          provider: 'Home Nura (essential)',
        },
        {
          name: 'NEXT_LOCALE',
          purpose: 'Stores your language preference',
          duration: 'Session',
          provider: 'Home Nura (essential)',
        },
        {
          name: 'Amazon affiliate',
          purpose: 'Tracks affiliate link for commission attribution',
          duration: 'Up to 24h',
          provider: 'Amazon EU (third party)',
        },
      ],
    },
    rightsHeading: '9. Your rights',
    rightsIntro: 'Under the GDPR (articles 15 to 22), you have the following rights regarding your personal data:',
    rights: [
      'Right of access: obtain confirmation that your data is processed and receive a copy',
      'Right to rectification: correct inaccurate or incomplete data',
      'Right to erasure ("right to be forgotten"): request deletion of your data',
      'Right to restriction of processing: request temporary suspension',
      'Right to data portability: receive your data in a structured, reusable format',
      'Right to object: object to processing based on legitimate interest',
      'Right to withdraw consent at any time, without affecting the lawfulness of prior processing',
      'Right to define post-mortem directives on the fate of your data',
    ],
    contactHeading: '10. Exercising your rights',
    contactBody: 'To exercise these rights, contact us at contact@homenura.com specifying your request. We will reply within one month (extendable by two months for complex requests). Proof of identity may be requested in case of reasonable doubt.',
    supervisoryHeading: '11. Complaint to the supervisory authority',
    supervisoryBody: 'If after contacting us you believe your rights are not respected, you have the right to lodge a complaint with the French data protection authority (CNIL): 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — www.cnil.fr. You may also contact your local EU supervisory authority.',
    backLink: 'Back to home',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const safeLang = resolveLang(lang)
  const c = content[safeLang] || content.fr
  return buildPageMetadata({
    lang: safeLang,
    path: '/politique-confidentialite',
    title: `${c.title} | Home Nura`,
    description: c.intro.slice(0, 160),
    // Legal compliance page — required by GDPR but not a search
    // landing target. Noindex via meta robots.
    index: false,
  })
}

export default async function PolitiqueConfidentialite({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const c = content[lang] || content.fr
  return (
    <div className="min-h-screen bg-[#FBFBFD] text-slate-900 font-sans overflow-x-clip">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: `https://homenura.com/${lang}` },
            { '@type': 'ListItem', position: 2, name: c.title, item: `https://homenura.com/${lang}/politique-confidentialite` },
          ],
        }) }}
      />
      <Navbar currentLang={lang} />
      <main id="main" className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">{c.title}</h1>
        <p className="text-sm text-slate-500 mb-8">{c.lastUpdated}</p>

        <p className="text-slate-600 leading-relaxed mb-10">{c.intro}</p>

        {c.sections.map((s, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3">{s.heading}</h2>
            <p className="text-slate-600 leading-relaxed">{s.body}</p>
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">{c.cookiesHeading}</h2>
          <p className="text-slate-600 leading-relaxed mb-4">{c.cookiesIntro}</p>
          <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-500 text-xs uppercase tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">{c.cookiesTable.headName}</th>
                  <th className="px-4 py-3 text-left font-bold">{c.cookiesTable.headPurpose}</th>
                  <th className="px-4 py-3 text-left font-bold">{c.cookiesTable.headDuration}</th>
                  <th className="px-4 py-3 text-left font-bold">{c.cookiesTable.headProvider}</th>
                </tr>
              </thead>
              <tbody>
                {c.cookiesTable.rows.map((r, i) => (
                  <tr key={i} className="border-t border-slate-100">
                    <td className="px-4 py-3 font-mono text-xs text-slate-700">{r.name}</td>
                    <td className="px-4 py-3 text-slate-600">{r.purpose}</td>
                    <td className="px-4 py-3 text-slate-600 whitespace-nowrap">{r.duration}</td>
                    <td className="px-4 py-3 text-slate-600">{r.provider}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">{c.rightsHeading}</h2>
          <p className="text-slate-600 leading-relaxed mb-3">{c.rightsIntro}</p>
          <ul className="list-disc pl-6 space-y-1.5 text-slate-600 leading-relaxed">
            {c.rights.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">{c.contactHeading}</h2>
          <p className="text-slate-600 leading-relaxed">{c.contactBody}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-slate-900 mb-3">{c.supervisoryHeading}</h2>
          <p className="text-slate-600 leading-relaxed">{c.supervisoryBody}</p>
        </section>

        <div className="mt-12">
          <Link href={`/${lang}`} className="text-brand-600 font-bold hover:underline">
            &larr; {c.backLink}
          </Link>
        </div>
      </main>
      <SiteFooter currentLang={lang} />
    </div>
  )
}
