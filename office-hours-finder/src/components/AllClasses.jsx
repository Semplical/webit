import { useState } from "react";
import officeHoursData from "../office-hours.json";

export default function AllClasses() {
  const [filterType, setFilterType] = useState("course");
  const [query, setQuery] = useState("");

  const filtered = officeHoursData.filter((cls) => {
    const value =
      filterType === "course"
        ? cls.courseCode.toLowerCase()
        : cls.instructor.toLowerCase();
    return value.includes(query.toLowerCase());
  });

  return (
    <main className="all-classes">
      <h2 className="class-title">All Classes</h2>

      <div className="filter-bar">
        <div className="filter-options">
          <label><input type="radio" name="filter" value="course" checked={filterType === "course"} onChange={() => setFilterType("course")} /> Course Code</label>
          <label><input type="radio" name="filter" value="instructor" checked={filterType === "instructor"} onChange={() => setFilterType("instructor")} /> Instructor</label>
        </div>

        <input type="text" placeholder={filterType === "course" ? "Search by course code..." : "Search by instructor..."} className="filter-input" value={query} onChange={(e) => setQuery(e.target.value)}/>
      </div>

      <div className="classes-grid">
        {filtered.map((cls, index) => (
          <div key={index} className="class-card">
            <h3>{cls.courseCode}</h3>
            <p><strong>{cls.type}:</strong> {cls.instructor}</p>
            <p><strong>Day(s):</strong> {cls.day}</p>
            <p><strong>Time:</strong> {cls.startTime} - {cls.endTime}</p>
            <p><strong>Location:</strong> {cls.location}</p>
            {cls.link && cls.link !== "N/A" && <div className="card-buttons"><a href={cls.link} target="_blank" rel="noopener noreferrer" className="link-button">Join Online</a><button onClick={() => navigator.clipboard.writeText(cls.link)} className="link-button">Copy Link</button></div>}
          </div>
        ))}
      </div>
    </main>
  );
}