import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <><div className="textheader">
          <h1>generation thailand</h1>
      </div><div className="button">
                <button><Link to='/normal'>home</Link></button>
              <button><Link to='/owner'>owner</Link></button>
          </div>
          <div className="table">
          <table>
  <tr>
    <th>Name</th>
    <th>Lastname</th>
    <th>Position</th>
    <th>Action</th>
  </tr>
  <tr>
    <td> </td>
    <td> </td>
    <td></td>
  </tr>
  <tr>
    <td>  </td>
    <td> </td>
    <td></td>
  </tr>
</table>
            </div></>
          


  )

}

export default Admin