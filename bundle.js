(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // newsModel.js
  var require_newsModel = __commonJS({
    "newsModel.js"(exports, module) {
      var NewsModel2 = class {
        constructor() {
          this.articles;
        }
        getArticles() {
          return this.articles;
        }
        setArticles(data) {
          this.articles = data.response.results;
        }
      };
      module.exports = NewsModel2;
    }
  });

  // newsApi.js
  var require_newsApi = __commonJS({
    "newsApi.js"(exports, module) {
      var NewsApi2 = class {
        loadArticles(serch, callback) {
          fetch(`https://content.guardianapis.com/search?q=${serch}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=test`).then((response) => response.json()).then((data) => callback(data));
        }
      };
      module.exports = NewsApi2;
    }
  });

  // newsView.js
  var require_newsView = __commonJS({
    "newsView.js"(exports, module) {
      var NewsView2 = class {
        constructor(model, api) {
          this.model = model;
          this.api = api;
          this.serchButtonEl = document.querySelector("#serch-button");
          this.serchButtonEl.addEventListener("click", () => {
            console.log("click");
            const fieldEl = document.querySelector("#serch-field");
            this.api.loadArticles(fieldEl.value, (data) => {
              this.model.setArticles(data);
              this.displayArticle();
            });
          });
        }
        displayArticle() {
          const mainContainerDivEl = document.querySelector("#main-container");
          mainContainerDivEl.innerHTML = null;
          this.model.getArticles().forEach((article) => {
            const newDivEl = document.createElement("div");
            const newAEl = document.createElement("a");
            newAEl.innerHTML = article.fields.headline;
            newAEl.href = article.webUrl;
            newDivEl.append(newAEl);
            const newImgEl = document.createElement("img");
            newImgEl.src = article.fields.thumbnail;
            const newBrEl = document.createElement("br");
            newDivEl.append(newBrEl);
            newDivEl.append(newImgEl);
            mainContainerDivEl.append(newDivEl);
          });
        }
      };
      module.exports = NewsView2;
    }
  });

  // index.js
  var NewsModel = require_newsModel();
  var NewsApi = require_newsApi();
  var NewsView = require_newsView();
  var newsModel = new NewsModel();
  var newsApi = new NewsApi();
  var newsView = new NewsView(newsModel, newsApi);
  newsApi.loadArticles("", (data) => {
    newsModel.setArticles(data);
    newsView.displayArticle();
  });
})();
