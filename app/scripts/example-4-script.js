
function VoucherController($scope) {
	'use strict';

	var codes = [
		{ id: 'aaa.bbb.ccc', encashed: true },
		{ id: 'ddd.eee.fff', encashed: false },
		{ id: 'ggg.hhh.iii', encashed: false },
	];

	var codePattern = /^[a-z]{3}\.[a-z]{3}\.[a-z]{3}$/;

	$scope.codes = codes;

	$scope.validate = function(code) {
		return codePattern.test(code);
	};

	$scope.encash = function(codeToEncash) {
		if(codePattern.test(codeToEncash)) {

			var code = codes.filter(function(c) {return c === codeToEncash;});

			if(!code) { throw new Error('code not found. '); }
			if(code.encashed) { throw new Error('code has already been encashed.'); }

			code.encashed = true;
		}
	};
}