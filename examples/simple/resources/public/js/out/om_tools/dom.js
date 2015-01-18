// Compiled by ClojureScript 0.0-2411
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Converts kebab-case to camelCase
*/
om_tools.dom.camel_case = (function camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
* Converts attributes that are kebab-case and should be camelCase
*/
om_tools.dom.opt_key_case = (function opt_key_case(attr){
if(cljs.core.truth_((function (){var or__3616__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__3616__auto__){
return or__3616__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria-",null,"data-",null], null), null).call(null,cljs.core.subs.call(null,attr,(0),(5)));
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
* Converts aliased attributes
*/
om_tools.dom.opt_key_alias = (function opt_key_alias(opt){
var G__11456 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__11456) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
* Returns potentially formatted name for DOM element attribute.
* Converts kebab-case to camelCase.
*/
om_tools.dom.format_opt_key = (function format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
* Returns potentially modified value for DOM element attribute.
* Recursively formats map values (ie :style attribute)
*/
om_tools.dom.format_opt_val = (function format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
* Returns JavaScript object for React DOM attributes from opts map
*/
om_tools.dom.format_opts = (function format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__11460){
var vec__11461 = p__11460;
var k = cljs.core.nth.call(null,vec__11461,(0),null);
var v = cljs.core.nth.call(null,vec__11461,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.form_tags = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input","input",-2097503808,null),new cljs.core.Symbol(null,"textarea","textarea",990155703,null),new cljs.core.Symbol(null,"option","option",1705663799,null)], null);
om_tools.dom.el_ctor = (function el_ctor(tag){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,tag),om_tools.dom.form_tags))){
return cljs.core.symbol.call(null,"om.dom",cljs.core.name.call(null,tag));
} else {
return cljs.core.symbol.call(null,"js",[cljs.core.str("React.DOM."),cljs.core.str(cljs.core.name.call(null,tag))].join(''));
}
});
/**
* Returns a vector of [opts children] for from first and second
* argument given to DOM function
*/
om_tools.dom.element_args = (function element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(cljs.core.object_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function element(ctor,opts,children){
var vec__11463 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__11463,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__11463,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.class_set = (function class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map?rel=1421546168402