#Intro
## Covering the basics.
* 'Basics' means the process of designing a front end for multiple device breakpoints.
* Basics applies to most websites where the focus in on page composition.
* More sophisticated UI and functionality for things like web apps require more advanced rwd strategies. I'll try to get to get to that but basics come first.

# The basics
## html + css + js
* When we talk about the 'front end' we're talking about these three technologies. 
* The technologies advance over time (html5) but they haven't been replaced since their introduction. Compared to the backend world. 
* When we talk about Bootstrap or jQuery we're talking about one our more of these technologies packaged together.

## html 
Is content mapped to structure.
(point to html-demo.html)

* when you think of responsive, think of your html as a tree. That's how your browser sees it and that's how we build it.
* parent child relationships
(need diagram of html tree & container illustration)

## css 
* applies style to your html.
* the interplay of css and html is the heart of what we're talking about today.

## js
* js gives us page functionality (give example). 
* When I talk about advanced topics I'm talking about adding js into the mix. It's like juggling. We start by juggling two balls. Applying css style to your html structure and how we reapply style based on device size, orientation etc is our focus.

# Media Queries
* Classic css + html is a 1:1 relationship. You have a single style guide that applies to the page.
* With Media Queries we can write multiple styles based on device specifics like orientation, display dimensions & resolution.
* Paper doll analogy. Doll = html structure. Clothes are css. Different outfits are media queries in action.
* (DEMO) - Show what a media query looks like in code. Show color, type and dimension changes.

## Project Planning: setting responsive breakpoints
* Display sizes are NOT standardized.
* (show) http://en.wikipedia.org/wiki/List_of_displays_by_pixel_density
* Display sizes are a spectrum. Breakpoints are used to establish points on that spectrum where you want to rework your UI and layout. (need a graphic of several devices in a line with breakpoints dividing them into groups)
* Typically you set 3 breakpoints (mobile, tablet, desktop) and let the devices sort themselves out based on their dimensions.
* But of course it isn't that easy.

### Resolution
* Screen resolution adds complexity to our nice breakpoint spectrum. (show spectrum again)
* 

## Device width vs. browser width
* Demo this as a planning must. (starbucks vs frogdesign.com)

# Grids
* Compare the designer grid to the developer grid.
* Go back to the tree/nesting concept.



**Hold on this. Advanced Topics & Tips & Do's and Don'ts**

## Do's and Don'ts
* Do - hide and show elements as necessary (demo this).
* Don't duplicate DOM elements because you're breaking the parent/child nesting for a certain device.


## Things to consider
* No rollovers.

## Mobile First
* Mobile first can mean many things. It can be a strategy for a product, the design process or for development.
* Mobile first for development means you're following a specific css coding convention.
* (DEMO) - Show the media query code again and show how it is MF.
* (DEMO) - Show media-queries.html



