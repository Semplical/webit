export default function NavigationBar({ setPage }) {
  return (
    <header className="navigation-bar">
      <div className="navigation-left">
        <h1 className="navigation-title">Office Hours Finder</h1>
      </div>

      <nav className="navigation-right">
        <button className="navigation-button" onClick={() => setPage("home")}>Home</button>
        <button className="navigation-button"> Add a Class </button>
        <button className="navigation-button" onClick={() => setPage("classes")}>All Classes</button>

      </nav>
    </header>
  );
}
