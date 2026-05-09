# Guide TV Israël — Instructions pour Claude Code

## Objectif
Construire une **Progressive Web App (PWA)** "Guide TV Israël" déployée sur **GitHub Pages**.
Accessible depuis n'importe quel téléphone via un lien. Installable sur l'écran d'accueil.

---

## Stack technique
- HTML5 + CSS3 + JavaScript vanilla (pas de framework, pas de build tool)
- Fichier unique `index.html` + `manifest.json` + `sw.js` (service worker PWA)
- Zéro dépendance externe, zéro backend
- GitHub Pages pour l'hébergement (gratuit, lien permanent)

---

## Structure des fichiers

```
tv-guide-israel/
├── index.html          ← App principale
├── manifest.json       ← Config PWA
├── sw.js               ← Service worker (offline)
├── icons/
│   ├── icon-192.png    ← Icône PWA (génère un carré bleu avec "TV")
│   └── icon-512.png    ← Icône PWA grande
└── README.md
```

---

## Déploiement GitHub Pages

1. Créer le repo `tv-guide-israel` sur GitHub (public)
2. Push tous les fichiers sur la branche `main`
3. Activer GitHub Pages : Settings → Pages → Source: `main` / `/ (root)`
4. Le lien sera : `https://<username>.github.io/tv-guide-israel/`

---

## Fonctionnalités

### Interface
- Design **mobile-first**, optimisé pour téléphone (max-width 600px centré sur desktop)
- Barre du haut avec logo TV, horloge en heure israélienne (UTC+3) mise à jour en temps réel
- Navigation par onglets : Toutes | Françaises | Belges | Israéliennes | Sport | Cinéma | Info | ⭐ Favoris
- Barre de recherche (filtre instantané sur titre + description)
- Filtres genre : Tout | Films | Séries | Sport | Info | Docs
- Bouton "Actualiser" pour recalculer le programme en cours

### Chaînes
Chaque chaîne affiche :
- Logo coloré avec abréviation
- Nom de la chaîne
- Programme actuellement en cours (surligné)
- Étoile pour ajouter aux favoris (sauvegardé en localStorage)
- Liste des programmes du jour avec horaires

### Programmes
- Horaires affichés en **heure israélienne (UTC+3)** = heure de Paris + 1h
- Programme en cours surligné en vert avec indicateur "▶ Maintenant"
- Badges colorés : EN DIRECT (rouge), NOUVEAU (bleu), FILM (violet), DOC (vert), SPORT (orange)
- Clic sur un programme pour voir la description complète

### PWA
- Installable sur l'écran d'accueil iOS/Android
- Fonctionne hors ligne (service worker cache les assets)
- Icône et splash screen

---

## Les 53 chaînes avec leurs programmes

### Chaînes françaises

#### TF1
```json
[
  {"time":"07:50","title":"Télématin","genre":"magazine","badge":"","desc":"Magazine matinal : actus, météo, reportages de société."},
  {"time":"11:00","title":"Les Douze Coups de Midi","genre":"divertissement","badge":"","desc":"Jeu culte animé par Jean-Luc Reichmann. Trouvez l'Étoile Mystérieuse !"},
  {"time":"13:00","title":"Journal de 13h","genre":"info","badge":"live","desc":"Actualités nationales et internationales avec Adel Hana."},
  {"time":"14:55","title":"Plus belle la vie, encore plus belle","genre":"série","badge":"","desc":"Nouveaux rebondissements au Mistral — la série culte continue."},
  {"time":"15:55","title":"Demain nous appartient","genre":"série","badge":"","desc":"Intrigues et mystères à Sète — série quotidienne."},
  {"time":"17:25","title":"NCIS Los Angeles","genre":"série","badge":"","desc":"L'équipe résout une affaire de trafic d'armes impliquant des militaires."},
  {"time":"21:00","title":"Journal de 20h","genre":"info","badge":"live","desc":"Le rendez-vous incontournable avec Gilles Bouleau."},
  {"time":"22:10","title":"Film du soir","genre":"film","badge":"film","desc":"Grand film en première diffusion — thriller ou comédie."},
  {"time":"00:20","title":"Le 23h","genre":"info","badge":"","desc":"Résumé de la soirée et dernières nouvelles."}
]
```

#### France 2
```json
[
  {"time":"08:00","title":"Télématin","genre":"magazine","badge":"","desc":"Émission matinale : actualités, tendances, reportages."},
  {"time":"10:40","title":"Slam","genre":"divertissement","badge":"","desc":"Jeu de lettres animé par Cyril Féraud."},
  {"time":"13:00","title":"Journal de 13h","genre":"info","badge":"live","desc":"Midi Info avec toute l'actualité du jour."},
  {"time":"14:40","title":"Toute une histoire","genre":"magazine","badge":"","desc":"Histoires de vie et témoignages poignants."},
  {"time":"18:00","title":"Questions pour un champion","genre":"divertissement","badge":"","desc":"Le célèbre jeu de culture générale de Samuel Étienne."},
  {"time":"20:00","title":"Journal de 20h","genre":"info","badge":"live","desc":"Le journal avec Laurent Delahousse ou Anne-Sophie Lapix."},
  {"time":"22:10","title":"Infrarouge / Documentaire","genre":"doc","badge":"doc","desc":"Documentaire de société ou reportage d'investigation."},
  {"time":"23:40","title":"Complément d'enquête","genre":"magazine","badge":"","desc":"Magazine d'investigation sur un grand sujet d'actualité."}
]
```

