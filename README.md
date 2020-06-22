# Seed icons

Seed icons is an open-source brand icon set.

Note: All brand icons are trademarks of their respective owners. The use of these trademarks does not indicate endorsement of the trademark holder by Seed icons, nor vice versa.

## How to use

### JavaScript

1. Add the unpkg script

`<script src="https://unpkg.com/eva-icons"></script>`

2. Add the data-seed attribute with the icon name to an element in your HTML.

`<i data-seed="figma"></i>`

2. Call `seed.replace()` function before the closing `</body>` tag to replace all elements with the `data-seed` attribute with the corresponding SVG icon. You can also pass size parameters to the replace method to modify the `replace` function behavior.

## Examples

### CodeSandbox Template

View a [live CodeSandbox example](https://codesandbox.io/s/seed-icons-template-inptk) of fundamental HTML implementation.

### HTML Snippet

```
<!DOCTYPE html>
<html>
  <script src="https://unpkg.com/seed-icons"></script>
  <body>
    <i data-seed="firefox"></i>
    <i data-seed="github"></i>
    <i data-seed="figma" height="60px" width="60px"></i>
    <script>
      seed.replace();
    </script>
  </body>
</html>
```

## Contributing

### Credits

This project is one big mashup and homage to [Feather](https://github.com/feathericons/feather), [Ionicons](https://github.com/ionic-team/ionicons), and [Eva Icons](https://akveo.github.io/eva-icons/#/). I started this project as something to work on while I learn React/Gatsby and inspecting those projects as I learn has been truly invaluable. Anything impressive is probably code from them I didn't change. Anything that barely works is probably from yours truly.
