# pugson-views-brunch

Dynamically renders `pug` templates into html strings and makes them available within `require` wrappers in compiled app file.

## Definitions
Definitions are `json` files with data to be interpolated into templates. Must have extension `.pug.json`.

Can have an optional property `template` (String) which holds template file name to be used with given definitions object. Defaults to definitions file name.

## Static files

Any files with `.pug` extension found in `assets` directory will be compiled into `.html` files in `public` directory.

## Options
Overwrite default options in brunch `config.plugins.views = {}`

`path` (`'pug'`)
Path to the directory with templates.

`pattern` (`/\.pug\.json$/`)
Pattern to definitions files.

`replace` (`/^.*(app)/`)
Pattern to replace in file paths in order to reference the template file in templates directory.

`staticLocals` (`{}`)
Object to be used as definitions for static files. Has template's base file names as keys and paths to corresponding json files as values. Example: `{'index.pug': 'static/data.json'}`

