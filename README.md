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

## Landing pages

Landing pages serve as online hubs for all of the resources associated with a paper. This can include:

* A link to the paper itself
* NDEx/HiView networks
* Data
* Github repositories
* Custom components for interacting with the data

### Building a landing page

#### 1. Clone the template landing page repository
```
git clone https://github.com/Ceofy/templateLandingPage.git
mv templateLandingPage <your project's name + LandingPage>
```
##### Create a github repository for your new landing page
```
git remote set-url origin https://github.com/<path to new github repository>.git
git branch -M main
git push -u origin main
```

#### 2. Fill out placeholder fields with relevant information
##### `xLandingPage/src/index.js`

This is the main page that will be displayed.
* Replace the `Title` in `<SEO title='Title' />` with the name of the project.
* Replace the `Title` and `Subtitle` in `VerticalTitle title='Title' subtitle='Subtitle' />` with the name of the project, and an informative subtitle. ([More on titles](#titles).)
* Replace the contents of the buttons with the appropriate information. ([More on buttons](#buttons).)
* Replace the contents of:
```
<Panel>
  <h2>What is this about?</h2>
  <p>Some info about what this is about.</p>
</Panel>
```
making sure to use the `<h2>` and `<p>` tags. ([More on panels](#panels).)
* If this project doesn't use NDEx or HiView, remove the `What is NDEx?` or `What is HiView?` paragraphs, as well as the references to them in the buttons at the top of the page. Otherwise, replace the `Title` link in the `What is NDEx?` paragraph with the title of your project, and the URL of your network in NDEx. Edit the paragraphs to suit your needs.
* Replace the collaborator logos in the Collaborators section with the appropriate logos, and ensure they link to the right websites. ([More on links](#links).)

##### `xLandingPage/src/components/componentStyles/topPanel.module.css`

This is the stylesheet for the top panel of the main page.
* Replace the background image of the top panel by placing the image of your choice (usually a picture of the NDEx network associated with the project) in the `xLandingPage/src/images` directory. Then, replace the image in this file (`lightsaber.webp`) with your chosen image.
```
.background {
  background-image: url(../../images/lightsaber.webp);
  ...
}
```

##### `xLandingPage/gatsby-config.js`

This is the gatsby configuration page.
* Replace the `prefix` in ``pathPrefix: `/prefix`,`` if necessary. ([More on prefixes](#prefix).)
* Replace the `Title` and `Subtitle` in:
```
siteMetadata: {
  title: `Title`,
  description: `Ideker Lab project page for Title (Subtitle)`,
  author: `UCSD Ideker Lab`,
},
```
with the title and subtitle of your project.

#### 3. Add unique touches

See the [Landing page components](#landing-page-components) section to learn more about how to customize this landing page.

Or, write your own components in React or by using React libraries.

### Landing page components
#### Titles

There are five components related to titles:
* `TopPanel`
* `VerticalTitle`
* `VerticalButtonsContainer`
* `HorizontalTitle`
* `HorizontalButtonsContainer`

The `TopPanel` is the container for all things title-related. It will normally contain a "`Title`" component, followed by a "`ButtonsContainer`" component.

The "`Vertical`" components work together, and the "`Horizontal`" components work together.

Using a `HorizontalTitle` and `HorizontalButtonsContainer` will result in a layout where the title sits above the buttons, and the buttons are arranged horizontally across the screen (eg. [BRCA](https://idekerlab.ucsd.edu/breastcancer/)).

Using a `VerticalTitle` and `VerticalButtonsContainer` will result in a layout where the title lies to the left of the buttons, and the buttons are stacked vertically on top of each other (eg. [NeST](https://idekerlab.ucsd.edu/ddram/)). `Button` components contained inside the `VerticalButtonsContainer` must have the `vertical` prop set to `true`:
```
<TopPanel>
  <VerticalTitle .../>
  <VerticalButtonsContainer>
    <Button
      vertical={true}
      ...
    />
  </VerticalButtonsContainer>
</TopPanel>
```

#### Buttons


#### Panels
#### Links
