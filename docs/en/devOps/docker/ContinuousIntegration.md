---
next: false
prev: false
---

# Continuous Integration

Continuous Integration (CI) is a software development practice that aims to ensure that each code modification doesn't cause problems in the project. Here's a simplified explanation of the mentioned aspects:

### Security:

> - Objective: Verify that the code doesn't contain security vulnerabilities.
> - How: By using security analysis tools that scan the code to detect potential flaws, such as SQL injections, XSS vulnerabilities, etc.

### Coding Best Practices:

> - Objective: Ensure that the code follows quality and readability standards.
> - How: By applying code style rules (linters) and verifying that the code is well-structured and documented.

### Code Analysis:

> - Objective: Detect potential errors and improve code quality.
> - How: By using static analysis tools that examine the code without executing it, to find bugs, inefficiencies, or coding rule violations.

### Task Automation:

> - Objective: Save time and reduce human errors by automating repetitive processes.
> - How: For example, automating code compilation (build), file size reduction (minification), or deployment to a server.

### Project Specifications Compliance:

> - Objective: Verify that the code works as intended and meets project requirements.
> - How: By running tests:<br>
    - Unit tests: Verify that individual parts of the code (like functions or methods) work correctly.<br>
    - Functional tests: Verify that the system as a whole works as expected from the end user's perspective.


## Phpqa
On GitHub, you can find <a href="https://github.com/jakzal/phpqa" target="_blank">phpqa</a> which allows performing many tests for PHP projects.

This project is a suite of Docker images containing all pre-installed tools based on the PHP version to use and the distribution used.

## Alias
You'll create an alias to make your life easier:
```
alias phpqa='docker run --init -it --rm -v "$(pwd):/project" -v "$(pwd)/tmp-phpqa:/tmp" -w /project jakzal/phpqa:php8.3-alpine'
```
:::tip Explanations
An alias is a shortcut. By typing phpqa, it's as if you typed the entire docker run ... command.

`--init`: allows signals and processes to pass between the container and the host

`-it`: equivalent to -i (interactive) -t (tty) meaning it can receive standard inputs in a pseudo-terminal

`--rm`: removes the container when it's stopped

`-v`: creates a volume between your current folder (pwd) and the /project folder of the container

`-w`: defines the container's working directory
:::

## Security
You'll use the Docker image to verify that your PHP dependencies don't contain security flaws.

```
phpqa local-php-security-checker  --path=./composer.lock
```

We could also use the Symfony command to do the same thing
```
symfony local:check:security
```
:::danger Detected Flaws
CVE alerts appear.

Fix these flaws using the appropriate composer commands.
:::

## Coding Rules
Still with the same Docker image, you'll use phpcs and phpstan tools

Phpcs (PHP Code Sniffer) is a tool that validates your code according to <a href="https://www.php-fig.org/psr/" target="_blank">PSR</a> coding rules. You'll validate the code against the PSR-12 standard

```
phpqa phpcs -v --standard=PSR12 --ignore=./src/Kernel.php ./src
```

:::danger Spaces!!
You can see that by writing naturally, we make many writing errors that don't respect the standards!
:::

Fortunately, tools can be used to fix this automatically. In fact, phpcs suggests using phpcbf (Code Beautifier and Fixer). Let's run this tool and then run phpcs again.

```
phpqa phpcbf -v --standard=PSR12 --ignore=./src/Kernel.php ./src
phpqa phpcs -v --standard=PSR12 --ignore=./src/Kernel.php ./src
```

## Static Code Analysis - phpstan
<a href="https://phpstan.org/" target="_blank">Phpstan</a> is a tool for static code analysis that checks, for example, function input and output types. This allows detecting errors in the code very early.

Phpstan's philosophy is: "Find bugs without writing tests!"

It has <a href="https://phpstan.org/user-guide/rule-levels" target="_blank">10 rule levels</a> ranging from 0, the most permissive, to level 9, the strictest.

For a Symfony project, level 3 is the right setting.
```
phpqa phpstan analyse ./src --level 3
```

:::danger Error!
Fix the error and run the test again.
:::

:::info laravelStan
A Laravel-specific version is <a href="https://github.com/larastan/larastan" target="_blank">available here</a>
:::

## Twig Verification
phpqa also has a tool called twig-linter to check twig code.

```
phpqa  twig-linter lint ./templates
```
:::danger Error!
Fix the error and run the test again.
::: 