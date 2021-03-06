/*! 
* WeX5 v3 (http://www.justep.com) 
* Copyright 2015 Justep, Inc.
* Licensed under Apache License, Version 2.0 (http://www.apache.org/licenses/LICENSE-2.0) 
*/ 
define(function(require){
	var $ = require("jquery");
	var funcTree = require("$UI/work/config/work-function");

	//var justep = require("$UI/system/lib/justep");
	//var biz = require('$UI/system/lib/biz');
	//var getFuncTreeUrl = require.toUrl('$UI/demo/config/demo.function.js');
	var Util = {
			getFuncTree: function(){
				var deferred = $.Deferred();
				deferred.resolve(funcTree);
				return deferred.promise();
			}			
	};
	
	return Util;
});