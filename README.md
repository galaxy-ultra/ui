[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

# Install package

`npm i @galaxy-ultra/ui`

# Install each module

`npm i @galaxy-ultra/modal`
# Add new package

`npx lerna create @galaxy-ultra/<project_name>`

# Add dependencies for package

`yarn workspace @galaxy-ultra/ui add react`

# Add dependencies to all packages

`yarn add -W --dev typescript prettier eslint`

# Start new package with current template

`yarn new-package`

# Build all packages

`yarn build`

# Release ( all packages will be built before they can submit to npmjs.com )

`yarn publish`


# add dependencies for package

`npx lerna --scope @galaxy-ultra/<package_name> <yarn command>`

For example:

`npx lerna --scope @galaxy-ultra/button add axios`

`npx lerna --scope @galaxy-ultra/button add -D @types/abcxyz`

Run lint:

`npx lerna --scope @galaxy-ultra/<package_name> run lint`

Install node modules:

`npx lerna bootstrap`

Run project

`cd packages`

`cd stories`

`yarn storybook`

`npx lerna --scope @galaxy-ultra/<package_name> add -D @types/abcxyz`
