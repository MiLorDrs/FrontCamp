angular
    .module('app')
    .controller('AddingForm', AddingForm);

function AddingForm(addingFormService) {
    let $ctrl = this;
    Object.assign($ctrl, addingFormService);
}
