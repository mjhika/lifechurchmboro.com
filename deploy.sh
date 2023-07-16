#!/bin/bash

cd themes/church-site

echo "Download deps"

npm install

echo "Begin build"

npm run deploy

echo "Build process done"
