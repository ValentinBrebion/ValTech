---
next: false
prev: 
    text: 'Compose Docker'
    link: 'en/devOps/docker/ComposeDocker'
---

# Docker Container Commands

## First container instantiation:
**Linux container**
```docker
docker container run alpine echo 'hello world of docker'
```
**Windows container**
```docker
docker container run mcr.microsoft.com/windows/nanoserver:20H2 powershell "echo 'Hello World of Docker on Windows'"
```

## List containers
The ps command lists the containers *currently running*:
```docker
docker container ps
```
The ps -a command lists *running containers, stopped containers, containers created but not started, and containers that have exited* :
```docker
docker container ps -a
```
## Instantiate a container
Main command used to instantiate a container:
```docker
docker container run image
```
Linux Container
```docker
docker container run -it ubuntu
```
Windows Container
```docker
> docker container run -it mcr.microsoft.com/windows/nanoserver:20H2
```
-it: the container is started in interactive mode.

## Exiting “it” mode
:::info
Interactive mode allows connecting inside a container at startup.
But if you type exit (under bash or cmd), the startup process of the container stops, meaning the container itself stops.

Reminder: a container only runs as long as a process is running inside it.
To exit the container without stopping the active process (bash or cmd): ***CTRL-P CTRL-Q***
:::

## Instantiate a named container
Linux Container
```docker
docker container run --name ub01 -it ubuntu
```
Windows Container
```docker
docker container run --name win01 -it mcr.microsoft.com/windows/nanoserver:20H2
```
## Name et hostname
Whether on Windows or Linux, it is often useful to specify the container’s hostname with --hostname.
When working on an application, being able to easily switch between containers is important, and having the hostname of the current container visible helps avoid mistakes.*

Linux Container
```docker
docker container run --name ub01 --hostname ub01 -it ubuntu
```
Windows Container
```docker
docker container run --name win01 --hostname win01 -it mcr.microsoft.com/windows/nanoserver:20H2
```

## Detached mode
:::info
Detached mode in Docker means launching a container in the background, without keeping the console "locked" onto it.
:::

To start a container in detached mode:
Linux Container
```docker
docker container run --name web02 –-restart always -d nginx
```
Windows Container
```docker
docker container run --name web01 --restart always -d mcr.microsoft.com/windows/servercore/iis
```

## Port binding
:::info
When a service inside a container opens a network port, you can access it by binding that port to the local machine (more details in the networking section).
:::
Linux Container
```docker
docker container run --name web02 –-restart always -p 81:80 -d nginx
```
Windows Container
```docker
docker container run --name web01 --restart always -p 80:80 -d mcr.microsoft.com/windows/servercore/iis
```
## Stop / start / pause / unpause
You can stop, restart, pause, or unpause a container:

```docker
docker container stop web01
docker container start web01
docker container pause web01
docker container unpause web01
```

## Remove a container
To remove a container, you must stop it first:
```docker
docker container stop web01> docker container rm web01
```
Or to remove a running container:
```docker
docker container rm -f web01
```

## Clean up
:::warning WARNING
This will delete containers and their data. 
- Running this command will remove:
- All stopped containers
- All networks not used by at least one container
- All untagged images
- All build caches
:::
```docker
docker system prune
```
Also removes unused volumes: 
```docker
docker system prune --all --force --volumes
```

## Docker container inspect
The inspect command is often used with Docker commands:
```docker
docker container inspect web01
```

This command generates a lot of information, which can be redirected to a text file or filtered:
```docker
docker container inspect -–format='{{.NetworkSettings.Networks.nat.IPAddress}}' web01
```
Filter management: https://docs.docker.com/engine/reference/commandline/inspect/#parent-command

## Container logs
It is possible to access container logs if the service inside generates logs:
```docker
docker container logs web01
docker container logs -f web01
```
In production, logs can be forwarded to log management systems such as ELK or syslog:
https://blog.zenika.com/2016/02/15/consolider-les-logs-docker-dans-un-elk/

## Environment variables
It is often useful to pass environment variables to a container, such as database logins or passwords.
For this, use the --env or -e option.

Linux Container
```docker
docker container run --rm -it -e MYVAR=test -e ENV=dev --name testcontainer debian:9-slim /bin/bash
```
Windows Container
```docker
docker container run --rm -it -e MYVAR=test -e ENV=dev --name testcontainer microsoft/nanoserver powershell
```