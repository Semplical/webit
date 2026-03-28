import { useEffect, useState } from "react";

export default function AllClasses({ data, initialQuery = "" }) {
  const [filterType, setFilterType] = useState("course");
  const [query, setQuery] = useState("");

  // track if initial auto-mode was applied
  const [autoModeUsed, setAutoModeUsed] = useState(false);

  useEffect(() => {
    if (!initialQuery) return;

    setQuery(initialQuery);

    const hasNumber = /\d/.test(initialQuery);
    setFilterType(hasNumber ? "course" : "instructor");

    setAutoModeUsed(true);
  }, [initialQuery]);

  const handleQueryChange = (value) => {
    setQuery(value);

    // only auto-adjust BEFORE user takes control
    if (!autoModeUsed) {
      const hasNumber = /\d/.test(value);
      setFilterType(hasNumber ? "course" : "instructor");
    }
  };

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
          <label
            className={`filter-option ${filterType === "course" ? "is-active" : ""}`}
          >
            <input
              type="radio"
              name="class-filter"
              checked={filterType === "course"}
              onChange={() => {
                setAutoModeUsed(true);
                setFilterType("course");
              }}
            />
            <span className="filter-option-dot" aria-hidden="true" />
            <span>Course Code</span>
          </label>

          <label
            className={`filter-option ${filterType === "instructor" ? "is-active" : ""}`}
          >
            <input
              type="radio"
              name="class-filter"
              checked={filterType === "instructor"}
              onChange={() => {
                setAutoModeUsed(true);
                setFilterType("instructor");
              }}
            />
            <span className="filter-option-dot" aria-hidden="true" />
            <span>Instructor</span>
          </label>
        </div>

        <div className="home-search classes-search">
          <input
            type="text"
            className="home-search-input"
            placeholder="Search any class code or faculty..."
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
          />
        </div>
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
                  <a
                    href={cls.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
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
