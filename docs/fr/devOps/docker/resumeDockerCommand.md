---
next: false
prev: 
    text: 'Compose Docker'
    link: 'fr/devOps/docker/ComposeDocker'
---

# Commandes Docker Container

## Première instanciation de conteneur :
Linux container
```docker
docker container run alpine echo 'hello world of docker'
```
Windows Container
```docker
docker container run mcr.microsoft.com/windows/nanoserver:20H2 powershell "echo 'Hello World of Docker on Windows'"
```
## Lister les conteneurs

La commande ps permet de lister les conteneurs ***en cours d’exécution***:
```docker
docker container ps
```
La commande ps -a permet de lister les conteneurs ***ceux en cours d’exécution, ceux arrêtés, ceux qui ont été créés mais pas lancés, ceux qui se sont terminés***
```docker
docker container ps -a
```
## Instancier un conteneur
Commande principale qui permet d’instancier un conteneur :
```docker
docker container run image
```
Linux Container
```docker
docker container run -it ubuntu
```
Windows Container
```docker
> docker container run -it mcr.microsoft.com/windows/nanoserver:20H2
```
-it : le conteneur est démarré en interactif

## Sortir du monde « it »
:::info 
Le mode interactif permet de se connecter dans un conteneur à son démarrage.
Mais si on fait un exit (sous bash ou sous cmd), le process de démarrage du conteneur est arrêté. Donc le conteneur est stoppé.
Rappel : un conteneur est en fonctionnement que si un processus « tourne » dans celui-ci.
Pour sortir du conteneur sans interrompre le process actif (bash ou cmd) : ***CTRL-P CTRL-Q***
:::

## Instancier un conteneur nommé
Linux Container
```docker
docker container run --name ub01 -it ubuntu
```
Windows Container
```docker
docker container run --name win01 -it mcr.microsoft.com/windows/nanoserver:20H2
```

## Nom et hostname
*Que ce soit sous Windows ou sous Linux, il est assez utile de spécifier le hostname des conteneurs --hostname
Quand on travaille sur une application il est souvent utile de pouvoir passer d’un conteneur à un autre et le fait d’avoir le hostname du conteneur actuel sous les yeux permet d’éviter les erreurs de manipulations.*

Linux Container
```docker
docker container run --name ub01 --hostname ub01 -it ubuntu
```
Windows Container
```docker
docker container run --name win01 --hostname win01 -it mcr.microsoft.com/windows/nanoserver:20H2
```

## Mode « détaché »
:::info
Le mode détaché dans Docker, c’est simplement le fait de lancer un conteneur en arrière-plan, sans que la console reste « bloquée » dessus.
:::
Pour démarrer un conteneur en mode « détaché »
Linux Container
```docker
docker container run --name web02 –-restart always -d nginx
```
Windows Container
```docker
docker container run --name web01 --restart always -d mcr.microsoft.com/windows/servercore/iis
```

## Binding de ports
:::info 
Quand un service fonctionne dans un conteneur en ouvrant un port réseau il est possible d’y accéder en bindant un port sur la machine locale (plus de détails dans la partie réseau)
:::
Linux Container
```docker
docker container run --name web02 –-restart always -p 81:80 -d nginx
```
Windows Container
```docker
docker container run --name web01 --restart always -p 80:80 -d mcr.microsoft.com/windows/servercore/iis
```

## Stop / start / Pause / Unpause
Il est possible de stopper, redémarrer, mettre en pause … un conteneur :
```docker
docker container stop web01
docker container start web01
docker container pause web01
docker container unpause web01
```

## Supprimer un conteneur
Pour supprimer un conteneur il faut l’arrêter :
```docker
docker container stop web01> docker container rm web01
```
Ou pour supprimer un conteneur en fonctionnement :
```docker
docker container rm -f web01
```

## Faire du ménage
:::warning ATTENTION
les conteneurs et leurs données seront supprimés. en tapant cette commande, cela va retirer: 
- Tous les containeurs arrêtés
- tous les réseaux non utilisés par au moins un container
- toutes les images non tagés
- tous les caches de build
:::
```docker
docker system prune
```
Supprime aussi les volumes non utilisés 
```docker
docker system prune --all --force --volumes
```

## Docker container inspect
On retrouve régulièrement la commande inspect avec les commandes docker

```docker
docker container inspect web01
```
Cette commande génère beaucoup d’informations, il est possible de dérouter le résultat dans un fichier texte ou de filtrer la sortie :
```docker
docker container inspect -–format='{{.NetworkSettings.Networks.nat.IPAddress}}' web01
```
Gestion des filtres : https://docs.docker.com/engine/reference/commandline/inspect/#parent-command

## Les logs des conteneurs
Il est possible d’accéder aux logs des conteneurs si le service fonctionnant dans le conteneur génère des logs.
```docker
docker container logs web01
docker container logs -f web01
```
En production les logs peuvent être dérivés vers des structures de gestion de logs comme ELK ou syslog
https://blog.zenika.com/2016/02/15/consolider-les-logs-docker-dans-un-elk/

## Variables d’environnement
Il est souvent utile de passer des variables d’environnement qui seront utilisées dans un conteneur, par exemple des logins de bases de données ou des mots de passe.
*Pour cela on va utiliser l’option –-env ou -e*
Linux Container
```docker
docker container run --rm -it -e MYVAR=test -e ENV=dev --name testcontainer debian:9-slim /bin/bash
```
Windows Container
```docker
docker container run --rm -it -e MYVAR=test -e ENV=dev --name testcontainer microsoft/nanoserver powershell
```