import { useState } from 'react';

const EducationForm = ({setData}) => {
    const [education, setEducation] = useState({});

    const handleChange = (e) => {
        setEducation((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData((prevState) => ({...prevState, education}));
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="group">
                <label htmlFor="university">University</label>
                <input id="university" type="text" name="university" onChange={handleChange} />
            </div>
            <div className="group">
                <label htmlFor="degree">Degree</label>
                <input id="degree" type="text" name="degree" onChange={handleChange} />
            </div>
            <div className="group">
                <label htmlFor="educationLocation">Location</label>
                <input id="educationLocation" type="text" name="educationLocation" onChange={handleChange} />
            </div>
            <div className="group">
                <label htmlFor="educationStartDate">Start Date</label>
                <input id="educationStartDate" type="month" name="educationStartDate" onChange={handleChange} />
            </div>
            <div className="group">
                <label htmlFor="educationEndDate">End Date</label>
                <input id="educationEndDate" type="month" name="educationEndDate" onChange={handleChange} />
            </div>
            <button className="btn">Save</button>
        </form>
    )
}

export default EducationForm;