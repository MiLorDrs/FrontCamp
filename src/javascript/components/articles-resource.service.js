angular
    .module('app')
    .factory('articlesResourceService', articlesResourceService);

function articlesResourceService($resource) {
    return $resource(
        '/api/articles/:id',
        {id: '@_id'},
        {update: {
                method: 'PUT'
            }
        });
}
