# pugson-views-brunch

Dynamically renders `pug` templates into html strings and makes them available within `require` wrappers in compiled app file.

## Definitions
Definitions are `json` files with data to be interpolated into templates. Must have extension `.pug.json`.

Can have an optional property `template` (String) which holds template file name to be used with given definitions object. Defaults to definitions file name.

## Options
Add options to brunch `config.plugins.views = {}`

`path` (String)
Path to the directory with templates. Defaults to `'pug'`

`pattern` (RegExp)
Pattern to definitions files. Defaults to `/\.pug\.json$/`

`replace` (RegExp)
Pattern to replace in file paths in order to reference the template file in templates directory. Defaults to `/^.*(app)/`.

## Static files

Any files with `.pug` extension found in `assets` directory will be compiled into `.html` files in `public` directory.
