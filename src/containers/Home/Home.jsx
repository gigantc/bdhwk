
import Header from '../Header/Header.jsx';
import Hero from '../Hero/Hero.jsx';
import Profile from '../Profile/Profile.jsx';
import WorkGallery from '../WorkGallery/WorkGallery.jsx';
import Footer from '../Footer/Footer.jsx';


import './Home.scss';

const Home = () => {
  return (
    <>
      <Header />

      <div className="homeContainer">
        
        <Hero />
        <Profile />
        <WorkGallery />

      </div>

      <Footer />
    </>
  );
};

export default Home;

