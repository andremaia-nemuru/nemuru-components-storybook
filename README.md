# nemuru-components

## Tree Shaking

### Components

Import freely any component directly from `'nemuru-components'` in the parent repository and it will import only the strictly needed chunks of code

### Styles

The old `main-theme.js` is maintained for compatibility, but
**it's NOT recommended** to use due to his heavy weight. (It imports all styles in a single chunk,
all fonts and some css assets in base64)

There are now 2 chunks of style that can be used separately

`style-global.js` - Global styles of most common nemuru repositories

`style-helpers.js` - class helpers (mt-1, etc...)

#### Removed extra styles

Keep in mind that all styles in `style/extra.scss` are not considered to be part of this library and
have been removed from any chunk other than the deprecated `main-theme.js`. **They have to be manually
pasted to the parent repository** if needed.

### Assets and fonts

Assets are currently work in progress.

Common google fonts like `Raleway`, `Material-Icons` and `Material-Icons-Outlined` **are no more included** and had to be imported directly from fonts.google.com.

It's recommended to migrate all `Material-Icons` to `Material-Icons-Outlined` and only use this last one, to reduce weight and gain coherence

```css
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Outlined');
```

### Pushing to Bitbucket

It is mandatory to upload the dist files that are modified in your commit.
First test in your local environment your changes with the .tgz file (see instructions in next paragraph, this will automatically build your changes).
Once you tested successfully your changes, push all the changes to your repo.

## Local Development

Currently work in progress. Due to the inconsistencies in npm link and while a better solution is found, it is recommended to **create and test components directly in the parent repository**, and then extract them to this library.

When extracted, test them by packaging this repository, and then installing the resulting compressed file on parent repository.

```bash
# From nemuru-components folder
npm pack
```

```bash
#From Newmuru-Merchant folder acting as consumer repository
npm i ../nemuru-components/nemuru-components-xxx.tgz #(press TAB for route autocomplete)
npm start # will start parent repo with local changes of nemuru components
```

### Important

Remember to **change the dependency back in package.json to a commited version tag of nemuru-components when testing is done!**

```json
    "nemuru-components": "git+ssh://git@bitbucket.org/nemuru/nemuru-components.git#x.x.x",
```

## Nemuru-Components v1 to v2 migration

Unfortunately, webpack 5 requires these additional dependencies to be installed in the main repository for this tree-shaking library to work properly.

```json
//package.json (via npm install)
{
    //    ...
    "browserify-zlib": "^0.2.0",
    "https-browserify": "^1.0.0",
    "stream-browserify": "^3.0.0",
    "stream-http": "^3.2.0",
    "tty-browserify": "0.0.1"
}
```

And additional configuration on webpack file:

```js
const webpack = require("webpack");

...
  resolve: {
    ...
    fallback: {
      "tty": require.resolve("tty-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "stream": require.resolve("stream-browserify"),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http")
    }
  },
    plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
```

## Icon font

Open _demo.html_ to see a list of all the glyphs in your font along with their codes/ligatures.

To use the generated font in desktop programs, you can install the TTF font. In order to copy the character associated with each icon, refer to the text box at the bottom right corner of each glyph in demo.html. The character inside this text box may be invisible; but it can still be copied. See this guide for more info: https://icomoon.io/#docs/local-fonts

You won't need any of the files located under the _demo-files_ directory when including the generated font in your own projects.

You can import _selection.json_ back to the IcoMoon app using the _Import Icons_ button (or via Main Menu → Manage Projects) to retrieve your icon selection.

### Important

When updating the font:

-   Update the font on IcoMoon website, download the zip file and extract it in `/NemuruIconFont/source`.
-   Encode `/source/fonts/nemuru-icon-font.ttf` as BASE64 and paste the string in `/NemuruIconFont/index.scss` as `$fontData` var
