import template from './articles.html';

angular
    .module('app')
    .component('articles', {
        template: template,
        controller: 'Articles',
        bindings: {
            articles: '<',
            type: '@'
        }
    });