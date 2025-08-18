---
next: false
prev: 
    text: 'Compose Docker'
    link: 'fr/devOps/docker/ComposeDocker'
---

# Docker Images
A simple first definition of an image:  
:::info
An image is a template that allows us to instantiate containers.
- Every Docker container is instantiated from an image.
- Multiple containers can be instantiated from the same image.
- The image contains a filesystem with all the files needed to start the process.
- An image is composed of layers, each representing a step in the installation/build of the image.
- Layers are read-only inside the container, except for the last one created when the container is instantiated.
:::

## Official definition
A Docker image is an ordered collection of filesystem changes and execution parameters for use within a container runtime.  
An atomic set of filesystem changes is called a **layer**.  
A Docker image can be seen as a stack of layers, each depending on all the previous ones.  
Each layer therefore represents a set of modifications made to the base filesystem.  

[Source: Docker Glossary](https://docs.docker.com/glossary/#image)

## Registry
A registry in Docker is a centralized repository that contains images for deploying containers.  

The default registry is Docker Hub:  
https://hub.docker.com  

You can find thousands of images there, ranging from simple operating systems to complex applications.  

:::warning
Since images are public, you must test them before using them in production.
:::

Always carefully read the information on each image:  
- The documentation  
- How to deploy the image  
- Whether the image is official or not  
- Number of stars  
- Number of downloads  
- Tags available  

You can create an account on Docker Hub to store public images.  
There is also an option to store private images.  

## Other registries
It is also possible to store images:  
- With providers like Amazon, Google Cloud, etc.  
- On your own registry server with solutions such as:  
  - Harbor: https://goharbor.io/  
  - GitLab: https://about.gitlab.com/2016/05/23/gitlab-container-registry/  
  - Portus: http://port.us.org/  
  - Docker Registry: https://docs.docker.com/registry/  
  - Kraken: https://eng.uber.com/introducing-kraken/  

## Search for an image
The first reflex is to search directly on Docker Hub.  
It is also possible to search via CLI:  

```docker
docker search apache
```
Filter only official images:
```docker
docker search --filter is-official=true apache
```
List local images:
```docker
docker images
```
Main image management command:
```docker
docker image <subcommand>
```
:::details This command has several subcommands for image management:
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

## List images
You can also list images with the ls subcommand:
```docker
docker image ls
```
The output includes the columns:
REPOSITORY / TAG / IMAGE ID / CREATED / SIZE

## Pull an image
To retrieve an image locally, you “pull” it:
```docker
docker image pull hello-world
```
To pull an image and all its tags:
```docker
docker image pull -a hello-world
```
---
## Tags
An image can have multiple versions or variants.
For example, the Debian image has many tags (check Docker Hub).

These variants are identified by a tag.
To pull a specific version of an image:
```docker
docker image pull debian:10-slim
```

## Image ID
Each image has a unique identifier, calculated as a SHA256 hash.
⚠️ Do not confuse this with the identifiers of layers mentioned earlier.

To see the full identifier of an image:
```docker
docker images --no-trunc
```

## Retag an image
You can create tags for an image.
This is very useful, for example, when pushing an image to another registry:
```docker
docker image tag debian:10-slim mydebian:v1
```
⚠️ This does not create a new image.

## Remove an image

You can remove an image by specifying its name or ID:
```docker
docker image rm debian:10-slim
```

## Inspect an image
To get all details about a locally pulled image:
```docker
docker image inspect debian:10-slim
```
Filter specific information:
```docker
docker image inspect debian:10-slim --format '{{ .RepoTags }}'
docker image inspect debian:10-slim --format '{{ .ContainerConfig.Cmd }}'
```
Custom output formatting:
```docker
docker image inspect debian:10-slim --format '{{json .ContainerConfig }}'
```
## History
You can view the history of an image’s creation with the history subcommand:
```docker
docker image history debian
```
## Save, Load, Import
Export an image to transfer it to another machine:
```docker
docker image save mydebian:v1 > save-debian.tar
```
Reload the image:
```docker
docker image load --input save-debian.tar
```
Import allows retagging the image:
```docker
docker import save-debian.tar debian-new:v0.1
```