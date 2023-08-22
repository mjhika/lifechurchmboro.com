#!/bin/bash

echo "Download deps"

sudo npm install -g --unsafe-perm=true --allow-root

echo "Begin build"

sudo npm run deploy

echo "Build process done"
