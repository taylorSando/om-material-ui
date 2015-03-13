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


## License

Copyright © 2015 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
