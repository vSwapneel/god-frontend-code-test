import  {Landing} from "../src/components/Landing";
import "../public/css/styles.css";
import React from "react";

function HomePage() {
  return (
    <React.StrictMode>
      <link rel="icon" href="images\Logo-Tab.jpg" />
      <Landing />
    </React.StrictMode>
  );
}

export default HomePage;
