// Compiled by ClojureScript 0.0-2411
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__12042__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__12042 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__12042__delegate.call(this,m,k,f,x1,x2,xs);};
G__12042.cljs$lang$maxFixedArity = 5;
G__12042.cljs$lang$applyTo = (function (arglist__12043){
var m = cljs.core.first(arglist__12043);
arglist__12043 = cljs.core.next(arglist__12043);
var k = cljs.core.first(arglist__12043);
arglist__12043 = cljs.core.next(arglist__12043);
var f = cljs.core.first(arglist__12043);
arglist__12043 = cljs.core.next(arglist__12043);
var x1 = cljs.core.first(arglist__12043);
arglist__12043 = cljs.core.next(arglist__12043);
var x2 = cljs.core.first(arglist__12043);
var xs = cljs.core.rest(arglist__12043);
return G__12042__delegate(m,k,f,x1,x2,xs);
});
G__12042.cljs$core$IFn$_invoke$arity$variadic = G__12042__delegate;
return G__12042;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__9764__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__12052_12058 = cljs.core.seq.call(null,m);
var chunk__12053_12059 = null;
var count__12054_12060 = (0);
var i__12055_12061 = (0);
while(true){
if((i__12055_12061 < count__12054_12060)){
var vec__12056_12062 = cljs.core._nth.call(null,chunk__12053_12059,i__12055_12061);
var k_12063 = cljs.core.nth.call(null,vec__12056_12062,(0),null);
var v_12064 = cljs.core.nth.call(null,vec__12056_12062,(1),null);
var m12051_12065 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12051_12065,k_12063,f.call(null,v_12064)));

var G__12066 = seq__12052_12058;
var G__12067 = chunk__12053_12059;
var G__12068 = count__12054_12060;
var G__12069 = (i__12055_12061 + (1));
seq__12052_12058 = G__12066;
chunk__12053_12059 = G__12067;
count__12054_12060 = G__12068;
i__12055_12061 = G__12069;
continue;
} else {
var temp__4126__auto___12070 = cljs.core.seq.call(null,seq__12052_12058);
if(temp__4126__auto___12070){
var seq__12052_12071__$1 = temp__4126__auto___12070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12052_12071__$1)){
var c__4398__auto___12072 = cljs.core.chunk_first.call(null,seq__12052_12071__$1);
var G__12073 = cljs.core.chunk_rest.call(null,seq__12052_12071__$1);
var G__12074 = c__4398__auto___12072;
var G__12075 = cljs.core.count.call(null,c__4398__auto___12072);
var G__12076 = (0);
seq__12052_12058 = G__12073;
chunk__12053_12059 = G__12074;
count__12054_12060 = G__12075;
i__12055_12061 = G__12076;
continue;
} else {
var vec__12057_12077 = cljs.core.first.call(null,seq__12052_12071__$1);
var k_12078 = cljs.core.nth.call(null,vec__12057_12077,(0),null);
var v_12079 = cljs.core.nth.call(null,vec__12057_12077,(1),null);
var m12051_12080 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12051_12080,k_12078,f.call(null,v_12079)));

var G__12081 = cljs.core.next.call(null,seq__12052_12071__$1);
var G__12082 = null;
var G__12083 = (0);
var G__12084 = (0);
seq__12052_12058 = G__12081;
chunk__12053_12059 = G__12082;
count__12054_12060 = G__12083;
i__12055_12061 = G__12084;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9764__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__9764__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__12093_12099 = cljs.core.seq.call(null,m);
var chunk__12094_12100 = null;
var count__12095_12101 = (0);
var i__12096_12102 = (0);
while(true){
if((i__12096_12102 < count__12095_12101)){
var vec__12097_12103 = cljs.core._nth.call(null,chunk__12094_12100,i__12096_12102);
var k_12104 = cljs.core.nth.call(null,vec__12097_12103,(0),null);
var v_12105 = cljs.core.nth.call(null,vec__12097_12103,(1),null);
var m12092_12106 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12092_12106,f.call(null,k_12104),v_12105));

