import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <><div className="textheader">
          <h1>generation thailand <br />
          admin page
          </h1>
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
  </tr>
  <tr>
    <td>kan  </td>
    <td> kan</td>
    <td> sad</td>
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