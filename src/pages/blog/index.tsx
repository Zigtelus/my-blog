import React from "react";
import "./index.less";
import BlogItemMini from "../../components/blogItemMini";


const data = [
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  },
  {
    title: "title",
    description: "description"
  }
]

class Blog extends React.Component {

  render() {
    return <div className="blog">
      {
        data.map(item => <BlogItemMini title={item.title} description={item.description} />)
      }

    </div>
  }
}

export default Blog;