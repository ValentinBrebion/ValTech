---
next: 
    text: 'Histoire de Symfony'
    link: '/language/PHP/Symfony/HierarchieSymfony'
prev: 
    text: 'Laravel'
    link: '/language/PHP/Laravel/Laravel'
---

# Les API
Les API ou autrement dit "Application Programming Interface" est une interface de communication permettant la transmission de données entre 2 applications. Pour imager, admettons que la base de donnée soit une cuisine. Elle contient toutes les ressources pour satisfaire le client. Admettons ensuite qu'une application web soit les client, mais qui fait la transmission entre la cuisine et les clients ? et bien les serveurs ! 

## Histoire de l'API
### Apparition des premières formes d'API (Années 1960-1980)
Les premières API sont apparues dans les années 1960-1980. Elles étaient des interfaces logicielles qui permettaient aux applications d'utiliser des fonctionnalités d'un système d'exploitation.

### L'ère des API web ! 1990-2000
Avec l'arrivé d'Internet et la croissance du WWW dans les années 90, nos ami(e)s développeurs/euses ont rapidement compris l'intérêt de ce nouveau mode de communication.

- 1999: La société Salesforce à lancé une des premières APIs Web (via XML-RPC)
- 2000: Le terme ***Web Services*** a émergé, désignant des API permettant aux applications de communiquer via internet, souvent en utilisant des protocoles comme SOAP (Simple Object Access Protocol) et WSDL (Web Services Description Language).

Cependant, SOAP était relativement lourd et complexe ce qui a conduit à la recherche de solutions plus légères et plus simples.

### L'essor de REST et des API modernes : 2000-2010
Dans les années 2000, avec l’essor de l’architecture REST (Representational State Transfer), un changement majeur s’est produit dans la manière de concevoir les APIs. Lors de son doctorat, un certain Roy Fielding à proposé un nouveau modèle d'architecture encore plus simple que SOAP : ***le modèle RESTful***. Ce modèle est fondé sur des principes d’utilisation des méthodes HTTP standardisées (GET, POST, PUT, DELETE) pour effectuer des opérations sur des ressources identifiées par des URL.

- 2004 : Amazon Web Services (AWS) a lancé ses APIs REST pour permettre aux développeurs de manipuler des ressources cloud via Internet. Cela a facilité la montée en puissance des APIs Web en tant que moyen d'intégrer des services cloud.
- 2006 : Twitter a ouvert son API, permettant aux développeurs d'interagir avec le service, d’envoyer des tweets, de récupérer des informations, et de bâtir des applications tierces autour de la plateforme.
Ces changements ont permis l'essor des APIs ouvertes, accessibles à des tiers pour une intégration simple dans des applications externes. Les APIs RESTful ont facilité l’adoption des APIs dans des applications web, mobiles et autres systèmes distribués.

### L'API comme produit : 2010-présent
Au cours des dernières années, les APIs sont devenues un élément clé du développement logiciel et des services numériques. De nombreuses entreprises, comme Google, Facebook, Stripe, et Twilio, ont compris la valeur des APIs comme moyen d'offrir des services à grande échelle. Elles ont ouvert des APIs publiques pour permettre aux développeurs externes d’accéder à leurs données ou de réaliser des actions spécifiques (par exemple, l’envoi de messages avec Twilio, l’intégration de cartes avec Google Maps, ou les paiements en ligne avec Stripe).

Principales tendances récentes :
- GraphQL : Introduit par Facebook en 2012, GraphQL est une alternative à REST qui permet une gestion plus flexible des requêtes d'API, permettant aux développeurs de demander exactement les données dont ils ont besoin, et non plus simplement une ressource entière.
- Microservices : L’émergence des microservices dans les architectures logicielles modernes a aussi accéléré l’utilisation des APIs. Les microservices sont des applications petites et autonomes qui communiquent entre elles via des APIs, ce qui permet une plus grande flexibilité et évolutivité dans les systèmes complexes.