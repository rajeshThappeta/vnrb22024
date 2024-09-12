import React from 'react'

function Product(props) { //{ prodObj : {......} }
    console.log(props)
  return (
    <div className='card text-center p-4'>
        <img src={props.prodObj.image} width="180px" height="220" alt="" className='d-block mx-auto' /> 
        <div className="card-body">
            <p className="lead fs-2">{props.prodObj.title}</p>
            <p className="lead">{props.prodObj.category}</p>
            <p className="lead fs-3">{props.prodObj.price}</p>
        </div>
    </div>
  )
}

export default Product