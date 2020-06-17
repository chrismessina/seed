# Seed Website

This folder houses the Seed icons website at www.seedicons.com. It is built using Gatsby and styled-components.

## Installation

1. Clone the repo and cd into the root folder
1. Run `npm install` to install necessary dependencies
1. Run `npm start` to build the site

Once this is complete you you will can visit http://localhost:8000/ to see a local build of the site.

## Symlink Seed Icons

I find it useful to symlink the `seed` icons repo when working on new icons. This ties the `seed-icons` dependency to the projects local folder instead of the versioned npm package.

1. Run `npm link ../`
