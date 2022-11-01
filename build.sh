#!/bin/bash

image="tresmerge-node-app"
container="api_container"
port=443

if [ "$1" = "server" ]; then
  echo "Started Deploying the server"
  image="api_image"
  container="api_container"
  port=443
elif [ "$1" = "client" ]; then
  echo "Started Deploying the client"
  image="client_image"
  container="client_container"
  port=80
else
  printf '%s\n' "Invalid parameter $1" >&2
  exit 1
fi


if [ "$(docker ps | grep $container)" ]; then
  echo "Stopping container: $container"
  docker stop $container
else
  echo "Container $container is not running"
fi

if [ "$(docker ps -a | grep $container)" ]; then
  echo "Deleting container: $container"
  docker container rm $container
else
  echo "Container $container does not exist"
fi

if [[ "$(docker images -q $image 2> /dev/null)" != "" ]]; then
  echo "Deleting image: $image"
  docker image rm $image
else
  echo "Image $image does not exist"
fi

echo "Building docker image image for $1"
docker build -t $image .

echo "Creating docker container for $1"
docker run --name $container -p $port:5000 -d $image

echo "$1 is deployed successfully on port $port"
