# Demandes d'autorisation — photos officielles des marques

Règle du site (CLAUDE.md, décision de Miguel du 30/10/2026) : photos de la marque elle-même, produit non retouché, créditées « © Marque », auto-hébergées, provenance dans `data/product-images.json`. La plupart des marques n'affichent aucune licence : on demande une confirmation écrite, en commençant par celles dont on montre le plus de modèles. Une marque qui refuse : retirer ses entrées du manifeste (elles passent dans `skipped` avec la raison) et relancer `npx tsx scripts/images/build-product-images.ts`.

À envoyer par Miguel depuis contact@homenura.com, au contact presse de la marque (page presse indiquée dans le tableau ; sinon le formulaire de contact du site officiel). Rien n'est envoyé automatiquement.

## Modèle — français

**Objet :** Autorisation d'utiliser vos visuels produits officiels sur homenura.com (usage éditorial, crédité)

Bonjour,

Je dirige Home Nura (homenura.com), un comparateur indépendant d'appareils pour la maison connectée publié en sept langues pour les lecteurs européens. Nos guides d'achat présentent notamment les modèles suivants de votre gamme : {MODÈLES}.

Pour les illustrer, nous utilisons vos visuels officiels, repris tels quels depuis {SOURCE} : produit non retouché, hébergé sur notre site, crédité « © {MARQUE} » et accompagné d'un lien vers le produit. Nous ne publions ni prix ni promesse de test.

Pourriez-vous nous confirmer par écrit que cet usage vous convient, ou nous indiquer vos conditions et l'espace où télécharger les visuels presse à jour ? Sur simple demande de votre part, nous retirons un visuel sous 48 heures.

Bien cordialement,

Miguel Marie
Directeur de la publication — Home Nura (Groupe M-XO SAS)
contact@homenura.com — 06 33 63 68 57
https://homenura.com

## Template — English

**Subject:** Permission to use your official product images on homenura.com (editorial, credited)

Hello,

I run Home Nura (homenura.com), an independent comparison site for smart-home appliances published in seven languages for European readers. Our buying guides feature these models from your range: {MODELS}.

We illustrate them with your official product images, used as published on {SOURCE}: the product unaltered, hosted on our site, credited "© {BRAND}" and linked to the product. We show no prices and make no testing claims.

Could you confirm in writing that this use is fine with you, or let us know your terms and where to download up-to-date press images? We remove any image within 48 hours on request.

Kind regards,

Miguel Marie
Publication director — Home Nura (Groupe M-XO SAS)
contact@homenura.com — +33 6 33 63 68 57
https://homenura.com

## Vorlage — Deutsch (Philips/Versuni DE, deutsche Marken)

**Betreff:** Genehmigung zur Nutzung Ihrer offiziellen Produktbilder auf homenura.com (redaktionell, mit Quellenangabe)

Guten Tag,

ich leite Home Nura (homenura.com), ein unabhängiges Vergleichsportal für Smart-Home-Geräte, das in sieben Sprachen für Leserinnen und Leser in Europa erscheint. Unsere Kaufberatungen stellen folgende Modelle Ihres Sortiments vor: {MODELLE}.

Dafür verwenden wir Ihre offiziellen Produktbilder unverändert von {QUELLE}: auf unserer Website gehostet, mit „© {MARKE}“ gekennzeichnet und mit einem Link zum Produkt. Wir zeigen keine Preise und behaupten keine eigenen Tests.

Könnten Sie uns schriftlich bestätigen, dass diese Nutzung für Sie in Ordnung ist, oder uns Ihre Bedingungen und den Download-Bereich für aktuelle Pressebilder nennen? Auf Wunsch entfernen wir ein Bild innerhalb von 48 Stunden.

Mit freundlichen Grüßen

Miguel Marie
Verantwortlich für den Inhalt — Home Nura (Groupe M-XO SAS)
contact@homenura.com — +33 6 33 63 68 57
https://homenura.com

## Marques et modèles concernés

<!-- BRANDS:START -->
### 1. Prioritaires — clause des conditions du site contraire à la réutilisation

| Marque | Photos | Modèles | Source | Clause |
|---|---|---|---|---|
| Aqara | 8 | Curtain Driver E1, Hub M3, Light Switch H2 EU, Motion and Light Sensor P2, Presence Sensor FP2, Smart Lock U200, Valve Controller T1, Video Doorbell G4 | eu.aqara.com | CGU d'eu.aqara.com : republication et reproduction commerciale interdites |
| Dreame | 4 | H14 Pro, H15 Pro, L40 Ultra, X50 Ultra Complete | fr.dreametech.com | CGU de fr.dreametech.com : usage commercial du contenu interdit sans licence |
| BLACK+DECKER | 1 | BHSM1610DSM | www.blackanddecker.fr | conditions du site : copie interdite |
| Ecovacs | 1 | Deebot T30 Pro Omni | www.ecovacs.com | conditions du site : copie interdite |
| Philips | 9 | 5500 LatteGo EP5541/50, AC2939/10, Airfryer 3000 Series XL, Airfryer Combi XXL Connected, PerfectCare 7000 Series PSG7130/20, PerfectCare 8000 Series PSG8160/30, SmartSleep Sleep & Wake-up Light HF3650/01, Wake-up Light HF3520/01, WelcomeEye Connect 3 | www.home-appliances.philips, www.philips.fr, www.philips.nl | conditions philips.de : autorisation préalable exigée (art. 9.1, 10.2) |
| Philips Hue | 4 | Lily Outdoor Spot Base Kit, Outdoor Motion Sensor, Tap Dial Switch, White and Color Ambiance E27 | www.philips-hue.com | conditions Philips : autorisation préalable exigée |
| Dyson | 5 | Purifier Cool Formaldehyde TP09, Purifier Hot+Cool Formaldehyde HP09, Purifier Humidify+Cool Formaldehyde PH04, V15 Detect, WashG1 | www.dyson.fr | conditions illisibles (le site refuse les robots) : à confirmer |

