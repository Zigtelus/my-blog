import React from "react";
import { connect } from "react-redux";

import { RootState } from "../../redux";
import { counterAction } from "../../redux/counter/counter.action";


type Props = {
  // свойства Props
  increment: () => void;
  decrement: () => void;
  first: number;
};

class Counter extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.hundleClickPlus = this.hundleClickPlus.bind(this);
    this.hundleClickMinus = this.hundleClickMinus.bind(this);
  }

  hundleClickPlus() {
    this.props.increment()
  }

  hundleClickMinus() {
    this.props.decrement()
  }

  render() {
    const { first } = this.props;
    const { hundleClickPlus, hundleClickMinus } = this;

    return (
      <div className="first">
        <h1>Counter</h1>
        <h2>{first}</h2>
        <button
          onClick={hundleClickPlus}
        >+</button>
        <button
          onClick={hundleClickMinus}
        >-</button>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    first: state.number.counter
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch(counterAction.INCREMENT),
    decrement: () => dispatch(counterAction.DECREMENT)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);
