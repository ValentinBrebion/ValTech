---
next: 
    text: 'Compose Docker'
    link: 'fr/devOps/docker/ComposeDocker'
prev: 
    text: 'Introduction à Docker'
    link: 'fr/devOps/docker/IntroductionDocker'
---

# Qu'est-ce que Docker ?
Imagine que tu as une grande boîte de Lego. Chaque pièce de Lego est comme un petit programme ou une partie d'un programme. Docker, c'est comme une boîte magique qui te permet de construire des petites maisons (conteneurs) avec tes Lego, mais chaque maison est isolée des autres. Cela signifie que ce qui se passe dans une maison ne dérange pas les autres maisons.

## Pourquoi utiliser Docker ?
- Isolation : Chaque conteneur est comme une petite maison avec ses propres règles. Si quelque chose se casse dans une maison, les autres maisons continuent de fonctionner normalement.
- Portabilité : Tu peux déplacer tes maisons Lego (conteneurs) d'un endroit à un autre sans rien casser. Par exemple, tu peux les déplacer de ta chambre (ton ordinateur) à celle de ton ami (un autre ordinateur).
## Comment ça marche ?

1. Créer un conteneur : C'est comme construire une maison Lego. Tu utilises une image (un plan) pour construire ta maison. Par exemple, tu peux créer une maison avec une base de données MySQL.

```docker
docker run --name demo_mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
```

C'est comme dire : "Construis une maison appelée demo_mysql avec une base de données MySQL, et utilise root comme mot de passe."

2. Vérifier le conteneur : Tu peux vérifier que ta maison est bien construite.
```docker
docker ps
```

C'est comme regarder toutes les maisons que tu as construites.

3. Entrer dans le conteneur : Tu peux entrer dans ta maison pour voir ce qu'il y a à l'intérieur.
```docker
docker exec -it demo_mysql bash
```
C'est comme ouvrir la porte de ta maison Lego et entrer dedans.

4. Faire des choses dans le conteneur : Tu peux créer des choses à l'intérieur de ta maison, comme un dossier ou une base de données.
```docker
mkdir /test
mysql -uroot -p
create database test;
```

5. Arrêter et supprimer le conteneur : Quand tu as fini de jouer, tu peux ranger ta maison.
```docker
docker stop demo_mysql
docker container rm demo_mysql
```

## Les volumes
Imagine que tu veux garder certains Lego spéciaux même si tu ranges ta maison. Les volumes sont comme des boîtes spéciales où tu peux garder ces Lego.<br>
Un volume est un espace de stockage particulier pour un conteneur. Il peut soit correspondre à :

- un dossier physique de notre disque dur à l'intérieur de notre projet,
- un dossier géré uniquement par docker.

1. Créer un volume : Tu crées une boîte spéciale sur ton étagère (ton ordinateur).
```docker
mkdir -p devops/data_mysql
```

2. Utiliser le volume : Tu dis à Docker d'utiliser cette boîte spéciale pour garder certains Lego de ta maison.
```docker
docker run --name demo_mysql -v $(pwd)/devops/data_mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
```
Ici, le dossier de sauvegarde des bases de données mysql (/var/lib/mysql) correspondra au dossier local devops/data_mysql
Maintenant, même si tu ranges ta maison, les Lego spéciaux restent dans la boîte.

Arrêtons correctement le conteneur et redémarrons-le. Vous constaterez que vos données sont toujours là.

```docker
docker stop demo_mysql
docker container rm demo_mysql
docker run --name demo_mysql -v $(pwd)/devops/data_mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
docker exec -it demo_mysql bash
mysql -uroot -p
show databases;
exit
exit
```

## Pourquoi c'est important ?
- ***Persistance*** : Les choses importantes (comme les bases de données) ne disparaissent pas quand tu ranges ta maison.
- ***Sécurité*** : Tu peux protéger tes Lego spéciaux pour qu'ils ne se cassent pas.