# 🌊 VIKINGS WEBSITE 🌊

![](landing.gif)

**Code by [fshenton](https://github.com/fshenton)**
**Primary reviewer: [pookage](https://github.com/pookage)**
**Design by Florian Pollet (used with permission)**

[Behance] https://www.behance.net/gallery/75755549/Vikings-Website-Concept

## 🔨 Built using:
- React.js
- SCSS
- Webpack
- Babel
- Chrome


## 🏢 Building the App...
Requires npm or yarn (instructions below use npm)

Download, fork, or clone the repo locally
In your CLI, navigate to the project directory
Run npm install to install local dependencies

## ...for Development
Run `npm run build-dev` to build the project for local development

Any changes to files inside the src/ directory will trigger a hot reload


## Browser Support
- Chrome ⭐⭐⭐⭐⭐ 
- Firefox ⭐⭐⭐⭐ 
	- performance issue with filter blur effects on some devices 🤷‍♀️
- Edge ⭐⭐⭐⭐
	- Combined main Vikings logo assets into one due to lack of mask-image support
	- Videos are not fullscreen due to lacking support for `object-fit: cover`
- Safari ⭐⭐⭐
	- Navigation between characters is not available.


### Future Features / Improvements
- Page-to-page transitions.
- Add support for anchor-links directly to specific characters and episodes.
- Add swipe gestures to navigate between episodes and characters.
- Add scrubbing controls to episode previews
- Optimise the layout of character pages, and to a lesser degree the episode pages, between the mobile portrait and tablet portrait screen widths.
- Extend support for device-specific assets to every asset on the site.
- Add wheel / keyboard arrow support to navigate between episodes and characters.
- Prevent visibility of other site elements when transitioning between fullscreen episode previews
- Add more content to media pages for variety.
