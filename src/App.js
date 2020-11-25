import React from "react";
import './app.css';
import ReactDom from "react-dom";


class App extends React.Component {
    state = {
        fname: "",
        lname: "",
        birthday: "",
        job: "",
        submitButton: false,
        showButton: false,
    };
    handleInputChange = (event) => {
        //const showButton = this.state.showButton;
        //const submitButton = this.state.submitButton;
        this.setState({[event.target.name]: event.target.value, submitButton: false, showButton:false});
    }
    handleSubmitButton = (event) => {
        event.preventDefault();
        alert ("The form has been successfully submitted. ");
        this.setState({submitButton : true, fname: "",});
        

    }
    handleShowButton = (event) => {
       //const fname = this.state.fname;
       //const lname = this.state.lname;
       //const birthday = this.state.birthday;
       //const job = this.state.job;
        this.setState({
            fname: this.state.fname,
            lname: this.state.lname,
            birthday: this.state.birthday,
            job: this.state.job,
            showButton : true
        });
    }
render(){
    
    let personInfo = "";
    if (this.state.showButton === true) {
        personInfo =(
        <div>
           <h1>Your Information:</h1>
           <p>First Name: {this.state.fname}</p>
           <p>Last Name: {this.state.lname}</p>
           <p>Birthday: {this.state.birthday}</p>
           <p>Job: {this.state.job}</p>
        </div>);
    }
    return (
            <div>
                <label for="fname">First Name:</label><br/>
                <input type="text" name="fname" id="fname" onChange={this.handleInputChange}/><br/>
                <label for="lname">Last Name:</label><br/>   
                <input type="text" name="lname" id ="lname"  onChange={this.handleInputChange}/><br/>
                <label for="birthday">Birthday:</label><br/>    
                <input type="text" name="birthday" id="birthday" onChange={this.handleInputChange}/><br/>
                <label for="job">Job:</label><br/>    
                <input type="text" name="job" id="job"   onChange={this.handleInputChange}/><br/>
                <input type="submit" onClick={this.handleSubmitButton}/>
                <button onClick={this.handleShowButton} disabled={!this.state.submitButton} >Show</button>
                <div>{personInfo}</div>

            </div>
    );
}
}
export default App;
