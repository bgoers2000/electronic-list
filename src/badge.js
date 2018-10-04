import React from 'react'

export const Badge = (props) => {
  var favColor = {'backgroundColor':props.color,'padding':100}
  return (
<div className='col-md-3'>
  <div className="card" style={{marginTop:20}}>
    <div style={favColor}>
    </div>
    <div className="card-body">
      <h5 className="card-title">Hello my name is {props.name}.</h5>
      <p className="card-text">My favorite color is {props.color}!</p>
    </div>
  </div>
</div>
)}