#### France 3
```json
[
  {"time":"08:00","title":"Matinales régionales","genre":"info","badge":"live","desc":"L'info locale et nationale pour bien commencer la journée."},
  {"time":"13:00","title":"12/13","genre":"info","badge":"live","desc":"Journal national et régional de midi."},
  {"time":"15:00","title":"Inspecteur Barnaby","genre":"série","badge":"","desc":"Série policière britannique — meurtre mystérieux dans la campagne anglaise."},
  {"time":"20:00","title":"19/20","genre":"info","badge":"live","desc":"Journal régional de France 3."},
  {"time":"21:00","title":"Journal de 20h","genre":"info","badge":"live","desc":"Actualités nationales en direct."},
  {"time":"22:10","title":"Téléfilm du soir","genre":"film","badge":"film","desc":"Téléfilm ou film de cinéma en soirée sur France 3."},
  {"time":"00:00","title":"Soir 3","genre":"info","badge":"live","desc":"Journal de la nuit sur France 3."}
]
```

#### France 4
```json
[
  {"time":"10:00","title":"Programmes jeunesse","genre":"animation","badge":"","desc":"Dessins animés et programmes pour enfants."},
  {"time":"12:00","title":"Zorro","genre":"série","badge":"","desc":"La série d'aventure classique."},
  {"time":"15:00","title":"Au nom de la vérité","genre":"magazine","badge":"","desc":"Émission de société animée par Rachid M'Barki."},
  {"time":"18:00","title":"Outremer.le mag","genre":"magazine","badge":"","desc":"Magazine dédié aux territoires d'Outre-mer."},
  {"time":"21:35","title":"Quotidien","genre":"divertissement","badge":"new","desc":"Le magazine décalé de Yann Barthès — reportages, interviews, humour."},
  {"time":"22:35","title":"Série de soirée","genre":"série","badge":"","desc":"Série en soirée sur France 4."}
]
```

#### France 5
```json
[
  {"time":"09:00","title":"C dans l'air","genre":"magazine","badge":"","desc":"Débat d'actualité avec experts autour d'un grand thème du jour."},
  {"time":"12:30","title":"Le Magazine de la santé","genre":"magazine","badge":"","desc":"Conseils santé avec Dr. Marina Carrère d'Encausse."},
  {"time":"15:00","title":"Documentaires","genre":"doc","badge":"doc","desc":"Documentaires scientifiques, historiques ou nature."},
  {"time":"18:45","title":"C à vous","genre":"magazine","badge":"","desc":"Talk-show culturel animé par Anne-Élisabeth Lemoine."},
  {"time":"20:00","title":"C à vous la suite","genre":"magazine","badge":"","desc":"Prolongation avec invités et culture."},
  {"time":"21:35","title":"C dans l'air (rediff)","genre":"magazine","badge":"","desc":"Rediffusion du magazine d'analyse politique et sociale."},
  {"time":"23:30","title":"Documentaire de nuit","genre":"doc","badge":"doc","desc":"Grand documentaire en seconde partie de soirée."}
]
```

#### M6
```json
[
  {"time":"08:00","title":"Météo à 6","genre":"magazine","badge":"","desc":"Prévisions météo et informations pratiques du matin."},
  {"time":"10:00","title":"Capital (rediff)","genre":"doc","badge":"doc","desc":"Enquêtes sur les grandes tendances de consommation."},
  {"time":"13:45","title":"Le 12h45","genre":"info","badge":"live","desc":"Journal de midi de M6."},
  {"time":"14:50","title":"Mariés au premier regard","genre":"divertissement","badge":"","desc":"Des inconnus acceptent de se marier sans se connaître."},
  {"time":"19:45","title":"Le 19:45","genre":"info","badge":"live","desc":"Journal du soir présenté par Nathalie Renoux."},
  {"time":"22:10","title":"Zone Interdite / Capital","genre":"doc","badge":"doc","desc":"Grand reportage en prime time : enquête immersive société."},
  {"time":"00:00","title":"66 Minutes","genre":"magazine","badge":"","desc":"Magazine de reportages 66 minutes."}
]
```

#### W9
```json
[
  {"time":"10:00","title":"Séries du matin","genre":"série","badge":"","desc":"Séries américaines en matinée."},
  {"time":"13:30","title":"Météo","genre":"info","badge":"","desc":"Bulletin météo national."},
  {"time":"15:00","title":"Scènes de ménages","genre":"série","badge":"","desc":"La comédie culte de M6 en rediffusion."},
  {"time":"19:30","title":"Scènes de ménages","genre":"série","badge":"","desc":"Nouveaux épisodes de la sitcom familiale."},
  {"time":"22:10","title":"Film ou série","genre":"film","badge":"film","desc":"Film ou série en prime time sur W9."}
]
```

