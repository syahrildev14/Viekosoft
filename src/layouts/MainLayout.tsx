// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ScrollToTopButton from "../components/ScrollToTopButton";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div>{children}</div>
      {/* konten halaman */}
      <ScrollToTopButton />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
