module.exports = function (source) {
    var sourceJSON = JSON.parse(source);
    for (let key in sourceJSON) {
        if ((typeof sourceJSON[key]) === 'number') {
            delete sourceJSON[key];
        }
    }
    return JSON.stringify(sourceJSON);
};