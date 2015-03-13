# om-material-ui

A simple wrapper around React MaterialUI.  It is basically like bootstrap-cljs.

## Usage

[![Clojars Project](http://clojars.org/om-material-ui/latest-version.svg)](http://clojars.org/om-material-ui)

The sample is located at:

cd examples/simple

lein cljsbuild once simple

Then going to resources/public/index.html in a browser

You should see a very basic input box, material ui-style.

### Accessing component methods

Most material-ui react components have methods to control their behaviour. For example, [TextField](http://material-ui.com/#/components/text-fields) has `getValue()` to retrieve its value (amongst others). To access these you must get the raw react component.

Using the folowing function, the raw react component can be retrieved using `:ref`:

```clojure
(defn get-ref [owner ref]
  (aget (.-refs owner) ref))
```

Then, given this text field component:

```clojure
(mui/text-field
  {:ref "text"})
```

You can get its value using `(.getValue (get-ref owner "text"))`


### Avoid loading React twice

By default, when adding om as a :dependency in the project, it will include react.
material.js does that too, so you page will load react twice and probably will see a message like this in the console:

```Uncaught TypeError: Cannot read property 'firstChild' of undefined```

A way to avoid this problem is to make om not include react, and just use the one in material.js.
In the project.clj file, include Om as follow:
```[org.omcljs/om "0.8.8" :exclusions [cljsjs/react]]```

then create a react.cljs file:
```mkdir src/cljsjs; echo "(ns cljsjs.react)" > src/cljsjs/react.cljs```


## License

Copyright © 2015 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