var G__12107 = seq__12093_12099;
var G__12108 = chunk__12094_12100;
var G__12109 = count__12095_12101;
var G__12110 = (i__12096_12102 + (1));
seq__12093_12099 = G__12107;
chunk__12094_12100 = G__12108;
count__12095_12101 = G__12109;
i__12096_12102 = G__12110;
continue;
} else {
var temp__4126__auto___12111 = cljs.core.seq.call(null,seq__12093_12099);
if(temp__4126__auto___12111){
var seq__12093_12112__$1 = temp__4126__auto___12111;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12093_12112__$1)){
var c__4398__auto___12113 = cljs.core.chunk_first.call(null,seq__12093_12112__$1);
var G__12114 = cljs.core.chunk_rest.call(null,seq__12093_12112__$1);
var G__12115 = c__4398__auto___12113;
var G__12116 = cljs.core.count.call(null,c__4398__auto___12113);
var G__12117 = (0);
seq__12093_12099 = G__12114;
chunk__12094_12100 = G__12115;
count__12095_12101 = G__12116;
i__12096_12102 = G__12117;
continue;
} else {
var vec__12098_12118 = cljs.core.first.call(null,seq__12093_12112__$1);
var k_12119 = cljs.core.nth.call(null,vec__12098_12118,(0),null);
var v_12120 = cljs.core.nth.call(null,vec__12098_12118,(1),null);
var m12092_12121 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12092_12121,f.call(null,k_12119),v_12120));

var G__12122 = cljs.core.next.call(null,seq__12093_12112__$1);
var G__12123 = null;
var G__12124 = (0);
var G__12125 = (0);
seq__12093_12099 = G__12122;
chunk__12094_12100 = G__12123;
count__12095_12101 = G__12124;
i__12096_12102 = G__12125;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9764__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__9764__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__12132_12136 = cljs.core.seq.call(null,ks);
var chunk__12133_12137 = null;
var count__12134_12138 = (0);
var i__12135_12139 = (0);
while(true){
if((i__12135_12139 < count__12134_12138)){
var k_12140 = cljs.core._nth.call(null,chunk__12133_12137,i__12135_12139);
var m12131_12141 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12131_12141,k_12140,f.call(null,k_12140)));

var G__12142 = seq__12132_12136;
var G__12143 = chunk__12133_12137;
var G__12144 = count__12134_12138;
var G__12145 = (i__12135_12139 + (1));
seq__12132_12136 = G__12142;
chunk__12133_12137 = G__12143;
count__12134_12138 = G__12144;
i__12135_12139 = G__12145;
continue;
} else {
var temp__4126__auto___12146 = cljs.core.seq.call(null,seq__12132_12136);
if(temp__4126__auto___12146){
var seq__12132_12147__$1 = temp__4126__auto___12146;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12132_12147__$1)){
var c__4398__auto___12148 = cljs.core.chunk_first.call(null,seq__12132_12147__$1);
var G__12149 = cljs.core.chunk_rest.call(null,seq__12132_12147__$1);
var G__12150 = c__4398__auto___12148;
var G__12151 = cljs.core.count.call(null,c__4398__auto___12148);
var G__12152 = (0);
seq__12132_12136 = G__12149;
chunk__12133_12137 = G__12150;
count__12134_12138 = G__12151;
i__12135_12139 = G__12152;
continue;
} else {
var k_12153 = cljs.core.first.call(null,seq__12132_12147__$1);
var m12131_12154 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12131_12154,k_12153,f.call(null,k_12153)));

var G__12155 = cljs.core.next.call(null,seq__12132_12147__$1);
var G__12156 = null;
var G__12157 = (0);
var G__12158 = (0);
seq__12132_12136 = G__12155;
chunk__12133_12137 = G__12156;
count__12134_12138 = G__12157;
i__12135_12139 = G__12158;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9764__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__9764__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__12165_12169 = cljs.core.seq.call(null,vs);
var chunk__12166_12170 = null;
var count__12167_12171 = (0);
var i__12168_12172 = (0);
while(true){
if((i__12168_12172 < count__12167_12171)){
var v_12173 = cljs.core._nth.call(null,chunk__12166_12170,i__12168_12172);
var m12164_12174 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12164_12174,f.call(null,v_12173),v_12173));

var G__12175 = seq__12165_12169;
var G__12176 = chunk__12166_12170;
var G__12177 = count__12167_12171;
var G__12178 = (i__12168_12172 + (1));
seq__12165_12169 = G__12175;
chunk__12166_12170 = G__12176;
count__12167_12171 = G__12177;
i__12168_12172 = G__12178;
continue;
} else {
var temp__4126__auto___12179 = cljs.core.seq.call(null,seq__12165_12169);
if(temp__4126__auto___12179){
var seq__12165_12180__$1 = temp__4126__auto___12179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12165_12180__$1)){
var c__4398__auto___12181 = cljs.core.chunk_first.call(null,seq__12165_12180__$1);
var G__12182 = cljs.core.chunk_rest.call(null,seq__12165_12180__$1);
var G__12183 = c__4398__auto___12181;
var G__12184 = cljs.core.count.call(null,c__4398__auto___12181);
var G__12185 = (0);
seq__12165_12169 = G__12182;
chunk__12166_12170 = G__12183;
count__12167_12171 = G__12184;
i__12168_12172 = G__12185;
continue;
} else {
var v_12186 = cljs.core.first.call(null,seq__12165_12180__$1);
var m12164_12187 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12164_12187,f.call(null,v_12186),v_12186));

