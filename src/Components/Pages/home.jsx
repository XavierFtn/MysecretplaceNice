import Footer from "../models/ModelsFooter";
import "../Components/style/home.css";

import Header from "../models/ModelsHeader";
import { useEffect } from "react";

function Home() {
  useEffect(() => {}, []);
  return (
    <div className="container-fluid">
      <Header />
      <div className="col">
        <div className="row  mb-5"></div>

        <div className=" row ">
          <img src="src/Components/img/renegade-logo.jpg" />
          <p>Bienvenue sur la côte d'Azur</p>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Home;
