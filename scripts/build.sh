#!/bin/bash

# Create dist directory
npx rimraf dist
mkdir dist

# Process SVG files
npx babel-node scripts/services/process-svgs.js

# Build icons.json
npx babel-node scripts/services/build-icons-json.js

# Build SVG sprite
npx babel-node scripts/services/build-sprite.js

# Create dist/icons directory
npx rimraf dist/icons
mkdir dist/icons

# Build SVG icons
npx babel-node scripts/services/build-svgs.js

# Build JavaScript library
npx webpack --output-filename seed.js --mode development
npx webpack --output-filename seed.min.js --mode production
