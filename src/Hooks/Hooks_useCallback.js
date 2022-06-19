import React from 'react'
var funccount = new Set();
export default function Hooks_useCallBack() {

//     const [skills, setSkills] = React.useState(['HTML', 'CSS', 'JS'], []);

//     function handleChangeinput(event){
//         event.preventdefault();
//         setSkills(event.target.value);
//     }

//     function handleAddSkills(){
//         setSkills(skills.concat(skills));
//     }

//     function handleRemoveSkills(skills){
//         setSkills(skills.filter((s) => s
//          = skills));
//     }

//   return (
//     <div>
//         <h1>useCallback Hooks Example</h1>

//         <form>
//             <input type="text" onChange={handleChangeinput}/> <br/>
//             <button type="button" onClick={handleAddSkills}>Add Skill</button>
//             <br/>
//             <SkillList skills={skills} handleRemoveSkills={handleRemoveSkills} />
//         </form>
//     </div>
//   )
        
        

        const [count, setCount] = React.useState(0)
        const [number, setNumber] = React.useState(0)

        // const incrementCounter = () => {
        //     setCount(count + 1)
        //   }
        //   const decrementCounter = () => {
        //     setCount(count - 1)
        //   }
           
        //    const incrementNumber = () => {
        //     setNumber(number + 1)
        //   }


          const incrementCounter = React.useCallback(() => {
            setCount(count + 1)
          }, [count])
          const decrementCounter = React.useCallback(() => {
            setCount(count - 1)
          }, [count])
          const incrementNumber = React.useCallback(() => {
            setNumber(number + 1)
          }, [number])
           
        funccount.add(incrementCounter);
        funccount.add(decrementCounter);
        funccount.add(incrementNumber);
        alert(funccount.size);

        return (
            <div>
              Count: {count}
              <button onClick={incrementCounter}>
                Increase counter
              </button>
              <button onClick={decrementCounter}>
                 Decrease Counter
              </button>
              <button onClick={incrementNumber}>
                increase number
              </button>
            </div>
          )

}


// const SkillList = React.memo(({
//     skills, handleRemoveSkills }) => {
//         console.log('re-rendered whenever passed state is updated');
//         return(
//             <ul>
//                 { skills.map((skills) =>(
//                     <li key={skills} onClick={()=>
//                         handleRemoveSkills(skills) }>
//                         {skills}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// )
