'use strict';

import './../stylesheets/news.scss';
import NewsModel from './news.model';
import NewsViewProxy from './news.proxy';
import NewsView from './news.view';

const API_KEY = "41e8dfc6eda74d9fa9b83ad2fa2ccf5b";
const URL_START = "https://newsapi.org/v1/articles?source=";
let newsView;
let newsViewProxy;
let newsModel;

// [pattern] MVC: Controller
export default class NewsController {
    constructor() {
        newsView = new NewsView();
        newsModel = new NewsModel();
        newsViewProxy = new NewsViewProxy();
        newsView.setListeners();
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
                newsModel.setNews(data.articles);
                newsViewProxy.renderHtml(newsModel.getNews());
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