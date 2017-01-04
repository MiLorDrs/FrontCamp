'use strict';
import NewsView from './news.view';

// [pattern] Proxy
export default class NewsViewProxy extends NewsView {
    renderHtml(news) {
        document.getElementById("content").setAttribute("class", "background");
        super.renderHtml(news);
    }
}