import React from "react";
import './Table.css';
function Table(){
    return(
        <div>
      <h1>Report Card</h1>
        <table className="my-table">
           <tr>
            <th>Subjects</th>
            <th>Marks</th>
            <th>Grade</th>
        </tr>
        <tr>
        <td>Cloud</td>
        <td>96</td>
        <td>O</td>
        </tr>
        <tr>
        <td>Networks</td>
        <td>92</td>
        <td>O</td>
        </tr>
        <tr>
        <td>Databases</td>
        <td>84</td>
        <td>A+</td>
        </tr>





        </table>
               </div>
    
    )

}


export default Table;