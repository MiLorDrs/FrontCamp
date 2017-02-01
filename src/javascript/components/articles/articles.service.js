angular
    .module('app')
    .service('articlesService', articlesService);

function articlesService($state, articlesResourceService) {

    this.deleteArticle = deleteArticle;

    function deleteArticle(id) {
        if (confirm('Do you really want to delete this news?')) {
            articlesResourceService.delete({id: id}, function () {
                $state.reload();
            });
        }
    }
}
