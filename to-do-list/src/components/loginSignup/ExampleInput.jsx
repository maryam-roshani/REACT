import React from 'react'

const ExampleInput = (props) => {
    return (
      <input type= {props.type} value = {props.value} className="p-3 shadow-md rounded-md outline-0 w-full" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={props.name} onChange={props.onChange} />
    )
}

export default ExampleInput