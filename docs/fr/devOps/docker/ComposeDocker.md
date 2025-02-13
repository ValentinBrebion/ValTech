---
next: false
prev: 
    text: 'Comment utiliser Docker '
    link: 'fr/devOps/docker/HowToUseDocker'
---

# Qu'est-ce que Docker Compose ?

Comme c'est long et fastidieux de retenir les différentes options, une solution existe pour tout configurer, regrouper plusieurs conteneurs ect.. : ***Docker Compose***

Un bon exemple vaut mieux que mille mots.<br>
docker.yaml:
```docker
services:
    mysql:
        image: mysql:latest
        volumes:
            - data_mysql:/var/lib/mysql
        environment:
            MYSQL_ROOT_PASSWORD: root
        networks:
            - devops
volumes:
    data_mysql:
networks:
    devops:
        driver: bridge
```

## Fonctionnement
Quelques explications :

- services va définir la liste des conteneurs à créer.
- mysql est le nom du conteneur créé. Avec les commandes docker précédentes, nous l'avions appelé demo_mysql. Ce conteneur se base sur la dernière image officielle de mysql hébergée chez hub.docker.com
- volumes permet de définir un volume associé à ce conteneur

Ici, nous changeons un peu par rapport à nos commandes précédentes. Nous voulons persister les données, mais on veut que ce soit docker qui gère ce volume et non qu'il soit associé à notre arborescence. Nous avons besoin que notre base de données soient sauvegardée, mais nous n'avons pas besoin d'avoir accès à ces fichiers. C'est pourquoi, nous définissons un peu plus bas le mot clé volumes de manière globale en l'associant au même nom : data_mysql

Donc /var/lib/mysql sera sauvegardé dans un volume interne à docker.

- environnement permet de définir les variables d'environnement, ici le mot de passe root de mysql
- networks permet de définir un réseau interne. Tous les conteneurs ayant le même réseau pourront discuter naturellement à travers leur nom de service. networks doit être également défini globalement. Le driver bridge est celui par défaut.