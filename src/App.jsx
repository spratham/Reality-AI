import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="app">
      <section className="header">
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
            <button class="btn-submit">
              <b>Contact Us</b>
            </button>
          </div>
        </div>
      </section>
      <section className="page2 ">
        {/* <div className="container"> */}
        <div className="line">
          <center>
            We know the power of Shop and realize the <b>CHALLENGES faced</b> in
            its search
          </center>
        </div>

        <div className="diagram">
          <img src={require("./images/section-2-img.png")} alt="diagram" />
        </div>
        {/* </div> */}
      </section>
      <section className="page3">
        <div className="container">
          <div className="title">
            <center>Our 2 Step approach to shop search</center>
          </div>
          <div className="step1">
            <div className="heading">
              <center>STEP 2</center>
            </div>
            <div className="line1">
              <center>LOCATION INTELLIGENCE</center>
            </div>
            <div className="line2">
              <center>To find best location for your buisness</center>
            </div>
          </div>
          <div className="step2">
            <div className="heading">
              <center>STEP 2</center>
            </div>
            <div className="line1">
              <center>LOCATION INTELLIGENCE</center>
            </div>
            <div className="line2">
              <center>To find best location for your <br/>buisness</center>
            </div>
          </div>
          <div className="logo1">
            <img src={require("./images/section-3-img2.png")} alt="diagram" />
          </div>
          <div className="logo2">
            <img src={require("./images/section-3-img.jpg")} alt="diagram" />
          </div>
          <div className="line1"></div>
        </div>
      </section>
    </div>
  );
}

export default App;
