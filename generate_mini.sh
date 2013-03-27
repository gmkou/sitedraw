#!/bin/sh
cat sitedraw.js | sed -e 's/^ *//g' | tr -d [:cntrl:]  > sitedraw.mini.js 
