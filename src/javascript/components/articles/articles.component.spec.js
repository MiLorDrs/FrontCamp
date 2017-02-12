describe('Articles Component:', function () {
    let $componentController, articles;


    beforeEach(angular.mock.module('app'));
    beforeEach(inject(function (_$componentController_) {
        $componentController = _$componentController_;
        articles = [{
            '_id': '586d034df36d286679b97896',
            'title': 'News about Politic',
            'description': 'wow, such news, great news, wow, many Politic'
        }, {
            '_id': '586d0356f36d286679b97897',
            'title': 'News about Art',
            'description': 'wow, such news, great news, wow, many Art'
        }];
    }));

    it('should correctly apply bindings', function () {

        let bindings = {
            articles: articles
        };
        let ctrl = $componentController('articles', null, bindings);

        expect(ctrl.articles).toBeDefined();
        expect(ctrl.articles.length).toBe(2);

    });

    it('should initialize index variable', function () {

        let ctrl = $componentController('articles');
        expect(ctrl.index).toBeDefined();
        expect(ctrl.index).toBe(0);

    });

    it('should assign service', function () {

        let ctrl = $componentController('articles');
        expect(ctrl.deleteArticle).toBeDefined();

    });
});