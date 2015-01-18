// Compiled by ClojureScript 0.0-2411
goog.provide('simple.core');
goog.require('cljs.core');
goog.require('om_material_ui.core');
goog.require('om_material_ui.core');
goog.require('om.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om_tools.core');

var component_fnk__10071__auto___11471 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema11457 = schema.core.Any;
var input_schema11458 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map11456","map11456",703491467,null))], null);
var input_checker11459 = schema.core.checker.call(null,input_schema11458);
var output_checker11460 = schema.core.checker.call(null,output_schema11457);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460){
return (function constructor11454(G__11461){
var validate__8263__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__8263__auto__)){
var args__8264__auto___11472 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11461], null);
var temp__4126__auto___11473 = input_checker11459.call(null,args__8264__auto___11472);
if(cljs.core.truth_(temp__4126__auto___11473)){
var error__8265__auto___11474 = temp__4126__auto___11473;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor11454","constructor11454",2005627329,null),cljs.core.pr_str.call(null,error__8265__auto___11474)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11458,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11472,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11474], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var map11456 = G__11461;
while(true){
if(cljs.core.map_QMARK_.call(null,map11456)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map11456)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map11456,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
if(typeof simple.core.t11465 !== 'undefined'){
} else {

/**
* @constructor
*/
simple.core.t11465 = (function (constructor11454,G__11461,data,validate__8263__auto__,input_checker11459,map11456,output_checker11460,output_schema11457,input_schema11458,ufv__,meta11466){
this.constructor11454 = constructor11454;
this.G__11461 = G__11461;
this.data = data;
this.validate__8263__auto__ = validate__8263__auto__;
this.input_checker11459 = input_checker11459;
this.map11456 = map11456;
this.output_checker11460 = output_checker11460;
this.output_schema11457 = output_schema11457;
this.input_schema11458 = input_schema11458;
this.ufv__ = ufv__;
this.meta11466 = meta11466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
simple.core.t11465.prototype.om$core$IDisplayName$ = true;

simple.core.t11465.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460){
return (function (_){
var self__ = this;
var ___$1 = this;
return "main";
});})(data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460))
;

simple.core.t11465.prototype.om$core$IRender$ = true;

simple.core.t11465.prototype.om$core$IRender$render$arity$1 = ((function (data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,MaterialUI.Input({}));
});})(data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460))
;

simple.core.t11465.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460){
return (function (_11467){
var self__ = this;
var _11467__$1 = this;
return self__.meta11466;
});})(data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460))
;

simple.core.t11465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460){
return (function (_11467,meta11466__$1){
var self__ = this;
var _11467__$1 = this;
return (new simple.core.t11465(self__.constructor11454,self__.G__11461,self__.data,self__.validate__8263__auto__,self__.input_checker11459,self__.map11456,self__.output_checker11460,self__.output_schema11457,self__.input_schema11458,self__.ufv__,meta11466__$1));
});})(data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460))
;

simple.core.t11465.cljs$lang$type = true;

simple.core.t11465.cljs$lang$ctorStr = "simple.core/t11465";

simple.core.t11465.cljs$lang$ctorPrWriter = ((function (data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460){
return (function (this__4198__auto__,writer__4199__auto__,opt__4200__auto__){
return cljs.core._write.call(null,writer__4199__auto__,"simple.core/t11465");
});})(data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460))
;

simple.core.__GT_t11465 = ((function (data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460){
return (function __GT_t11465(constructor11454__$1,G__11461__$1,data__$1,validate__8263__auto____$1,input_checker11459__$1,map11456__$1,output_checker11460__$1,output_schema11457__$1,input_schema11458__$1,ufv____$1,meta11466){
return (new simple.core.t11465(constructor11454__$1,G__11461__$1,data__$1,validate__8263__auto____$1,input_checker11459__$1,map11456__$1,output_checker11460__$1,output_schema11457__$1,input_schema11458__$1,ufv____$1,meta11466));
});})(data,validate__8263__auto__,ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460))
;

}

return (new simple.core.t11465(constructor11454,G__11461,data,validate__8263__auto__,input_checker11459,map11456,output_checker11460,output_schema11457,input_schema11458,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__8263__auto__)){
var temp__4126__auto___11475 = output_checker11460.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11475)){
var error__8265__auto___11476 = temp__4126__auto___11475;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor11454","constructor11454",2005627329,null),cljs.core.pr_str.call(null,error__8265__auto___11476)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11457,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11476], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv__,output_schema11457,input_schema11458,input_checker11459,output_checker11460))
,schema.core.make_fn_schema.call(null,output_schema11457,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11458], null)));
})();
/**
* @param {...*} var_args
*/
simple.core.main = ((function (component_fnk__10071__auto___11471){
return (function() { 
var main__delegate = function (data__10072__auto__,owner11453,p__11468){
var vec__11470 = p__11468;
var opts__10073__auto__ = cljs.core.nth.call(null,vec__11470,(0),null);
return component_fnk__10071__auto___11471.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__10073__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner11453,new cljs.core.Keyword(null,"data","data",-232669377),data__10072__auto__], null));
};
var main = function (data__10072__auto__,owner11453,var_args){
var p__11468 = null;
if (arguments.length > 2) {
  p__11468 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return main__delegate.call(this,data__10072__auto__,owner11453,p__11468);};
main.cljs$lang$maxFixedArity = 2;
main.cljs$lang$applyTo = (function (arglist__11477){
var data__10072__auto__ = cljs.core.first(arglist__11477);
arglist__11477 = cljs.core.next(arglist__11477);
var owner11453 = cljs.core.first(arglist__11477);
var p__11468 = cljs.core.rest(arglist__11477);
return main__delegate(data__10072__auto__,owner11453,p__11468);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;})(component_fnk__10071__auto___11471))
;

simple.core.__GT_main = (function() {
var __GT_main = null;
var __GT_main__1 = (function (cursor__10040__auto__){
return om.core.build.call(null,simple.core.main,cursor__10040__auto__);
});
var __GT_main__2 = (function (cursor__10040__auto__,m11455){
return om.core.build.call(null,simple.core.main,cursor__10040__auto__,m11455);
});
__GT_main = function(cursor__10040__auto__,m11455){
switch(arguments.length){
case 1:
return __GT_main__1.call(this,cursor__10040__auto__);
case 2:
return __GT_main__2.call(this,cursor__10040__auto__,m11455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_main.cljs$core$IFn$_invoke$arity$1 = __GT_main__1;
__GT_main.cljs$core$IFn$_invoke$arity$2 = __GT_main__2;
return __GT_main;
})()
;
/**
* I don't do a whole lot.
*/
simple.core.init = (function init(){
return om.core.root.call(null,simple.core.main,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("main")], null));
});

//# sourceMappingURL=core.js.map?rel=1421546389644