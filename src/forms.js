import React, { useRef } from 'react';
import {useFormik} from 'formik';
export default function FormValidation() {
    const formik=useFormik({
        initialValues:{
            name:"",
            age:0,
        },
        onSubmit:(values)=>{
           console.log("Name : ",values.name);  
           console.log("Age : ",values.age);   

        }
    })
    return(
        <>
        <form  onSubmit={formik.handleSubmit}  >    
                   <label htmlFor="name">Name</label>
                 <input type="text"  id="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  />
                 <br/>
              
                 <label htmlFor="age">Age</label>
                 <input type="number"  id="age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                 />
                 <br/>
                 
                 <button type="submit">Submit</button>

        </form>
        </>
    );
}