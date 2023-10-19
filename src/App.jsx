import "./App.css";
import Section from "./components/section/index";
import GeneralInformationForm from "./components/general-information-form/index";
import EducationForm from "./components/education-form/index";
import ExperienceForm from "./components/experience-form";
import Preview from "./components/preview/index";
import { useState } from "react";

const testData = {
  generalInformation: {
    fullName: "Djohn Doe",
    position: "Frontend Developer (React)",
    email: "djohndoe11@example.com",
    phone: "112 332 2233",
    address: "New York City, NYC",
    link: "https://github.com/mushroom011",
  },
  experience: [
    {
      company: "Software Development Inc.",
      position: "Frontend Developer (React)",
      experienceLocation: "New York City, NYC",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure? Provident, laudantium ex?",
      experienceStartDate: "09/2014",
      experienceEndDate: "09/2017",
    },
    {
      company: "Software Development 2 Inc.",
      position: "Frontend Developer (React)",
      experienceLocation: "New York City, NYC",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, iure? Provident, laudantium ex?",
      experienceStartDate: "09/2014",
      experienceEndDate: "09/2017",
    },
  ],
  education: {
    university: "Harvard University",
    degree: "Computer science and the art of programming",
    educationLocation: "New York City, NYC",
    educationStartDate: "09/2014",
    educationEndDate: "09/2017",
  },
};

const initialState = {
  generalInformation: null,
  experience: null,
  education: null,
};

function App() {
  const [data, setData] = useState(testData);
  const setTestInfo = () => setData(testData);
  const setinitialState = () => setData(initialState);

  return (
    <div className="main">
      <div className="form-section">
        <div className="buttons">
          <button className="btn set" onClick={setTestInfo}>
            Set test info
          </button>
          <button className="btn clear" onClick={setinitialState}>
            Clear info
          </button>
        </div>
        <Section title={"General Information"}>
          <GeneralInformationForm setData={setData} />
        </Section>
        <Section title={"Experience"}>
          <ExperienceForm setData={setData} />
        </Section>
        <Section title={"Education"}>
          <EducationForm setData={setData} />
        </Section>
      </div>
      <Preview data={data} />
    </div>
  );
}

export default App;
