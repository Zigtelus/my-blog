import React from "react";
import { connect } from "react-redux";

import { RootState } from "../../redux";
import { loadData } from "../../redux/rikmorty/rikmorty.action";


type Props = {
  // свойства Props
  loadData: () => void;
  targetCharacter: string;
  characters: string[];
};

class Rikmorty extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.hundleFetch = this.hundleFetch.bind(this);
  }

  hundleFetch() {
    this.props.loadData()
  }

  render() {
    const { characters, targetCharacter } = this.props;
    const { hundleFetch } = this;

    const character: any = characters.find((character: any) =>
      character.name === targetCharacter)

    return <div>

      <button
        onClick={hundleFetch}
      >fetch</button>

      {
        !!targetCharacter &&
        <div style={{ margin: '10px 0' }}>
          {
            !!character ?
              character.name :
              'не найдено'
          }
        </div>
      }

      {
        characters.map((hero: any, index) => <div key={index}>
          {hero.name}
        </div>)
      }

    </div>
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    targetCharacter: state.stringer.string,
    characters: state.rikmorty.characters
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadData: () => dispatch(loadData),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rikmorty);