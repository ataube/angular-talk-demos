'use strict';

var voucherModule = angular.module('voucherModule', []);

voucherModule.factory('voucherService', function(){

	var codePattern = /^[a-z]{3}\.[a-z]{3}\.[a-z]{3}$/;

	var codes = [
		{ id: 'aaa.bbb.ccc', encashed: true },
		{ id: 'ddd.eee.fff', encashed: false },
		{ id: 'ggg.hhh.iii', encashed: false },
	];

	return {

		getCodes: function() {
			return codes;
		},

		getCode: function(codeId) {
			return codes.filter(function(c) {return c.id === codeId;}).shift();
		},

		addCode: function(code) {
			codes.push({id: code, encashed: false});
		},

		validate: function(code) {
			return codePattern.test(code);
		}
	};
});

function VoucherValidationController($scope, voucherService) {

	$scope.validate = function(code) {
		$scope.error = '';
		return voucherService.validate(code);
	};
}

function VoucherInputController($scope, voucherService) {

	$scope.encash = function(codeId) {

		var code = voucherService.getCode(codeId);

		if(!code) { return $scope.error = 'code not found.'; }
		if(code.encashed) { return $scope.error = 'code has already been encashed.'; }

		code.encashed = true;

	};
}

function VoucherListController($scope, voucherService) {
	$scope.codes = voucherService.getCodes();
}

function VoucherAddController($scope, voucherService) {
	
	$scope.add = function(codeId) {
		voucherService.addCode(codeId);
		$scope.newVoucherCode = "";
	};
}