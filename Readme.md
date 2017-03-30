# Ckit

*Very* simple asset builder, names as an homage to [Codekit](https://codekitapp.com), which was the first super-simple asset builder I had the pleaser to work with.

Is installed globally, takes a key `ckit` from package.json and simply builds/compiles/bundles stuff with following:

* sass/scss => css
* js => browserify => js
* images => imageoptim => images

``` json
{
  "stuff": "in json",
  "ckit": {
    "browsersync": {
      "proxy": "http://address.dev",
      "port": 1234
    },
    "files": [
        {
          "compiler": "css",
          "watch": "path/to/*.(scss|sass)",
          "compile": ["path/to/file1.scss", "path/to/file2.sass"],
          "target": "path/to/final/"
        }
    ]
  }
}
```

That's it. Hopefully :)