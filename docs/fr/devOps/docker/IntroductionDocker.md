---
next: 
    text: 'Comment utiliser Docker'
    link: 'fr/devOps/docker/HowToUseDocker'
prev: false
---

# Introduction Docker
Docker est une plateforme open-source lancée en 2013 par la société DotCloud (qui deviendra plus tard Docker Inc.). Son créateur, Solomon Hykes, a développé Docker pour simplifier le déploiement des applications en utilisant des containers, une technologie permettant d’isoler les applications et leurs dépendances dans un environnement portable et léger.

## Le principe de conteneurisation
Vous en avez sans doute entendu parler mais le terme conteneurisation est parfois flou chez les novices. Definissons ensemble ce terme :
:::tip Définition
Un conteneur est comme une boîte légère et portable. À l'intérieur de cette boîte, vous mettez ***tout ce dont votre application a besoin pour fonctionner*** : le code, les bibliothèques, les configurations, et même le système d'exploitation.
:::

Un conteneur peut être considéré comme un processus qui à des accès limité aux ressources :

- son propre système de fichier
- une vision limitée du système sur lequel il tourne (ne voit pas tout les processus du système)
- une certaines quantité limitée de ressources

Chaque conteneur partage le noyau du système d'exploitation hôte via des appels systèmes isolés.

## Namespaces
Le namespace est une technologie de Linux qui permet d'isoler les processus.
Il existe 7 namespaces différents pour un processus :

- pid : isolation de l'espace des processus, chaque conteneur va avoir son premier processus avec l’id 1
- net : donne une pile réseau privée au processus
- mnt : table de montage privée
- uts : nom de l'hôte, différent de l’hôte de la machine
- ipc : isole les communications inter processus
- cgroup : depuis peut les cgroup peuvent être isolés

## Architecture
Le fonctionnement de Docker s’architecture autour de trois éléments : le démon, le client et les images

:::info Démon : ***Dockerd***
- Gère : les images, les réseaux, les volumes, les clusters
- délègue la gestion des conteneurs à containerd
- Expose une API en HTTP Rest
- Ecoute sur un socket unix et/ou tcp
:::

:::info Client
- Installé avec le démon
- Communique avec lui au travers du socker unix
- Peut communiquer avec des démons distants via tcp
:::

:::info Images
- Template de création de conteneurs
- Stockés sur des registres
- Fichier de création d'images
:::

## L'intérêt ?
- Environnement commun entre le développement et le déploiement
- Encourage les bonnes pratiques
- Améliore la sécurité et le contrôle des applications
---
<br>

# CI/CD Tester et intégrer continuellement

## Intégration continue
L'intégration continue vise à détecter rapidement les problèmes d'intégration en automatisant le processus de construction et de test du code. Il améliore le code et permet de valider rapidement et régulièrement le code
## Déploiement continue
Le déploiement continue est l'automatisation du processus de déploiement, il assure la rapidité des livrables et améliore la qualité en détectant les petites erreurs plus fréquement

## La surveillance
A l'aide d'outils, vous allez pouvoir monitorer votre application c'est à dire:
- Suivi des métriques des serveurs
- Suivi de la performance des applications
- Suivi des logs

## L'intérêt ?
- Détection rapide des pannes
- Suivi des performances
- Amélioration de la sécurité
## Pour découvrir les outils relatifs à Docker:
<a href="/fr/DevTools/DockerDevTools" ><Badge type="tip" text="Outils Docker" /></a>