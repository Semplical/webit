export default function NavigationBar() {
  return (
    <header className="navigation-bar">
      <div className="navigation-left">
        <h1 className="navigation-title">Office Hours Finder</h1>
      </div>

      <nav className="navigation-right">
        <button className="navigation-button">Home</button>
        <button className="navigation-button">Add a Class</button>
        <button className="navigation-button">All Classes</button>

        <input
          type="text"
          placeholder="Search classes (Ex: CGS 4941)"
          className="navigation-search"
          aria-label="Search classes"
        />
      </nav>
    </header>
  );
}