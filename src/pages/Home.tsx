// Layout
import Layout from "../layouts/MainLayout";

// components
import Particles from "../assets/animation/Particles";
import Button from "../components/Button";

// images
import imgHero from "../assets/images/heroImg.png";
import iconHero from "../assets/images/iconHero.png";

const Home = () => {
  return (
    <>
      <Layout>
        <div className="relative text-center space-y-8 bg-gradient-to-b from-white via-secondary/20 to-primary p-6 md:p-8 lg:p-10 overflow-hidden max-h-[78rem]">
          {/* Particles Background */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <Particles
              particleColors={["#0065F8", "#fffff"]}
              particleCount={300}
              particleSpread={10}
              speed={0.1}
              particleBaseSize={300}
              moveParticlesOnHover={true}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>

          {/* Hero Section */}
          <div className="flex items-center justify-center gap-3 rounded-full py-2 px-10 border border-secondary w-1/4 mx-auto backdrop-blur-sm bg-white/10">
            <img src={iconHero} alt="icon" className="w-5" />
            <p className="text-gray-800 text-md">
              Solusi Digital Cerdas untuk Era Modern
            </p>
          </div>

          <h1 className="max-w-6xl mx-auto text-center text-3xl sm:text-4xl md:text-6xl font-bold">
            Viekosoft — Partner Terpercaya Transformasi Digital Anda
          </h1>

          <p className="text-sm sm:text-base md:text-lg max-w-lg md:max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            pariatur voluptatem nemo ipsum sed quam adipisci magnam quibusdam
            voluptatibus accusamus doloremque laudantium commodi
          </p>

          <Button className="relative z-[50] hover:scale-105 ">
            Learn More
          </Button>

          {/* Gambar */}
          <div className="flex items-center justify-center min-h-screen -translate-y-32">
            <div className="relative rounded-3xl border border-white backdrop-blur-sm bg-white/10 p-4 shadow-sm">
              <img
                className="w-9 sm:w-[28rem] md:w-[48rem] lg:w-[60rem] rounded-3xl"
                src={imgHero}
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
