#!/bin/sh
cat sitedraw.js | sed -e 's/^[ 	]*//g' | tr -d [:cntrl:]  > sitedraw.mini.js 
cat sitedraw.mini.js
echo ""
