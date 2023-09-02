import React from "react";
import s from "./index.module.less";
import { Link } from "react-router-dom";
import { Routes } from "../../routes";

interface Props {
  title: string;
  description: string;
}

class BlogItemMini extends React.Component<Props> {

  render() {
    const { title, description } = this.props;

    return <Link to={`${Routes.blog}/${title}`} className={s.blogItemMini}>
      <p>{title}</p>
      <p>{description}</p>
    </Link>
  }
}

export default BlogItemMini;