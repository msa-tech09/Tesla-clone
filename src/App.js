import Header from "./components/Header";
import Item from "./components/Item";
import "./App.css";
import Accessories from "./images/Accessories.jpg";
import Model3 from "./images/Homepage-Model3.jpeg";
import ModelY from "./images/Homepage-ModelY.jpeg";
import ModelS from "./images/Homepage-ModelS.jpg";
import ModelX from "./images/Homepage-ModelX.jpg";
import SolarPanels from "./images/Homepage-SolarPanels.jpg";
import SolarRoof from "./images/Homepage-SolarRoof.webp";

function App() {
  return (
    <div className="App">
      <section className="header-banner">
        <p>
          Until March 2023, new Model 3 and Model Y vehicles qualify for a
          $7,500 federal tax credit for eligible buyers.{" "}
          <a href="www.tesla.com/support/incentives">Learn&nbsp;More</a>
        </p>
      </section>
      <Header />
      <div className="app-itemsContainer">
        <Item
          title="Model 3"
          description="Leasing starting at $349/mo"
          backgroundImg={Model3}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Demo Drive"
          rightBtnLink=""
          twoBtns={true}
          first={true}
        />
        <Item
          title="Model Y"
          description=""
          backgroundImg={ModelY}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="Demo Drive"
          rightBtnLink=""
          twoBtns={true}
        />
        <Item
          title="Model S"
          description="Schedule a Demo Drive"
          backgroundImg={ModelS}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="View Inventory"
          rightBtnLink=""
          twoBtns={true}
        />
        <Item
          title="Model X"
          description="Leasing starting at $349/mo"
          backgroundImg={ModelX}
          leftBtnText="Custom Order"
          leftBtnLink=""
          rightBtnText="View Inventory"
          rightBtnLink=""
          twoBtns={true}
        />
        <Item
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImg={SolarPanels}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoBtns={true}
        />
        <Item
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImg={SolarRoof}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoBtns={true}
        />
        <Item
          title="Accessories"
          description=""
          backgroundImg={Accessories}
          leftBtnText="Shop Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
        />
        <footer>
          <nav class="footer-nav">
            <ul class="footer-links">
              <li>
                <a href="https://www.tesla.com/about">&copy; 2023 Tesla</a>
              </li>
              <li>
                <a href="https://www.tesla.com/legal">Privacy &amp; Legal</a>
              </li>
              <li>
                <a href="https://www.tesla.com/vin-recall-search">
                  Vehicle Recalls
                </a>
              </li>
              <li>
                <a href="https://www.tesla.com/contact">Contact</a>
              </li>
              <li>
                <a href="https://www.tesla.com/careers">Careers</a>
              </li>
              <li>
                <a href="https://www.tesla.com/blog">News</a>
              </li>
              <li>
                <a href="https://engage.tesla.com/">Engage</a>
              </li>
              <li>
                <a href="https://www.tesla.com/findus/list">Locations</a>
              </li>
            </ul>
            <div class="footer-links-center">
              <a href="https://www.tesla.com/"> Original Tesla Homepage</a>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
}
export default App;
