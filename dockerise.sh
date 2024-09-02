#!/bin/bash
docker build  -f Dockerfile -t backend .
docker tag backend jnbutters/backend:2.0
docker push jnbutters/backend:2.0
