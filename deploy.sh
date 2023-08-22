#!/bin/bash

echo "Download deps"

npm install -g

echo "Begin build"

npm run deploy

echo "Build process done"
