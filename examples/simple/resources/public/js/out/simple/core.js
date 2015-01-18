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

var component_fnk__10071__auto___11571 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema11557 = schema.core.Any;
var input_schema11558 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"data","data",-232669377),schema.core.Any], true, false),new cljs.core.Symbol(null,"map11556","map11556",908892431,null))], null);
var input_checker11559 = schema.core.checker.call(null,input_schema11558);
var output_checker11560 = schema.core.checker.call(null,output_schema11557);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560){
return (function constructor11554(G__11561){
var validate__8263__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__8263__auto__)){
var args__8264__auto___11572 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11561], null);
var temp__4126__auto___11573 = input_checker11559.call(null,args__8264__auto___11572);
if(cljs.core.truth_(temp__4126__auto___11573)){
var error__8265__auto___11574 = temp__4126__auto___11573;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor11554","constructor11554",1692714433,null),cljs.core.pr_str.call(null,error__8265__auto___11574)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11558,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11572,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11574], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var map11556 = G__11561;
while(true){
if(cljs.core.map_QMARK_.call(null,map11556)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map11556)));
}

var data = plumbing.fnk.schema.safe_get.call(null,map11556,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
if(typeof simple.core.t11565 !== 'undefined'){
} else {

/**
* @constructor
*/
simple.core.t11565 = (function (constructor11554,input_schema11558,data,G__11561,validate__8263__auto__,output_checker11560,map11556,output_schema11557,input_checker11559,ufv__,meta11566){
this.constructor11554 = constructor11554;
this.input_schema11558 = input_schema11558;
this.data = data;
this.G__11561 = G__11561;
this.validate__8263__auto__ = validate__8263__auto__;
this.output_checker11560 = output_checker11560;
this.map11556 = map11556;
this.output_schema11557 = output_schema11557;
this.input_checker11559 = input_checker11559;
this.ufv__ = ufv__;
this.meta11566 = meta11566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
simple.core.t11565.prototype.om$core$IDisplayName$ = true;

simple.core.t11565.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560){
return (function (_){
var self__ = this;
var ___$1 = this;
return "main";
});})(data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560))
;

simple.core.t11565.prototype.om$core$IRender$ = true;

simple.core.t11565.prototype.om$core$IRender$render$arity$1 = ((function (data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560){
return (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,MaterialUI.Input({"description": "I am a description", "placeholder": "Placeholder"}));
});})(data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560))
;

simple.core.t11565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560){
return (function (_11567){
var self__ = this;
var _11567__$1 = this;
return self__.meta11566;
});})(data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560))
;

simple.core.t11565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560){
return (function (_11567,meta11566__$1){
var self__ = this;
var _11567__$1 = this;
return (new simple.core.t11565(self__.constructor11554,self__.input_schema11558,self__.data,self__.G__11561,self__.validate__8263__auto__,self__.output_checker11560,self__.map11556,self__.output_schema11557,self__.input_checker11559,self__.ufv__,meta11566__$1));
});})(data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560))
;

simple.core.t11565.cljs$lang$type = true;

simple.core.t11565.cljs$lang$ctorStr = "simple.core/t11565";

simple.core.t11565.cljs$lang$ctorPrWriter = ((function (data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560){
return (function (this__4198__auto__,writer__4199__auto__,opt__4200__auto__){
return cljs.core._write.call(null,writer__4199__auto__,"simple.core/t11565");
});})(data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560))
;

simple.core.__GT_t11565 = ((function (data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560){
return (function __GT_t11565(constructor11554__$1,input_schema11558__$1,data__$1,G__11561__$1,validate__8263__auto____$1,output_checker11560__$1,map11556__$1,output_schema11557__$1,input_checker11559__$1,ufv____$1,meta11566){
return (new simple.core.t11565(constructor11554__$1,input_schema11558__$1,data__$1,G__11561__$1,validate__8263__auto____$1,output_checker11560__$1,map11556__$1,output_schema11557__$1,input_checker11559__$1,ufv____$1,meta11566));
});})(data,validate__8263__auto__,ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560))
;

}

return (new simple.core.t11565(constructor11554,input_schema11558,data,G__11561,validate__8263__auto__,output_checker11560,map11556,output_schema11557,input_checker11559,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__8263__auto__)){
var temp__4126__auto___11575 = output_checker11560.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11575)){
var error__8265__auto___11576 = temp__4126__auto___11575;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor11554","constructor11554",1692714433,null),cljs.core.pr_str.call(null,error__8265__auto___11576)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11557,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11576], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv__,output_schema11557,input_schema11558,input_checker11559,output_checker11560))
,schema.core.make_fn_schema.call(null,output_schema11557,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11558], null)));
})();
/**
* @param {...*} var_args
*/
simple.core.main = ((function (component_fnk__10071__auto___11571){
return (function() { 
var main__delegate = function (data__10072__auto__,owner11553,p__11568){
var vec__11570 = p__11568;
var opts__10073__auto__ = cljs.core.nth.call(null,vec__11570,(0),null);
return component_fnk__10071__auto___11571.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__10073__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner11553,new cljs.core.Keyword(null,"data","data",-232669377),data__10072__auto__], null));
};
var main = function (data__10072__auto__,owner11553,var_args){
var p__11568 = null;
if (arguments.length > 2) {
  p__11568 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return main__delegate.call(this,data__10072__auto__,owner11553,p__11568);};
main.cljs$lang$maxFixedArity = 2;
main.cljs$lang$applyTo = (function (arglist__11577){
var data__10072__auto__ = cljs.core.first(arglist__11577);
arglist__11577 = cljs.core.next(arglist__11577);
var owner11553 = cljs.core.first(arglist__11577);
var p__11568 = cljs.core.rest(arglist__11577);
return main__delegate(data__10072__auto__,owner11553,p__11568);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;})(component_fnk__10071__auto___11571))
;

simple.core.__GT_main = (function() {
var __GT_main = null;
var __GT_main__1 = (function (cursor__10040__auto__){
return om.core.build.call(null,simple.core.main,cursor__10040__auto__);
});
var __GT_main__2 = (function (cursor__10040__auto__,m11555){
return om.core.build.call(null,simple.core.main,cursor__10040__auto__,m11555);
});
__GT_main = function(cursor__10040__auto__,m11555){
switch(arguments.length){
case 1:
return __GT_main__1.call(this,cursor__10040__auto__);
case 2:
return __GT_main__2.call(this,cursor__10040__auto__,m11555);
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

//# sourceMappingURL=core.js.map?rel=1421552326015