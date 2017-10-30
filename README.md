# jadeson-views-brunch

Dynamically renders templates into html strings and makes them available in `require`.
Takes in a template and a definition file.

## Options
`templates` (string)
  Path to folder with templates. Defaults to `'views'`

`definitions` (pattern)
  Pattern to folder with definitions files. Defaults to `/^app\/templates[\\/].*\.json$/`

`ext`
  Extension of template files. Defaults to `'jade'`

## Definitions
Definitions are `json` files with data to be interpolated into templates.

Can have an optional property `template` (string) which holds template file name to be used with given definitions object. Defaults to definitions file name.
