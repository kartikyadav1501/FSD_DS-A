// import React ,{useState} from 'react'

// const Counter = () => {
//     const [count,setCount]=useState(0);
//     function inc(){
//         if(count>=10){
//             alert("Counter cannot be greater than 10")
//             return
//         }
//         setCount(count+1)
//     }
//     function dec(){
//         if(count<=0){
//             alert("Counter cannot be less than 0")
//             return
//         }
//         setCount(count-1)
//     }
//     return (
//         <div>
//             <h3>Counter App</h3>
//             <br/>
//             <button onClick={dec}>-</button>
//             <span>{count}</span>
//             <button onClick={inc}>+</button>
//         </div>
//     )
// }

// export default Counter
import React ,{useState} from 'react'

const Counter = () => {
    const [height,setHeight]=useState(100);
    const [width,setWidth]=useState(100);
    function rowi(){
        setHeight(height+10)
    }
    function rowd(){
        if(height<=0){
            alert("Counter cannot be less than 0")
            return
        }
        setHeight(height-10)
    }
    function coli(){
        setWidth(width+10)
    }
    function cold(){
        if(width<=0){
            alert("Counter cannot be less than 0")
            return
        }
        setWidth(width-10)
    }
    return (
        <div>
            <h3>Counter App</h3>
            <br/>
            <button onClick={rowi}>row+</button>
            <button onClick={rowd}>row-</button>
            <span>
                <img style={{ width: width, height: height }} src="https://th.bing.com/th/id/OIP.9VGPmrFwv5efx2jWmABMHgHaEO?w=336&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="image"/>
            </span>
            <button onClick={coli}>col+</button>
            <button onClick={cold}>col-</button>
        </div>
    )
}

export default Counter
