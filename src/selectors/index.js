import { createSelector } from 'reselect';

const filterGetter = state => state.filter
const articlesGetter = state => state.articles
const commentsGetter = (state, props) => state.comments
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(filterGetter, articlesGetter, (filter, articles) => {
  const {selected, dateRange: {from, to}} = filter
  return articles.filter(article => {
    const published = Date.parse(article.date)
    return(!selected.length || selected.includes(article.id)) &&
      (!from || !to || (published > from && published < to))
  })
})

export const commentSelectorFactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
  return comments[id]
})