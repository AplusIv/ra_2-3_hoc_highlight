/* eslint-disable react/prop-types */

import withHighlight from "./withHighlight"

const Article = (props) => {
  return (
    <div className="item item-article">
        <h3><a href="#">{props.title}</a></h3>
        <p className="views">Прочтений: {props.views}</p>
    </div>
)
}

// export default Article
export const ArticleWithHighlight = withHighlight(Article);