#!/bin/bash

echo "Pull deps"
npm clean-install --progress=false

echo "Begin build"
npm run deploy

echo "Build process done"
