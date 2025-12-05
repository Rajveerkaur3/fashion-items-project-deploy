#!/bin/bash

echo "Checking prerequisites..."
for cmd in docker docker-compose curl; do
  if ! command -v $cmd &>/dev/null; then
    echo "$cmd not installed. Please install it."
    exit 1
  fi
done
echo "All tools are installed."

cd /mnt/c/Users/ajayp/Downloads/module_06 || { echo "Project folder not found."; exit 1; }

if [ ! -f docker-compose.yml ]; then
  echo "docker-compose.yml missing!"
  exit 1
fi
echo "docker-compose.yml found."

echo "Building and starting containers..."
docker-compose up -d --build
echo "Containers running."

docker images
docker ps

NGINX_ID=$(docker ps --filter "ancestor=nginx:alpine" -q | head -n1)
echo "Nginx Container ID: $NGINX_ID"

echo "Checking services..."
curl -f http://localhost:3000 && echo "Frontend OK"
curl -f http://localhost:5000 && echo "Backend OK"

if curl -s http://localhost:3000 | grep -q "Pixel River Financial Bank Application"; then
  echo "Page rendered successfully."
else
  echo "Page not rendering correctly."
fi

echo "Inspecting nginx:alpine image..."
docker inspect nginx:alpine > nginx-logs.json
echo "Image details saved to nginx-logs.json"
cat nginx-logs.json

echo "Deployment complete!"
