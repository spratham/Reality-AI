import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <div className="header">
        <div className="page1 container">
          <Navbar />
          <div className="line1">
            <h1>
              Looking for the perfect location <br></br>for your shop?
            </h1>
          </div>
          <div className="line2">
            <p>
              Our AI analysis Footfall, Population, Income & Competition data
              <br></br> to give you the best recommendations.
            </p>
          </div>
          <div class="input-fields">
            <input
              name="city"
              class="datalist-input"
              placeholder="Your City"
              size="30"
            />

            <form>
              <select className="select" defaultValue="Business">
                <option>Business Type</option>
                <option>Pharmacy</option>
                <option>Software</option>
                <option>Retail</option>
                <option>Whole Sale</option>
              </select>
            </form>
            <button class="btn-submit"><b>Contact Us</b></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
