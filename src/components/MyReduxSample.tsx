import * as React from 'react';
//import type {Dispatch} from "redux";
import { connect } from 'react-redux';

const INCREMENT = "INCREMENT";
const ASYNC_START = "ASYNC_START";
const ASYNC_FAIL = "ASYNC_FAIL";
const ASYNC_FINISH = "ASYNC_FINISH";

//const my_sleep = msec => new Promise(resolve => setTimeout(resolve, msec));
// function my_sleep( waitMsec:number ) {
//     var startMsec = new Date();
 
//     //  指定ミリ秒間だけループさせる（CPUは常にビジー状態）
//     while( new Date().getTime() - startMsec.getTime() < waitMsec );
// }

//import fetch from "isomorphic-fetch";
import fetch from 'node-fetch';

async function someAsyncFunction(amount) {
    const url = "https://httpbin.org/delay/2";
    const response = await fetch(url);
    const res = await JSON.stringify(response.json());
    return amount+119;
}

class SomeAPIClass {
  dispatch: (action: any) => any;
  constructor( dispatch: (action: any) => any ){
    this.dispatch = dispatch;
  }

  setAmount (amount: number) {
    //console.log( "in sync, ", amount );
    //console.log( "in sync, ", this.dispatch );
    this.dispatch( {type: INCREMENT, amount: amount} );
  }
  
  async asyncSetAmount(amount: number): Promise<void> {
      this.dispatch({type: ASYNC_START});
      try {
          const value = await someAsyncFunction(amount );
          this.dispatch({type: INCREMENT, amount: value});
      } catch (err) {
          console.log("erroror");
          this.dispatch({type: ASYNC_FAIL});
      } finally {
          console.log("finish");          
          this.dispatch({type: ASYNC_FINISH});
      }
  }
  
  // async asyncSetAmount(amount: number): Promise<void> {
  //   this.dispatch( {type: INCREMENT, amount: amount} );
  // }
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

type MyStates = {};
type MyProps = {
  count: number;
  actions: SomeAPIClass;
};

class _MyComponent extends React.Component<MyProps, MyStates> {
  constructor(props){
    super(props);
  }

  increment( c: number ){
    this.props.actions.setAmount( this.props.count + c )
  }

  render() {
    return (
      <div>
        <p>{`count: ${this.props.count}`}</p>
        <button onClick={() => this.increment(3)}>Increment 3</button>
        <button onClick={() => this.props.actions.asyncSetAmount(2)}>async Increment 2</button>
      </div>
    );
  }
};

// myComp をキーとしてデータを取り出す.
const mapStateToProps = (state, oldProps) => {
  //console.log("print by mapStateToProps, state, oldProps", state, oldProps );
  return { count: state.myComp.amount };
};

const mapDispatchToProps = (dispatch: (action: any) => any ) => {
  return {actions: new SomeAPIClass(dispatch) };
};


const MyComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(_MyComponent);

export default MyComponent;
