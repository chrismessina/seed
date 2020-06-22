# Seed icons

Seed icons is an open-source icon set that makes tracking down optimized, quality, consistent brand SVG icons a little less painful.

## Getting started

Seed icons are available in a few different capacities:

1. Library of optimized SVG for downloading on seedicons.com
2. [A consumable Figma library](https://www.figma.com/file/6bCEHsd2UTJFAks5QS12M5/Seed-Icons) for use in your designs
3. This repository that supplies a simplified SVG delivery mechanism for use in your projects

## How to use

### JavaScript

1. Add a link to the icons library to your project using `unpkg`. After including the script, `seed` will be available as a global variable.

```
<script src="https://unpkg.com/seed-icons"></script>
```

2. Add the `data-seed` attribute with the icon name to an element in your HTML.

```
<i data-seed="figma"></i>
```

3. Call `seed.replace()` method before the closing `</body>` tag to replace all elements with the `data-seed` attribute with the corresponding SVG icon. You can also pass size parameters to the replace method to modify the `replace` function behavior.

```
<script>seed.replace()</script>
```

## Quick start examples

### CodeSandbox Template

View a [live CodeSandbox example](https://codesandbox.io/s/seed-icons-template-inptk) of fundamental HTML implementation.

### HTML Snippet

```
<!DOCTYPE html>
<html>
  <script src="https://unpkg.com/seed-icons"></script>
  <body>
    <i data-seed="google-plus"></i>
    <i data-seed="github"></i>
    <i data-seed="figma" height="60px" width="60px"></i>
    <script>
      seed.replace();
    </script>
  </body>
</html>
```

## API

### `seed.icons`

An object with information about every icon.

![Image of Seed object](https://github.com/rossmoody/img/blob/master/seedobject.png)

### `seed.replace(options)`

Replaces all elements that have a `data-seed` attribute with SVG markup.

Available 'option' properties:
Name Type Default value Description
fill string none Icon color
width string or number 24px Icon width
height string or number 24px Icon height
class string none Custom css class
animation object none Icon animation

## Bugs, Requests and Contributing

Contributions are always welcome. If you notice and bug or would like to request an icon, [use an issue template](https://github.com/seedicons/seed/issues/new/choose) to kickstart the process.

## Credits

This project is one big mashup and open-source appropriation of projects from [Feather](https://github.com/feathericons/feather), [Ionicons](https://github.com/ionic-team/ionicons), and [Eva Icons](https://akveo.github.io/eva-icons/#/). I started this project as something to work on while I practice React/Gatsby and inspecting those projects as I learn has been truly invaluable. Anything impressive is probably code from them I didn't change. Anything that barely works is probably from yours truly. Please consider contributing.
