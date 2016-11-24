'use strict';
document.addEventListener('DOMContentLoaded', function () {
    const API_KEY = "41e8dfc6eda74d9fa9b83ad2fa2ccf5b";
    const URL_START = "https://newsapi.org/v1/articles?source=";

    let buildUrl = (source) => `${URL_START}${source}&apiKey=${API_KEY}`;

    let loadNews = (soure = "bbc-news") => {
        fetch(buildUrl(soure))
            .then(response => {
                if (response.ok) {
                    return Promise.resolve(response)
                } else {
                    return Promise.reject(new Error(response.statusText))
                }
            })
            .then(response => {
                return response.json();
            })
            .then(data => {
                let content = document.getElementById("content");
                content.innerHTML = "";
                for (let item of data.articles) {
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

            })
            .catch(error => {
                console.log(error);
            });
    };

    loadNews();

    document.getElementById("bbcNews").addEventListener("click", function (e) {
        loadNews("bbc-news");
    }, false);
    document.getElementById("googleNews").addEventListener("click", function (e) {
        loadNews("google-news");
    }, false);
    document.getElementById("mtvNews").addEventListener("click", function (e) {
        loadNews("mtv-news");
    }, false);


}, false);