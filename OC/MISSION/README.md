Vous travaillez en tant que développeur chez SportSee, une startup dédiée au coaching sportif. En pleine croissance, l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur. Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

[![Logo de SportSee](./logo.png)](./logo.png)

Logo de SportSee

Vous recevez ce matin un Slack de Charles, le Product Owner :

> Hello ! Bon, c’est le grand jour aujourd’hui, on va s’attaquer à la nouvelle page profil utilisateur du site ![:)](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAAEyifZoAAAAY1BMVEX/tFr/+an/6pj/2YT/3Yn/vWX/1X//9qX/uF//0Xz/7p3/znf/+6z/umH/xG3/7Jr/5JH/9KPmolD/4Y2UlJT/y3T/wWn/tl3/x3D//7D//a7Xl0uodjr/slj///8AAAD////kIWupAAAAIXRSTlP//////////////////////////////////////////wCfwdAhAAAA5UlEQVQYGQXBh2HEMBADQSh/zpaYjtj+q/SMMHIPEQhUkryKrUwW6x67wCCXcUdj7ruVrkcgQkbg8fJdDeJZsn9rCuR5vD3TPcLC98OOxQjABhBgGxC0yzg1EEfJt/lckYf86/47WZ8t96E/VPV5bdu0nKLKZ6d7OCzq3XZUBC1ibyDANiAA7BYRzQZAgI/3cBve4zxdqwHh9i459156X6+Poxm5PYeSs93ta0pHNMuf12Uoudwu09++HxHVcjvP0/c1n9NyKCLULNz2x8PLSRGOWJoR4KqIiIhTqgYEgN1qrc0G4B8FHyJnCxBjUAAAAABJRU5ErkJggg== ":)"). Tiens, Léo (le designer) vient de me faire parvenir [le lien Figma de la maquette](<https://www.figma.com/file/n9A6teg1UoDWpBL55X5pUb/UI-design-Sportify-FR-(Copy)>). Et voici [le kanban avec les User Stories](https://honorable-cinema-ea2.notion.site/Tableau-de-bord-SportSee-990391373f624357bddac42768e88198) à intégrer pour ce projet. Pour ce sprint, il faut que tu intègres les US de la partie TODO (le reste sera au sprint suivant).

Plus tard durant la journée, vous recevez un mail de votre Lead Developer, Antoine, vous donnant plus de détails techniques sur le projet.

> **Objet** : Précisions techniques sur la page profil  
> **De** : Antoine  
> **À** : Moi
>
> Re,
>
> Charles m’a dit qu’il t’avait briefé sur les User Stories et les maquettes, voici donc plus d’infos côté technique.
>
> L’objectif est de refaire la page profil avec React. Tu seras en charge de développer la page.
>
> Comme tu as pu le constater, le projet intègre des graphiques sur l’activité sportive de l’utilisateur. Je t’invite à utiliser soit D3, soit Recharts. Cela dit, fais attention à D3, c’est assez puissant comme librairie mais parfois difficile à prendre en main.
>
> Concernant l’intégration CSS du projet, notre Product Owner préfère qu’on se concentre sur la partie desktop pour l’instant. Tu n’as donc pas besoin de travailler sur la version mobile et tablette du projet. Nous ferons ça dans un second temps. Cela dit, fais bien attention à ce que ton projet puisse être lisible sur les écrans d’au moins 1024 par 780 pixels.
>
> Concernant les données, je t’ai créé un [backend utilisant NodeJS que tu peux trouver ici](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard). Il va te permettre de réaliser tes calls HTTP et de récupérer des données d’exemple. Tout y est décrit : les étapes d’installation ainsi que les calls HTTP que j’ai mis en place.
>
> Pour la gestion des calls en eux-mêmes, je t’invite à utiliser soit [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), soit [Axios](https://github.com/axios/axios). Par contre, il est important que tu réalises les calls en dehors des composants React. Il faudra que tu crées un service à part qui se chargera de faire les calls pour toi.
>
> D’ailleurs, je pense qu’il serait mieux que tu commences le projet avec des données que tu auras mockées. Dès que ton projet sera fonctionnel, tu pourras t’attaquer à l’intégration de l’API.
>
> Pour finir, il est important que tu documentes ton projet pour que tout le monde puisse travailler dessus ![:)](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAAEyifZoAAAAY1BMVEX/tFr/+an/6pj/2YT/3Yn/vWX/1X//9qX/uF//0Xz/7p3/znf/+6z/umH/xG3/7Jr/5JH/9KPmolD/4Y2UlJT/y3T/wWn/tl3/x3D//7D//a7Xl0uodjr/slj///8AAAD////kIWupAAAAIXRSTlP//////////////////////////////////////////wCfwdAhAAAA5UlEQVQYGQXBh2HEMBADQSh/zpaYjtj+q/SMMHIPEQhUkryKrUwW6x67wCCXcUdj7ruVrkcgQkbg8fJdDeJZsn9rCuR5vD3TPcLC98OOxQjABhBgGxC0yzg1EEfJt/lckYf86/47WZ8t96E/VPV5bdu0nKLKZ6d7OCzq3XZUBC1ibyDANiAA7BYRzQZAgI/3cBve4zxdqwHh9i459156X6+Poxm5PYeSs93ta0pHNMuf12Uoudwu09++HxHVcjvP0/c1n9NyKCLULNz2x8PLSRGOWJoR4KqIiIhTqgYEgN1qrc0G4B8FHyJnCxBjUAAAAABJRU5ErkJggg== ":)"). Garde donc en tête :
>
> - L’ensemble de ta documentation doit être réalisée en anglais.
> - Le fichier README ne doit comporter que les étapes d’installation ainsi que les prérequis du projet. Dans ce fichier, tu devras dire comment installer et lancer le projet.
> - Ton projet va utiliser React et tu vas forcément créer des components. Il est donc important que tu intègres des Proptypes pour chacun de tes components.
> - Dernier point, la JsDoc. En dehors des méthodes de cycle de vie (componentDidMount par exemple), il est important que ton projet ait des fonctions et méthodes documentées.
>
> Allez, je te souhaite un bon développement !
>
> Antoine

Ça y est, vous avez toutes les informations nécessaires et vous pouvez démarrer le développement de la page.

## Livrables

1. Un fichier au format TXT contenant le lien vers votre code sur GitHub.

> Pour faciliter votre passage devant le jury, déposez sur la plateforme, dans un dossier zip nommé “Titre_du_projet_nom_prénom”, avec tous les livrables du projet comme suit : Nom_Prénom_n° du livrable_nom du livrable\_\_date de démarrage du projet. Cela donnera :
>
> - Nom_Prénom_1_code_mmaaaa.
>
> Par exemple, le premier livrable peut être nommé comme suit : Dupont_Jean_1_code_012022.

## Soutenance

Durant la présentation orale, l’évaluateur interprétera le rôle du Lead Developer. La soutenance est structurée de la manière suivante :

- **Présentation des livrables (15 minutes)**

  - Récupération des données auprès de l’API ;
  - Création et affichage des graphiques ;
  - Séparation logique du code dans des composants réutilisables.

- **Discussion (10 min)**

  - L’évaluateur jouera le rôle du Lead Developer. Il vous challengera sur les points suivants :
    - La gestion des calls asynchrones et des promesses ;
    - Le cycle de vie d’une application React avec des données asynchrones ;
    - La JSDoc et la documentation technique de façon générale ;
    - L’utilisation de la librairie graphique (découverte, prise en main, etc.).

- **Debrief (5 minutes)**

  - À la fin de la soutenance, l'évaluateur arrêtera de jouer le rôle du Lead Developer pour vous permettre de débriefer ensemble.

> Votre présentation devrait durer 15 minutes (+/- 5 minutes). Puisque le respect de la durée des présentations est important en milieu professionnel, les présentations en dessous de 10 minutes ou au-dessus de 20 minutes peuvent être refusées.
