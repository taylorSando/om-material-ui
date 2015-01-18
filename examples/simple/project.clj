(defproject simple "0.1.0-SNAPSHOT"
  :description "Simple example of using mateiral ui with om"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [om-material-ui "0.1.0" :exclusions [org.clojure/clojurescript
                                                             org.clojure/clojure]]
                 [org.clojure/clojurescript "0.0-2411"]
                 [org.om/om "0.8.0"]]
  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]  
  :cljsbuild {:builds [{:id "simple"
                        :source-paths ["src" "checkouts/om-material-ui/target/generated/src/cljs"]
                        :compiler {
                                   :preamble ["om_material_ui/material.js"]
                                   :output-to "resources/public/js/simple.js"
                                   :output-dir "resources/public/js/out"
                                   :source-map "resources/public/js/simple.js.map"                                    
                                   :optimizations :none}}]})
