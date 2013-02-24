
function VoucherController($scope) {
	'use strict';

	var codes = [
		{ id: 'aaa.bbb.ccc', encashed: true },
		{ id: 'ddd.eee.fff', encashed: false },
		{ id: 'ggg.hhh.iii', encashed: false },
	];

	var codePattern = /^[a-z]{3}\.[a-z]{3}\.[a-z]{3}$/;

	$scope.codes = codes;
	$scope.isValid = false;

	$scope.validate = function(code) {
		$scope.error = '';
		$scope.isValid = codePattern.test(code);
	};

	$scope.encash = function(codeId) {
		if($scope.isValid) {

			var code = codes.filter(function(c) {return c.id === codeId;}).shift();

			if(!code) { return $scope.error = 'code not found.'; }
			if(code.encashed) { return $scope.error = 'code has already been encashed.'; }

			code.encashed = true;
		}
	};
}