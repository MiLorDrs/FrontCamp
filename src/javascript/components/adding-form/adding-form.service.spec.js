describe('Articles Resource Service', function () {

    let $httpBackend, addingFormService, $state;

    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function ($injector, _addingFormService_, _$state_) {

        $httpBackend = $injector.get('$httpBackend');
        addingFormService = _addingFormService_;
        $state = _$state_;

        $httpBackend.whenPOST('/api/articles').respond();
        $httpBackend.whenPUT('/api/articles').respond();
        $httpBackend.whenGET('/api/articles').respond();
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should go to admin after saving and confirm', function () {
        spyOn(window, 'confirm').and.returnValue(true);
        addingFormService.saveArticle();
        $httpBackend.expectPOST('/api/articles');
        $httpBackend.flush();
        expect($state.current.url).toEqual('/admin');
    });

    it('should go to admin after updating and confirm', function () {
        spyOn(window, 'confirm').and.returnValue(true);
        addingFormService.editArticle();
        $httpBackend.expectPUT('/api/articles');
        $httpBackend.flush();
        expect($state.current.url).toEqual('/admin');
    });

    it('should not go to admin after saving without confirm', function () {
        spyOn(window, 'confirm').and.returnValue(false);
        addingFormService.saveArticle();
        $httpBackend.expectPOST('/api/articles');
        $httpBackend.flush();
        expect($state.current.url).not.toEqual('/admin');
    });

    it('should not go to admin after updating without confirm', function () {
        spyOn(window, 'confirm').and.returnValue(false);
        addingFormService.editArticle();
        $httpBackend.expectPUT('/api/articles');
        $httpBackend.flush();
        expect($state.current.url).not.toEqual('/admin');
    });


});