// Compiled by ClojureScript 0.0-2411
goog.provide('om_tools.core');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('plumbing.core');
goog.require('plumbing.fnk.schema');
goog.require('om.core');
goog.require('om.core');
/**
* Returns an atom-like object for reading and writing Om component
* state.
* 
* Note: Behavior may exactly not match atoms when deref'ing
* immediately following a reset!/swap! because Om processes state
* changes asynchronously in separate render phases.
*/
om_tools.core.state_proxy = (function state_proxy(owner){
if(cljs.core.truth_(owner)){
var get_state = (function (){
return om.core.get_state.call(null,owner);
});
if(typeof om_tools.core.t11467 !== 'undefined'){
} else {

/**
* @constructor
*/
om_tools.core.t11467 = (function (get_state,owner,state_proxy,meta11468){
this.get_state = get_state;
this.owner = owner;
this.state_proxy = state_proxy;
this.meta11468 = meta11468;
this.cljs$lang$protocol_mask$partition1$ = 98304;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
om_tools.core.t11467.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = ((function (get_state){
return (function (s,f){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null)));
});})(get_state))
;

om_tools.core.t11467.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = ((function (get_state){
return (function (s,f,x){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x));
});})(get_state))
;

om_tools.core.t11467.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = ((function (get_state){
return (function (s,f,x,y){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x,y));
});})(get_state))
;

om_tools.core.t11467.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = ((function (get_state){
return (function (s,f,x,y,more){
var self__ = this;
var s__$1 = this;
return cljs.core._reset_BANG_.call(null,s__$1,cljs.core.apply.call(null,f,self__.get_state.call(null),x,y,more));
});})(get_state))
;

om_tools.core.t11467.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = ((function (get_state){
return (function (_,v){
var self__ = this;
var ___$1 = this;
return om.core.set_state_BANG_.call(null,self__.owner,v);
});})(get_state))
;

om_tools.core.t11467.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (get_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.get_state.call(null);
});})(get_state))
;

om_tools.core.t11467.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (get_state){
return (function (_11469){
var self__ = this;
var _11469__$1 = this;
return self__.meta11468;
});})(get_state))
;

om_tools.core.t11467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (get_state){
return (function (_11469,meta11468__$1){
var self__ = this;
var _11469__$1 = this;
return (new om_tools.core.t11467(self__.get_state,self__.owner,self__.state_proxy,meta11468__$1));
});})(get_state))
;

om_tools.core.t11467.cljs$lang$type = true;

om_tools.core.t11467.cljs$lang$ctorStr = "om-tools.core/t11467";

om_tools.core.t11467.cljs$lang$ctorPrWriter = ((function (get_state){
return (function (this__4198__auto__,writer__4199__auto__,opt__4200__auto__){
return cljs.core._write.call(null,writer__4199__auto__,"om-tools.core/t11467");
});})(get_state))
;

om_tools.core.__GT_t11467 = ((function (get_state){
return (function __GT_t11467(get_state__$1,owner__$1,state_proxy__$1,meta11468){
return (new om_tools.core.t11467(get_state__$1,owner__$1,state_proxy__$1,meta11468));
});})(get_state))
;

}

return (new om_tools.core.t11467(get_state,owner,state_proxy,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),55,new cljs.core.Keyword(null,"end-line","end-line",1837326455),176,new cljs.core.Keyword(null,"column","column",2078222095),7,new cljs.core.Keyword(null,"line","line",212345235),161,new cljs.core.Keyword(null,"file","file",-1269645878),"/home/taylor/Documents/projects/om-material-ui/examples/simple/resources/public/js/out/om_tools/core.cljs"], null)));
} else {
return null;
}
});
/**
* Calls om.core/set-state! when current value not= to v and returns
* updated owner, otherwise nil.
* Used to prevent no-op updates from entering render queue
*/
om_tools.core.set_state_QMARK__BANG_ = (function() {
var set_state_QMARK__BANG_ = null;
var set_state_QMARK__BANG___2 = (function (owner,v){
if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner))){
return null;
} else {
return om.core.set_state_BANG_.call(null,owner,v);
}
});
var set_state_QMARK__BANG___3 = (function (owner,korks,v){
if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner,korks))){
return null;
} else {
return om.core.set_state_BANG_.call(null,owner,korks,v);
}
});
set_state_QMARK__BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_QMARK__BANG___2.call(this,owner,korks);
case 3:
return set_state_QMARK__BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_QMARK__BANG___2;
set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_QMARK__BANG___3;
return set_state_QMARK__BANG_;
})()
;

//# sourceMappingURL=core.js.map?rel=1421546168454