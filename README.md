# Nest landing page
A webpage built to showcase the web resources associated with the Nested Systems in Tumors paper.

URL:
* https://idekerlab.usd.edu/nest
* https://ccmi.org/nest

### Table of contents
* [Quick start](#quick-start)
* [About landing pages](#landing-pages)
* [About NeST landing page]()

## Quick start

### To edit:
```
git clone https://github.com/idekerlab/nestLandingPage.git
cd nestLandingPage
gatsby develop
```
The web page will be available at `http://localhost:8000/`. Once code changes are saved, the site will hot reload to reflect the recent changes.

### To build:

#### No prefix:
```
git clone https://github.com/idekerlab/nestLandingPage.git
cd nestLandingPage
gatsby build
```
Build will be in the `nestLandingPage/public` directory.

#### Prefix:
If the website url has a prefix (i.e. `https://theurl.com/prefix`), then:

1. In the `nestLandingPage/gatsby-config.js` file, edit the `pathPrefix` field.
```
module.exports = {
  pathPrefix: '/prefix',
  ...
}
```
2. Build using the `--prefix-paths` option
```
gatsby build --prefix-paths
```
Build will be in the `nestLandingPage/public` directory.
