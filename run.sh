#!/bin/bash

npm run build
npm install -g serve
serve -s build -l 8080