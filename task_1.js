import React from 'react';
function Data(){
    let form = () =>{
        let Name = document.getElementById('user').value;
        let Age = document.getElementById('user').value;
        let DOB = document.getElementById('user').value;
        let Gender = document.getElementById('user').value;
        let Phone= document.getElementById('user').value;


    }

    return(


        <>
        <center>
           <label>Name</label> <input type = "text" id="user" name="user"/>
           <br></br>
           <label>Age</label> <input type = "number" id="user"/>
           <br></br>
           <label>DOB</label> <input type = "date" id ="user"/>
           <br></br>
           <label>Gender</label> <input type ="text" id ="user"/>
           <br></br>
           <label>Phone</label> <input type ="integer" id ="user"/>
        </center>
        </>


    )
}
export default Data;