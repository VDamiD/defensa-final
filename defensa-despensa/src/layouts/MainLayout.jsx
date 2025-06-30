import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container my-4">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;