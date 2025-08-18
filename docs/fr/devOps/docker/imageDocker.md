---
next: false
prev: 
    text: 'Compose Docker'
    link: 'fr/devOps/docker/ComposeDocker'
---

# Les images Docker
La première définition simple d’une image : 
:::info 
une image est un template qui va nous permettre d’instancier des conteneurs.
- Tout conteneur Docker est instancié à partir d’une image.
- Plusieurs conteneurs peuvent être instanciés depuis la même image.
- L’image va contenir un système de fichier qui va contenir tout les fichiers
nécessaire au démarrage du processus.
- Une image est composée de layers (ou couches), chacun représentant une
étape d’installation de constitution de l’image.
- Les layers sont en lecture-seule dans le conteneur, sauf le dernier créé
lors de l’instanciation du conteneur.
:::

## Définition officielle
Une image Docker est une collection ordonnée de changements d’un
système de fichier et des paramètres d’exécution correspondant à son
utilisation à l’exécution.
Un ensemble atomique de changements sur le système de fichier est une
couche.
Une image Docker peut être vue comme une pile de couches dont chaque
couche dépend de tous les précédents.
Chaque couche représente donc un ensemble de changement que l’on fait au
système de fichier de base.
https://docs.docker.com/glossary/#image

## Registre
Un registre au sens Docker est un dépôt centralisé qui
contient des images à utiliser pour le déploiement des
conteneurs.
Le registre par défaut est le hub Docker :
https://hub.docker.com
On retrouve sur ce registre plusieurs milliers d’image, allant de
système d’exploitation simple à des applications complexes.
:::warning
Attention les images étant publiques il faut tester les images
avant de les utiliser en prod.
:::

Bien lire les informations sur chaque image
- lire la documentation
- la façon de déployer l’image
- si l’image est officielle ou pas
- Le nombre d’étoiles
- Le nombre de téléchargements
- Regardez les tags

Il est possible d’avoir un compte sur le Hub pour y stocker des
images (publiques).
Il existe aussi une offre pour stocker des images en privé

## Les autres registres
Il est possible de gérer le stockage des images soit :
Chez des fournisseurs comme Amazon, Google Cloud, etc
Avoir son propre serveur registre avec différentes solutions
- Harbor : https://goharbor.io/
- Gitlab :
https://about.gitlab.com/2016/05/23/gitlab-container-registr
y/
- Portus : http://port.us.org/
- Docker Registry : https://docs.docker.com/registry/
- Kraken : https://eng.uber.com/introducing-kraken/

## Chercher une image
Le premier réflexe est de chercher une image directement sur le hub.
Il est possible de chercher en ligne de commande :
```docker
docker search apache
```
Pour filtrer que les images officielles :
```docker
docker search --filter is-official=true apache
```
Pour lister les images locales :
```docker
docker images
```
La commande de gestion des images quand à elle :
```docker
docker image <sous-commande>
```
::: details Cette commande dispose d’un ensemble de sous-commandes pour la gestion des images.
```docker
Commands:
- build Build an image from a Dockerfile
- history Show the history of an image
- import Import the contents from a tarball to create a filesystem image
- inspect Display detailed information on one or more images
- load Load an image from a tar archive or STDIN
- ls List images
- prune Remove unused images
- pull Pull an image or a repository from a registry
- push Push an image or a repository to a registry
- rm Remove one or more images
- save Save one or more images to a tar archive (streamed to STDOUT by default)
- tag Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
```
:::

## Lister les image
Pour lister les images on peut aussi utiliser la sous-commande
ls :
```docker
docker image ls
```
On obtiens un affichage avec les colonnes :
REPOSITORY / TAG / IMAGE ID / CREATED / SIZE

## Puller une image
Pour récupérer une image en local on va la « puller » :
```docker
docker image pull hello-world
```
Pour puller une image et tout ses tags :
```docker
docker image pull -a hello-world
```
---

## Tags
Une image peut avoir plusieurs versions, ou plusieurs
déclinaisons. Par exemple l’image Debian peut avoir une
multitudes de tags (regardez sur le Hub).
Ces déclinaisons sont identifiées par un tag.
Pour récupérer une version précise d’une image :
```docker
docker image pull debian:10-slim
```

## Identifiant image
Chaque image à un identifiant unique, calculé aussi en
SHA256. A ne pas confondre avec l’identifiant des layers vu
précédemment
Pour voir l’identifiant complet d’une image :
```docker
docker images --no-trunc
```

## Re taguer une image
Il est possible de créer des tags sur une image. C’est très
utile par exemple pour déposer une image sur un autre registre
```docker
docker image tag debian:10-slim mydebian:v1
```
ce n’est pas une nouvelle image qui est créée.

## Supprimer une image
On peut supprimer une image en spécifiant son nom ou son
identifiant :
```docker
docker image rm debian:10-slim
```

## Inspecter une image
Pour obtenir toutes les informations sur une image pullée en
local.
```docker
docker image inspect debian:10-slim
```
Pour afficher une information précise :
```docker
docker image inspect debian:10-slim --format '{{ .RepoTags }}'
docker image inspect debian:10-slim --format '{{ .ContainerConfig.Cmd }}'
```
On peut spécifier le format de sortie :
```docker
docker image inspect debian:10-slim --format '{{json .ContainerConfig }}'
```
## Historique
On peut voir l’historique de création d’une image avec la souscommande
« history »
```docker
docker image history debian
```

## Save, Load, Import
On peut exporter une image pour la transférer par exemple sur
une autre machine :
```docker
docker image save mydebian:v1 > save-debian.tar
```
Pour recharger l’image :
```docker
docker image load --input save-debian.tar
```
Le import permet de retaguer l’image :
```docker
docker import save-debian.tar debian-new:v0.1
```