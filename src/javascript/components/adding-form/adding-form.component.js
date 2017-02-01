import template from './adding-form.html';

angular
    .module('app')
    .component('addingForm', {
        template: template,
        controller: 'AddingForm',
        bindings: {
            article: '<',
            type: '@'
        }
    });