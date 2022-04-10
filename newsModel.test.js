const NewsModel = require('./newsModel')

describe('NewsModel class', () => {
  test('getNews method returns all articles form the model', () => {
    const newsModel = new NewsModel();
    expect(newsModel.getNews()).toEqual([]);
  });

  
});