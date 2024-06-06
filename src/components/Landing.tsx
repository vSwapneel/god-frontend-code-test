import React from "react";
import Header from './header/Header';
import Footer from './footer/Footer';
import Body from './body/Body';

export const Landing: React.FC = () => {
  return (
    <div>
      <Header/>
      <main>
        {/* I will add cards and filter in the body component */}
        <Body/>
      </main>
      <Footer />
    </div>
  );
};