#### TFX
```json
[
  {"time":"10:00","title":"Séries du matin","genre":"série","badge":"","desc":"Séries en matinée sur TFX."},
  {"time":"14:00","title":"Confessions intimes","genre":"magazine","badge":"","desc":"Témoignages et confidences de familles françaises."},
  {"time":"18:00","title":"Météo","genre":"info","badge":"","desc":"Bulletin météo."},
  {"time":"22:10","title":"Alien","genre":"film","badge":"film","desc":"Chef-d'œuvre de Ridley Scott — l'équipage du Nostromo face à une créature mortelle."},
  {"time":"00:30","title":"Alien 3","genre":"film","badge":"film","desc":"Troisième volet — Ripley échoue sur une planète-prison."}
]
```

#### TMC
```json
[
  {"time":"10:00","title":"Météo","genre":"info","badge":"","desc":"Prévisions météo nationales."},
  {"time":"14:00","title":"Jour J","genre":"magazine","badge":"","desc":"Magazine d'actualité de TMC."},
  {"time":"19:45","title":"Quotidien","genre":"divertissement","badge":"","desc":"Rediffusion du magazine de Yann Barthès."},
  {"time":"22:10","title":"Série américaine","genre":"série","badge":"","desc":"Série policière ou comédie en prime time."}
]
```

#### TF1 Séries Films
```json
[
  {"time":"09:00","title":"Séries du matin","genre":"série","badge":"","desc":"Séries policières et drames en matinée."},
  {"time":"14:00","title":"Film de l'après-midi","genre":"film","badge":"film","desc":"Film en après-midi sur TF1 Séries Films."},
  {"time":"19:00","title":"Série en soirée","genre":"série","badge":"","desc":"Série en début de soirée."},
  {"time":"22:10","title":"Film en prime time","genre":"film","badge":"film","desc":"Grand film policier ou thriller en soirée."},
  {"time":"00:10","title":"Série de nuit","genre":"série","badge":"","desc":"Série en deuxième partie de nuit."}
]
```

#### Canal+
```json
[
  {"time":"08:30","title":"Canal News","genre":"info","badge":"live","desc":"Actualités Canal+ en direct le matin."},
  {"time":"10:00","title":"Série Canal+","genre":"série","badge":"new","desc":"Création originale Canal+ en matinée."},
  {"time":"13:00","title":"Le Grand Journal","genre":"magazine","badge":"","desc":"Magazine culturel et d'actualité de Canal+."},
  {"time":"22:00","title":"Film ou série en clair","genre":"film","badge":"film","desc":"Grande fiction en prime time sur Canal+."},
  {"time":"00:00","title":"Late Canal+","genre":"magazine","badge":"","desc":"Magazine de fin de soirée Canal+."}
]
```

#### Canal+ Box Office
```json
[
  {"time":"11:00","title":"Film récent","genre":"film","badge":"film","desc":"Films récents en avant-première sur Canal+ Box Office."},
  {"time":"15:00","title":"Film de l'après-midi","genre":"film","badge":"film","desc":"Seconde diffusion d'un film Box Office."},
  {"time":"22:00","title":"Film en soirée","genre":"film","badge":"film","desc":"Film récemment sorti en salle, en avant-première."}
]
```

#### Canal+ Cinéma(s)
```json
[
  {"time":"10:00","title":"Film classique","genre":"film","badge":"film","desc":"Classique du cinéma mondial en matinée."},
  {"time":"15:00","title":"Film français","genre":"film","badge":"film","desc":"Film français contemporain ou culte."},
  {"time":"22:00","title":"Film en soirée","genre":"film","badge":"film","desc":"Grand film de cinéma en prime time."},
  {"time":"00:15","title":"Film de nuit","genre":"film","badge":"film","desc":"Film en deuxième partie de soirée."}
]
```

#### Canal+ Docs
```json
[
  {"time":"09:00","title":"Documentaire nature","genre":"doc","badge":"doc","desc":"Documentaire animalier ou environnemental."},
  {"time":"13:00","title":"Docu société","genre":"doc","badge":"doc","desc":"Reportage de société ou enquête."},
  {"time":"22:00","title":"Grand documentaire","genre":"doc","badge":"doc","desc":"Documentaire en prime time — histoire, science ou société."}
]
```

#### Canal+ Foot
```json
[
  {"time":"09:00","title":"Foot Mercato","genre":"sport","badge":"","desc":"Transferts, rumeurs et actualités du football mondial."},
  {"time":"13:00","title":"Canal Football Club","genre":"sport","badge":"","desc":"Magazine football : analyses et interviews."},
  {"time":"22:00","title":"Match en direct","genre":"sport","badge":"live","desc":"Match de Ligue 1, Champions League ou Liga en direct."}
]
```

#### Canal+ Grand Écran
```json
[
  {"time":"10:00","title":"Grand film du matin","genre":"film","badge":"film","desc":"Chef-d'œuvre du cinéma mondial en matinée."},
  {"time":"15:00","title":"Film de l'après-midi","genre":"film","badge":"film","desc":"Film en grand format pour l'après-midi."},
  {"time":"22:00","title":"Film du soir","genre":"film","badge":"film","desc":"Grand film en prime time sur Canal+ Grand Écran."}
]
```

