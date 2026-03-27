import { useEffect, useState } from "react";

export default function AllClasses({ data, initialQuery = "" }) {
  const [filterType, setFilterType] = useState("course");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery);
    }
  }, [initialQuery]);

  useEffect(() => {
    if (!query) return;
    const hasNumber = /\d/.test(query);
    setFilterType(hasNumber ? "course" : "instructor");
  }, [query]);

  const filtered = data.filter((cls) => {
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
          <label>
            <input
              type="radio"
              checked={filterType === "course"}
              onChange={() => setFilterType("course")}
            />
            Course Code
          </label>

          <label>
            <input
              type="radio"
              checked={filterType === "instructor"}
              onChange={() => setFilterType("instructor")}
            />
            Instructor
          </label>
        </div>

        <input
          type="text"
          className="filter-input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="classes-grid">
        {filtered.length === 0 ? (
          <p className="no-results">No results found</p>
        ) : (
          filtered.map((cls, index) => (
            <div key={index} className="class-card">
              <h3>{cls.courseCode}</h3>
              <p><strong>{cls.type}:</strong> {cls.instructor}</p>
              <p><strong>Day(s):</strong> {cls.day}</p>
              <p><strong>Time:</strong> {cls.startTime} - {cls.endTime}</p>
              <p><strong>Location:</strong> {cls.location}</p>

              {cls.link && cls.link !== "N/A" && (
                <div className="card-buttons">
                  <a href={cls.link} target="_blank" rel="noopener noreferrer" className="link-button">
                    Join Online
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(cls.link)}
                    className="link-button"
                  >
                    Copy Link
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </main>
  );
}