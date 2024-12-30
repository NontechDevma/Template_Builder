import CommonHero from "./CommonHero .jsx";
import CommonHero2 from "./CommonHero2.jsx";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <CommonHero
        prop={{ data: "Use Beautiful Templates to Create Your Resume" }}
      />
      <CommonHero2
        prop={{
          data: "Use Beautiful Templates to Create Your Personal Biodata",
        }}
      />
    </>
  );
};

export default Home;
