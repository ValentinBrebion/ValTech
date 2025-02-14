# Comprendre les Workflows GitHub Actions

On va prendre l'exemple de Github Action, crée en octobre 2018, Github met en place un service de déploiement en continu intégré à Github. Ce service permet d'automatiser divers aspects du cycle de dévelopmement lié à l'application.

La marketPlace ou vous retrouverez l'ensemble des workflows disponible : <a href="https://github.com/marketplace?type=actions" target="_blank"><Badge type="tip" text="Documentation" /></a>
## Comprendre les concepts clés
### <u>Un workflow</u>
*<li>Un workflow est un processus automatisé défini dans un fichier YAML. Chaque workflow peut avoir un ou plusieurs jobs.</li>*

### <u>Un job</u>
*<li>Un job est une série de steps (étapes) qui s'exécutent sur une même machine virtuelle (runner). Les jobs d'un même workflow peuvent s'exécuter en parallèle ou en séquence selon la configuration.</li>*

### <u>Une step</u>
*<li>Une step est une tâche individuelle, comme l'exécution d'une commande ou l'utilisation d'une action.</li>*

## Créer un Workflow basique
### Étape 1: Créer le Fichier de Workflow
Créez un répertoire `.github/workflows/` à la racine de votre dépôt, puis ajoutez un fichier YAML. Par exemple, `ci.yml`.
```yaml
name: CI Workflow

on: 
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'

    - name: Install dependencies
      run: npm install

    - name: Run tests
      run: npm test
```
### Étape 2: Déclencheurs d'Événements `(on)`
Les workflows sont déclenchés par des événements comme `push`, `pull_request`, ou `schedule`.

```yaml
on: 
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 0 * * *'

```
## Définir les Jobs et Steps
### jobs
Les jobs définissent les tâches principales. Chaque job s'exécute sur un runner distinct (machine virtuelle).

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps: 
    # les steps se déclinent ici

```
### Steps
Les steps sont les actions individuelles dans un job. Elles peuvent inclure des actions GitHub, des scripts, ou des commandes shell.

```yaml
steps:
  - name: Checkout code
    uses: actions/checkout@v2

  - name: Set up Node.js
    uses: actions/setup-node@v2
    with:
      node-version: '14'

  - name: Install dependencies
    run: npm install

  - name: Run tests
    run: npm test

```

## Bonnes pratiques pour un workflow solide
### Modularité
Il est préférable de diviser les workflows en plusieurs fichier yaml pour une meilleure lisibilité et maintenabilité 💪. Diviser pour mieux règner 😉

```yaml
# .github/workflows/build.yml
# .github/workflows/deploy.yml
```

### Utilisation des Secrets
Vous voulez utiliser des clés API dans vos workflows ? voici comment :

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout code
      uses: actions/checkout@v2
    - name: Set up API key
      run: echo "API_KEY=${{ secrets.API_KEY }}" > api_key.txt
```

### Cache
Utilisez le cache pour accélérer les workflows, par exemple pour les dépendances de projet.

```yaml
- name: Cache dependencies
  uses: actions/cache@v2
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### Définir une pipeline
Pour définir une pipeline, il convient d'en définir les grandes étapes, nommées <a href="https://docs.gitlab.com/ee/ci/yaml/#stages" target="_blank">stages</a>. Pour ce faire, on doit déclarer une liste stages dans notre fichier de configuration :
```
# Pour l'exemple uniquement
stages:
    - build
    - test
    - deploy
```
Il nous faut maintenant remplir nos stages avec des jobs. Pour définir un job, il suffit d'ajouter à notre fichier un objet YAML dont la clé sera le nom du job. Une fois ceci fait, de nombreuses options de configuration s'offrent à nous. En voici quelques-unes des plus courantes :

-image : l'image Docker à utiliser pour effectuer cette tâche
- stage : l'étape dans laquelle se situe cette tâche
- before_script : un script à exécuter avant de commencer la tâche
- script : le script principal de la tâche, c'est son code de retour qui détermine le succès ou l'échec de la tâche.
- only : un objet qui permet de limiter les contextes dans lesquels le job est exécuté, par exemple : seulement sur la branche main.
- services : cet objet permet de configurer des conteneurs annexes à faire tourner en même temps que le job. Pratique pour lancer une base de données par exemple.
- variables : cet objet permet de configurer des variables pour notre tâche, qui seront passées comme variables d'environnement pour le script. Sachez également que les variables peuvent être déclarées depuis l'interface de Gitlab.

::: details Exemple concret d'un fichier YAML bien configuré:
```
.php-tests-common: &php-tests-common
  stage: test
  image: jakzal/phpqa:php8.3-alpine
  before_script:
    - composer install
  cache:
    paths:
      - vendor/

default:
  tags:
    - lpmiaw

stages:
  - test

security-checker:
  <<: *php-tests-common
  script:
    - local-php-security-checker  --path=./composer.lock

phpcs:
  <<: *php-tests-common
  script:
    - phpcs -v --standard=PSR12 --ignore=./src/Kernel.php ./src

phpstan:
  <<: *php-tests-common
  script:
    - composer global bin phpstan remove phpstan/extension-installer
    - phpstan analyse ./src --level 3

twig-lint:
  <<: *php-tests-common
  script:
    - twig-lint lint ./templates

phpunit:
  image: nicolasunivlr/php:lp2024
  stage: test
  services:
    - name: mariadb:10.11
      alias: mariadb
  variables:
    MYSQL_ROOT_PASSWORD: root
    MYSQL_DATABASE: nomBDD
    DATABASE_URL: 'mysql://root:root@mariadb:3306/nomBDD?serverVersion=11.7.1-MariaDB&charset=utf8'
  before_script:
    - composer install
    - php bin/console doctrine:database:drop --if-exists --force --env=test
    - php bin/console doctrine:database:create --env=test
    - php bin/console d:m:m --env=test --no-interaction
    - php bin/console d:f:l --env=test --no-interaction
  script:
    - php bin/phpunit

```
:::
# Ressources: 
Liens vers la documentation officelle :<u><a href="https://docs.github.com/fr/actions" target="_blank"><Badge type="info" text="Documentation" /></a></u>