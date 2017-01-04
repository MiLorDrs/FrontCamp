import './../stylesheets/buttons.scss';
// import task from './task.json';
// console.log(task);
// import image from './wp.png';
// console.log(image);

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("getNews").addEventListener("click", () => {
        require(['./news.controller'], NewsController => {
            let newsController = NewsController.default.getInstance();
            newsController.loadNews();
        });
    }, false);
}, false);