const popularCourses = [
  { name: "สนามกอล์ฟเขาใหญ่", location: "นครราชสีมา" },
  { name: "สนามกอล์ฟเมืองทอง", location: "นนทบุรี" },
  { name: "สนามกอล์ฟสิงห์ปาร์ค", location: "ขอนแก่น" },
];

const PopularCourses = () => {
  return (
    <section className="popular-courses">
      <h2>สนามกอล์ฟยอดนิยม</h2>
      <ul>
        {popularCourses.map((course, index) => (
          <li key={index}>
            <strong>{course.name}</strong> - {course.location}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PopularCourses;
