class NewsView {
  constructor(model, api) {
    this.model = model;
    this.api = api;
    this.serchButtonEl = document.querySelector('#serch-button');
    this.serchButtonEl.addEventListener('click', () => {
      console.log('click');
      const fieldEl = document.querySelector('#serch-field');
      this.api.loadArticles(fieldEl.value, (data) => {
        this.model.setArticles(data);
        this.displayArticle()
      });
    });
  }

  displayArticle() {
    const mainContainerDivEl = document.querySelector('#main-container');
    mainContainerDivEl.innerHTML = null;
    this.model.getArticles().forEach(article => {
      const newDivEl = document.createElement('div')
      const newAEl = document.createElement('a')
      newAEl.innerHTML = article.fields.headline;
      newAEl.href = article.webUrl;
      newDivEl.append(newAEl); 
      const newImgEl = document.createElement('img');
      newImgEl.src = article.fields.thumbnail;
      const newBrEl = document.createElement('br');
      newDivEl.append(newBrEl);
      newDivEl.append(newImgEl);
      mainContainerDivEl.append(newDivEl);
    });
  }
}

module.exports = NewsView;