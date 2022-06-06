# react-p5js

Basic p5.js sketch library implementation in react. This boilerplate creates a structure for creating p5.js sketches in react and a framework for displaying and organizing them on a webpage.

This was a fun experiment, feel free to use it as is or hack it to your heart's content!

## Usage

Clone this repository and start creating sketches by runing the command `npm run create-sketch mysketchname`. This will create a sketch folder as well as the main sketch file and sketch configuration file (see below for configuration details).

## Sketch configuration

THe sketch model has the following parameters that control the sketch itself and the sketch display page:

```
{
    id: string, // sketch id, generated from the command line argument passed
    title: string, // sketch display title
    tags?: Tags[], // sketch tags, for sorting on the home page. Tags can be found and added in models/Tags.ts
    sketch?: any, // sketch object
    sketchArgs?: any, // sketch arguments, you can pass anything here
    backgroundColor?: string, // sketch display page background color
    showHeader?: boolean, // show the sketch title on the sketch display page
    headerColor?: string, // sketch display page header text color
    minDimensions?: {
      width: number, // width at which a notice is shown that the screen is too small
      height: number, // height at which a notice is shown that the screen is too small
    }
    thumbnailUrl?: string, // url to a sketch thumbnail to display on the home page
    fullScreen?: boolean, // whether to display a fullscreen canvas on the home page
  }
```
