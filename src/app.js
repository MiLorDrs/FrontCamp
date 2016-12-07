import './../stylesheets/buttons.scss';
import task from './task.json';
console.log(task);
import image from './wp.png';
console.log(image);

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("getNews").addEventListener("click", function (e) {
        require(['./news.controller'], function (NewsController) {
            let newsController = NewsController.default.getInstance();
            newsController.loadNews();
        });
    }, false);
}, false);