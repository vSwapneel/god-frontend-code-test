import React, {useState, useEffect} from "react";
import Header from './header/Header';
import Footer from './footer/Footer';
import Body from './body/Body';
import LearnPage from './learnPage/LearnPage';
import ShopPage from './shopPage/ShopPage';
import { useRouter } from "next/router";

export const Landing: React.FC = (props) => {

  const router = useRouter();
 
  const [view, setView] = useState('home');
  const [selectedCarId, setSelectedCarId] = useState('');


  useEffect(() => {
    const [page, id] = router.asPath.split("/").filter(Boolean);
    setView(page ? page: '');
    setSelectedCarId(id);
  }, [router.asPath]);

  let content;
  switch (view) {
    case 'learn':
      content = <LearnPage carId={selectedCarId} />;
      break;
    case 'shop':
      content = <ShopPage carId={selectedCarId} />;
      break;
    case 'home':
      content = <Body/>;
    case '':
      content = <Body />
    default :
      console.log("Error")
  }


  return (
    <div>
      <Header/>
      <main>
        {content}
      </main>
      <Footer />
    </div>
  );
};
