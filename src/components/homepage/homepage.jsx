import { Routes } from "react-router-dom";
import Carouseluse from "../carousel/carousel";
import Feed from "../feed/feed";
import NavUse from "../navbar/navbar";
import Special from "../special occasion/spl";
import Sponsorship from "../sponsorship/sponsorship";
import Donations from "../donations/donations";
function Homepage() {
    return <>
      <NavUse/>
      <Carouseluse/>
      <Feed/>
      <Special/>
      <Sponsorship/>
      </>
      
  }

  export default Homepage;