describe('Articles Resource Service (createSpy example)', function () {

    let mockArticlesResourceService, articlesServiceObj;

    beforeEach(angular.mock.module('app'));
    beforeEach(function () {
        angular.mock.module(function ($provide) {
            $provide.service('articlesResourceService', function () {
                this.delete = jasmine.createSpy('delete');
            });
        });
    });

    beforeEach(inject(function (articlesResourceService, articlesService) {
        mockArticlesResourceService = articlesResourceService;
        articlesServiceObj = articlesService;
    }));

    it('should run Delete from resource if deleteArticle called', function () {

        spyOn(window, 'confirm').and.returnValue(true);
        articlesServiceObj.deleteArticle();
        expect(mockArticlesResourceService.delete).toHaveBeenCalled();
    });

});