import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngResource from 'angular-resource';

angular
    .module('app', [uiRouter, ngResource])
    .config(configAppRouter);

function configAppRouter($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            template: ` 
                        <aside>
                           <button type="button" ui-sref="login">Login</button>
                           <button type="button" ui-sref="register">Register</button>
                        </aside>
                        <div id="content">
                            <articles articles="$resolve.articles" type="guest"></articles>
                        </div>
                      `,
            resolve: {
                articles: function (articlesResourceService) {
                    return articlesResourceService.query();
                }
            }
        })
        .state('admin', {
            url: '/admin',
            template: ` 
                        <div ui-view>
                            <aside>
                                <h1 class="user-name">You are logged.</h1>
                                <form action="/auth/logout">
                                    <button type="submit">Logout</button>
                                </form>
                               <button type="button" ui-sref="admin.add">Add News</button>
                            </aside>
                            <div id="content">
                                <articles articles="$resolve.articles" type="admin"></articles>
                            </div>
                        </div> 
                      `,
            resolve: {
                articles: function (articlesResourceService) {
                    return articlesResourceService.query();
                }
            }
        })
        .state('admin.add', {
            url: '/add',
            template: `<adding-form type="save"></adding-form>`
        })
        .state('admin.edit', {
            url: '/admin/edit/:id',
            template: `<adding-form article="$resolve.article" type="edit"></adding-form>`,
            resolve: {
                article: function (articlesResourceService, $stateParams) {
                    return articlesResourceService.get({
                        id: $stateParams['id']
                    });
                }
            }
        })
        .state('login', {
            url: '/login',
            template: `<login></login>`
        })
        .state('register', {
            url: '/register',
            template: `<register></register>`
        });
}