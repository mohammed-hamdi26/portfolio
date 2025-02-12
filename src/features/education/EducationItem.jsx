function EducationItem({ education }) {
  const startYear = new Date(education.start_date).getFullYear();
  const endYear = new Date(education.end_date).getFullYear();

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
      <div className="space-y-4">
        <h3 className="text-4xl text-orange-primary font-semibold">
          {education?.education_name}
        </h3>
        <p className="text-2xl text-paragraph-primary">{education?.info}</p>
      </div>
      <p className="text-2xl text-paragraph-primary">
        {startYear} - {endYear}
      </p>
    </div>
  );
}

export default EducationItem;
