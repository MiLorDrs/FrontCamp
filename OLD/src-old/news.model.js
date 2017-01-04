'use strict';

// [pattern] MVC: Model
export default class NewsModel {
    constructor(news) {
        this.news = news;
    }
    setNews(news) {
        this.news = news;
    }
    getNews() {
        return this.news;
    }
}