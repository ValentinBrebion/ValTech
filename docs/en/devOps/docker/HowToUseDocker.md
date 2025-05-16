---
next: 
    text: 'Docker Compose'
    link: 'en/devOps/docker/ComposeDocker'
prev: 
    text: 'Introduction to Docker'
    link: 'en/devOps/docker/IntroductionDocker'
---

# What is Docker?
Imagine you have a big box of Legos. Each Lego piece is like a small program or part of a program. Docker is like a magic box that lets you build small houses (containers) with your Legos, but each house is isolated from the others. This means that what happens in one house doesn't affect the other houses.

## Why use Docker?
- Isolation: Each container is like a small house with its own rules. If something breaks in one house, the other houses continue to function normally.
- Portability: You can move your Lego houses (containers) from one place to another without breaking anything. For example, you can move them from your room (your computer) to your friend's room (another computer).

## How does it work?

1. Create a container: It's like building a Lego house. You use an image (a blueprint) to build your house. For example, you can create a house with a MySQL database.

```docker
docker run --name demo_mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
```

This is like saying: "Build a house called demo_mysql with a MySQL database, and use root as the password."

2. Check the container: You can verify that your house is well built.
```docker
docker ps
```

This is like looking at all the houses you've built.

3. Enter the container: You can enter your house to see what's inside.
```docker
docker exec -it demo_mysql bash
```
This is like opening the door of your Lego house and going inside.

4. Do things in the container: You can create things inside your house, like a folder or a database.
```docker
mkdir /test
mysql -uroot -p
create database test;
```

5. Stop and remove the container: When you're done playing, you can put away your house.
```docker
docker stop demo_mysql
docker container rm demo_mysql
```

## Volumes
Imagine you want to keep certain special Legos even if you put away your house. Volumes are like special boxes where you can keep these Legos.<br>
A volume is a special storage space for a container. It can either correspond to:

- a physical folder on our hard drive inside our project,
- a folder managed only by docker.

1. Create a volume: You create a special box on your shelf (your computer).
```docker
mkdir -p devops/data_mysql
```

2. Use the volume: You tell Docker to use this special box to keep certain Legos from your house.
```docker
docker run --name demo_mysql -v $(pwd)/devops/data_mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
```
Here, the mysql database backup folder (/var/lib/mysql) will correspond to the local folder devops/data_mysql
Now, even if you put away your house, the special Legos stay in the box.

Let's properly stop the container and restart it. You'll notice that your data is still there.

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

## Why is this important?
- ***Persistence***: Important things (like databases) don't disappear when you put away your house.
- ***Security***: You can protect your special Legos so they don't break. 