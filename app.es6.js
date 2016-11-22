'use strict';

document.addEventListener('DOMContentLoaded', function () {
    var API_KEY = "41e8dfc6eda74d9fa9b83ad2fa2ccf5b";
    var URL_START = "https://newsapi.org/v1/articles?source=";

    var buildUrl = function buildUrl(source) {
        return '' + URL_START + source + '&apiKey=' + API_KEY;
    };

    var loadNews = function loadNews() {
        var soure = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "bbc-news";

        fetch(buildUrl(soure)).then(function (response) {
            if (response.ok) {
                return Promise.resolve(response);
            } else {
                return Promise.reject(new Error(response.statusText));
            }
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            var content = document.getElementById("content");
            content.innerHTML = "";
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = data.articles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;
                    var author = item.author,
                        description = item.description,
                        publishedAt = item.publishedAt,
                        url = item.url,
                        title = item.title,
                        urlToImage = item.urlToImage;

                    publishedAt = new Date(publishedAt).toLocaleString();

                    var template = '\n                <article>\n                    <div class="block-header">\n                        <a class="link" href="' + url + '">\n                            <h3 class="title">' + title + '</h3>\n                        </a>\n                        <span class="author">' + author + '</span>\n                        <span class="published"> at:' + publishedAt + '</span>\n                    </div>\n                    <div class="block-content">\n                        <h4 class="description">' + description + '</h4>\n                        <img class="image" src="' + urlToImage + '">\n                     </div>\n                </article>';
                    content.innerHTML += template;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }).catch(function (error) {
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
