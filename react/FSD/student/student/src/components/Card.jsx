import React from 'react'

const Card = (props) => {
  return (
    <div>
        <center>
        <div style={{backgroundColor:'lightgray', textAlign:'center', border:'2px solid green', width:'400px', height:'400px'}}>
            <h4 style={{color:'red'}}>ABES STUDENT CARD</h4>
            <img src="https://th.bing.com/th/id/OIP.kj5OOtojtJhhO2XgghLgCwHaIZ?w=152&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" style={{width:'100px', height:'100px'}} ></img>
                <ul style={{listStyleType:'none'}}>
                <li>B.Tech (DS-A)</li>
                <li>Name: {props.name}</li>
                <li>Year: {props.year}</li>
            </ul>
        </div>
        </center>
    </div>
  )
}

export default Card
