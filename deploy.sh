#!/bin/bash

echo "Take ownership"
chown -R root /opt/pages

echo "Download deps"
npm install

echo "Begin build"
npm run deploy

echo "Build process done"