#### Canal+ Kids
```json
[
  {"time":"08:00","title":"Dessins animés","genre":"animation","badge":"","desc":"Programmes animés pour les enfants."},
  {"time":"13:00","title":"Films d'animation","genre":"film","badge":"film","desc":"Long-métrage d'animation pour toute la famille."},
  {"time":"18:00","title":"Séries kids","genre":"série","badge":"","desc":"Séries d'aventure pour enfants et préados."},
  {"time":"21:00","title":"Film famille","genre":"film","badge":"film","desc":"Film pour toute la famille en soirée."}
]
```

#### Canal+ Sport
```json
[
  {"time":"09:00","title":"Morning Sport","genre":"sport","badge":"","desc":"Actualités sportives du matin."},
  {"time":"13:00","title":"Magazine sport","genre":"sport","badge":"","desc":"Résultats et analyses des compétitions."},
  {"time":"22:00","title":"Match en direct","genre":"sport","badge":"live","desc":"Retransmission en direct d'un match."}
]
```

#### Canal+ Sport 360
```json
[
  {"time":"10:00","title":"Sport en continu","genre":"sport","badge":"live","desc":"Sports en direct et différé toute la journée."},
  {"time":"15:00","title":"Cyclisme / Tennis","genre":"sport","badge":"live","desc":"Retransmission de compétitions internationales."},
  {"time":"22:00","title":"Sport en soirée","genre":"sport","badge":"live","desc":"Grand événement sportif en prime time."}
]
```

#### Ciné+ Classic
```json
[
  {"time":"10:00","title":"Classique du cinéma","genre":"film","badge":"film","desc":"Chef-d'œuvre du 7e art, films de patrimoine."},
  {"time":"15:30","title":"Film années 70-80","genre":"film","badge":"film","desc":"Cinéma classique français et étranger."},
  {"time":"22:00","title":"Grand classique","genre":"film","badge":"film","desc":"Film culte en prime time."}
]
```

#### Ciné+ Émotion
```json
[
  {"time":"10:00","title":"Comédie romantique","genre":"film","badge":"film","desc":"Films d'émotion et d'amour en matinée."},
  {"time":"15:00","title":"Drame","genre":"film","badge":"film","desc":"Film dramatique de l'après-midi."},
  {"time":"22:00","title":"Film d'émotion","genre":"film","badge":"film","desc":"Grand film touchant en prime time."}
]
```

#### Ciné+ Family
```json
[
  {"time":"10:00","title":"Film famille matin","genre":"film","badge":"film","desc":"Film pour toute la famille en matinée."},
  {"time":"15:00","title":"Animation","genre":"film","badge":"film","desc":"Long-métrage d'animation."},
  {"time":"22:00","title":"Film famille soir","genre":"film","badge":"film","desc":"Film familial en prime time."}
]
```

#### Ciné+ Festival
```json
[
  {"time":"10:00","title":"Film de festival","genre":"film","badge":"film","desc":"Film primé dans les grands festivals mondiaux."},
  {"time":"15:00","title":"Cinéma du monde","genre":"film","badge":"film","desc":"Film international en après-midi."},
  {"time":"22:00","title":"Avant-première festival","genre":"film","badge":"new","desc":"Découverte d'un film primé en prime time."}
]
```

#### Ciné+ Frisson
```json
[
  {"time":"10:00","title":"Thriller du matin","genre":"film","badge":"film","desc":"Film d'horreur ou thriller en matinée."},
  {"time":"15:00","title":"Horreur classique","genre":"film","badge":"film","desc":"Classique du cinéma d'épouvante."},
  {"time":"22:00","title":"Film de frisson","genre":"film","badge":"film","desc":"Grand film d'horreur ou thriller en prime time."},
  {"time":"00:00","title":"Horreur de nuit","genre":"film","badge":"film","desc":"Film d'horreur en deuxième partie de soirée."}
]
```

#### CNews
```json
[
  {"time":"08:00","title":"La Matinale CNews","genre":"info","badge":"live","desc":"Journal du matin en direct avec débats et invités."},
  {"time":"13:00","title":"Midi Info","genre":"info","badge":"live","desc":"Journal de midi avec analyses."},
  {"time":"19:00","title":"Face à l'info","genre":"info","badge":"live","desc":"Débat d'actualité avec Christine Kelly."},
  {"time":"21:00","title":"Journal du soir","genre":"info","badge":"live","desc":"Journal télévisé de CNews."},
  {"time":"22:00","title":"L'heure des pros","genre":"magazine","badge":"","desc":"Débat économique et politique avec Pascal Praud."}
]
```

#### BFM TV
```json
[
  {"time":"07:00","title":"BFM Matin","genre":"info","badge":"live","desc":"Information en continu dès 7h, journaux toutes les heures."},
  {"time":"13:00","title":"BFM Midi","genre":"info","badge":"live","desc":"Journal de midi et analyses."},
  {"time":"18:00","title":"BFM Story","genre":"info","badge":"live","desc":"Retour sur les grands faits du jour."},
  {"time":"21:00","title":"BFM Soir","genre":"info","badge":"live","desc":"Journal du soir et débats."},
  {"time":"23:00","title":"Nuit BFM","genre":"info","badge":"live","desc":"Information en continu toute la nuit."}
]
```

