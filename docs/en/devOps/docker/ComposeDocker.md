---
next: false
prev: 
    text: 'How to Use Docker'
    link: 'en/devOps/docker/HowToUseDocker'
---

# What is Docker Compose?

Since it's long and tedious to remember different options, there's a solution to configure everything and group multiple containers together: ***Docker Compose***

A good example is worth a thousand words.<br>
docker.yaml:
```docker
services:
    mysql:
        image: mysql:latest
        volumes:
            - data_mysql:/var/lib/mysql
        environment:
            MYSQL_ROOT_PASSWORD: root
        networks:
            - devops
volumes:
    data_mysql:
networks:
    devops:
        driver: bridge
```

## How it works
Some explanations:

- services defines the list of containers to create.
- mysql is the name of the created container. With previous docker commands, we called it demo_mysql. This container is based on the latest official mysql image hosted on hub.docker.com
- volumes allows defining a volume associated with this container

Here, we're changing things a bit compared to our previous commands. We want to persist the data, but we want Docker to manage this volume rather than having it associated with our directory structure. We need our database to be saved, but we don't need access to these files. That's why we define the volumes keyword globally below with the same name: data_mysql

So /var/lib/mysql will be saved in a Docker internal volume.

- environment allows defining environment variables, in this case, the root password for mysql
- networks allows defining an internal network. All containers having the same network will be able to communicate naturally through their service name. networks must also be defined globally. The bridge driver is the default one. 