import CVSection from "./../cv-section/index";

const Preview = ({ data }) => {
  const { generalInformation, experience, education } = data;
  return (
    <div className="preview">
      <div className="preview__content">
        {generalInformation &&
          <div>
            <h1>{generalInformation.fullName}</h1>
            <h3>{generalInformation.position}</h3>
            <div className="preview__contacts">
              <span className="preview__contacts__email">
                {generalInformation.email}
              </span>
              <span className="preview__contacts__tel">
                {generalInformation.phone}
              </span>
              <span className="preview__contacts__address">
                {generalInformation.address}
              </span>
              <a
                href={generalInformation.link}
                className="preview__contacts__link"
              >
                {generalInformation.link.replace("https://", "")}
              </a>
            </div>
          </div>
        }

        <h2 className="preview__h2">Experience</h2>

        {experience &&
          experience.map((exp) => {
            return (
              <CVSection
                key={exp.company}
                title={exp.position}
                subheading={exp.company}
                date={`${exp.experienceStartDate} - ${exp.experienceEndDate}`}
                location={exp.experienceLocation}
                description={exp.description}
              />
            );
          })}

        <h2 className="preview__h2">Education</h2>

        {education &&
          <CVSection
            title={education.university}
            subheading={education.degree}
            location={education.educationLocation}
            date={`${education.educationStartDate} - ${education.educationEndDate}`}
          />
        }
      </div>
    </div>
  );
};

export default Preview;
