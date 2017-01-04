'use strict';

import './../stylesheets/news.scss';
import NewsModel from './news.model';
import NewsViewProxy from './news.proxy';
import NewsView from './news.view';
import EventObserver from './event.observer';

const API_KEY = "41e8dfc6eda74d9fa9b83ad2fa2ccf5b";
const URL_START = "https://newsapi.org/v1/articles?source=";

// [pattern] MVC: Controller
export default class NewsController {
    constructor() {
        this.newsView = new NewsView();
        this.newsModel = new NewsModel();
        this.newsViewProxy = new NewsViewProxy();
        let eventObserver = new EventObserver();
        eventObserver.subscribe('loadNews', source => {
            this.loadNews(source);
        });
        this.newsView.setListeners(eventObserver);
    }

    loadNews(soure = "bbc-news") {
        fetch(this.buildUrl(soure))
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
                this.newsModel.setNews(data.articles);
                this.newsViewProxy.renderHtml(this.newsModel.getNews());
            })
            .catch(error => {
                console.log(error);
            });
    }

    buildUrl(source) {
        return `${URL_START}${source}&apiKey=${API_KEY}`;
    }

    // [pattern] Singleton
    static getInstance() {
        if (!NewsController.instance) {
            NewsController.instance = new NewsController();
        }
        return NewsController.instance;
    }
}