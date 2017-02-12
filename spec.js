import 'angular-mocks/angular-mocks';

let testsContext = require.context('./src/', true, /\.spec\.js$/);
testsContext.keys().forEach(testsContext);