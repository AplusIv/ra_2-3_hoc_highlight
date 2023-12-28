/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

import New from "./New";
import Popular from "./Popular";

const withHighlight = (Component) => {
  return (props) => {
    console.log(props);
    if (props.views > 1000) {
      return <Popular {...props}>
                <Component {...props}/>
             </Popular>
    }
    if (props.views < 100) {
      return <New {...props}>
                <Component {...props}/>
            </New>
    }
    return <Component {...props}/>
  }
}

export default withHighlight;