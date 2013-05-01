#!/bin/sh
cat bookmarklet.js | sed -e 's/^[ 	]*//g' | tr -d [:cntrl:]  > bookmarklet.mini.js 
cat bookmarklet.mini.js
echo ""
