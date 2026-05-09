import pool from '../../src/config/database.js';

const CHANNELS = [
  // ── FRANÇAISES ──────────────────────────────────────────────────────────────
  { slug:'tf1', name:'TF1', cat:'fr', subs:['fr'], bg:'#B5D4F4', fg:'#042C53', ord:1, programs:[
    {t:'07:50',title:'Télématin',genre:'magazine',badge:'',desc:'Magazine matinal : actus, météo, reportages de société.'},
    {t:'11:00',title:'Les Douze Coups de Midi',genre:'divertissement',badge:'',desc:'Jeu culte animé par Jean-Luc Reichmann. Trouvez l\'Étoile Mystérieuse !'},
    {t:'13:00',title:'Journal de 13h',genre:'info',badge:'live',desc:'Actualités nationales et internationales avec Adel Hana.'},
    {t:'14:55',title:'Plus belle la vie',genre:'série',badge:'',desc:'Nouveaux rebondissements au Mistral — la série culte continue.'},
    {t:'15:55',title:'Demain nous appartient',genre:'série',badge:'',desc:'Intrigues et mystères à Sète — série quotidienne.'},
    {t:'17:25',title:'NCIS Los Angeles',genre:'série',badge:'',desc:'L\'équipe résout une affaire de trafic d\'armes impliquant des militaires.'},
    {t:'19:30',title:'Météo & Magazine',genre:'magazine',badge:'',desc:'Météo nationale suivie d\'un magazine de société.'},
    {t:'21:00',title:'Journal de 20h',genre:'info',badge:'live',desc:'Le rendez-vous incontournable avec Gilles Bouleau.'},
    {t:'22:10',title:'Film du soir',genre:'film',badge:'film',desc:'Grand film en première diffusion — thriller ou comédie.'},
    {t:'00:20',title:'Le 23h',genre:'info',badge:'',desc:'Résumé de la soirée et dernières nouvelles.'},
  ]},
  { slug:'france2', name:'France 2', cat:'fr', subs:['fr'], bg:'#C0DD97', fg:'#173404', ord:2, programs:[
    {t:'08:00',title:'Télématin',genre:'magazine',badge:'',desc:'Émission matinale : actualités, tendances, reportages.'},
    {t:'10:40',title:'Slam',genre:'divertissement',badge:'',desc:'Jeu de lettres animé par Cyril Féraud.'},
    {t:'13:00',title:'Journal de 13h',genre:'info',badge:'live',desc:'Midi Info avec toute l\'actualité du jour.'},
    {t:'14:40',title:'Toute une histoire',genre:'magazine',badge:'',desc:'Histoires de vie et témoignages poignants.'},
    {t:'18:00',title:'Questions pour un champion',genre:'divertissement',badge:'',desc:'Le célèbre jeu de culture générale de Samuel Étienne.'},
    {t:'20:00',title:'Journal de 20h',genre:'info',badge:'live',desc:'Le journal avec Laurent Delahousse ou Anne-Sophie Lapix.'},
    {t:'22:10',title:'Infrarouge / Documentaire',genre:'doc',badge:'doc',desc:'Documentaire de société ou reportage d\'investigation.'},
    {t:'23:40',title:'Complément d\'enquête',genre:'magazine',badge:'',desc:'Magazine d\'investigation sur un grand sujet d\'actualité.'},
  ]},
  { slug:'france3', name:'France 3', cat:'fr', subs:['fr'], bg:'#9FE1CB', fg:'#04342C', ord:3, programs:[
    {t:'08:00',title:'Matinales régionales',genre:'info',badge:'live',desc:'L\'info locale et nationale pour bien commencer la journée.'},
    {t:'13:00',title:'12/13',genre:'info',badge:'live',desc:'Journal national et régional de midi.'},
    {t:'15:00',title:'Inspecteur Barnaby',genre:'série',badge:'',desc:'Série policière britannique — meurtre mystérieux dans la campagne anglaise.'},
    {t:'17:30',title:'Série régionale',genre:'série',badge:'',desc:'Série ou magazine régional en fin d\'après-midi.'},
    {t:'20:00',title:'19/20',genre:'info',badge:'live',desc:'Journal régional de France 3.'},
    {t:'21:00',title:'Journal de 20h',genre:'info',badge:'live',desc:'Actualités nationales en direct.'},
    {t:'22:10',title:'Téléfilm du soir',genre:'film',badge:'film',desc:'Téléfilm ou film de cinéma en soirée sur France 3.'},
    {t:'00:00',title:'Soir 3',genre:'info',badge:'live',desc:'Journal de la nuit sur France 3.'},
  ]},
  { slug:'france4', name:'France 4', cat:'fr', subs:['fr'], bg:'#5DCAA5', fg:'#04342C', ord:4, programs:[
    {t:'10:00',title:'Programmes jeunesse',genre:'animation',badge:'',desc:'Dessins animés et programmes pour enfants.'},
    {t:'12:00',title:'Zorro',genre:'série',badge:'',desc:'La série d\'aventure classique.'},
    {t:'15:00',title:'Au nom de la vérité',genre:'magazine',badge:'',desc:'Émission de société animée par Rachid M\'Barki.'},
    {t:'18:00',title:'Outremer.le mag',genre:'magazine',badge:'',desc:'Magazine dédié aux territoires d\'Outre-mer.'},
    {t:'19:30',title:'Séries jeunesse',genre:'série',badge:'',desc:'Séries pour jeunes adultes en début de soirée.'},
    {t:'21:35',title:'Quotidien',genre:'divertissement',badge:'new',desc:'Le magazine décalé de Yann Barthès — reportages, interviews, humour.'},
    {t:'22:35',title:'Série de soirée',genre:'série',badge:'',desc:'Série en soirée sur France 4.'},
  ]},
  { slug:'france5', name:'France 5', cat:'fr', subs:['fr'], bg:'#1D9E75', fg:'#E1F5EE', ord:5, programs:[
    {t:'09:00',title:'C dans l\'air',genre:'magazine',badge:'',desc:'Débat d\'actualité avec experts autour d\'un grand thème du jour.'},
    {t:'12:30',title:'Le Magazine de la santé',genre:'magazine',badge:'',desc:'Conseils santé avec Dr. Marina Carrère d\'Encausse.'},
    {t:'15:00',title:'Documentaires',genre:'doc',badge:'doc',desc:'Documentaires scientifiques, historiques ou nature.'},
    {t:'18:45',title:'C à vous',genre:'magazine',badge:'',desc:'Talk-show culturel animé par Anne-Élisabeth Lemoine.'},
    {t:'20:00',title:'C à vous la suite',genre:'magazine',badge:'',desc:'Prolongation avec invités et culture.'},
    {t:'21:35',title:'C dans l\'air (rediff)',genre:'magazine',badge:'',desc:'Rediffusion du magazine d\'analyse politique et sociale.'},
    {t:'23:30',title:'Documentaire de nuit',genre:'doc',badge:'doc',desc:'Grand documentaire en seconde partie de soirée.'},
  ]},
  { slug:'m6', name:'M6', cat:'fr', subs:['fr'], bg:'#FAC775', fg:'#412402', ord:6, programs:[
    {t:'08:00',title:'Météo à 6',genre:'magazine',badge:'',desc:'Prévisions météo et informations pratiques du matin.'},
    {t:'10:00',title:'Capital (rediff)',genre:'doc',badge:'doc',desc:'Enquêtes sur les grandes tendances de consommation.'},
    {t:'13:45',title:'Le 12h45',genre:'info',badge:'live',desc:'Journal de midi de M6.'},
    {t:'14:50',title:'Mariés au premier regard',genre:'divertissement',badge:'',desc:'Des inconnus acceptent de se marier sans se connaître.'},
    {t:'17:00',title:'Série américaine',genre:'série',badge:'',desc:'Série policière ou drama en fin d\'après-midi.'},
    {t:'19:45',title:'Le 19:45',genre:'info',badge:'live',desc:'Journal du soir présenté par Nathalie Renoux.'},
    {t:'22:10',title:'Zone Interdite / Capital',genre:'doc',badge:'doc',desc:'Grand reportage en prime time : enquête immersive société.'},
    {t:'00:00',title:'66 Minutes',genre:'magazine',badge:'',desc:'Magazine de reportages 66 minutes.'},
  ]},
  { slug:'w9', name:'W9', cat:'fr', subs:['fr'], bg:'#EF9F27', fg:'#412402', ord:7, programs:[
    {t:'10:00',title:'Séries du matin',genre:'série',badge:'',desc:'Séries américaines en matinée.'},
    {t:'13:30',title:'Météo',genre:'info',badge:'',desc:'Bulletin météo national.'},
    {t:'15:00',title:'Scènes de ménages',genre:'série',badge:'',desc:'La comédie culte de M6 en rediffusion.'},
    {t:'19:30',title:'Scènes de ménages',genre:'série',badge:'',desc:'Nouveaux épisodes de la sitcom familiale.'},
    {t:'22:10',title:'Film ou série',genre:'film',badge:'film',desc:'Film ou série en prime time sur W9.'},
  ]},
  { slug:'tfx', name:'TFX', cat:'fr', subs:['fr'], bg:'#378ADD', fg:'#042C53', ord:8, programs:[
    {t:'10:00',title:'Séries du matin',genre:'série',badge:'',desc:'Séries en matinée sur TFX.'},
    {t:'14:00',title:'Confessions intimes',genre:'magazine',badge:'',desc:'Témoignages et confidences de familles françaises.'},
    {t:'18:00',title:'Météo & news',genre:'info',badge:'',desc:'Bulletin météo et flash info.'},
    {t:'19:30',title:'Série soirée',genre:'série',badge:'',desc:'Série en début de soirée sur TFX.'},
    {t:'22:10',title:'Film de soirée',genre:'film',badge:'film',desc:'Grand film en prime time sur TFX.'},
    {t:'00:30',title:'Film de nuit',genre:'film',badge:'film',desc:'Film en deuxième partie de soirée.'},
  ]},
  { slug:'tmc', name:'TMC', cat:'fr', subs:['fr'], bg:'#85B7EB', fg:'#042C53', ord:9, programs:[
    {t:'10:00',title:'Météo',genre:'info',badge:'',desc:'Prévisions météo nationales.'},
    {t:'14:00',title:'Jour J',genre:'magazine',badge:'',desc:'Magazine d\'actualité de TMC.'},
    {t:'17:30',title:'Série après-midi',genre:'série',badge:'',desc:'Série en fin d\'après-midi sur TMC.'},
    {t:'19:45',title:'Quotidien',genre:'divertissement',badge:'',desc:'Rediffusion du magazine de Yann Barthès.'},
    {t:'22:10',title:'Série américaine',genre:'série',badge:'',desc:'Série policière ou comédie en prime time.'},
  ]},
  { slug:'tf1sf', name:'TF1 Séries Films', cat:'fr', subs:['fr','cinema'], bg:'#185FA5', fg:'#E6F1FB', ord:10, programs:[
    {t:'09:00',title:'Séries du matin',genre:'série',badge:'',desc:'Séries policières et drames en matinée.'},
    {t:'14:00',title:'Film de l\'après-midi',genre:'film',badge:'film',desc:'Film en après-midi sur TF1 Séries Films.'},
    {t:'19:00',title:'Série en soirée',genre:'série',badge:'',desc:'Série en début de soirée.'},
    {t:'22:10',title:'Film en prime time',genre:'film',badge:'film',desc:'Grand film policier ou thriller en soirée.'},
    {t:'00:10',title:'Série de nuit',genre:'série',badge:'',desc:'Série en deuxième partie de nuit.'},
  ]},
  { slug:'canalplus', name:'Canal+', cat:'fr', subs:['fr','cinema'], bg:'#CECBF6', fg:'#26215C', ord:11, programs:[
    {t:'08:30',title:'Canal News',genre:'info',badge:'live',desc:'Actualités Canal+ en direct le matin.'},
    {t:'10:00',title:'Série Canal+',genre:'série',badge:'new',desc:'Création originale Canal+ en matinée.'},
    {t:'13:00',title:'Le Grand Journal',genre:'magazine',badge:'',desc:'Magazine culturel et d\'actualité de Canal+.'},
    {t:'16:00',title:'Série Canal+ (rediff)',genre:'série',badge:'',desc:'Rediffusion d\'une création originale Canal+.'},
    {t:'19:00',title:'Zapping Canal+',genre:'magazine',badge:'',desc:'Le meilleur de la télé décrypté par Canal+.'},
    {t:'22:00',title:'Film ou série en clair',genre:'film',badge:'film',desc:'Grande fiction en prime time sur Canal+.'},
    {t:'00:00',title:'Late Canal+',genre:'magazine',badge:'',desc:'Magazine de fin de soirée Canal+.'},
  ]},
  { slug:'canalbo', name:'Canal+ Box Office', cat:'fr', subs:['fr','cinema'], bg:'#AFA9EC', fg:'#26215C', ord:12, programs:[
    {t:'11:00',title:'Film récent',genre:'film',badge:'film',desc:'Films récents en avant-première sur Canal+ Box Office.'},
    {t:'15:00',title:'Film de l\'après-midi',genre:'film',badge:'film',desc:'Seconde diffusion d\'un film Box Office.'},
    {t:'18:30',title:'Film en avant-soirée',genre:'film',badge:'film',desc:'Avant-première Box Office en début de soirée.'},
    {t:'22:00',title:'Film en soirée',genre:'film',badge:'film',desc:'Film récemment sorti en salle, en avant-première.'},
  ]},
  { slug:'canalcine', name:'Canal+ Cinéma(s)', cat:'fr', subs:['fr','cinema'], bg:'#7F77DD', fg:'#EEEDFE', ord:13, programs:[
    {t:'10:00',title:'Film classique',genre:'film',badge:'film',desc:'Classique du cinéma mondial en matinée.'},
    {t:'15:00',title:'Film français',genre:'film',badge:'film',desc:'Film français contemporain ou culte.'},
    {t:'18:30',title:'Film du soir',genre:'film',badge:'film',desc:'Film en début de soirée sur Canal+ Cinéma(s).'},
    {t:'22:00',title:'Film en soirée',genre:'film',badge:'film',desc:'Grand film de cinéma en prime time.'},
    {t:'00:15',title:'Film de nuit',genre:'film',badge:'film',desc:'Film en deuxième partie de soirée.'},
  ]},
  { slug:'canaldocs', name:'Canal+ Docs', cat:'fr', subs:['fr'], bg:'#534AB7', fg:'#EEEDFE', ord:14, programs:[
    {t:'09:00',title:'Documentaire nature',genre:'doc',badge:'doc',desc:'Documentaire animalier ou environnemental.'},
    {t:'13:00',title:'Docu société',genre:'doc',badge:'doc',desc:'Reportage de société ou enquête.'},
    {t:'16:00',title:'Docu nature',genre:'doc',badge:'doc',desc:'Documentaire animalier ou environnemental en après-midi.'},
    {t:'19:30',title:'Docu histoire',genre:'doc',badge:'doc',desc:'Documentaire historique en avant-soirée.'},
    {t:'22:00',title:'Grand documentaire',genre:'doc',badge:'doc',desc:'Documentaire en prime time — histoire, science ou société.'},
  ]},
  { slug:'canalfoot', name:'Canal+ Foot', cat:'fr', subs:['fr','sport'], bg:'#3C3489', fg:'#EEEDFE', ord:15, programs:[
    {t:'09:00',title:'Foot Mercato',genre:'sport',badge:'',desc:'Transferts, rumeurs et actualités du football mondial.'},
    {t:'13:00',title:'Canal Football Club',genre:'sport',badge:'',desc:'Magazine football : analyses et interviews.'},
    {t:'16:00',title:'Avant-match',genre:'sport',badge:'',desc:'Préparation, compositions et analyses avant le match du soir.'},
    {t:'19:30',title:'Match de la soirée',genre:'sport',badge:'live',desc:'Football européen en direct — Ligue 1 ou Champions League.'},
    {t:'22:00',title:'Match en direct',genre:'sport',badge:'live',desc:'Match de Ligue 1, Champions League ou Liga en direct.'},
  ]},
  { slug:'canalge', name:'Canal+ Grand Écran', cat:'fr', subs:['fr','cinema'], bg:'#26215C', fg:'#CECBF6', ord:16, programs:[
    {t:'10:00',title:'Grand film du matin',genre:'film',badge:'film',desc:'Chef-d\'œuvre du cinéma mondial en matinée.'},
    {t:'15:00',title:'Film de l\'après-midi',genre:'film',badge:'film',desc:'Film en grand format pour l\'après-midi.'},
    {t:'18:30',title:'Film grand écran soirée',genre:'film',badge:'film',desc:'Chef-d\'œuvre en début de soirée.'},
    {t:'22:00',title:'Film du soir',genre:'film',badge:'film',desc:'Grand film en prime time sur Canal+ Grand Écran.'},
  ]},
  { slug:'canalkids', name:'Canal+ Kids', cat:'fr', subs:['fr'], bg:'#F5C4B3', fg:'#4A1B0C', ord:17, programs:[
    {t:'08:00',title:'Dessins animés',genre:'animation',badge:'',desc:'Programmes animés pour les enfants.'},
    {t:'13:00',title:'Films d\'animation',genre:'film',badge:'film',desc:'Long-métrage d\'animation pour toute la famille.'},
    {t:'18:00',title:'Séries kids',genre:'série',badge:'',desc:'Séries d\'aventure pour enfants et préados.'},
    {t:'21:00',title:'Film famille',genre:'film',badge:'film',desc:'Film pour toute la famille en soirée.'},
  ]},
  { slug:'canalsport', name:'Canal+ Sport', cat:'fr', subs:['fr','sport'], bg:'#D85A30', fg:'#FAECE7', ord:18, programs:[
    {t:'09:00',title:'Morning Sport',genre:'sport',badge:'',desc:'Actualités sportives du matin.'},
    {t:'13:00',title:'Magazine sport',genre:'sport',badge:'',desc:'Résultats et analyses des compétitions.'},
    {t:'16:00',title:'Sport de l\'après-midi',genre:'sport',badge:'live',desc:'Compétition en direct en après-midi.'},
    {t:'19:30',title:'Avant-soirée sportive',genre:'sport',badge:'',desc:'Résumés et analyses avant le grand match.'},
    {t:'22:00',title:'Match en direct',genre:'sport',badge:'live',desc:'Retransmission en direct d\'un match.'},
  ]},
  { slug:'canalsport360', name:'Canal+ Sport 360', cat:'fr', subs:['fr','sport'], bg:'#993C1D', fg:'#FAECE7', ord:19, programs:[
    {t:'10:00',title:'Sport en continu',genre:'sport',badge:'live',desc:'Sports en direct et différé toute la journée.'},
    {t:'15:00',title:'Cyclisme / Tennis',genre:'sport',badge:'live',desc:'Retransmission de compétitions internationales.'},
    {t:'18:30',title:'Sport en continu soirée',genre:'sport',badge:'live',desc:'Compétitions sportives en début de soirée.'},
    {t:'22:00',title:'Sport en soirée',genre:'sport',badge:'live',desc:'Grand événement sportif en prime time.'},
  ]},
  { slug:'cineclassic', name:'Ciné+ Classic', cat:'fr', subs:['fr','cinema'], bg:'#888780', fg:'#F1EFE8', ord:20, programs:[
    {t:'10:00',title:'Classique du cinéma',genre:'film',badge:'film',desc:'Chef-d\'œuvre du 7e art, films de patrimoine.'},
    {t:'15:30',title:'Film années 70-80',genre:'film',badge:'film',desc:'Cinéma classique français et étranger.'},
    {t:'18:30',title:'Classique du soir',genre:'film',badge:'film',desc:'Film de patrimoine en début de soirée.'},
    {t:'22:00',title:'Grand classique',genre:'film',badge:'film',desc:'Film culte en prime time.'},
  ]},
  { slug:'cineemotion', name:'Ciné+ Émotion', cat:'fr', subs:['fr','cinema'], bg:'#B4B2A9', fg:'#2C2C2A', ord:21, programs:[
    {t:'10:00',title:'Comédie romantique',genre:'film',badge:'film',desc:'Films d\'émotion et d\'amour en matinée.'},
    {t:'15:00',title:'Drame',genre:'film',badge:'film',desc:'Film dramatique de l\'après-midi.'},
    {t:'18:30',title:'Film émotion soirée',genre:'film',badge:'film',desc:'Film romantique ou dramatique en début de soirée.'},
    {t:'22:00',title:'Film d\'émotion',genre:'film',badge:'film',desc:'Grand film touchant en prime time.'},
  ]},
  { slug:'cinefamily', name:'Ciné+ Family', cat:'fr', subs:['fr','cinema'], bg:'#D3D1C7', fg:'#2C2C2A', ord:22, programs:[
    {t:'10:00',title:'Film famille matin',genre:'film',badge:'film',desc:'Film pour toute la famille en matinée.'},
    {t:'15:00',title:'Animation',genre:'film',badge:'film',desc:'Long-métrage d\'animation.'},
    {t:'18:30',title:'Film famille soirée',genre:'film',badge:'film',desc:'Film pour toute la famille en début de soirée.'},
    {t:'22:00',title:'Film famille soir',genre:'film',badge:'film',desc:'Film familial en prime time.'},
  ]},
  { slug:'cinefestival', name:'Ciné+ Festival', cat:'fr', subs:['fr','cinema'], bg:'#F1EFE8', fg:'#2C2C2A', ord:23, programs:[
    {t:'10:00',title:'Film de festival',genre:'film',badge:'film',desc:'Film primé dans les grands festivals mondiaux.'},
    {t:'15:00',title:'Cinéma du monde',genre:'film',badge:'film',desc:'Film international en après-midi.'},
    {t:'18:30',title:'Film festival soirée',genre:'film',badge:'film',desc:'Film primé en début de soirée.'},
    {t:'22:00',title:'Avant-première festival',genre:'film',badge:'new',desc:'Découverte d\'un film primé en prime time.'},
  ]},
  { slug:'cinefrisson', name:'Ciné+ Frisson', cat:'fr', subs:['fr','cinema'], bg:'#444441', fg:'#D3D1C7', ord:24, programs:[
    {t:'10:00',title:'Thriller du matin',genre:'film',badge:'film',desc:'Film d\'horreur ou thriller en matinée.'},
    {t:'15:00',title:'Horreur classique',genre:'film',badge:'film',desc:'Classique du cinéma d\'épouvante.'},
    {t:'18:30',title:'Thriller soirée',genre:'film',badge:'film',desc:'Film de suspense ou horreur en début de soirée.'},
    {t:'22:00',title:'Film de frisson',genre:'film',badge:'film',desc:'Grand film d\'horreur ou thriller en prime time.'},
    {t:'00:00',title:'Horreur de nuit',genre:'film',badge:'film',desc:'Film d\'horreur en deuxième partie de soirée.'},
  ]},
  { slug:'cnews', name:'CNews', cat:'fr', subs:['fr','info'], bg:'#E6F1FB', fg:'#042C53', ord:25, programs:[
    {t:'08:00',title:'La Matinale CNews',genre:'info',badge:'live',desc:'Journal du matin en direct avec débats et invités.'},
    {t:'13:00',title:'Midi Info',genre:'info',badge:'live',desc:'Journal de midi avec analyses.'},
    {t:'19:00',title:'Face à l\'info',genre:'info',badge:'live',desc:'Débat d\'actualité avec Christine Kelly.'},
    {t:'21:00',title:'Journal du soir',genre:'info',badge:'live',desc:'Journal télévisé de CNews.'},
    {t:'22:00',title:'L\'heure des pros',genre:'magazine',badge:'',desc:'Débat économique et politique avec Pascal Praud.'},
  ]},
  { slug:'bfmtv', name:'BFM TV', cat:'fr', subs:['fr','info'], bg:'#378ADD', fg:'#E6F1FB', ord:26, programs:[
    {t:'07:00',title:'BFM Matin',genre:'info',badge:'live',desc:'Information en continu dès 7h, journaux toutes les heures.'},
    {t:'13:00',title:'BFM Midi',genre:'info',badge:'live',desc:'Journal de midi et analyses.'},
    {t:'18:00',title:'BFM Story',genre:'info',badge:'live',desc:'Retour sur les grands faits du jour.'},
    {t:'21:00',title:'BFM Soir',genre:'info',badge:'live',desc:'Journal du soir et débats.'},
    {t:'23:00',title:'Nuit BFM',genre:'info',badge:'live',desc:'Information en continu toute la nuit.'},
  ]},
  { slug:'lequipe', name:'L\'Équipe', cat:'fr', subs:['fr','sport'], bg:'#639922', fg:'#EAF3DE', ord:27, programs:[
    {t:'08:00',title:'Matinale sport',genre:'sport',badge:'',desc:'Revue de presse sportive et résultats de la nuit.'},
    {t:'13:00',title:'Journal du Sport',genre:'sport',badge:'live',desc:'Actualités sportives de midi.'},
    {t:'19:30',title:'Journal du Sport',genre:'sport',badge:'live',desc:'Journal sportif du soir.'},
    {t:'22:00',title:'Match ou magazine',genre:'sport',badge:'live',desc:'Match en direct ou grand magazine sport.'},
  ]},
  { slug:'eurosport1', name:'Eurosport 1', cat:'fr', subs:['fr','sport'], bg:'#97C459', fg:'#173404', ord:28, programs:[
    {t:'08:00',title:'Eurosport Matin',genre:'sport',badge:'',desc:'Actualités et compétitions en direct le matin.'},
    {t:'13:00',title:'Tennis / Cyclisme',genre:'sport',badge:'live',desc:'Compétition sportive en direct ou en différé.'},
    {t:'19:00',title:'Résultats du jour',genre:'sport',badge:'',desc:'Bilan des compétitions et analyses.'},
    {t:'22:00',title:'Grand événement sportif',genre:'sport',badge:'live',desc:'Retransmission en prime time.'},
  ]},
  { slug:'eurosport2', name:'Eurosport 2', cat:'fr', subs:['fr','sport'], bg:'#3B6D11', fg:'#EAF3DE', ord:29, programs:[
    {t:'09:00',title:'Sport matinal',genre:'sport',badge:'',desc:'Sports moins médiatisés en direct.'},
    {t:'15:00',title:'Compétitions live',genre:'sport',badge:'live',desc:'Événements sportifs en direct.'},
    {t:'18:30',title:'Sport soirée Eurosport 2',genre:'sport',badge:'live',desc:'Compétitions de sports moins médiatisés en soirée.'},
    {t:'22:00',title:'Soirée sport',genre:'sport',badge:'live',desc:'Événement sportif en prime time.'},
  ]},
  { slug:'infosport', name:'Infosport+', cat:'fr', subs:['fr','sport'], bg:'#185FA5', fg:'#E6F1FB', ord:30, programs:[
    {t:'08:00',title:'Matinale sport',genre:'sport',badge:'live',desc:'Revue de sport et résultats.'},
    {t:'13:00',title:'Journal sportif',genre:'sport',badge:'live',desc:'Actualités des sports en direct.'},
    {t:'16:00',title:'Sport de l\'après-midi',genre:'sport',badge:'live',desc:'Résumés et compétitions en après-midi.'},
    {t:'19:30',title:'Infosport Soir',genre:'sport',badge:'live',desc:'Journal sportif du soir avec résultats.'},
    {t:'22:00',title:'Magazine sport',genre:'sport',badge:'',desc:'Analyses et résumés des compétitions.'},
  ]},
  { slug:'bein1', name:'beIN Sports 1', cat:'fr', subs:['fr','sport'], bg:'#E24B4A', fg:'#FCEBEB', ord:31, programs:[
    {t:'09:00',title:'beIN Sports News',genre:'sport',badge:'live',desc:'Actualités sportives mondiales en direct.'},
    {t:'13:30',title:'Football Live',genre:'sport',badge:'live',desc:'Match de championnat européen en direct.'},
    {t:'19:00',title:'La Liga / Premier League',genre:'sport',badge:'live',desc:'Match de football européen en direct.'},
    {t:'22:00',title:'Match du soir',genre:'sport',badge:'live',desc:'Grand match de football — Liga, Serie A ou autre.'},
  ]},
  { slug:'bein2', name:'beIN Sports 2', cat:'fr', subs:['fr','sport'], bg:'#A32D2D', fg:'#FCEBEB', ord:32, programs:[
    {t:'10:00',title:'Match en direct',genre:'sport',badge:'live',desc:'Football ou basket en direct le matin.'},
    {t:'15:00',title:'Tennis / Basket',genre:'sport',badge:'live',desc:'Compétition en direct ou différé.'},
    {t:'18:30',title:'Football soirée beIN 2',genre:'sport',badge:'live',desc:'Match en début de soirée sur beIN Sports 2.'},
    {t:'22:00',title:'Match du soir',genre:'sport',badge:'live',desc:'Match de football ou autre sport en prime time.'},
  ]},
  { slug:'bein3', name:'beIN Sports 3', cat:'fr', subs:['fr','sport'], bg:'#791F1F', fg:'#F7C1C1', ord:33, programs:[
    {t:'11:00',title:'Sport en direct',genre:'sport',badge:'live',desc:'Compétition internationale en direct.'},
    {t:'17:00',title:'Replay',genre:'sport',badge:'',desc:'Rediffusion d\'un grand match.'},
    {t:'22:00',title:'Soirée sport',genre:'sport',badge:'live',desc:'Événement sportif en prime time.'},
  ]},

  // ── BELGES ──────────────────────────────────────────────────────────────────
  { slug:'laune', name:'La Une', cat:'be', subs:['be'], bg:'#FAC775', fg:'#412402', ord:34, programs:[
    {t:'08:00',title:'Télématin RTBF',genre:'magazine',badge:'',desc:'Magazine matinal belge avec actus et météo.'},
    {t:'13:00',title:'Journal de midi',genre:'info',badge:'live',desc:'Journal télévisé de la RTBF à 13h.'},
    {t:'15:00',title:'Téléfilm de l\'après-midi',genre:'film',badge:'film',desc:'Téléfilm ou série en après-midi sur La Une.'},
    {t:'18:00',title:'Série belge',genre:'série',badge:'',desc:'Série belge ou coproduction européenne en début de soirée.'},
    {t:'20:30',title:'Journal télévisé',genre:'info',badge:'live',desc:'JT de La Une — actualités belges et internationales.'},
    {t:'21:30',title:'Série ou film belge',genre:'série',badge:'',desc:'Production belge ou coproduction européenne en prime time.'},
    {t:'23:30',title:'Questions à la une',genre:'doc',badge:'doc',desc:'Magazine d\'investigation de la RTBF.'},
  ]},
  { slug:'tipik', name:'Tipik', cat:'be', subs:['be'], bg:'#F09595', fg:'#501313', ord:35, programs:[
    {t:'10:00',title:'Séries jeunesse',genre:'série',badge:'',desc:'Séries pour jeunes adultes en matinée.'},
    {t:'15:00',title:'Clip TV',genre:'divertissement',badge:'',desc:'Vidéos musicales et émissions tendances.'},
    {t:'18:00',title:'Séries soirée Tipik',genre:'série',badge:'',desc:'Séries en début de soirée sur Tipik.'},
    {t:'21:30',title:'Série tendance',genre:'série',badge:'new',desc:'Série en vogue en prime time sur Tipik.'},
  ]},
  { slug:'latrois', name:'La Trois', cat:'be', subs:['be'], bg:'#9FE1CB', fg:'#04342C', ord:36, programs:[
    {t:'10:00',title:'Documentaires',genre:'doc',badge:'doc',desc:'Documentaires culturels et de société.'},
    {t:'15:00',title:'Culturama',genre:'magazine',badge:'',desc:'Magazine culturel de La Trois.'},
    {t:'18:00',title:'Documentaire soirée',genre:'doc',badge:'doc',desc:'Documentaire culturel ou historique en début de soirée.'},
    {t:'21:30',title:'Grand documentaire',genre:'doc',badge:'doc',desc:'Documentaire en prime time.'},
  ]},
  { slug:'rtltvi', name:'RTL tvi', cat:'be', subs:['be','info'], bg:'#E24B4A', fg:'#FCEBEB', ord:37, programs:[
    {t:'08:00',title:'RTL Info Matin',genre:'info',badge:'live',desc:'Journal du matin sur RTL tvi.'},
    {t:'14:00',title:'RTL Info 13h',genre:'info',badge:'live',desc:'Journal de midi de RTL tvi.'},
    {t:'17:00',title:'Série après-midi',genre:'série',badge:'',desc:'Série en fin d\'après-midi sur RTL tvi.'},
    {t:'20:00',title:'RTL Info 19h',genre:'info',badge:'live',desc:'Journal du soir de RTL tvi.'},
    {t:'21:10',title:'Série ou film',genre:'série',badge:'',desc:'Série ou film en prime time sur RTL tvi.'},
  ]},
  { slug:'rtlclub', name:'RTL club', cat:'be', subs:['be'], bg:'#F09595', fg:'#501313', ord:38, programs:[
    {t:'10:00',title:'Séries comédies',genre:'série',badge:'',desc:'Comédies en matinée.'},
    {t:'14:00',title:'Séries après-midi',genre:'série',badge:'',desc:'Séries américaines en après-midi sur RTL club.'},
    {t:'18:00',title:'Soirée RTL club',genre:'série',badge:'',desc:'Série en début de soirée.'},
    {t:'21:30',title:'Film ou série',genre:'film',badge:'film',desc:'Film ou série en prime time sur RTL club.'},
  ]},
  { slug:'ln24', name:'LN24', cat:'be', subs:['be','info'], bg:'#B5D4F4', fg:'#042C53', ord:39, programs:[
    {t:'07:00',title:'LN24 Matin',genre:'info',badge:'live',desc:'Information belge en continu dès 7h.'},
    {t:'13:00',title:'LN24 Midi',genre:'info',badge:'live',desc:'Journal et analyses de midi.'},
    {t:'17:00',title:'LN24 Après-midi',genre:'info',badge:'live',desc:'Info en continu : faits du jour et analyses.'},
    {t:'19:00',title:'LN24 Journal',genre:'info',badge:'live',desc:'Journal de début de soirée sur LN24.'},
    {t:'21:00',title:'LN24 Soir',genre:'info',badge:'live',desc:'Journal du soir et débats d\'actualité.'},
  ]},
  { slug:'be1', name:'Be 1', cat:'be', subs:['be'], bg:'#C0DD97', fg:'#173404', ord:40, programs:[
    {t:'10:00',title:'Magazine matin',genre:'magazine',badge:'',desc:'Émission de divertissement matinal.'},
    {t:'14:00',title:'Film après-midi',genre:'film',badge:'film',desc:'Film en après-midi sur Be 1.'},
    {t:'17:00',title:'Série Be 1',genre:'série',badge:'',desc:'Série en fin d\'après-midi.'},
    {t:'19:00',title:'Magazine soirée',genre:'magazine',badge:'',desc:'Émission de divertissement en début de soirée sur Be 1.'},
    {t:'21:30',title:'Soirée Be 1',genre:'série',badge:'',desc:'Série ou divertissement en prime time.'},
  ]},
  { slug:'becine', name:'Be Ciné', cat:'be', subs:['be','cinema'], bg:'#AFA9EC', fg:'#26215C', ord:41, programs:[
    {t:'10:00',title:'Cinéma belge',genre:'film',badge:'film',desc:'Films belges ou coproductions en matinée.'},
    {t:'15:00',title:'Film classique',genre:'film',badge:'film',desc:'Classique du cinéma mondial.'},
    {t:'18:30',title:'Film Be Ciné soirée',genre:'film',badge:'film',desc:'Film en début de soirée sur Be Ciné.'},
    {t:'22:00',title:'Film du soir',genre:'film',badge:'film',desc:'Grand film en prime time sur Be Ciné.'},
  ]},
  { slug:'beseries', name:'Be Séries', cat:'be', subs:['be'], bg:'#CECBF6', fg:'#26215C', ord:42, programs:[
    {t:'10:00',title:'Série matinale',genre:'série',badge:'',desc:'Série en début de journée.'},
    {t:'15:00',title:'Série après-midi',genre:'série',badge:'',desc:'Série américaine ou européenne.'},
    {t:'18:30',title:'Série soirée Be Séries',genre:'série',badge:'',desc:'Série en début de soirée sur Be Séries.'},
    {t:'22:00',title:'Série prime time',genre:'série',badge:'new',desc:'Série en prime time sur Be Séries.'},
  ]},
  { slug:'ladeux', name:'La Deux', cat:'be', subs:['be'], bg:'#EF9F27', fg:'#412402', ord:43, programs:[
    {t:'09:00',title:'Magazine RTBF',genre:'magazine',badge:'',desc:'Émission culturelle ou de société en matinée.'},
    {t:'13:00',title:'Midi en direct',genre:'info',badge:'live',desc:'Magazine d\'information de La Deux.'},
    {t:'16:00',title:'Documentaires La Deux',genre:'doc',badge:'doc',desc:'Documentaires en après-midi sur La Deux.'},
    {t:'19:00',title:'Magazine soirée La Deux',genre:'magazine',badge:'',desc:'Magazine culturel ou de société en début de soirée.'},
    {t:'21:30',title:'Grand documentaire',genre:'doc',badge:'doc',desc:'Documentaire de société ou historique en prime time.'},
    {t:'23:30',title:'Débat',genre:'magazine',badge:'',desc:'Magazine de débat en deuxième partie de soirée.'},
  ]},
  { slug:'voosport1', name:'VOOsport World 1', cat:'be', subs:['be','sport'], bg:'#5DCAA5', fg:'#04342C', ord:44, programs:[
    {t:'09:00',title:'Sport matinal',genre:'sport',badge:'',desc:'Sports en direct le matin.'},
    {t:'14:00',title:'Football belge',genre:'sport',badge:'live',desc:'Match de Pro League belge en direct.'},
    {t:'17:00',title:'Sport VOO après-midi',genre:'sport',badge:'live',desc:'Compétition sportive en fin d\'après-midi.'},
    {t:'19:30',title:'Résumés et analyses',genre:'sport',badge:'',desc:'Retour sur les matchs du jour, interviews.'},
    {t:'22:00',title:'Grand match',genre:'sport',badge:'live',desc:'Match en prime time sur VOOsport World 1.'},
  ]},
  { slug:'voosport2', name:'VOOsport World 2', cat:'be', subs:['be','sport'], bg:'#1D9E75', fg:'#E1F5EE', ord:45, programs:[
    {t:'11:00',title:'Sport 2',genre:'sport',badge:'live',desc:'Compétition sportive en direct.'},
    {t:'15:00',title:'Sport VOO 2 après-midi',genre:'sport',badge:'live',desc:'Deuxième compétition de l\'après-midi.'},
    {t:'18:30',title:'Sport VOO 2 soirée',genre:'sport',badge:'live',desc:'Événement sportif en début de soirée.'},
    {t:'22:00',title:'Soirée sport',genre:'sport',badge:'live',desc:'Événement sportif en prime time.'},
  ]},
  { slug:'voosport3', name:'VOOsport World 3', cat:'be', subs:['be','sport'], bg:'#0F6E56', fg:'#E1F5EE', ord:46, programs:[
    {t:'11:00',title:'Sport 3',genre:'sport',badge:'live',desc:'Compétition en direct ou différé.'},
    {t:'15:00',title:'Sport VOO 3 après-midi',genre:'sport',badge:'live',desc:'Troisième compétition de l\'après-midi.'},
    {t:'18:30',title:'Sport VOO 3 soirée',genre:'sport',badge:'live',desc:'Événement sportif en début de soirée.'},
    {t:'22:00',title:'Soirée sport',genre:'sport',badge:'live',desc:'Match en prime time sur VOOsport World 3.'},
  ]},
  { slug:'proximus', name:'Proximus Sports', cat:'be', subs:['be','sport'], bg:'#085041', fg:'#9FE1CB', ord:47, programs:[
    {t:'09:00',title:'Proximus Matin',genre:'sport',badge:'',desc:'Actus sport et compétitions matinales.'},
    {t:'13:00',title:'Proximus Midi',genre:'sport',badge:'',desc:'Résultats et analyses de midi.'},
    {t:'16:00',title:'Proximus Après-midi',genre:'sport',badge:'live',desc:'Compétition sportive en après-midi.'},
    {t:'19:30',title:'Proximus Soirée',genre:'sport',badge:'live',desc:'Match en avant-soirée sur Proximus Sports.'},
    {t:'22:00',title:'Match Proximus',genre:'sport',badge:'live',desc:'Événement sportif en prime time.'},
  ]},
  { slug:'epl1', name:'Eleven Pro League 1', cat:'be', subs:['be','sport'], bg:'#F7C1C1', fg:'#501313', ord:48, programs:[
    {t:'14:00',title:'Pro League Live',genre:'sport',badge:'live',desc:'Match de la Jupiler Pro League en direct.'},
    {t:'17:00',title:'Pro League 1 soirée',genre:'sport',badge:'live',desc:'Deuxième match de Pro League en fin d\'après-midi.'},
    {t:'19:30',title:'Analyse Pro League',genre:'sport',badge:'',desc:'Résumés et analyses des matchs de la journée.'},
    {t:'22:00',title:'Pro League Soir',genre:'sport',badge:'live',desc:'Match de football belge en prime time.'},
  ]},
  { slug:'epl2', name:'Eleven Pro League 2', cat:'be', subs:['be','sport'], bg:'#F09595', fg:'#501313', ord:49, programs:[
    {t:'15:00',title:'Pro League 2',genre:'sport',badge:'live',desc:'Deuxième match de Pro League en direct.'},
    {t:'18:30',title:'EPL 2 soirée',genre:'sport',badge:'live',desc:'Match en début de soirée sur Eleven Pro League 2.'},
    {t:'22:00',title:'Football soir',genre:'sport',badge:'live',desc:'Match de football en prime time.'},
  ]},
  { slug:'epl3', name:'Eleven Pro League 3', cat:'be', subs:['be','sport'], bg:'#E24B4A', fg:'#FCEBEB', ord:50, programs:[
    {t:'16:00',title:'Pro League 3',genre:'sport',badge:'live',desc:'Troisième match de journée en direct.'},
    {t:'19:30',title:'EPL 3 soirée',genre:'sport',badge:'live',desc:'Match en début de soirée sur Eleven Pro League 3.'},
    {t:'22:00',title:'Match de nuit',genre:'sport',badge:'live',desc:'Match tardif de football.'},
  ]},
  { slug:'eleven1', name:'Eleven Sports 1', cat:'be', subs:['be','sport'], bg:'#A32D2D', fg:'#FCEBEB', ord:51, programs:[
    {t:'13:00',title:'Football international',genre:'sport',badge:'live',desc:'Compétition internationale en direct.'},
    {t:'16:00',title:'Eleven Sports 1 après-midi',genre:'sport',badge:'live',desc:'Deuxième compétition de l\'après-midi.'},
    {t:'19:30',title:'Eleven Sports 1 soirée',genre:'sport',badge:'live',desc:'Match en début de soirée.'},
    {t:'22:00',title:'Grand match Eleven',genre:'sport',badge:'live',desc:'Match en prime time sur Eleven Sports 1.'},
  ]},
  { slug:'eleven2', name:'Eleven Sports 2', cat:'be', subs:['be','sport'], bg:'#791F1F', fg:'#F7C1C1', ord:52, programs:[
    {t:'14:00',title:'Sport live',genre:'sport',badge:'live',desc:'Compétition sportive en direct.'},
    {t:'18:30',title:'Eleven Sports 2 soirée',genre:'sport',badge:'live',desc:'Match en début de soirée sur Eleven Sports 2.'},
    {t:'22:00',title:'Match soirée',genre:'sport',badge:'live',desc:'Match en prime time sur Eleven Sports 2.'},
  ]},
  { slug:'eleven3', name:'Eleven Sports 3', cat:'be', subs:['be','sport'], bg:'#501313', fg:'#F09595', ord:53, programs:[
    {t:'15:00',title:'Sport continu',genre:'sport',badge:'live',desc:'Événements sportifs en direct.'},
    {t:'18:30',title:'Eleven Sports 3 soirée',genre:'sport',badge:'live',desc:'Match en début de soirée sur Eleven Sports 3.'},
    {t:'22:00',title:'Soirée sport',genre:'sport',badge:'live',desc:'Match en prime time sur Eleven Sports 3.'},
  ]},

  // ── ISRAÉLIENNES ────────────────────────────────────────────────────────────
  { slug:'keshet12', name:'Keshet 12', cat:'il', subs:['il'], bg:'#F5C4B3', fg:'#4A1B0C', ord:54, programs:[
    {t:'08:00',title:'חדשות הבוקר',genre:'info',badge:'live',desc:'Journal du matin de Keshet 12 — actus israéliennes et internationales.'},
    {t:'09:00',title:'חצי חינם',genre:'divertissement',badge:'',desc:'Émission matinale de divertissement et société.'},
    {t:'13:00',title:'חדשות הצהריים',genre:'info',badge:'live',desc:'Journal de midi sur Keshet 12.'},
    {t:'15:00',title:'סדרה אמריקאית',genre:'série',badge:'',desc:'Série américaine en après-midi.'},
    {t:'17:30',title:'בידור אחה"צ',genre:'divertissement',badge:'',desc:'Divertissement en fin d\'après-midi sur Keshet 12.'},
    {t:'20:00',title:'חדשות ערב',genre:'info',badge:'live',desc:'Journal du soir — principal rendez-vous info d\'Israël.'},
    {t:'21:00',title:'פריים טיים ישראלי',genre:'série',badge:'new',desc:'Série ou émission israélienne en prime time.'},
    {t:'22:30',title:'מועדון לילה',genre:'divertissement',badge:'',desc:'Talk-show ou émission d\'humour en deuxième partie de soirée.'},
  ]},
  { slug:'reshet13', name:'Reshet 13', cat:'il', subs:['il'], bg:'#9FE1CB', fg:'#04342C', ord:55, programs:[
    {t:'08:00',title:'בוקר טוב',genre:'magazine',badge:'',desc:'Magazine matinal de Reshet 13.'},
    {t:'13:00',title:'חדשות 13',genre:'info',badge:'live',desc:'Journal de midi sur la chaîne 13.'},
    {t:'15:00',title:'סדרה אמריקאית',genre:'série',badge:'',desc:'Série américaine en après-midi sur Reshet 13.'},
    {t:'17:30',title:'ריאליטי / בידור',genre:'divertissement',badge:'',desc:'Émission de divertissement ou télé-réalité en fin d\'après-midi.'},
    {t:'20:00',title:'מבט',genre:'info',badge:'live',desc:'Journal du soir — actualités israéliennes et internationales.'},
    {t:'21:00',title:'אח גדול / פריים',genre:'divertissement',badge:'',desc:'Big Brother Israël ou grand format en prime time.'},
    {t:'23:00',title:'סדרה ישראלית',genre:'série',badge:'',desc:'Série israélienne originale en deuxième partie de soirée.'},
  ]},
  { slug:'kan11', name:'Kan 11', cat:'il', subs:['il'], bg:'#D3D1C7', fg:'#2C2C2A', ord:56, programs:[
    {t:'08:00',title:'תאגיד חדשות',genre:'info',badge:'live',desc:'Journal du service public Kan — information indépendante.'},
    {t:'09:00',title:'כאן 11 בוקר',genre:'magazine',badge:'',desc:'Magazine culturel et société du matin.'},
    {t:'13:00',title:'חדשות הצהריים',genre:'info',badge:'live',desc:'Journal de midi du service public israélien.'},
    {t:'15:00',title:'תכנית תרבות',genre:'magazine',badge:'',desc:'Magazine culturel ou documentaire en après-midi sur Kan 11.'},
    {t:'17:00',title:'כאן 11 אחה"צ',genre:'magazine',badge:'',desc:'Émission d\'actualité et société en fin d\'après-midi.'},
    {t:'19:00',title:'חדשות הערב',genre:'info',badge:'live',desc:'Journal de début de soirée du service public.'},
    {t:'21:00',title:'מהות החיים',genre:'doc',badge:'doc',desc:'Documentaire ou magazine culturel en prime time sur Kan.'},
    {t:'22:30',title:'פסטיבל / תיאטרון',genre:'culture',badge:'',desc:'Diffusion d\'un spectacle, concert ou événement culturel.'},
  ]},
];

