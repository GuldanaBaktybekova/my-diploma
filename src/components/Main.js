import mainImage from "../assets/builtIn.jpeg";
// import main2Image from "../assets/img1.jpg";
import main3Image from "../assets/types.jpg";
// import main4Image from "../assets/steps.jpg";
import classes from  "./Main.module.css";
function Main() {
  return (
    <div className={classes.Main}>
      <div className={classes.first}>
        <div>
          <img className={classes.mainImage} src={mainImage} alt="main" />
        </div>
        <div className={classes.text}>
          <h2>Built-In Refrigerators</h2>
          <p>
            Built-in refrigerators can be customized to match surrounding
            cabinets with a panel-ready design or stand out as a statement.
          </p>
        </div>
      </div>

      {/* <div className="second">
        <div>
          <h1>A SERENE SPACE FOR COOKING, <br></br>CREATING AND LIVING</h1>
          <p>
            By mixing and matching a suite of black and stainless steel <br></br>
            appliances with plants and natural materials, her dream kitchen came
            to life.
          </p>
        </div>
        <div>
          <img src={main2Image} alt="main2" />
        </div>
      </div> */}

      <div className={classes.col}>
      <div className={classes.col1}>
          <h2>COMPLETE YOUR KITCHEN AND SAVE</h2>
          <ul>
            <li>Add extra storage for entertaining with an undercounter refrigerato</li>
            <li>Baking, brewing, blending and beyond. All designed with the Maker in mind, crafted to bring all your ideas to life</li>
            <li>Don't miss limited-time offers on select Kitchentech® appliances.</li>
          </ul>
        </div>
        <div className={classes.col2}>
          <img src={main3Image} alt="main"/>
        </div>
      
      </div>
    </div>
  );
}

export default Main;
