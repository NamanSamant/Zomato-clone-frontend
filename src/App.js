import HomeLayoutHOC from "./HOC/Home.HOC";
import Master from "./components/navbar/master";
import HomeComponent from "./components/Homepage/Home.component";
import LgSnLayout from "./Layout/LogInPage";
import SignUpPage from "./Layout/SignUpPage";
import { Route, Routes } from "react-router-dom";
import temp from "./components/temp";
import ResLayout from "./Layout/RestaurantLayout";
import master from "./components/Restaurant/DifferentSections/master";


function App() {
  return (
    <>
      {/* <HomeLayoutHOC path="/Zomato-clone-frontend" exact component={HomeComponent} /> */}
      <HomeLayoutHOC path="/Zomato-clone-frontend" exact component={Master} />
      <HomeLayoutHOC path="/Zomato-clone-frontend/:type" exact component={Master} />
      <HomeLayoutHOC path="/Zomato-clone-frontend/resid/:type" exact component={master}/>
      <Routes>
        <Route path="/Zomato-clone-frontend/xy/login" element = <LgSnLayout/> />
        <Route path="/Zomato-clone-frontend/xy/signup" element = <SignUpPage/> />
      </Routes>    
    </>
  );
}

export default App;
