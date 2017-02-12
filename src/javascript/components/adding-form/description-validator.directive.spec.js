describe('Description Validator Directive:', function () {
    let $scope, $httpBackend;

    beforeEach(angular.mock.module('app'));
    beforeEach(inject(function ($injector, _$compile_, _$rootScope_) {

        let element = angular.element(
            `<form name='form'>
                <input type='text' name='description' ng-model='description' description-validator/>
            </form>`
        );

        $scope = _$rootScope_;
        _$compile_(element)($scope);

        $httpBackend = $injector.get('$httpBackend');
        $httpBackend.whenGET('/api/articles').respond();
    }));

    it('should not pass if length is less than 20', () => {
        $scope.form.description.$setViewValue('Example');
        $scope.$digest();
        expect($scope.form.description.$valid).toBe(false);
    });

    it('should pass if length is equal or greater than 20', () => {
        $scope.form.description.$setViewValue('Example Example Example Example Example');
        $scope.$digest();
        expect($scope.form.description.$valid).toBe(true);
    });
});