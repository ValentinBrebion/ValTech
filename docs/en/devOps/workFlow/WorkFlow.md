# Understanding GitHub Actions Workflows

Let's take the example of Github Actions, created in October 2018, when Github implemented an integrated continuous deployment service. This service allows automating various aspects of the application development cycle.

The Marketplace where you'll find all available workflows: <a href="https://github.com/marketplace?type=actions" target="_blank"><Badge type="tip" text="Documentation" /></a>

## Understanding Key Concepts
### <u>A Workflow</u>
*<li>A workflow is an automated process defined in a YAML file. Each workflow can have one or more jobs.</li>*

### <u>A Job</u>
*<li>A job is a series of steps that run on the same virtual machine (runner). Jobs within the same workflow can run in parallel or in sequence depending on the configuration.</li>*

### <u>A Step</u>
*<li>A step is an individual task, such as executing a command or using an action.</li>*

## Creating a Basic Workflow
### Step 1: Create the Workflow File
Create a `.github/workflows/` directory at the root of your repository, then add a YAML file. For example, `ci.yml`.
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
### Step 2: Event Triggers `(on)`
Workflows are triggered by events like `push`, `pull_request`, or `schedule`.

```yaml
on: 
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: '0 0 * * *'

```
## Defining Jobs and Steps
### Jobs
Jobs define the main tasks. Each job runs on a separate runner (virtual machine).

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps: 
    # steps are defined here

```
### Steps
Steps are individual actions within a job. They can include GitHub actions, scripts, or shell commands.

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

## Best Practices for a Robust Workflow
### Modularity
It's better to divide workflows into multiple YAML files for better readability and maintainability 💪. Divide and conquer 😉

```yaml
# .github/workflows/build.yml
# .github/workflows/deploy.yml
```

### Using Secrets
Want to use API keys in your workflows? Here's how:

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
Use caching to speed up workflows, for example for project dependencies.

```yaml
- name: Cache dependencies
  uses: actions/cache@v2
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### Defining a Pipeline
To define a pipeline, you need to define its main steps, called <a href="https://docs.gitlab.com/ee/ci/yaml/#stages" target="_blank">stages</a>. To do this, we need to declare a stages list in our configuration file:
```
# For example only
stages:
    - build
    - test
    - deploy
```
Now we need to fill our stages with jobs. To define a job, simply add a YAML object to our file with the job name as the key. Once this is done, many configuration options are available to us. Here are some of the most common ones:

- image: the Docker image to use for this task
- stage: the stage in which this task is located
- before_script: a script to execute before starting the task
- script: the main script of the task, its return code determines the success or failure of the task
- only: an object that limits the contexts in which the job is executed, for example: only on the main branch
- services: this object allows configuring additional containers to run alongside the job. Useful for launching a database, for example
- variables: this object allows configuring variables for our task, which will be passed as environment variables for the script. Note that variables can also be declared from the Gitlab interface

::: details Concrete example of a well-configured YAML file:
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
    MYSQL_DATABASE: dbName
    DATABASE_URL: 'mysql://root:root@mariadb:3306/dbName?serverVersion=11.7.1-MariaDB&charset=utf8'
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
# Resources: 
Link to official documentation: <u><a href="https://docs.github.com/en/actions" target="_blank"><Badge type="info" text="Documentation" /></a></u> 