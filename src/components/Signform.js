import React from 'react';
import Form from './Form';
import "./Signform.css";


const Signform = () => {
    return (
        <div className=" container signform">
        <div className="row">
            <div className=" col form">
                <Form />
            </div>
            <div className="col image">
                <img src="https://images.pexels.com/photos/1841125/pexels-photo-1841125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="car" />
            </div>
        </div>
        </div>
    )
}

export default Signform
