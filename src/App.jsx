import "./App.css";
import Navbar from "./components/Navbar";
import Page5Card from "./components/Page5Card";
import Page8Card from "./components/Page8Card";
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
              <center>STEP 1</center>
            </div>
            <div className="line1">LOCATION INTELLIGENCE</div>
            <div className="line2">
              <center>To find best location for your buisness.</center>
            </div>
          </div>
          <div className="step2">
            <div className="heading">
              <center>STEP 2</center>
            </div>
            <div className="line1">
              <center>ON GROUND SUPPORT</center>
            </div>
            <div className="line2">
              <center>Single point contact field visitations.</center>
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
      <section className="page4">
        <div className="title">Choose your buisness location with</div>
        <div className="end-line container">
          <center>YOUR SHOP</center>
        </div>
      </section>
      <section className="page5">
        <div className="title">
          <center>YOU GET</center>
        </div>
        <div className="Page5Card-wrapper">
          <Page5Card
            image={
              <img src={require("./images/section-5-img.png")} alt="image1" />
            }
            line1="Customized Analysis"
            line2="We hear you, understand you and 'then' solve for you, Every search is unique, so is our approach"
          />

          <Page5Card
            image={
              <img src={require("./images/section-5-img2.png")} alt="image2" />
            }
            line1="Faster Decision Making"
            line2="We hear you, understand you and 'then' solve for you, Every search is unique, so is our approach"
          />

          <Page5Card
            image={
              <img src={require("./images/section-5-img3.png")} alt="image3" />
            }
            line1="One Stop Solution"
            line2="We hear you, understand you and 'then' solve for you, Every search is unique, so is our approach"
          />
        </div>
      </section>
      <section className="page6"></section>
      <section className="page7">
        <div className="container">
          <div className="line1">
            Give your Buisness the Best chance of success
          </div>
          <div className="line2">
            Unlock the <b>secret power</b>
            <br />
            that makes the big brands <b>successful!</b>
          </div>
        </div>
      </section>
      <section className="page8">
        <div className="page8-wrapper">
          <Page8Card
            picture={
              <img
                src={require("./images/people-portrait-adult-men-preview.jpg")}
                alt="image3"
                height="250rem"
                width="250rem"
              />
            }
            name="Anthony Gonsalvis"
            designation="Architect"
            quote="They are the GODS of Realty Search..."
            p="Lorem ipsum dolor sit amet consecti
               tur adipisicing elit. Doloremque teoe
               mpora in magnam quibusdam, amet dee
               enitir explicabo blanditiis reicien
               dis culpedeius commodi optio itaqui
               recusandae quisquam deserunt offici
               Adipi sciplo magnam quibude optiol."
          />
          <Page8Card
            picture={
              <img
                src={require("./images/Greyscale-image-of-man-sitting-in-front-of-plain-grey-background-wearing-a-shirt-and-oval-spectacles.webp")}
                alt="image4"
                height="250rem"
                width="250rem"
              />
            }
            name="Anthony Gonsalvis"
            designation="Dentist"
            quote="They are the GODS of Realty Search..."
            p="Lorem ipsum dolor sit amet consecti
               tur adipisicing elit. Doloremque teoe
               mpora in magnam quibusdam, amet dee
               enitir explicabo blanditiis reicien
               dis culpedeius commodi optio itaqui
               recusandae quisquam deserunt offici
               Adipi sciplo magnam quibude optiol."
          />
          <Page8Card
            picture={
              <img
                src={require("./images/photo-1439895306562-dc5a0c7ee823.jfif")}
                alt="image4"
                height="250rem"
                width="250rem"
              />
            }
            name="Anthony Gonsalvis"
            designation="Builder"
            quote="They are the GODS of Realty Search..."
            p="Lorem ipsum dolor sit amet consecti
               tur adipisicing elit. Doloremque teoe
               mpora in magnam quibusdam, amet dee
               enitir explicabo blanditiis reicien
               dis culpedeius commodi optio itaqui
               recusandae quisquam deserunt offici
               Adipi sciplo magnam quibude optiol."
          />
        </div>
      </section>
      <footer className="footer"><p>FOOTER</p></footer>
    </div>
  );
}

export default App;
