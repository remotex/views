# pugson-views-brunch

Dynamically renders `pug` templates into html strings and makes them available within `require` wrappers in compiled app file.

## Definitions
Definitions are `json` files with data to be interpolated into templates. Must have extension `.pug.json`.

Can have an optional property `template` (String) which holds template file name to be used with given definitions object. Defaults to definitions file name.

## Static files

Any files with `.pug` extension found in `assets` directory will be compiled into `.html` files in `public` directory.

## Options
Overwrite default options in brunch `config.plugins.pugviews = {}`

`basedir` (`'pugviews'`)
Path to the directory with templates.

`pattern` (`/\.pug\.json$/`)
Pattern of definitions files. __Must have `.pug.json` extension.__

`replace` (`/^.*(app)/`)
Pattern in definitions file paths to replace with `basedir` in order to reference the template file.

`staticLocals` (`{}`)
Object to be used as definitions for static files. Has template's base file names as keys and paths to corresponding json files as values. Example: `{'index.pug': 'static/data.json'}`