#### L'Équipe
```json
[
  {"time":"08:00","title":"Matinale sport","genre":"sport","badge":"","desc":"Revue de presse sportive et résultats de la nuit."},
  {"time":"13:00","title":"Journal du Sport","genre":"sport","badge":"live","desc":"Actualités sportives de midi."},
  {"time":"19:30","title":"Journal du Sport","genre":"sport","badge":"live","desc":"Journal sportif du soir."},
  {"time":"22:00","title":"Match ou magazine","genre":"sport","badge":"live","desc":"Match en direct ou grand magazine sport."}
]
```

#### Eurosport 1
```json
[
  {"time":"08:00","title":"Eurosport Matin","genre":"sport","badge":"","desc":"Actualités et compétitions en direct le matin."},
  {"time":"13:00","title":"Tennis / Cyclisme","genre":"sport","badge":"live","desc":"Compétition sportive en direct ou en différé."},
  {"time":"19:00","title":"Résultats du jour","genre":"sport","badge":"","desc":"Bilan des compétitions et analyses."},
  {"time":"22:00","title":"Grand événement sportif","genre":"sport","badge":"live","desc":"Retransmission en prime time."}
]
```

#### Eurosport 2
```json
[
  {"time":"09:00","title":"Sport matinal","genre":"sport","badge":"","desc":"Sports moins médiatisés en direct."},
  {"time":"15:00","title":"Compétitions live","genre":"sport","badge":"live","desc":"Événements sportifs en direct."},
  {"time":"22:00","title":"Soirée sport","genre":"sport","badge":"live","desc":"Événement sportif en prime time."}
]
```

#### Infosport+
```json
[
  {"time":"08:00","title":"Matinale sport","genre":"sport","badge":"live","desc":"Revue de sport et résultats."},
  {"time":"13:00","title":"Journal sportif","genre":"sport","badge":"live","desc":"Actualités des sports en direct."},
  {"time":"22:00","title":"Magazine sport","genre":"sport","badge":"","desc":"Analyses et résumés des compétitions."}
]
```

#### beIN Sports 1
```json
[
  {"time":"09:00","title":"beIN Sports News","genre":"sport","badge":"live","desc":"Actualités sportives mondiales en direct."},
  {"time":"13:30","title":"Football Live","genre":"sport","badge":"live","desc":"Match de championnat européen en direct."},
  {"time":"19:00","title":"La Liga / Premier League","genre":"sport","badge":"live","desc":"Match de football européen en direct."},
  {"time":"22:00","title":"Match du soir","genre":"sport","badge":"live","desc":"Grand match de football — Liga, Serie A ou autre."}
]
```

#### beIN Sports 2
```json
[
  {"time":"10:00","title":"Match en direct","genre":"sport","badge":"live","desc":"Football ou basket en direct le matin."},
  {"time":"15:00","title":"Tennis / Basket","genre":"sport","badge":"live","desc":"Compétition en direct ou différé."},
  {"time":"22:00","title":"Match du soir","genre":"sport","badge":"live","desc":"Match de football ou autre sport en prime time."}
]
```

#### beIN Sports 3
```json
[
  {"time":"11:00","title":"Sport en direct","genre":"sport","badge":"live","desc":"Compétition internationale en direct."},
  {"time":"17:00","title":"Replay","genre":"sport","badge":"","desc":"Rediffusion d'un grand match."},
  {"time":"22:00","title":"Soirée sport","genre":"sport","badge":"live","desc":"Événement sportif en prime time."}
]
```

---

### Chaînes belges

#### La Une
```json
[
  {"time":"08:00","title":"Télématin RTBF","genre":"magazine","badge":"","desc":"Magazine matinal belge avec actus et météo."},
  {"time":"13:00","title":"Journal de midi","genre":"info","badge":"live","desc":"Journal télévisé de la RTBF à 13h."},
  {"time":"20:30","title":"Journal télévisé","genre":"info","badge":"live","desc":"JT de 19h30 de La Une — actualités belges et internationales."},
  {"time":"21:30","title":"Série ou film belge","genre":"série","badge":"","desc":"Production belge ou coproduction européenne en prime time."},
  {"time":"23:30","title":"Questions à la une","genre":"doc","badge":"doc","desc":"Magazine d'investigation de la RTBF."}
]
```

#### Tipik
```json
[
  {"time":"10:00","title":"Séries jeunesse","genre":"série","badge":"","desc":"Séries pour jeunes adultes en matinée."},
  {"time":"15:00","title":"Clip TV","genre":"divertissement","badge":"","desc":"Vidéos musicales et émissions tendances."},
  {"time":"21:30","title":"Série tendance","genre":"série","badge":"new","desc":"Série en vogue en prime time sur Tipik."}
]
```

#### La Trois
```json
[
  {"time":"10:00","title":"Documentaires","genre":"doc","badge":"doc","desc":"Documentaires culturels et de société."},
  {"time":"15:00","title":"Culturama","genre":"magazine","badge":"","desc":"Magazine culturel de La Trois."},
  {"time":"21:30","title":"Grand documentaire","genre":"doc","badge":"doc","desc":"Documentaire en prime time."}
]
```

