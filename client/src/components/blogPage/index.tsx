import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux";
import Blog from "../../redux/blog/blog.reducer";

type Props = {
  article: typeof Blog.initialState.article;
};

class BlogPage extends Component<Props> {
  thisIsMyCopy = `

  <p class="sss">ssss</p>

  <style>
    p {
      background: black;
      color: white;
    }
  </style>

  <script>
    const qq = document.querySelector('.sss');
    qq.addEventListener("click", () => {
      console.log("console.logaaa");
    });
  </script>

  `;

  componentDidMount() {
    const scriptStart = '<script>';
    const scriptEnd = '</script>';
    const scriptContent = this.extractScriptContent(
      scriptStart,
      scriptEnd,
      this.thisIsMyCopy
    );
    this.executeScript(scriptContent);
  }

  extractScriptContent(start: string, end: string, content: string): string {
    const startIndex = content.indexOf(start);
    const endIndex = content.indexOf(end);
    return content.substring(startIndex + start.length, endIndex);
  }

  executeScript(script: string) {
    try {
      eval(script);
    } catch (error) {
      console.error("Script execution error:", error);
    }
  }

  render() {
    const { title, description } = this.props.article;

    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: this.thisIsMyCopy }}></div>
        <p>{description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  article: state.blog.article,
});

export default connect(mapStateToProps)(BlogPage);
