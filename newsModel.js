class NewsModel {
  constructor() {
    this.articles;
  }
  getArticles() {
    return this.articles;
  }

  setArticles(data) {
    this.articles = data.response.results;
  }
}

module.exports = NewsModel;