// ─────────────────────────────────────────────────────────────────────────────

const client = await pool.connect();
let inserted = 0;

try {
  await client.query('BEGIN');

  for (const ch of CHANNELS) {
    const { rows } = await client.query(
      `INSERT INTO channels (slug, name, category, subcategories, logo_bg, logo_fg, sort_order)
       VALUES ($1,$2,$3,$4,$5,$6,$7)
       ON CONFLICT (slug) DO UPDATE
         SET name=$2, category=$3, subcategories=$4, logo_bg=$5, logo_fg=$6, sort_order=$7, active=true
       RETURNING id`,
      [ch.slug, ch.name, ch.cat, ch.subs, ch.bg, ch.fg, ch.ord]
    );
    const channelId = rows[0].id;

    // Remove old programs for this channel and re-insert (idempotent seed)
    await client.query('DELETE FROM programs WHERE channel_id = $1', [channelId]);

    for (const p of ch.programs) {
      await client.query(
        `INSERT INTO programs (channel_id, title, description, genre, badge, start_time)
         VALUES ($1,$2,$3,$4,$5,$6)`,
        [channelId, p.title, p.desc, p.genre, p.badge || null, p.t]
      );
      inserted++;
    }
  }

  await client.query('COMMIT');
  console.log(`[seed] ✓ ${CHANNELS.length} channels, ${inserted} programs`);
} catch (err) {
  await client.query('ROLLBACK');
  console.error('[seed] ✗', err.message);
  process.exit(1);
} finally {
  client.release();
  await pool.end();
}
