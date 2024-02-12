import axios from 'axios'
import React, {useState } from 'react'


const Read = (props) => {

  const [currentData, setCurrentData] = useState(null)



  axios.post("https://65c4a0e5dae2304e92e2f7a1.mockapi.io/crud_app", {
    id:props.id,
    name: props.name,
    email: props.email,
    
  }).then(function (response) {
    setCurrentData(response.data)
    console.log(response);

  }).catch(function (error) {
  });


  return (
    <div>
      <h2>Read Operation</h2>
      <table className="table  table-dark ">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>

          {currentData != null &&

            <tr>
              <th scope="col">{currentData.id}</th>
              <th scope="col">{currentData.name}</th>
              <th scope="col">{currentData.email}</th>
            </tr>
          }

        </thead>

      </table>
    </div>
  )


}

export default Read;
