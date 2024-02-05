import React from 'react'
import ChildComponent from './17ChildComponent'


const StateLiftingUp = () => {

  function getData(data) {
    console.log(data);
  }

  return (
    <>
      <ChildComponent getData = {getData}/>
    </>
  )
}

export default StateLiftingUp
