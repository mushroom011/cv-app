const CVSection = ({title, subheading, location, date, description}) => {
    return (
        <div className="cv-section">
            <h2 className="cv-section__h2">{title}</h2>
            <p>{subheading}</p>
            <p className="cv-section__date">{date} ({location})</p>
            <p className="cv-section__description">{description}</p>
        </div>
    )
}

export default CVSection;