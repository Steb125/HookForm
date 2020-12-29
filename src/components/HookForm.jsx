import React, {useState} from 'react';

const HookForm = props => {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [cpassword, setCpass] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        setFname("");
        setLname("");
        setEmail("");
        setPass("");
        setCpass("");
    }
    return(
        <>
        <h1>Create User</h1>
        <form className="col-5 mx-auto my-5" onSubmit={handleSubmit}>    
            <div className="form group">
                <label >First Name: </label>
                <input 
                    type="text" 
                    className="form-control"
                    name = "fname"
                    value = {fname}
                    onChange={(e) => setFname(e.target.value)}
                />
                <span className="text-danger"> {fname.length > 2 ? "":"3 Characters required"} </span>
            </div>
            <div className="form group">
                <label >Last Name: </label>
                <input 
                    type="text" 
                    className="form-control"
                    name = "lname"
                    value = {lname}
                    onChange={(e) => setLname(e.target.value)}
                />
                <span className="text-danger"> {lname.length > 2 ? "":"3 Characters required"} </span>
            </div>
            <div className="form group">
                <label >Email: </label>
                <input 
                    type="text" 
                    className="form-control"
                    name = "email"
                    value = {email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <span className="text-danger"> {email.length > 4 ? "":"5 Characters required"} </span>
            </div>
            <div className="form group">
                <label >Password: </label>
                <input 
                    type="text" 
                    className="form-control"
                    name = "password"
                    value = {password}
                    onChange={(e) => setPass(e.target.value)}
                />
                <span className="text-danger"> {password.length > 7 ? "":"8 Characters required"} </span>
            </div>
            <div className="form group">
                <label >Confirm Password: </label>
                <input 
                    type="text" 
                    className="form-control"
                    name = "cpassword"
                    value = {cpassword}
                    onChange={(e) => setCpass(e.target.value)}
                />
                <span className="text-danger"> {cpassword == password ? "":"Confirm PW must match"} </span>
            </div>
            <input type="submit" value="AddUser" className="btn btn-success"/>
        </form>
        <div className= "col-5 mx-auto card">
            <div className="card-body">
                <p className="fname">Name: {fname} {lname}</p>
                <p className="email">Email: {email} </p>
                <p className="password">Password: {password}</p>

            </div>
        </div>
        </>
    );
}

export default HookForm;