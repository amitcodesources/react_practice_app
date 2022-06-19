import React from 'react';
import { legacy_createStore as createStore } from 'redux'

function BankTransaction(props) {
    var intialValue=0

    //reducer

      const balanceReduce=(state=intialValue,action)=>{
          // console.log("reduce called")
          // console.log("action",action.type)
          switch(action.type){

            case "Deposit":
                  return state=state+200;
            case "withdraw":
                 return state=state-200;
            case "default":
                return state;

          }
        // if(action.type==='Deposit'){
        //     return state=state+200;
        // }
        // else if(action.type==='withdraw'){
        //     return state=state-200;
        // }

      }
    


          // store

          var store= createStore(balanceReduce)


          function deposit(){
              console.log("store",store.getState())
              store.dispatch({type:"Deposit"})
              console.log("store",store.getState())
          }
          
          function withdraw(){
              console.log("store",store.getState())
              store.dispatch({type:"withdraw"})
              console.log("store",store.getState())
          }

    //    const balenceReducer=(state=intialValue,action)=>{
    //          console.log("reducer called")
    //          console.log("action",action)
    //        switch(action.type){

    //         case "Deposit":
    //            return state=state+1000
    //         case "withdrow":
    //            return state=state-1000


    //        }


    //    }


    
//store

//   var store= createStore(balenceReducer)

//   // dispatch
//   console.log("store",store.getState())
//   store.dispatch({type:"Deposit"})
//   console.log("store",store.getState())
//   store.dispatch({type:"Deposit"})
//   console.log("store",store.getState())
//   store.dispatch({type:"Deposit"})
//   console.log("store",store.getState())
//   store.dispatch({type:"withdrow"})
//   console.log("store",store.getState())
     return (
        <div className='container text-center'>
            Redux demo<br/>
            <button className='m-3' onClick={deposit}>Deposit</button>
            <button onClick={withdraw}>Withdraw</button>
        </div>
    );
}

export default BankTransaction;