---
next: false
prev: 
    text: 'Découverte de Laravel'
    link: 'fr/language/PHP/Laravel/Laravel'
---

# <u>Introduction au MVC</u>
Le MVC (Modèle-Vue-Contrôleur) est un modèle d'architecture logicielle couramment utilisé dans le développement d'applications informatiques, en particulier dans les applications web et les applications basées sur les interfaces graphiques.

## <u>3 composants distincts mais interconnectés</u>

### M pour Modèle !
Tout d'abord vient le Modèle : C'est la représentation des données et des règles métiers de l'application autrement dit il va traiter la logique des données, intéragir avec la base de données et va gérer les opérations de manipulation des données.

### V pour Vue !
Ensuite, vient la Vue : Elle est responsable de l'affichage des données que le Modèle fournit, sous une forme compréhensible pour l'utilisateur. La Vue ne contient pas de logique métier, elle se concentre uniquement sur la présentation des informations, que ce soit sous forme de texte, tableaux, graphiques, ou autres éléments visuels. Dans une application web, par exemple, la Vue correspondrait au HTML, CSS et parfois JavaScript qui affichent les données à l'utilisateur final.

### C pour Contrôleur !
Enfin, il y a le Contrôleur : Il fait le lien entre le Modèle et la Vue. Il reçoit les entrées de l'utilisateur (par exemple, un clic sur un bouton ou la soumission d'un formulaire), traite ces entrées et les envoie au Modèle. Une fois les données manipulées par le Modèle, le Contrôleur détermine quelle Vue doit être affichée pour refléter les changements. Il agit donc comme un intermédiaire qui orchestre les interactions entre les données (Modèle) et leur présentation (Vue).