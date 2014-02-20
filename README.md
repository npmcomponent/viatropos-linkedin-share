*This repository is a mirror of the [component](http://component.io) module [viatropos/linkedin-share](http://github.com/viatropos/linkedin-share). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/viatropos-linkedin-share`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
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