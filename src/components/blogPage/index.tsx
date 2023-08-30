import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux";
import Blog from "../../redux/blog/blog.reducer";

type Props = {

  //mapStateToProps
  article: typeof Blog.initialState.article
}

class BlogPage extends React.Component<Props> {

  render() {
    const { title, description } = this.props.article;

    return <div>
      <h1>{title}</h1>

      <p>{description}</p>
    </div>
  }
}

const mapStateToProps = (state: RootState) => ({
  article: state.blog.article
})


export default connect(mapStateToProps)(BlogPage);