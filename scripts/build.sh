#!/bin/bash

# Process SVG files
npx babel-node scripts/process-svgs.js

# Create dist directory
npx rimraf dist
mkdir dist

# Build icons.json
npx babel-node scripts/build-icons-json.js

# Create dist/icons directory
npx rimraf dist/icons
mkdir dist/icons

# Build SVG icons
npx babel-node scripts/build-svgs.js

# Build JavaScript library
npx webpack --output-filename seed.js --mode development
npx webpack --output-filename seed.min.js --mode production
