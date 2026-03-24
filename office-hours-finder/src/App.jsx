import NavigationBar from "./components/NavigationBar";
import "./styles/main.css";
import officeHoursData from "./office-hours.json";
import FeaturedCards from "./featured-classes";
export default function App() {
  return(
    <div>
      <NavigationBar />
      <main className="Info">
        <section className="Info-section">
          <h2>Welcome to the Office Hours Finder!</h2>
          <p>Welcome to the Office Hour Finder Tool!<br></br>
            Easily locate both professors and TAs, see upcoming availability, and plan your week accordingly.<br></br> 
            Whether you're looking for help with a specific class or just want to find out when office hours are, our tool has you covered. Start by searching for your class, or view the list of all classes and get up to date info on all office hours!
          </p>
        </section>
        <h2 className="featured-header">Featured Classes:</h2>
        <FeaturedCards data={officeHoursData} interval={10000} />
      </main>
    </div>
  );
}