import { createSelector } from 'reselect';

const filterGetter = state => state.filter
const articlesGetter = state => state.articles

export const filtratedArticlesSelector = createSelector(filterGetter, articlesGetter, (filter, articles) => {
  const {selected, dateRange: {from, to}} = filter
  console.log('11')
  return articles.filter(article => {
    const published = Date.parse(article.date)
    return(!selected.length || selected.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
  })
})