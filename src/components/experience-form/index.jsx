import { useState } from 'react';
const ExperienceForm = ({setData}) => {
    const [experienceData, setExperienceData] = useState({});

    const handleChange = (e) => {
        setExperienceData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData((prevState) => {
            const experience = prevState.experience ? [...prevState.experience, experienceData] : [experienceData]
            return {...prevState, experience}
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="group">
                <label htmlFor="company">Company</label>
                <input id="company" type="text" name="company" onChange={handleChange} />
            </div>
            <div className="group">
                <label htmlFor="position">Position</label>
                <input id="position" type="text" name="position" onChange={handleChange} />
            </div>
            <div className="group">
                <label htmlFor="experienceLocation">Location</label>
                <input id="experienceLocation" type="text" name="experienceLocation" onChange={handleChange} />
            </div>
            <div className="group">
                <label htmlFor="description">Description</label>
                <input id="description" type="text" name="description" onChange={handleChange} />
            </div>
            <div className="group">
                <label htmlFor="experienceStartDate">Start Date</label>
                <input id="experienceStartDate" type="month" name="experienceStartDate" onChange={handleChange} />
            </div>
            <div className="group">
                <label htmlFor="experienceEndDate">End Date</label>
                <input id="experienceEndDate" type="month" name="experienceEndDate" onChange={handleChange} />
            </div>
            <button className="btn">Save</button>
        </form>
    )
}

export default ExperienceForm;