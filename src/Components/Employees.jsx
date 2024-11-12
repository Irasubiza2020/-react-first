import React from 'react'

const Employees = (props) => {
  return (
    <>
    <h3>Employees   {props.name}</h3>
    <p>{props.role ? props.role:"no role"}</p>
    </>
  )
}
export default Employees