'use strict';
import NewsView from './news.view';

// [pattern] Proxy
export default class NewsViewProxy extends NewsView {
    renderHtml(news) {
        let content = document.getElementById("content").setAttribute("class", "background");
        super.renderHtml(news);
    }
}