// Layout
import Layout from "../layouts/MainLayout";

// images
import imgHero from "../assets/images/heroImg.png";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="relative text-center h-[18rem] lg:min-h-[36rem] bg-primary text-white p-6 md:p-8 space-y-6 overflow-hidden">
          {/* Hero Section */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold">
            Viekosoft
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-lg md:max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            pariatur voluptatem nemo ipsum sed quam adipisci magnam quibusdam
            voluptatibus accusamus doloremque laudantium commodi
          </p>
        </div>
        {/* Gambar */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-20 sm:translate-y-4 md:translate-y-0 lg:left-6 lg:translate-x-1/4 lg:-translate-y-[18rem]
  "
        >
          <img
            className="w-9 sm:w-[28rem] md:w-[48rem] lg:w-[76rem] rounded-3xl shadow-2xl"
            src={imgHero}
            alt="Hero"
          />
        </div>
      </Layout>
    </>
  );
};

export default Home;
