---
next: false
prev: false
---

# Exemple concrêt d'un dockerFile
Maintenant que notre serveur est correctement configuré, nous allons y déployer les conteneurs Dockers qui exécuteront notre application.

## Description des services
Pour faire fonctionner notre application, nous allons avoir besoin de trois services différents:

- Un gestionnaire de process PHP
- Un serveur web pour répondre aux requêtes HTTP et HTTPS
- Un gestionnaire de base de données
## PHP-FPM
PHP-FPM est un gestionnaire de processus PHP qui implémente le protocole FastCGI.

Ce protocole permet à un serveur web de "transférer" les requêtes sur des fichiers executables, tels que les fichiers PHP, vers un service capable de les interpréter. Le service, ici PHP-FPM, s'occupe ensuite de créer un processus PHP, d'exécuter le fichier cible, et de répondre au serveur web, qui à son tour pourra répondre à la requête HTTP envoyée par le navigateur de l'utilisateur.

Concrètement, c'est un service que vous avez déjà déployé localement sur vos ordinateurs.

## Caddy
Historiquement, que ce soit avec le serveur Apache ou Nginx, la configuration de serveur web était parfois si compliquée qu'elle en est presque devenue une science : contrôle d'accès, FastCGI, compression, ports, headers, reverse proxies, noms de domaines et chiffrement SSL entre autres joyeusetés.

Cependant, de nouveaux projets de serveurs web permettent de simplifier grandement cette étape, en fournissant des politiques par défaut saines.

C'est le cas de <a href="https://caddyserver.com/" target="_blank">Caddy</a>, un serveur Web de nouvelle génération écrit en Go. Il se configure très simplement au travers d'un fichier Caddyfile à la syntaxe minimaliste. Ce serveur dispose également de toute la configuration pour générer et renouveler pour vous des certificats HTTPS avec Let's Encrypt, afin de bénéficier du chiffrement sans prise de tête.

## Gestionnaire de base de données
Un gestionnaire de base de données est un programme qui... gère des bases de données. Pas besoin d'aller trop en profondeur sur son rôle, vous les avez déjà rencontrés : MariaDB/MySQL, PostgreSQL, ou pour du non relationnel, MongoDB, Redis...

## Compose file
Modifiez votre fichier `compose.yaml` de manière à ce qu'il soit configuré de la sorte :

Services
```yaml
Web : serveur Caddy
Connecté au volume de l'application PHP
Connecté au réseau PHP
PHP
Connecté au volume de l'application PHP
Connecté au réseau PHP
Connecté au réseau de la BDD
BDD
Connecté au réseau de la BDD
Réseaux
Réseau PHP
Réseau BDD
Volumes
Configuration de Caddy
Monté dans le dossier /srv/caddy_config
Application PHP
Monté dans le dossier /srv/php_app
Volume nommé pour la base de données
```
:::tip
Pensez à ajouter à votre Compose file les variables d'environnement nécessaires au bon fonctionnement de ces services.

Pour éviter d'avoir à les écrire en dur dans votre Compose file, vous pouvez définir leur valeur depuis un fichier .env situé au même endroit que le fichier Docker Compose, puis les utiliser de la façon suivante :

```code
- "APP_SECRET=${APP_SECRET}"$
```
:::