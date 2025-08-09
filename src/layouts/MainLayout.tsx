// components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* Main Content */}
      <div>{children}</div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
