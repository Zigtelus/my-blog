import React, { RefObject } from "react";
import { connect } from "react-redux";

import { heroNameAction } from "../../redux/name/name.actions";


type Props = {
  // свойства Props
  increment: (data: any) => void;
};

class Name extends React.Component<Props> {
  private myRef: RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);
    this.hundlePlusString = this.hundlePlusString.bind(this);
    this.myRef = React.createRef();
  }

  hundlePlusString() {
    this.props.increment(this.myRef.current?.value);
  }

  render() {
    const { myRef, hundlePlusString } = this;

    return <div>
      <h2>Name</h2>
      <input
        style={{ width: '200px' }}
        placeholder="введите полное имя героя"
        ref={myRef}
        type="text"
      />
      <button
        onClick={hundlePlusString}
      >string +</button>
    </div>
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: (value: string) =>
      dispatch(heroNameAction(value)),
  };
};

export default connect(null, mapDispatchToProps)(Name);