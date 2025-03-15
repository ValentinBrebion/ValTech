---
next: false
prev: 
    text: 'Introduction to Git'
    link: '/en/language/git/git'
---

# Git Commands

## Project Setup and Initialization 📖
---
Initialize empty directory <a href="https://git-scm.com/docs/git-init" target="_blank"><Badge type="tip" text="Documentation" /></a>
```sh
git init
```

Copy (Clone) a github project from a local folder <a href="https://git-scm.com/docs/git-clone" target="_blank"><Badge type="tip" text="Documentation" /></a>
```sh
git clone https://github.com/PersonName/RepositoryName.git
# or
git clone git@github.com:PersonName/RepositoryName.git
```

## Basic Commands 🧰

To add modifications made in a project <a href="https://git-scm.com/docs/git-add" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git add *
```
Display which files have been modified <a href="https://git-scm.com/docs/git-status" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git status
```

Display changes between validations <a href="https://git-scm.com/docs/git-diff" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git diff
```

Commit changes with a message <a href="https://git-scm.com/docs/git-commit" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git commit -m "Your message"
```

Restore working tree files <a href="https://git-scm.com/docs/git-restore" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git restore
```

Remove files from the working tree and from the index <a href="https://git-scm.com/docs/git-rm" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git rm
```

## Branch and Merge 🔀

List, create or delete branches <a href="https://git-scm.com/docs/git-branch" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git branch [options]
```

Switch branches or restore working tree files <a href="https://git-scm.com/docs/git-checkout" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git checkout [options]
```

Switch branches <a href="https://git-scm.com/docs/git-switch" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git switch [options]
```

Merge two branches <a href="https://git-scm.com/docs/git-merge" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git merge
```

::: details git merge example
Let's imagine that the ``master`` and ``feature`` branches exist and we want to merge the feature branch into the master branch.

First, we switch to the master branch:
```sh
git switch master
```

and then we merge the feature branch into the master branch:

```sh
git merge feature
```
:::

## Sharing and Updating Projects 📢

Fetch changes from remote repository and automatically merge with your local branch <a href="https://git-scm.com/docs/git-pull" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git pull <branch>
```

Send changes to remote repository <a href="https://git-scm.com/docs/git-push" target="_blank"><Badge type="tip" text="Documentation" /></a>

```sh
git push
```

When you make a commit and, for example, want to switch branches, it will show the `force checkout` message, but how to remove the stashed commit? Well, with this command:

```sh
git reset --soft HEAD~1
```

How to do a rebase?

```sh 
git checkout main
git pull
git checkout <branch-name>
git rebase main
``` 