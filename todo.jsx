// export default function Todo({task}){
//     return(
//         <li>Task : {task}</li>
//     )
// }



// conditional rendering****************************************
// export default function Todo({ task, isDone }) {

//     if (isDone === true){
//         return <li>Finished : {task} </li>;
//     }else{
//         return <li>work on : {task} </li>; 
//     }
// }


// consditional rendering er option 2 ************************

// export default function Todo({ task, isDone }) {

//     if (isDone){
//         return <li>Finished : {task} </li>;
//     }
//     return <li>work on : {task} </li>; 
// }


// conditional renderinf option 3  by ternary operator ****************************
// export default function Todo({ task, isDone }) {

//     return (
//         <li>{isDone ? 'Finished' : "Work on "} : {task} </li>
//     )
// }


// Conditional rendering option 4 : &&  **********************************
// export default function Todo({task, isDone}){
//     return(
//         <li> {task} {isDone && ': Done'}</li>
//     )
// }


//  Conditional rendering option 5 : ||  **********************************
// export default function Todo({task, isDone}){
//     return(
//         <li> {task} {isDone || ': Do it'}</li>
//     )
// }


// conditional option 6 : by using variable

export default function Todo({ task, isDone }) {

    let listItem;
    if (isDone){
        listItem = <li>Finished : {task} </li>;
    }
    else{
        listItem = <li>work on : {task} </li>; 
    }
    return listItem;
}

