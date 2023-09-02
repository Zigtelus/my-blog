import React from "react";
import "./index.less";
import BlogItemMini from "../../components/blogItemMini";


const data = [
  {
    title: "title1",
    description: "description"
  },
  {
    title: "title2",
    description: "description"
  },
  {
    title: "title3",
    description: "description"
  },
  {
    title: "title4",
    description: "description"
  },
  {
    title: "title5",
    description: "description"
  },
  {
    title: "title6",
    description: "description"
  },
  {
    title: "title7",
    description: "description"
  },
  {
    title: "title8",
    description: "description"
  },
  {
    title: "title9",
    description: "description"
  },
  {
    title: "title10",
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