(ns simple.core
  (:require [om-tools.core :refer-macros [defcomponentk]] 
            [om.dom :as dom :include-macros true]
            [om.core :as om :include-macros true]
            [om-material-ui.core :as mui :include-macros true]))

(defcomponentk main [data]
  (render [_]    
    (dom/div nil (mui/input {:placeholder "Placeholder" :description "I am a description"}))))

(defn init 
  "I don't do a whole lot."
  []
  (om/root
   main
   {}
   {:target (. js/document (getElementById "main"))}))  

