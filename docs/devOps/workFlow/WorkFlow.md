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
# Ressources: 
Liens vers la documentation officelle :<u><a href="https://docs.github.com/fr/actions" target="_blank"><Badge type="info" text="Documentation" /></a></u>