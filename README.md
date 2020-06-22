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

```html
<script src="https://unpkg.com/seed-icons"></script>
```

2. Add the `data-seed` attribute with the icon name to an element in your HTML.

```html
<i data-seed="figma"></i>
```

3. Call `seed.replace()` method before the closing `</body>` tag to replace all elements with the `data-seed` attribute with the corresponding SVG icon. You can also pass size parameters to the replace method to modify the `replace` function behavior.

```html
<script>
  seed.replace()
</script>
```

## Quick start examples

### CodeSandbox Template

View a [live CodeSandbox example](https://codesandbox.io/s/seed-icons-template-inptk) of fundamental HTML implementation.

### HTML Snippet

```html
<!DOCTYPE html>
<html>
  <script src="https://unpkg.com/seed-icons"></script>
  <body>
    <i data-seed="google-plus"></i>
    <i data-seed="github"></i>
    <i data-seed="figma" height="60px" width="60px"></i>
    <script>
      seed.replace()
    </script>
  </body>
</html>
```

## API

### `seed.icons`

An object with information about every icon. A typical icon object looks like:

```js
seed.icons["google-play"]
{
   name: 'google-play',
   contents: '<path fill="#1ABCFE...',
   tags: ['app', 'browser', 'google'],
   attrs: {
     class: 'seed seed-google-play',
     xmlns: 'http://www.w3.org/2000/svg',
     width: 48,
     height: 48,
     viewBox: '0 0 48 48',
   }
}
```

### `seed.replace({attrs})`

Replaces all elements that have a `data-seed` attribute with SVG markup. You can pass seed.replace() an attrs object. All attributes on the placeholder element (i.e. `<i>`) will be copied to the `<svg>` tag. All attributes on the placeholder element (i.e. `<i>`) will be copied to the `<svg>` tag.

```html
<!-- Pass the below attributes in the replace method. -->
<i data-seed="firefox"></i>
<script>
  feather.replace({ class: 'foo', height: 40 })
</script>

<!-- Results in this output: -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="100px"
  height="100px"
  viewBox="0 0 48 48"
  class="seed seed-figma foo"
  data-seed="figma"
>
  <!-- <path>...</path> -->
</svg>
```

### `seed.icons['name'].toSvg({attrs})

Returns the supplied icon name SVG as a string.

## Bugs, Requests and Contributing

Contributions are always welcome. If you notice and bug or would like to request an icon, [use an issue template](https://github.com/seedicons/seed/issues/new/choose) to kickstart the process.

## Credits

This project is one big mashup and open-source appropriation of projects from [Feather](https://github.com/feathericons/feather), [Ionicons](https://github.com/ionic-team/ionicons), and [Eva Icons](https://akveo.github.io/eva-icons/#/). I started this project as something to work on while I practice React/Gatsby and inspecting those projects as I learn has been truly invaluable. Anything impressive is probably code from them I didn't change. Anything that barely functions is probably from yours truly. Please consider contributing.