var G__12188 = cljs.core.next.call(null,seq__12165_12180__$1);
var G__12189 = null;
var G__12190 = (0);
var G__12191 = (0);
seq__12165_12169 = G__12188;
chunk__12166_12170 = G__12189;
count__12167_12171 = G__12190;
i__12168_12172 = G__12191;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9764__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__12192){
var vec__12194 = p__12192;
var k = cljs.core.nth.call(null,vec__12194,(0),null);
var ks = cljs.core.nthnext.call(null,vec__12194,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3604__auto__ = ks;
if(and__3604__auto__){
return dissoc_in.call(null,m.call(null,k),ks);
} else {
return and__3604__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__9764__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__12203_12209 = cljs.core.seq.call(null,x);
var chunk__12204_12210 = null;
var count__12205_12211 = (0);
var i__12206_12212 = (0);
while(true){
if((i__12206_12212 < count__12205_12211)){
var vec__12207_12213 = cljs.core._nth.call(null,chunk__12204_12210,i__12206_12212);
var k_12214 = cljs.core.nth.call(null,vec__12207_12213,(0),null);
var v_12215 = cljs.core.nth.call(null,vec__12207_12213,(1),null);
var m12202_12216 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12202_12216,((typeof k_12214 === 'string')?cljs.core.keyword.call(null,k_12214):k_12214),keywordize_map.call(null,v_12215)));

var G__12217 = seq__12203_12209;
var G__12218 = chunk__12204_12210;
var G__12219 = count__12205_12211;
var G__12220 = (i__12206_12212 + (1));
seq__12203_12209 = G__12217;
chunk__12204_12210 = G__12218;
count__12205_12211 = G__12219;
i__12206_12212 = G__12220;
continue;
} else {
var temp__4126__auto___12221 = cljs.core.seq.call(null,seq__12203_12209);
if(temp__4126__auto___12221){
var seq__12203_12222__$1 = temp__4126__auto___12221;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12203_12222__$1)){
var c__4398__auto___12223 = cljs.core.chunk_first.call(null,seq__12203_12222__$1);
var G__12224 = cljs.core.chunk_rest.call(null,seq__12203_12222__$1);
var G__12225 = c__4398__auto___12223;
var G__12226 = cljs.core.count.call(null,c__4398__auto___12223);
var G__12227 = (0);
seq__12203_12209 = G__12224;
chunk__12204_12210 = G__12225;
count__12205_12211 = G__12226;
i__12206_12212 = G__12227;
continue;
} else {
var vec__12208_12228 = cljs.core.first.call(null,seq__12203_12222__$1);
var k_12229 = cljs.core.nth.call(null,vec__12208_12228,(0),null);
var v_12230 = cljs.core.nth.call(null,vec__12208_12228,(1),null);
var m12202_12231 = cljs.core.deref.call(null,m_atom__9764__auto__);
cljs.core.reset_BANG_.call(null,m_atom__9764__auto__,cljs.core.assoc_BANG_.call(null,m12202_12231,((typeof k_12229 === 'string')?cljs.core.keyword.call(null,k_12229):k_12229),keywordize_map.call(null,v_12230)));

var G__12232 = cljs.core.next.call(null,seq__12203_12222__$1);
var G__12233 = null;
var G__12234 = (0);
var G__12235 = (0);
seq__12203_12209 = G__12232;
chunk__12204_12210 = G__12233;
count__12205_12211 = G__12234;
i__12206_12212 = G__12235;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__9764__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__9833__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__9833__auto__);
} else {
var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));
throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__12236 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__12237 = cljs.core.next.call(null,ks);
m = G__12236;
ks = G__12237;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3616__auto__ = m;
if(cljs.core.truth_(or__3616__auto__)){
return or__3616__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4367__auto__ = (function iter__12246(s__12247){
return (new cljs.core.LazySeq(null,(function (){
var s__12247__$1 = s__12247;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12247__$1);
if(temp__4126__auto__){
var s__12247__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12247__$2)){
var c__4365__auto__ = cljs.core.chunk_first.call(null,s__12247__$2);
var size__4366__auto__ = cljs.core.count.call(null,c__4365__auto__);
var b__12249 = cljs.core.chunk_buffer.call(null,size__4366__auto__);
if((function (){var i__12248 = (0);
while(true){
if((i__12248 < size__4366__auto__)){
var vec__12252 = cljs.core._nth.call(null,c__4365__auto__,i__12248);
var k = cljs.core.nth.call(null,vec__12252,(0),null);
var v = cljs.core.nth.call(null,vec__12252,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__12249,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__12254 = (i__12248 + (1));
i__12248 = G__12254;
continue;
} else {
var G__12255 = (i__12248 + (1));
i__12248 = G__12255;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12249),iter__12246.call(null,cljs.core.chunk_rest.call(null,s__12247__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12249),null);
}
} else {
var vec__12253 = cljs.core.first.call(null,s__12247__$2);
var k = cljs.core.nth.call(null,vec__12253,(0),null);
var v = cljs.core.nth.call(null,vec__12253,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__12246.call(null,cljs.core.rest.call(null,s__12247__$2)));
} else {
var G__12256 = cljs.core.rest.call(null,s__12247__$2);
s__12247__$1 = G__12256;
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
return iter__4367__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__12257){
var m = cljs.core.first(arglist__12257);
var kvs = cljs.core.rest(arglist__12257);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__12258){
var m = cljs.core.first(arglist__12258);
arglist__12258 = cljs.core.next(arglist__12258);
var key_seq = cljs.core.first(arglist__12258);
arglist__12258 = cljs.core.next(arglist__12258);
var f = cljs.core.first(arglist__12258);
var args = cljs.core.rest(arglist__12258);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4367__auto__ = ((function (s){
return (function iter__12263(s__12264){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__12264__$1 = s__12264;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12264__$1);
if(temp__4126__auto__){
var s__12264__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12264__$2)){
var c__4365__auto__ = cljs.core.chunk_first.call(null,s__12264__$2);
var size__4366__auto__ = cljs.core.count.call(null,c__4365__auto__);
var b__12266 = cljs.core.chunk_buffer.call(null,size__4366__auto__);
if((function (){var i__12265 = (0);
while(true){
if((i__12265 < size__4366__auto__)){
var x = cljs.core._nth.call(null,c__4365__auto__,i__12265);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__12266,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__12267 = (i__12265 + (1));
i__12265 = G__12267;
continue;
} else {
var G__12268 = (i__12265 + (1));
i__12265 = G__12268;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12266),iter__12263.call(null,cljs.core.chunk_rest.call(null,s__12264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12266),null);
}
} else {
var x = cljs.core.first.call(null,s__12264__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__12263.call(null,cljs.core.rest.call(null,s__12264__$2)));
} else {
var G__12269 = cljs.core.rest.call(null,s__12264__$2);
s__12264__$1 = G__12269;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4367__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__12270){
var colls = cljs.core.seq(arglist__12270);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__12271__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__12272 = conj_when.call(null,coll,x);
var G__12273 = cljs.core.first.call(null,xs);
var G__12274 = cljs.core.next.call(null,xs);
coll = G__12272;
x = G__12273;
xs = G__12274;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__12271 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12271__delegate.call(this,coll,x,xs);};
G__12271.cljs$lang$maxFixedArity = 2;
G__12271.cljs$lang$applyTo = (function (arglist__12275){
var coll = cljs.core.first(arglist__12275);
arglist__12275 = cljs.core.next(arglist__12275);
var x = cljs.core.first(arglist__12275);
var xs = cljs.core.rest(arglist__12275);
return G__12271__delegate(coll,x,xs);
});
G__12271.cljs$core$IFn$_invoke$arity$variadic = G__12271__delegate;
return G__12271;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__12277__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__12276_SHARP_){
return cljs.core.apply.call(null,f,p1__12276_SHARP_,args);
}));
};
var G__12277 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12277__delegate.call(this,a,f,args);};
G__12277.cljs$lang$maxFixedArity = 2;
G__12277.cljs$lang$applyTo = (function (arglist__12278){
var a = cljs.core.first(arglist__12278);
arglist__12278 = cljs.core.next(arglist__12278);
var f = cljs.core.first(arglist__12278);
var args = cljs.core.rest(arglist__12278);
return G__12277__delegate(a,f,args);
});
G__12277.cljs$core$IFn$_invoke$arity$variadic = G__12277__delegate;
return G__12277;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__12279__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__12279 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__12279__delegate.call(this,f,arg,args);};
G__12279.cljs$lang$maxFixedArity = 2;
G__12279.cljs$lang$applyTo = (function (arglist__12280){
var f = cljs.core.first(arglist__12280);
arglist__12280 = cljs.core.next(arglist__12280);
var arg = cljs.core.first(arglist__12280);
var args = cljs.core.rest(arglist__12280);
return G__12279__delegate(f,arg,args);
});
G__12279.cljs$core$IFn$_invoke$arity$variadic = G__12279__delegate;
return G__12279;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map?rel=1421546169719