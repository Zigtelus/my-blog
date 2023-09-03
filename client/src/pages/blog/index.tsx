import React from "react";
import "./index.less";
import BlogItemMini from "../../components/blogItemMini";
import { connect } from "react-redux";
import { RootState } from "../../redux";
import Articles from "../../redux/blog/blog.reducer";


type Props = {
  //mapStateToProps
  articles: typeof Articles.initialState.article
}

class Blog extends React.Component<Props> {

  render() {
    const { articles } = this.props

    return <div className="blog">
      {
        articles.map((article) => <BlogItemMini title={article.title} description={article.description} />)
      }

    </div>
  }
}


const mapStateToProps = (state: RootState) => ({
  articles: state.blog.article,
});

export default connect(mapStateToProps)(Blog);