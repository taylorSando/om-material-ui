// Compiled by ClojureScript 0.0-2411
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__8293__8294__auto__){
var G__11470 = p1__8293__8294__auto__;
if(G__11470){
var bit__4292__auto__ = null;
if(cljs.core.truth_((function (){var or__3616__auto__ = bit__4292__auto__;
if(cljs.core.truth_(or__3616__auto__)){
return or__3616__auto__;
} else {
return G__11470.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__11470.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__11470);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__11470);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__11471_SHARP_){
return (cljs.core.val.call(null,p1__11471_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__11473 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__11473,(0),null);
var v = cljs.core.nth.call(null,vec__11473,(1),null);
var p = vec__11473;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___11479 = schema.utils.use_fn_validation;
var output_schema11474_11480 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema11475_11481 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker11476_11482 = schema.core.checker.call(null,input_schema11475_11481);
var output_checker11477_11483 = schema.core.checker.call(null,output_schema11474_11480);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___11479,output_schema11474_11480,input_schema11475_11481,input_checker11476_11482,output_checker11477_11483){
return (function unwrap_schema_form_key(G__11478){
var validate__8263__auto__ = ufv___11479.get_cell();
if(cljs.core.truth_(validate__8263__auto__)){
var args__8264__auto___11484 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11478], null);
var temp__4126__auto___11485 = input_checker11476_11482.call(null,args__8264__auto___11484);
if(cljs.core.truth_(temp__4126__auto___11485)){
var error__8265__auto___11486 = temp__4126__auto___11485;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__8265__auto___11486)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11475_11481,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11484,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11486], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var k = G__11478;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__8263__auto__)){
var temp__4126__auto___11487 = output_checker11477_11483.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11487)){
var error__8265__auto___11488 = temp__4126__auto___11487;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__8265__auto___11488)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11474_11480,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11488], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv___11479,output_schema11474_11480,input_schema11475_11481,input_checker11476_11482,output_checker11477_11483))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema11474_11480,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11475_11481], null)));
var ufv___11494 = schema.utils.use_fn_validation;
var output_schema11489_11495 = schema.core.Any;
var input_schema11490_11496 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker11491_11497 = schema.core.checker.call(null,input_schema11490_11496);
var output_checker11492_11498 = schema.core.checker.call(null,output_schema11489_11495);
/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___11494,output_schema11489_11495,input_schema11490_11496,input_checker11491_11497,output_checker11492_11498){
return (function explicit_schema_key_map(G__11493){
var validate__8263__auto__ = ufv___11494.get_cell();
if(cljs.core.truth_(validate__8263__auto__)){
var args__8264__auto___11499 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11493], null);
var temp__4126__auto___11500 = input_checker11491_11497.call(null,args__8264__auto___11499);
if(cljs.core.truth_(temp__4126__auto___11500)){
var error__8265__auto___11501 = temp__4126__auto___11500;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__8265__auto___11501)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11490_11496,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11499,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11501], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var s = G__11493;
while(true){

new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__8263__auto__)){
var temp__4126__auto___11502 = output_checker11492_11498.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11502)){
var error__8265__auto___11503 = temp__4126__auto___11502;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__8265__auto___11503)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11489_11495,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11503], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv___11494,output_schema11489_11495,input_schema11490_11496,input_checker11491_11497,output_checker11492_11498))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema11489_11495,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11490_11496], null)));
var ufv___11509 = schema.utils.use_fn_validation;
var output_schema11504_11510 = schema.core.Any;
var input_schema11505_11511 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker11506_11512 = schema.core.checker.call(null,input_schema11505_11511);
var output_checker11507_11513 = schema.core.checker.call(null,output_schema11504_11510);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___11509,output_schema11504_11510,input_schema11505_11511,input_checker11506_11512,output_checker11507_11513){
return (function split_schema_keys(G__11508){
var validate__8263__auto__ = ufv___11509.get_cell();
if(cljs.core.truth_(validate__8263__auto__)){
var args__8264__auto___11514 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11508], null);
var temp__4126__auto___11515 = input_checker11506_11512.call(null,args__8264__auto___11514);
if(cljs.core.truth_(temp__4126__auto___11515)){
var error__8265__auto___11516 = temp__4126__auto___11515;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__8265__auto___11516)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11505_11511,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11514,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11516], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var s = G__11508;
while(true){

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);

return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__8263__auto__)){
var temp__4126__auto___11517 = output_checker11507_11513.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11517)){
var error__8265__auto___11518 = temp__4126__auto___11517;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__8265__auto___11518)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11504_11510,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11518], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv___11509,output_schema11504_11510,input_schema11505_11511,input_checker11506_11512,output_checker11507_11513))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema11504_11510,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11505_11511], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__11522){
var vec__11523 = p__11522;
var k = cljs.core.nth.call(null,vec__11523,(0),null);
var v = cljs.core.nth.call(null,vec__11523,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__11524 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__11524,(0),null);
var ov = cljs.core.nth.call(null,vec__11524,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__11525){
var key_project = cljs.core.first(arglist__11525);
arglist__11525 = cljs.core.next(arglist__11525);
var key_combine = cljs.core.first(arglist__11525);
arglist__11525 = cljs.core.next(arglist__11525);
var val_combine = cljs.core.first(arglist__11525);
var maps = cljs.core.rest(arglist__11525);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___11533 = schema.utils.use_fn_validation;
var output_schema11527_11534 = plumbing.fnk.schema.InputSchema;
var input_schema11528_11535 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker11529_11536 = schema.core.checker.call(null,input_schema11528_11535);
var output_checker11530_11537 = schema.core.checker.call(null,output_schema11527_11534);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___11533,output_schema11527_11534,input_schema11528_11535,input_checker11529_11536,output_checker11530_11537){
return (function union_input_schemata(G__11531,G__11532){
var validate__8263__auto__ = ufv___11533.get_cell();
if(cljs.core.truth_(validate__8263__auto__)){
var args__8264__auto___11538 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11531,G__11532], null);
var temp__4126__auto___11539 = input_checker11529_11536.call(null,args__8264__auto___11538);
if(cljs.core.truth_(temp__4126__auto___11539)){
var error__8265__auto___11540 = temp__4126__auto___11539;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__8265__auto___11540)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11528_11535,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11538,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11540], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var i1 = G__11531;
var i2 = G__11532;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__8263__auto__,ufv___11533,output_schema11527_11534,input_schema11528_11535,input_checker11529_11536,output_checker11530_11537){
return (function (p1__11526_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__11526_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__11526_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__8263__auto__,ufv___11533,output_schema11527_11534,input_schema11528_11535,input_checker11529_11536,output_checker11530_11537))
,((function (validate__8263__auto__,ufv___11533,output_schema11527_11534,input_schema11528_11535,input_checker11529_11536,output_checker11530_11537){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__8263__auto__,ufv___11533,output_schema11527_11534,input_schema11528_11535,input_checker11529_11536,output_checker11530_11537))
,((function (validate__8263__auto__,ufv___11533,output_schema11527_11534,input_schema11528_11535,input_checker11529_11536,output_checker11530_11537){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__8263__auto__,ufv___11533,output_schema11527_11534,input_schema11528_11535,input_checker11529_11536,output_checker11530_11537))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__8263__auto__)){
var temp__4126__auto___11541 = output_checker11530_11537.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11541)){
var error__8265__auto___11542 = temp__4126__auto___11541;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__8265__auto___11542)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11527_11534,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11542], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv___11533,output_schema11527_11534,input_schema11528_11535,input_checker11529_11536,output_checker11530_11537))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema11527_11534,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11528_11535], null)));
var ufv___11548 = schema.utils.use_fn_validation;
var output_schema11543_11549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema11544_11550 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker11545_11551 = schema.core.checker.call(null,input_schema11544_11550);
var output_checker11546_11552 = schema.core.checker.call(null,output_schema11543_11549);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___11548,output_schema11543_11549,input_schema11544_11550,input_checker11545_11551,output_checker11546_11552){
return (function required_toplevel_keys(G__11547){
var validate__8263__auto__ = ufv___11548.get_cell();
if(cljs.core.truth_(validate__8263__auto__)){
var args__8264__auto___11553 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11547], null);
var temp__4126__auto___11554 = input_checker11545_11551.call(null,args__8264__auto___11553);
if(cljs.core.truth_(temp__4126__auto___11554)){
var error__8265__auto___11555 = temp__4126__auto___11554;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__8265__auto___11555)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11544_11550,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11553,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11555], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var input_schema = G__11547;
while(true){
return cljs.core.keep.call(null,((function (validate__8263__auto__,ufv___11548,output_schema11543_11549,input_schema11544_11550,input_checker11545_11551,output_checker11546_11552){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__8263__auto__,ufv___11548,output_schema11543_11549,input_schema11544_11550,input_checker11545_11551,output_checker11546_11552))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__8263__auto__)){
var temp__4126__auto___11556 = output_checker11546_11552.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11556)){
var error__8265__auto___11557 = temp__4126__auto___11556;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__8265__auto___11557)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11543_11549,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11557], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv___11548,output_schema11543_11549,input_schema11544_11550,input_checker11545_11551,output_checker11546_11552))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema11543_11549,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11544_11550], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4367__auto__ = (function iter__11566(s__11567){
return (new cljs.core.LazySeq(null,(function (){
var s__11567__$1 = s__11567;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11567__$1);
if(temp__4126__auto__){
var s__11567__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11567__$2)){
var c__4365__auto__ = cljs.core.chunk_first.call(null,s__11567__$2);
var size__4366__auto__ = cljs.core.count.call(null,c__4365__auto__);
var b__11569 = cljs.core.chunk_buffer.call(null,size__4366__auto__);
if((function (){var i__11568 = (0);
while(true){
if((i__11568 < size__4366__auto__)){
var vec__11572 = cljs.core._nth.call(null,c__4365__auto__,i__11568);
var k = cljs.core.nth.call(null,vec__11572,(0),null);
var v = cljs.core.nth.call(null,vec__11572,(1),null);
cljs.core.chunk_append.call(null,b__11569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__11574 = (i__11568 + (1));
i__11568 = G__11574;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11569),iter__11566.call(null,cljs.core.chunk_rest.call(null,s__11567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11569),null);
}
} else {
var vec__11573 = cljs.core.first.call(null,s__11567__$2);
var k = cljs.core.nth.call(null,vec__11573,(0),null);
var v = cljs.core.nth.call(null,vec__11573,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__11566.call(null,cljs.core.rest.call(null,s__11567__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4367__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4367__auto__ = (function iter__11583(s__11584){
return (new cljs.core.LazySeq(null,(function (){
var s__11584__$1 = s__11584;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11584__$1);
if(temp__4126__auto__){
var s__11584__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11584__$2)){
var c__4365__auto__ = cljs.core.chunk_first.call(null,s__11584__$2);
var size__4366__auto__ = cljs.core.count.call(null,c__4365__auto__);
var b__11586 = cljs.core.chunk_buffer.call(null,size__4366__auto__);
if((function (){var i__11585 = (0);
while(true){
if((i__11585 < size__4366__auto__)){
var vec__11589 = cljs.core._nth.call(null,c__4365__auto__,i__11585);
var k = cljs.core.nth.call(null,vec__11589,(0),null);
var v = cljs.core.nth.call(null,vec__11589,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__11586,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__11591 = (i__11585 + (1));
i__11585 = G__11591;
continue;
} else {
var G__11592 = (i__11585 + (1));
i__11585 = G__11592;
continue;
}
} else {
var G__11593 = (i__11585 + (1));
i__11585 = G__11593;
continue;
}
} else {
var G__11594 = (i__11585 + (1));
i__11585 = G__11594;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11586),iter__11583.call(null,cljs.core.chunk_rest.call(null,s__11584__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11586),null);
}
} else {
var vec__11590 = cljs.core.first.call(null,s__11584__$2);
var k = cljs.core.nth.call(null,vec__11590,(0),null);
var v = cljs.core.nth.call(null,vec__11590,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__11583.call(null,cljs.core.rest.call(null,s__11584__$2)));
} else {
var G__11595 = cljs.core.rest.call(null,s__11584__$2);
s__11584__$1 = G__11595;
continue;
}
} else {
var G__11596 = cljs.core.rest.call(null,s__11584__$2);
s__11584__$1 = G__11596;
continue;
}
} else {
var G__11597 = cljs.core.rest.call(null,s__11584__$2);
s__11584__$1 = G__11597;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4367__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___11620 = schema.utils.use_fn_validation;
var output_schema11598_11621 = schema.core.Any;
var input_schema11599_11622 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker11600_11623 = schema.core.checker.call(null,input_schema11599_11622);
var output_checker11601_11624 = schema.core.checker.call(null,output_schema11598_11621);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___11620,output_schema11598_11621,input_schema11599_11622,input_checker11600_11623,output_checker11601_11624){
return (function compose_schemata(G__11602,G__11603){
var validate__8263__auto__ = true;
if(validate__8263__auto__){
var args__8264__auto___11625 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11602,G__11603], null);
var temp__4126__auto___11626 = input_checker11600_11623.call(null,args__8264__auto___11625);
if(cljs.core.truth_(temp__4126__auto___11626)){
var error__8265__auto___11627 = temp__4126__auto___11626;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__8265__auto___11627)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11599_11622,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11625,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11627], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var G__11614 = G__11602;
var vec__11616 = G__11614;
var i2 = cljs.core.nth.call(null,vec__11616,(0),null);
var o2 = cljs.core.nth.call(null,vec__11616,(1),null);
var G__11615 = G__11603;
var vec__11617 = G__11615;
var i1 = cljs.core.nth.call(null,vec__11617,(0),null);
var o1 = cljs.core.nth.call(null,vec__11617,(1),null);
var G__11614__$1 = G__11614;
var G__11615__$1 = G__11615;
while(true){
var vec__11618 = G__11614__$1;
var i2__$1 = cljs.core.nth.call(null,vec__11618,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__11618,(1),null);
var vec__11619 = G__11615__$1;
var i1__$1 = cljs.core.nth.call(null,vec__11619,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__11619,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__8263__auto__){
var temp__4126__auto___11628 = output_checker11601_11624.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11628)){
var error__8265__auto___11629 = temp__4126__auto___11628;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__8265__auto___11629)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11598_11621,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11629], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv___11620,output_schema11598_11621,input_schema11599_11622,input_checker11600_11623,output_checker11601_11624))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema11598_11621,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11599_11622], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___11708 = schema.utils.use_fn_validation;
var output_schema11630_11709 = schema.core.Any;
var input_schema11631_11710 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker11632_11711 = schema.core.checker.call(null,input_schema11631_11710);
var output_checker11633_11712 = schema.core.checker.call(null,output_schema11630_11709);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712){
return (function split_schema(G__11634,G__11635){
var validate__8263__auto__ = ufv___11708.get_cell();
if(cljs.core.truth_(validate__8263__auto__)){
var args__8264__auto___11713 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11634,G__11635], null);
var temp__4126__auto___11714 = input_checker11632_11711.call(null,args__8264__auto___11713);
if(cljs.core.truth_(temp__4126__auto___11714)){
var error__8265__auto___11715 = temp__4126__auto___11714;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__8265__auto___11715)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11631_11710,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11713,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11715], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var s = G__11634;
var ks = G__11635;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__4367__auto__ = ((function (ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712){
return (function iter__11672(s__11673){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712){
return (function (){
var s__11673__$1 = s__11673;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11673__$1);
if(temp__4126__auto__){
var s__11673__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11673__$2)){
var c__4365__auto__ = cljs.core.chunk_first.call(null,s__11673__$2);
var size__4366__auto__ = cljs.core.count.call(null,c__4365__auto__);
var b__11675 = cljs.core.chunk_buffer.call(null,size__4366__auto__);
if((function (){var i__11674 = (0);
while(true){
if((i__11674 < size__4366__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__4365__auto__,i__11674);
cljs.core.chunk_append.call(null,b__11675,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4367__auto__ = ((function (i__11674,in_QMARK_,c__4365__auto__,size__4366__auto__,b__11675,s__11673__$2,temp__4126__auto__,ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712){
return (function iter__11692(s__11693){
return (new cljs.core.LazySeq(null,((function (i__11674,in_QMARK_,c__4365__auto__,size__4366__auto__,b__11675,s__11673__$2,temp__4126__auto__,ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712){
return (function (){
var s__11693__$1 = s__11693;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11693__$1);
if(temp__4126__auto____$1){
var s__11693__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11693__$2)){
var c__4365__auto____$1 = cljs.core.chunk_first.call(null,s__11693__$2);
var size__4366__auto____$1 = cljs.core.count.call(null,c__4365__auto____$1);
var b__11695 = cljs.core.chunk_buffer.call(null,size__4366__auto____$1);
if((function (){var i__11694 = (0);
while(true){
if((i__11694 < size__4366__auto____$1)){
var vec__11698 = cljs.core._nth.call(null,c__4365__auto____$1,i__11694);
var k = cljs.core.nth.call(null,vec__11698,(0),null);
var v = cljs.core.nth.call(null,vec__11698,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__11695,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__11716 = (i__11694 + (1));
i__11694 = G__11716;
continue;
} else {
var G__11717 = (i__11694 + (1));
i__11694 = G__11717;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11695),iter__11692.call(null,cljs.core.chunk_rest.call(null,s__11693__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11695),null);
}
} else {
var vec__11699 = cljs.core.first.call(null,s__11693__$2);
var k = cljs.core.nth.call(null,vec__11699,(0),null);
var v = cljs.core.nth.call(null,vec__11699,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11692.call(null,cljs.core.rest.call(null,s__11693__$2)));
} else {
var G__11718 = cljs.core.rest.call(null,s__11693__$2);
s__11693__$1 = G__11718;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__11674,in_QMARK_,c__4365__auto__,size__4366__auto__,b__11675,s__11673__$2,temp__4126__auto__,ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712))
,null,null));
});})(i__11674,in_QMARK_,c__4365__auto__,size__4366__auto__,b__11675,s__11673__$2,temp__4126__auto__,ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712))
;
return iter__4367__auto__.call(null,s);
})()));

var G__11719 = (i__11674 + (1));
i__11674 = G__11719;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11675),iter__11672.call(null,cljs.core.chunk_rest.call(null,s__11673__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11675),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__11673__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4367__auto__ = ((function (in_QMARK_,s__11673__$2,temp__4126__auto__,ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712){
return (function iter__11700(s__11701){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__11673__$2,temp__4126__auto__,ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712){
return (function (){
var s__11701__$1 = s__11701;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__11701__$1);
if(temp__4126__auto____$1){
var s__11701__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11701__$2)){
var c__4365__auto__ = cljs.core.chunk_first.call(null,s__11701__$2);
var size__4366__auto__ = cljs.core.count.call(null,c__4365__auto__);
var b__11703 = cljs.core.chunk_buffer.call(null,size__4366__auto__);
if((function (){var i__11702 = (0);
while(true){
if((i__11702 < size__4366__auto__)){
var vec__11706 = cljs.core._nth.call(null,c__4365__auto__,i__11702);
var k = cljs.core.nth.call(null,vec__11706,(0),null);
var v = cljs.core.nth.call(null,vec__11706,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__11703,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__11720 = (i__11702 + (1));
i__11702 = G__11720;
continue;
} else {
var G__11721 = (i__11702 + (1));
i__11702 = G__11721;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11703),iter__11700.call(null,cljs.core.chunk_rest.call(null,s__11701__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11703),null);
}
} else {
var vec__11707 = cljs.core.first.call(null,s__11701__$2);
var k = cljs.core.nth.call(null,vec__11707,(0),null);
var v = cljs.core.nth.call(null,vec__11707,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__11700.call(null,cljs.core.rest.call(null,s__11701__$2)));
} else {
var G__11722 = cljs.core.rest.call(null,s__11701__$2);
s__11701__$1 = G__11722;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__11673__$2,temp__4126__auto__,ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712))
,null,null));
});})(in_QMARK_,s__11673__$2,temp__4126__auto__,ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712))
;
return iter__4367__auto__.call(null,s);
})()),iter__11672.call(null,cljs.core.rest.call(null,s__11673__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712))
,null,null));
});})(ks__$1,validate__8263__auto__,ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712))
;
return iter__4367__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__8263__auto__)){
var temp__4126__auto___11723 = output_checker11633_11712.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11723)){
var error__8265__auto___11724 = temp__4126__auto___11723;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__8265__auto___11724)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11630_11709,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11724], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv___11708,output_schema11630_11709,input_schema11631_11710,input_checker11632_11711,output_checker11633_11712))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema11630_11709,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11631_11710], null)));
var ufv___11755 = schema.utils.use_fn_validation;
var output_schema11725_11756 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema11726_11757 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker11727_11758 = schema.core.checker.call(null,input_schema11726_11757);
var output_checker11728_11759 = schema.core.checker.call(null,output_schema11725_11756);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___11755,output_schema11725_11756,input_schema11726_11757,input_checker11727_11758,output_checker11728_11759){
return (function sequence_schemata(G__11729,G__11730){
var validate__8263__auto__ = ufv___11755.get_cell();
if(cljs.core.truth_(validate__8263__auto__)){
var args__8264__auto___11760 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__11729,G__11730], null);
var temp__4126__auto___11761 = input_checker11727_11758.call(null,args__8264__auto___11760);
if(cljs.core.truth_(temp__4126__auto___11761)){
var error__8265__auto___11762 = temp__4126__auto___11761;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__8265__auto___11762)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema11726_11757,new cljs.core.Keyword(null,"value","value",305978217),args__8264__auto___11760,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11762], null));
} else {
}
} else {
}

var o__8266__auto__ = (function (){var G__11746 = G__11729;
var vec__11748 = G__11746;
var i1 = cljs.core.nth.call(null,vec__11748,(0),null);
var o1 = cljs.core.nth.call(null,vec__11748,(1),null);
var G__11747 = G__11730;
var vec__11749 = G__11747;
var k = cljs.core.nth.call(null,vec__11749,(0),null);
var vec__11750 = cljs.core.nth.call(null,vec__11749,(1),null);
var i2 = cljs.core.nth.call(null,vec__11750,(0),null);
var o2 = cljs.core.nth.call(null,vec__11750,(1),null);
var G__11746__$1 = G__11746;
var G__11747__$1 = G__11747;
while(true){
var vec__11751 = G__11746__$1;
var i1__$1 = cljs.core.nth.call(null,vec__11751,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__11751,(1),null);
var vec__11752 = G__11747__$1;
var k__$1 = cljs.core.nth.call(null,vec__11752,(0),null);
var vec__11753 = cljs.core.nth.call(null,vec__11752,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__11753,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__11753,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__11754 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__11754,(0),null);
var unused = cljs.core.nth.call(null,vec__11754,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__8263__auto__)){
var temp__4126__auto___11763 = output_checker11728_11759.call(null,o__8266__auto__);
if(cljs.core.truth_(temp__4126__auto___11763)){
var error__8265__auto___11764 = temp__4126__auto___11763;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__8265__auto___11764)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema11725_11756,new cljs.core.Keyword(null,"value","value",305978217),o__8266__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__8265__auto___11764], null));
} else {
}
} else {
}

return o__8266__auto__;
});})(ufv___11755,output_schema11725_11756,input_schema11726_11757,input_checker11727_11758,output_checker11728_11759))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema11725_11756,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema11726_11757], null)));

//# sourceMappingURL=schema.js.map?rel=1421546168685