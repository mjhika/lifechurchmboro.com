#!/bin/bash

echo "Download deps"

npm install --unsafe-perm=true --allow-root

echo "Begin build"

npm run deploy

echo "Build process done"