#### RTL tvi
```json
[
  {"time":"08:00","title":"RTL Info Matin","genre":"info","badge":"live","desc":"Journal du matin sur RTL tvi."},
  {"time":"14:00","title":"RTL Info 13h","genre":"info","badge":"live","desc":"Journal de midi de RTL tvi."},
  {"time":"20:00","title":"RTL Info 19h","genre":"info","badge":"live","desc":"Journal du soir de RTL tvi."},
  {"time":"21:10","title":"Série ou film","genre":"série","badge":"","desc":"Série ou film en prime time sur RTL tvi."}
]
```

#### RTL club
```json
[
  {"time":"10:00","title":"Séries comédies","genre":"série","badge":"","desc":"Comédies en matinée."},
  {"time":"21:30","title":"Film ou série","genre":"film","badge":"film","desc":"Film ou série en prime time sur RTL club."}
]
```

#### LN24
```json
[
  {"time":"07:00","title":"LN24 Matin","genre":"info","badge":"live","desc":"Information belge en continu dès 7h."},
  {"time":"13:00","title":"LN24 Midi","genre":"info","badge":"live","desc":"Journal et analyses de midi."},
  {"time":"21:00","title":"LN24 Soir","genre":"info","badge":"live","desc":"Journal du soir et débats d'actualité."}
]
```

#### Be 1
```json
[
  {"time":"10:00","title":"Magazine matin","genre":"magazine","badge":"","desc":"Émission de divertissement matinal."},
  {"time":"14:00","title":"Film après-midi","genre":"film","badge":"film","desc":"Film en après-midi sur Be 1."},
  {"time":"21:30","title":"Soirée Be 1","genre":"série","badge":"","desc":"Série ou divertissement en prime time."}
]
```

#### Be Ciné
```json
[
  {"time":"10:00","title":"Cinéma belge","genre":"film","badge":"film","desc":"Films belges ou coproductions en matinée."},
  {"time":"15:00","title":"Film classique","genre":"film","badge":"film","desc":"Classique du cinéma mondial."},
  {"time":"22:00","title":"Film du soir","genre":"film","badge":"film","desc":"Grand film en prime time sur Be Ciné."}
]
```

#### Be Séries
```json
[
  {"time":"10:00","title":"Série matinale","genre":"série","badge":"","desc":"Série en début de journée."},
  {"time":"15:00","title":"Série après-midi","genre":"série","badge":"","desc":"Série américaine ou européenne."},
  {"time":"22:00","title":"Série prime time","genre":"série","badge":"new","desc":"Série en prime time sur Be Séries."}
]
```

#### VOOsport World 1
```json
[
  {"time":"09:00","title":"Sport matinal","genre":"sport","badge":"","desc":"Sports en direct le matin."},
  {"time":"14:00","title":"Football belge","genre":"sport","badge":"live","desc":"Match de Pro League belge en direct."},
  {"time":"22:00","title":"Grand match","genre":"sport","badge":"live","desc":"Match en prime time sur VOOsport World 1."}
]
```

#### VOOsport World 2
```json
[
  {"time":"11:00","title":"Sport 2","genre":"sport","badge":"live","desc":"Compétition sportive en direct."},
  {"time":"22:00","title":"Soirée sport","genre":"sport","badge":"live","desc":"Événement sportif en prime time."}
]
```

#### VOOsport World 3
```json
[
  {"time":"11:00","title":"Sport 3","genre":"sport","badge":"live","desc":"Compétition en direct ou différé."},
  {"time":"22:00","title":"Soirée sport","genre":"sport","badge":"live","desc":"Match en prime time sur VOOsport World 3."}
]
```

#### Proximus Sports
```json
[
  {"time":"09:00","title":"Proximus Matin","genre":"sport","badge":"","desc":"Actus sport et compétitions matinales."},
  {"time":"22:00","title":"Match Proximus","genre":"sport","badge":"live","desc":"Événement sportif en prime time."}
]
```

#### Eleven Pro League 1
```json
[
  {"time":"14:00","title":"Pro League Live","genre":"sport","badge":"live","desc":"Match de la Jupiler Pro League en direct."},
  {"time":"22:00","title":"Pro League Soir","genre":"sport","badge":"live","desc":"Match de football belge en prime time."}
]
```

#### Eleven Pro League 2
```json
[
  {"time":"15:00","title":"Pro League 2","genre":"sport","badge":"live","desc":"Deuxième match de Pro League en direct."},
  {"time":"22:00","title":"Football soir","genre":"sport","badge":"live","desc":"Match de football en prime time."}
]
```

#### Eleven Pro League 3
```json
[
  {"time":"16:00","title":"Pro League 3","genre":"sport","badge":"live","desc":"Troisième match de journée en direct."},
  {"time":"22:00","title":"Match de nuit","genre":"sport","badge":"live","desc":"Match tardif de football."}
]
```

#### Eleven Sports 1
```json
[
  {"time":"13:00","title":"Football international","genre":"sport","badge":"live","desc":"Compétition internationale en direct."},
  {"time":"22:00","title":"Grand match Eleven","genre":"sport","badge":"live","desc":"Match en prime time sur Eleven Sports 1."}
]
```

