'use strict';

// [pattern] MVC: View
export default class NewsView {
    setListeners(eventObserver) {
        document.getElementById("bbcNews").addEventListener("click", () => {
            eventObserver.publish("loadNews", "bbc-news");
        }, false);
        document.getElementById("googleNews").addEventListener("click", () => {
            eventObserver.publish("loadNews", "google-news");
        }, false);
        document.getElementById("mtvNews").addEventListener("click", () => {
            eventObserver.publish("loadNews", "mtv-news");
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