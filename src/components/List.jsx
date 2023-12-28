import { ArticleWithHighlight } from "./Article";
import { VideoWithHighlight } from "./Video";

const List = (props) => {
  return props.list.map(item => {
    switch (item.type) {
        case 'video':
          return (
            <VideoWithHighlight {...item}/>
          );

        case 'article':
          return (
            <ArticleWithHighlight {...item}/>
          );
    }
  });
}

export default List