#### Eleven Sports 2
```json
[
  {"time":"14:00","title":"Sport live","genre":"sport","badge":"live","desc":"Compétition sportive en direct."},
  {"time":"22:00","title":"Match soirée","genre":"sport","badge":"live","desc":"Match en prime time sur Eleven Sports 2."}
]
```

#### Eleven Sports 3
```json
[
  {"time":"15:00","title":"Sport continu","genre":"sport","badge":"live","desc":"Événements sportifs en direct."},
  {"time":"22:00","title":"Soirée sport","genre":"sport","badge":"live","desc":"Match en prime time sur Eleven Sports 3."}
]
```

#### La Deux
```json
[
  {"time":"09:00","title":"Magazine RTBF","genre":"magazine","badge":"","desc":"Émission culturelle ou de société en matinée."},
  {"time":"13:00","title":"Midi en direct","genre":"info","badge":"live","desc":"Magazine d'information de La Deux."},
  {"time":"21:30","title":"Grand documentaire","genre":"doc","badge":"doc","desc":"Documentaire de société ou historique en prime time."},
  {"time":"23:30","title":"Débat","genre":"magazine","badge":"","desc":"Magazine de débat en deuxième partie de soirée."}
]
```

---

### Chaînes israéliennes

#### Keshet 12
```json
[
  {"time":"08:00","title":"חדשות הבוקר","genre":"info","badge":"live","desc":"Journal du matin de Keshet 12 — actus israéliennes et internationales."},
  {"time":"09:00","title":"חצי חינם","genre":"divertissement","badge":"","desc":"Émission matinale de divertissement et société."},
  {"time":"13:00","title":"חדשות הצהריים","genre":"info","badge":"live","desc":"Journal de midi sur Keshet 12."},
  {"time":"15:00","title":"סדרה אמריקאית","genre":"série","badge":"","desc":"Série américaine en après-midi."},
  {"time":"20:00","title":"חדשות ערב","genre":"info","badge":"live","desc":"Journal du soir — principal rendez-vous info d'Israël."},
  {"time":"21:00","title":"פריים טיים ישראלי","genre":"série","badge":"new","desc":"Série ou émission israélienne en prime time — sitcom, drama ou télé-réalité."},
  {"time":"22:30","title":"מועדון לילה","genre":"divertissement","badge":"","desc":"Talk-show ou émission d'humour en deuxième partie de soirée."}
]
```

#### Reshet 13
```json
[
  {"time":"08:00","title":"בוקר טוב","genre":"magazine","badge":"","desc":"Magazine matinal de Reshet 13."},
  {"time":"13:00","title":"חדשות 13","genre":"info","badge":"live","desc":"Journal de midi sur la chaîne 13."},
  {"time":"20:00","title":"מבט","genre":"info","badge":"live","desc":"Journal du soir — actualités israéliennes et internationales."},
  {"time":"21:00","title":"אח גדול / פריים","genre":"divertissement","badge":"","desc":"Big Brother Israël ou grand format en prime time."},
  {"time":"23:00","title":"סדרה ישראלית","genre":"série","badge":"","desc":"Série israélienne originale en deuxième partie de soirée."}
]
```

#### Kan 11
```json
[
  {"time":"08:00","title":"תאגיד חדשות","genre":"info","badge":"live","desc":"Journal du service public Kan — information indépendante."},
  {"time":"09:00","title":"כאן 11 בוקר","genre":"magazine","badge":"","desc":"Magazine culturel et société du matin."},
  {"time":"13:00","title":"חדשות הצהריים","genre":"info","badge":"live","desc":"Journal de midi du service public israélien."},
  {"time":"21:00","title":"מהות החיים","genre":"doc","badge":"doc","desc":"Documentaire ou magazine culturel en prime time sur Kan."},
  {"time":"22:30","title":"פסטיבל / תיאטרון","genre":"culture","badge":"","desc":"Diffusion d'un spectacle, concert ou événement culturel."}
]
```

---

## Logique des horaires

**Règle de conversion :** Heure israélienne = Heure de Paris + 1h (en été, UTC+3).
- Tous les horaires dans ce fichier sont déjà en heure israélienne.
- La détection du "programme en cours" se fait via `new Date()` converti en UTC+3.

```javascript
function getILTime() {
  const now = new Date();
  // Israel = UTC+3
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 3 * 3600000);
}

function isCurrentlyAiring(program, nextProgram) {
  const il = getILTime();
  const nowMins = il.getHours() * 60 + il.getMinutes();
  const [h, m] = program.time.split(':').map(Number);
  const progMins = h * 60 + m;
  const nextMins = nextProgram
    ? (() => { const [nh, nm] = nextProgram.time.split(':').map(Number); return nh * 60 + nm; })()
    : 24 * 60;
  return nowMins >= progMins && nowMins < nextMins;
}
```

---

## Design & UX

### Couleurs des chaînes
Chaque chaîne a une couleur de logo distinctive. Utiliser les couleurs ci-dessous :

