angular
    .module('app')
    .service('addingFormService', addingFormService);

function addingFormService($state, articlesResourceService) {

    this.saveArticle = saveArticle;
    this.editArticle = editArticle;

    function saveArticle(article) {
        articlesResourceService.save(article, function () {
            if (confirm('Saved. Go home?')) {
                $state.go('admin', {}, {reload: true});
            }
        });
    }

    function editArticle(article) {
        articlesResourceService.update(article, function () {
            if (confirm('Updated. Go home?')) {
                $state.go('admin', {}, {reload: true});
            }
        });
    }
}
