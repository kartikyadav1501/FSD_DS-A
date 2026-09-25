
import React from 'react'

const Fees = () => {
  return (
    <div className="page-card">
      <h1 className="page-title">Fee Details</h1>

      <table className="fees-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Fees</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>BCA</td>
            <td>₹50,000</td>
          </tr>

          <tr>
            <td>B.Tech</td>
            <td>₹80,000</td>
          </tr>

          <tr>
            <td>MCA</td>
            <td>₹60,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Fees


