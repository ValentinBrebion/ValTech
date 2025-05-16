---
next: false
prev: false
---

# Docker Command Summary

This document provides a quick reference for the most commonly used Docker commands.

## Container Management

### Running Containers
```bash
# Run a container
docker run [OPTIONS] IMAGE [COMMAND]
# Common options:
# -d: Run in detached mode (background)
# -p: Publish ports (host:container)
# -v: Mount volumes
# --name: Assign a name to the container
# -e: Set environment variables

# Examples:
docker run -d -p 80:80 nginx
docker run -it ubuntu bash
```

### Container Operations
```bash
# List running containers
docker ps
# List all containers (including stopped)
docker ps -a

# Stop a container
docker stop CONTAINER_ID/NAME

# Start a stopped container
docker start CONTAINER_ID/NAME

# Restart a container
docker restart CONTAINER_ID/NAME

# Remove a container
docker rm CONTAINER_ID/NAME
# Remove all stopped containers
docker container prune
```

## Image Management

### Basic Image Operations
```bash
# List images
docker images

# Pull an image
docker pull IMAGE_NAME:TAG

# Remove an image
docker rmi IMAGE_ID/NAME

# Build an image from a Dockerfile
docker build -t IMAGE_NAME:TAG PATH
```

## Volume Management

### Volume Operations
```bash
# Create a volume
docker volume create VOLUME_NAME

# List volumes
docker volume ls

# Remove a volume
docker volume rm VOLUME_NAME

# Remove all unused volumes
docker volume prune
```

## Network Management

### Network Operations
```bash
# List networks
docker network ls

# Create a network
docker network create NETWORK_NAME

# Connect a container to a network
docker network connect NETWORK_NAME CONTAINER_NAME

# Disconnect a container from a network
docker network disconnect NETWORK_NAME CONTAINER_NAME
```

## Docker Compose

### Basic Compose Commands
```bash
# Start services
docker-compose up
# Start in detached mode
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs

# List services
docker-compose ps
```

## System Information

### System Commands
```bash
# View Docker system info
docker info

# View Docker disk usage
docker system df

# Clean up unused data
docker system prune
```

## Container Inspection

### Debugging Commands
```bash
# View container logs
docker logs CONTAINER_ID/NAME

# Execute a command in a running container
docker exec -it CONTAINER_ID/NAME COMMAND

# View container details
docker inspect CONTAINER_ID/NAME
```

Remember to replace `CONTAINER_ID/NAME`, `IMAGE_NAME:TAG`, `VOLUME_NAME`, and `NETWORK_NAME` with your actual values when using these commands. 