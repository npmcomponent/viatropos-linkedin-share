# Linkedin Share

## Installation

```bash
component install viatropos/linkedin-share
```

## Example

```js
var share = require('linkedin-share');

share('https://github.com', 'GitHub', 'The GitHub homepage', window.location);
```

## Notes

- http://platform.linkedin.com/in.js?async=true

```
IN.init({
    onLoad: "myOnloadFunction"
});
```

## Licence

MIT