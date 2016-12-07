'use strict';

import NewsController from './news.controller';

// [pattern] MVC: Controller
export default class NewsView {
    setListeners() {
        document.getElementById("bbcNews").addEventListener("click", function (e) {
            NewsController.getInstance().loadNews("bbc-news");
        }, false);
        document.getElementById("googleNews").addEventListener("click", function (e) {
            NewsController.getInstance().loadNews("google-news");
        }, false);
        document.getElementById("mtvNews").addEventListener("click", function (e) {
            NewsController.getInstance().loadNews("mtv-news");
        }, false);
    }
    renderHtml(news) {
        let content = document.getElementById("content");
        content.innerHTML = "";
        for (let item of news) {
            let {author, description, publishedAt, url, title, urlToImage} = item;
            publishedAt = new Date(publishedAt).toLocaleString();

            let template = `
                <article>
                    <div class="block-header">
                        <a class="link" href="${url}">
                            <h3 class="title">${title}</h3>
                        </a>
                        <span class="author">${author}</span>
                        <span class="published"> at:${publishedAt}</span>
                    </div>
                    <div class="block-content">
                        <h4 class="description">${description}</h4>
                        <img class="image" src="${urlToImage}">
                     </div>
                </article>`;
            content.innerHTML += template;
        }
    }
}