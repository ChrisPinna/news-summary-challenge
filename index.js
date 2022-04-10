const NewsModel = require('./newsModel');
const NewsApi = require('./newsApi');
const NewsView = require('./newsView')

const newsModel = new NewsModel();
const newsApi = new NewsApi();
const newsView = new NewsView(newsModel, newsApi);

newsApi.loadArticles('', (data) => {
  newsModel.setArticles(data);
  newsView.displayArticle();
});