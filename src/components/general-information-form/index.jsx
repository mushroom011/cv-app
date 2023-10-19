import { useState } from "react";

const GeneralInformationForm = ({setData}) => {
    const [generalInformation, setGeneralInformation] = useState({});

    const handleChange = (e) => {
        setGeneralInformation((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData((prevState) => ({...prevState, generalInformation}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="group">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" type="text" name="fullName" onChange={handleChange} required/>
            </div>
            <div className="group">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" onChange={handleChange} required/>
            </div>
            <div className="group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" type="tel" name="phone" onChange={handleChange} required/>
            </div>
            <div className="group">
                <label htmlFor="link">GitHub link</label>
                <input id="link" type="url" name="link" onChange={handleChange} required/>
            </div>
            <div className="group">
                <label htmlFor="address">Address</label>
                <input id="address" type="text" name="address" onChange={handleChange} required/>
            </div>
            <button className="btn">Save</button>
        </form>
    )
}

export default GeneralInformationForm;