#!/bin/bash

echo "++++++++++++++++++++++++++++++++++++++++++++++++++++++++"
pwd
ls -lAFh
echo "++++++++++++++++++++++++++++++++++++++++++++++++++++++++"

echo "Begin build"
npm run deploy

echo "Build process done"
