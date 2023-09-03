import React, { Component } from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux";
import Blog from "../../redux/blog/blog.reducer";

type Props = {
  articles: typeof Blog.initialState.article;
};

class BlogPage extends Component<Props> {

  // пример кода строки, которая содержит разметку
  thisIsMyCopy = `
    <p class="sss">ssss </p>


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

    //обозначаем начало и конец части, которую надо вырезать
    const scriptStart = '<script>';
    const scriptEnd = '</script>';
    const scriptContent = this.extractScriptContent(
      scriptStart,
      scriptEnd,
      this.thisIsMyCopy
    );
    this.executeScript(scriptContent);


  }

  // находит начало скрипта в строке и конец и возвращает именно скриптовую часть
  extractScriptContent(start: string, end: string, content: string): string {
    const startIndex = content.indexOf(start);
    const endIndex = content.indexOf(end);
    return content.substring(startIndex + start.length, endIndex);
  }

  //преобразование строки в код
  executeScript(script: string) {
    try {
      eval(script);
    } catch (error) {
      console.error("Script execution error:", error);
    }
  }

  render() {
    const { articles } = this.props;

    return articles.map(article =>
      <div>
        <h1>{article.title}</h1>

        {/* строке содержащая html и css преобразовывается в разметку */}
        <div dangerouslySetInnerHTML={{ __html: article.html }}></div>

        <p>{article.description}</p>
      </div>)
  }
}

const mapStateToProps = (state: RootState) => ({
  articles: state.blog.article,
});

export default connect(mapStateToProps)(BlogPage);
