angular
    .module('app')
    .controller('Articles', Articles);

function Articles(articlesService) {
    let $ctrl = this;
    $ctrl.index = 0;
    Object.assign($ctrl, articlesService);
}
