import React from 'react'
import {data,data1,data2} from './20ContextAPI'

const Child3 = () => {
  return (
    <>
      <data.Consumer>{
        (name) =>{
            return(

                <data1.Consumer>
                    {
                        (surname) => {
                            return(
                                <data2.Consumer>
                                    {
                                    (gender) => {
                                        return(
                                            <h1>my name is {name} {surname} and my gender is {gender}</h1>
                                        )
                                    }
                                    }
                                </data2.Consumer>
                                
                            )
                        }
                    }
                </data1.Consumer>
               
            )} }
      </data.Consumer>
    </>
  )
}

export default Child3
