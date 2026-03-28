import NavigationBar from "./components/NavigationBar";
import "./styles/main.css";
import officeHoursData from "./office-hours.json";
import FeaturedCards from "./featured-classes";
import AllClasses from "./components/AllClasses";
import AddClass from "./components/AddClass";
import { useState, useEffect } from "react";

export default function App() {
  const [page, setPage] = useState("home");
  const [classes, setClasses] = useState(officeHoursData);
  const [searchPrefill, setSearchPrefill] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <div>
      <NavigationBar setPage={setPage} />

      {toast && <div className="toast">{toast}</div>}

      {page === "home" && (
        <main className="Info">
          <section className="Info-section">
            <h2>Welcome!</h2>
            <p>
              Welcome to the Office Hour Finder Tool!<br />
              Easily locate both professors and TAs, see upcoming availability, and plan your week accordingly.
            </p>
          </section>

          <div className="home-search-block">
            <h2 className="ready-text">Ready to go?</h2>

            <div className="home-search">
              <input
                className="home-search-input"
                placeholder="Search any class code or faculty..."
                value={searchPrefill}
                onChange={(e) => setSearchPrefill(e.target.value)}
              />

              <button
                className="home-search-button"
                onClick={() => setPage("classes")}
              >
                Search
              </button>
            </div>
          </div>

          <h2 className="featured-header">Featured Classes:</h2>
          <FeaturedCards data={officeHoursData} interval={10000} />
        </main>
      )}

      {page === "classes" && (
        <AllClasses
          data={classes}
          initialQuery={searchPrefill}
        />
      )}

      {page === "add" && (
        <AddClass
          setClasses={setClasses}
          setPage={setPage}
          setSearchPrefill={setSearchPrefill}
          setToast={setToast}
        />
      )}
    </div>
  );
}
