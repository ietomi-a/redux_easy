import * as React from 'react';
//import type {Dispatch} from "redux";
import { connect } from 'react-redux';

const INCREMENT = "INCREMENT";
const ASYNC_START = "ASYNC_START";
const ASYNC_FAIL = "ASYNC_FAIL";
const ASYNC_FINISH = "ASYNC_FINISH";

function someAsyncFunction() {
  return "some async start";
}

class SomeAPIClass {
  dispatch: (action: any) => any;
  constructor( dispatch: (action: any) => any ){
    this.dispatch = dispatch;
  }

  syncIncrement(amount: number) {
    console.log( "in sync, ", amount );
    console.log( "in sync, ", this.dispatch );
    this.dispatch( {type: INCREMENT, amount: amount} );
  }
  async asyncIncrement(amount: number): Promise<void> {
    this.dispatch( {type: INCREMENT, amount: amount} );
  }
};

//   syncIncrement(amount: number) {
//     this.dispatch({type: INCREMENT, amount: amount})
//   }
//   async asyncIncrement(amount: number): Promise<void> {
//     this.dispatch({type: ASYNC_START});
//     try {
//       const result = await someAsyncFunction();
//       this.dispatch({type: INCREMENT, amount: amount})
//     } catch (err) {
//       this.dispatch({type: ASYNC_FAIL})
//     } finally {
//       this.dispatch({type: ASYNC_FINISH})
//     }
//   }

// }

type MyStates = { count: number; };
type MyProps = {
  count: number;
  actions: SomeAPIClass;
};

class _MyComponent extends React.Component<MyProps, MyStates> {
  constructor(props){
    super(props);
    console.log("in construct,",props);
    this.state = { count: 99 };
  }

  componentWillReceiveProps( nextProps ){
    console.log("in willReceiveprops", nextProps);
  }
  
  render() {
    return (
      <div>
        <p>{`count: ${this.state.count}`}</p>
        <button onClick={() => this.props.actions.syncIncrement(3)}>Increment 3</button>
        <button onClick={() => this.props.actions.asyncIncrement(2)}>async Increment 2</button>
      </div>
    );
  }
}


// myComp をキーとしてデータを取り出す.
const mapStateToProps = ({myComp}) => {
  console.log("print by MyreduxSample, state",  myComp );
  if( myComp ){
    return { count: myComp.amount };
  }else{
    return { count: 0 };
  }
};

const mapDispatchToProps = (dispatch: (action: any) => any ) => {
  console.log("print by MyreduxSample, dispatch", dispatch );
  return {actions: new SomeAPIClass(dispatch) };
};


const MyComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MyComponent);

export default MyComponent;