### 2. Les autres marques (aucune licence affichée)

| Marque | Photos | Modèles | Source |
|---|---|---|---|
| TP-Link | 6 | Tapo C220, Tapo C520WS, Tapo D235, Tapo L535E, Tapo P100, Tapo P115 | www.tp-link.com |
| Netatmo | 5 | Smart Carbon Monoxide Alarm, Smart Indoor Air Quality Monitor, Smart Smoke Alarm, Smart Weather Station, Thermostat Original | www.netatmo.com (dossier presse) |
| Roborock | 5 | Q7 M5, Q7 M5+, Qrevo Curv, Qrevo Curv 2 Flow, S8 MaxV Ultra | fr.roborock.com, us.roborock.com |
| Xiaomi | 5 | Robot Vacuum E5, Smart Air Fryer Pro 4L, Smart Air Purifier 4, Smart Dehumidifier Lite, Smart Standing Fan 2 Pro | www.mi.com |
| Ninja | 4 | Foodi FlexDrawer, Foodi MAX Double Stack XL, Foodi MAX SmartLid, Woodfire Pro Connect XL | www.sharkninja.de |
| Shelly | 4 | 1PM Gen4, EM Gen3, Flood Gen4, Pro 3EM | www.shelly.com |
| EcoFlow | 3 | DELTA 3 Plus, RIVER 3 Plus, STREAM Ultra | eu.ecoflow.com |
| Eve | 3 | Aqua, MotionBlinds Upgrade Kit, Thermo | www.evehome.com (dossier presse) |
| Moulinex | 3 | Cookeo Touch WiFi, Easy Fry Max, i-Companion Touch XL | www.moulinex.be, www.moulinex.fr |
| De'Longhi | 2 | Magnifica Evo ECAM290.51.B, Pinguino PAC EL112 CST WiFi | www.delonghi.com |
| Ecowitt | 2 | HP2551, WH51 | shop.ecowitt.com |
| Levoit | 2 | Core 300S, Core 400S | levoit.com, levoit.de |
| Mammotion | 2 | LUBA 2 AWD 3000X, LUBA 3 AWD 5000 | eu.mammotion.com, uk.mammotion.com |
| MEATER | 2 | Plus, Pro | store-us.meater.com |
| Nuki | 2 | Smart Lock Go, Smart Lock Pro (5th generation) | nuki.px.media (dossier presse) |
| tado | 2 | Heat Pump Optimizer X, Smart Radiator Thermostat X | brandfolder.com, shop.tado.com (dossier presse) |
| Weber | 2 | Genesis EPX-335 Smart, Searwood 600 | www.weber.com |
| Airthings | 1 | View Plus | www.airthings.com |
| Anker SOLIX | 1 | Solarbank 3 E2700 Pro | www.ankersolix.com |
| Aranet | 1 | Aranet4 Home | help.aranet.com |
| Beatbot | 1 | AquaSense 2 Pro | eu.beatbot.com |
| Beurer | 1 | KS 34 XL | www.beurer.com |
| Bissell | 1 | PowerFresh Slim Steam | www.bissell.fr |
| BLUETTI | 1 | Elite 100 V2 | www.bluettipower.eu |
| Bresser | 1 | Wi-Fi ClearView 7-in-1 | www.bresser.com |
| Chipolo | 1 | POP | chipolo.net |
| Cosori | 1 | Dual Blaze Smart | cosori.ae |
| Etekcity | 1 | Smart Nutrition Scale | us.vesync.com |
| Homey | 1 | Pro (Early 2023) | homey.app (dossier presse) |
| Honeywell Home | 1 | T6 | www.resideo.com |
| Hoymiles | 1 | HMS-800W-2T | www.hoymiles.com |
| Inkbird | 1 | IBT-4XS | www.inkbird.com |
| Instant Pot | 1 | Duo Plus WhisperQuiet | www.instantpot.com.au |
| Kenwood | 1 | Cooking Chef XL KCL95.424SI | www.kenwoodworld.com |
| Krups | 1 | Evidence One EA895N10 | www.krups.nl |
| Lumie | 1 | Bodyclock Shine 300 | www.lumie.com |
| Marstek | 1 | Venus E 3.0 | de.marstekenergy.com |
| Mitsubishi Electric | 1 | MSZ-AY35VGK | www.mitsubishielectric.es |
| Renpho | 1 | Smart Kitchen Scale | uk.renpho.com |
| Rowenta | 1 | X-Force Flex 15.60 | www.rowenta.fr |
| Sauter | 1 | Orosi 2 | www.confort-sauter.com |
| Segway | 1 | Navimow i105E | navimow.segway.com |
| SwitchBot | 1 | Curtain 3 | www.switch-bot.com |
| Tefal | 1 | ActiFry Genius XL 2in1 | www.tefal.pt |
| ThirdReality | 1 | Smart Soil Moisture Sensor Gen2 | www.thirdreality.com |
| Trotec | 1 | PAC 3910 X WiFi | en.trotec.com |
| Wallbox | 1 | Pulsar Max | support.wallbox.com |
| Zaptec | 1 | Go 2 | www.zaptec.com |

Total : 117 photos de 55 marques (manifeste du 30/10/2026). Marques écartées et raisons : liste `skipped` de `data/product-images.json`.
<!-- BRANDS:END -->
