describe('VoucherController', function() {
  
	var scope;

	beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      var ctrl = $controller(VoucherController, {$scope: scope});
    }));


	it('should validate a correct voucher code', function() {
		expect(scope.isValid).to.equal(false);
		scope.validate('aaa.bbb.ccc');
		expect(scope.isValid).to.equal(true);

	});

  
});