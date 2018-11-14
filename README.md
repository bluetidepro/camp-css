# Ignore all of this, it's not correct

# camp

> CSS behind the distinctive style of ActiveCampaign

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![npm](https://img.shields.io/npm/v/camp-css.svg)](https://www.npmjs.com/package/camp-css)
![license](https://img.shields.io/github/license/activecampaign/camp-css.svg)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/min/camp-css.svg)](https://bundlephobia.com/result?p=camp-css)
[![David](https://img.shields.io/david/dev/activecampaign/camp-css.svg)](https://david-dm.org/activecampaign/camp-css?type=dev)

## Usage

#### From the CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@activecampaign/camp-css@latest/dist/camp.min.css">
```

#### From yarn

```sh
yarn add @activecampaign/camp-css
```

#### From npm

```sh
npm install @activecampaign/camp-css
```

Now import the package wherever your css is compiled:

```css
@import '@activecampaign/camp-css';
```

If you have installed camp as a package and would like to reference the variables used by the package itself, you may import the source scss file rather than the compiled css file. From your projects scss add the following:

```scss
@import '@activecampaign/camp-css/scss/camp';
```

## Versioning/Publishing

Once you're satisfied and have versioned your changes, you'll want to publish those changes to npm.

### How to version & publish

1. **After your PR has been sqaushed & merged** into `activecampaign/camp-css/master`...
2. Checkout your local `master` branch
3. Pull down the latest from upstream master (`git pull upstream master`)
3. Run `npm publish`

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md) file