# nemuru-components


#### Local Development

Now you're ready to run a local version of rollup that will watch your `src/` component and automatically recompile it into `dist/` whenever you make changes.

```bash
# run example to start developing your new component against
npm link # the link commands are important for local development
npm install # disregard any warnings about missing peer dependencies
npm start # runs rollup with watch flag
```

We'll also be running our `example/` create-react-app that's linked to the local version of your `react-poop-emoji` module.

```bash
# (in another tab)
cd newmuru-merchant
npm link nemuru-components
npm install
npm start # runs create-react-app dev server
```

Now, anytime you make a change to your component in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

#### NPM Stuffs

The only difference when publishing your component to **npm** is to make sure you add any npm modules you want as peer dependencies to the `external` array in `rollup.config.js`. Then publish as per usual.

```bash
# note this will build `commonjs` and `es`versions of your module to dist/
npm publish
```

#### Github Pages

Deploying the example to github pages is simple. We create a production build of our example `create-react-app` that showcases your library and then run `gh-pages` to deploy the resulting bundle. This can be done as follows:

```bash
npm run deploy
```

Note that it's important for your `example/package.json` to have the correct `homepage` property set, as `create-react-app` uses this value as a prefix for resolving static asset URLs.

## Example Module

Here is an example react module created from this guide: [react-background-slideshow](https://github.com/transitive-bullshit/react-background-slideshow), a sexy tiled background slideshow for React. It comes with an example create-react-app hosted on github pages and should give you a good idea of the type of module you’ll be able to create starting from this boilerplate.
