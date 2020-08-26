#!/bin/bash

# docker build -f Dockerfile . -t nodejs-hello-world
# docker run -d --name nodejs-test -p 5000:5000 nodejs-hello-world
# docker push markruler/nodejs-hello-world

docker run -d --name nodejs-test -p 5000:5000 markruler/nodejs-hello-world
sleep 1
curl localhost:5000