| Chaîne | Fond logo | Texte logo |
|--------|-----------|------------|
| TF1 | #B5D4F4 | #042C53 |
| France 2 | #C0DD97 | #173404 |
| France 3 | #9FE1CB | #04342C |
| France 4 | #5DCAA5 | #04342C |
| France 5 | #1D9E75 | #E1F5EE |
| M6 | #FAC775 | #412402 |
| W9 | #EF9F27 | #412402 |
| TFX | #378ADD | #042C53 |
| TMC | #85B7EB | #042C53 |
| TF1 Séries Films | #185FA5 | #E6F1FB |
| Canal+ | #CECBF6 | #26215C |
| Canal+ Box Office | #AFA9EC | #26215C |
| Canal+ Cinéma(s) | #7F77DD | #EEEDFE |
| Canal+ Docs | #534AB7 | #EEEDFE |
| Canal+ Foot | #3C3489 | #EEEDFE |
| Canal+ Grand Écran | #26215C | #CECBF6 |
| Canal+ Kids | #F5C4B3 | #4A1B0C |
| Canal+ Sport | #D85A30 | #FAECE7 |
| Canal+ Sport 360 | #993C1D | #FAECE7 |
| Ciné+ Classic | #888780 | #F1EFE8 |
| Ciné+ Émotion | #B4B2A9 | #2C2C2A |
| Ciné+ Family | #D3D1C7 | #2C2C2A |
| Ciné+ Festival | #F1EFE8 | #2C2C2A |
| Ciné+ Frisson | #444441 | #D3D1C7 |
| CNews | #E6F1FB | #042C53 |
| BFM TV | #378ADD | #E6F1FB |
| L'Équipe | #639922 | #EAF3DE |
| Eurosport 1 | #97C459 | #173404 |
| Eurosport 2 | #3B6D11 | #EAF3DE |
| Infosport+ | #185FA5 | #E6F1FB |
| beIN Sports 1 | #E24B4A | #FCEBEB |
| beIN Sports 2 | #A32D2D | #FCEBEB |
| beIN Sports 3 | #791F1F | #F7C1C1 |
| La Une | #FAC775 | #412402 |
| Tipik | #F09595 | #501313 |
| La Trois | #9FE1CB | #04342C |
| RTL tvi | #E24B4A | #FCEBEB |
| RTL club | #F09595 | #501313 |
| LN24 | #B5D4F4 | #042C53 |
| Be 1 | #C0DD97 | #173404 |
| Be Ciné | #AFA9EC | #26215C |
| Be Séries | #CECBF6 | #26215C |
| VOOsport World 1 | #5DCAA5 | #04342C |
| VOOsport World 2 | #1D9E75 | #E1F5EE |
| VOOsport World 3 | #0F6E56 | #E1F5EE |
| Proximus Sports | #085041 | #9FE1CB |
| Eleven Pro League 1 | #F7C1C1 | #501313 |
| Eleven Pro League 2 | #F09595 | #501313 |
| Eleven Pro League 3 | #E24B4A | #FCEBEB |
| Eleven Sports 1 | #A32D2D | #FCEBEB |
| Eleven Sports 2 | #791F1F | #F7C1C1 |
| Eleven Sports 3 | #501313 | #F09595 |
| La Deux | #EF9F27 | #412402 |
| Keshet 12 | #F5C4B3 | #4A1B0C |
| Reshet 13 | #9FE1CB | #04342C |
| Kan 11 | #D3D1C7 | #2C2C2A |

### Badges
| Badge | Classe CSS | Couleur fond | Couleur texte | Label |
|-------|-----------|-------------|--------------|-------|
| live | badge-live | #FCEBEB | #A32D2D | EN DIRECT |
| new | badge-new | #E6F1FB | #185FA5 | NOUVEAU |
| film | badge-film | #EEEDFE | #534AB7 | FILM |
| doc | badge-doc | #E1F5EE | #0F6E56 | DOC |
| sport | badge-sport | #FAEEDA | #633806 | SPORT |

### Programme en cours
- Fond vert clair `#EAF3DE`
- Texte heure vert foncé `#3B6D11`
- Indicateur `▶ Maintenant` en petit sous l'heure

---

## PWA — manifest.json

```json
{
  "name": "Guide TV Israël",
  "short_name": "TV Guide IL",
  "description": "Programmes TV en heure israélienne",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#185FA5",
  "icons": [
    { "src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ]
}
```

## Service Worker (sw.js)

Cache l'app pour une utilisation hors ligne :

```javascript
const CACHE = 'tv-guide-v1';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
```

---

## Commandes Git pour déployer

```bash
git init
git add .
git commit -m "Initial commit — Guide TV Israël"
gh repo create tv-guide-israel --public --push --source=.
# Activer GitHub Pages via l'interface GitHub :
# Settings → Pages → Source: main / root
```

Ou avec l'API GitHub CLI :
```bash
gh api repos/:owner/tv-guide-israel/pages \
  --method POST \
  -f source='{"branch":"main","path":"/"}'
```

---

## Résumé des tâches pour Claude Code

1. Créer `index.html` avec toute l'app (HTML + CSS + JS en un fichier)
2. Créer `manifest.json`
3. Créer `sw.js`
4. Générer les icônes PWA (192x192 et 512x512) — carré bleu `#185FA5` avec "TV" en blanc
5. Créer `README.md` avec le lien GitHub Pages
6. Init git + créer repo GitHub public + push
7. Activer GitHub Pages
8. Afficher le lien final
