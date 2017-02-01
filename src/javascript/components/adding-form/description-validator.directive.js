angular
    .module('app')
    .directive('descriptionValidator', descriptionValidator);

function descriptionValidator() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function (scope, ele, attrs, ctrl) {
            ctrl.$parsers.unshift(function (value) {
                let valid;
                if (value) {
                    valid = value.length >= 20;
                    ctrl.$setValidity('shortDescription', valid);
                }
                return valid ? value : undefined;
            });
        }
    }
}
