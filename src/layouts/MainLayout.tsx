import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import WhatsappComponent from "../components/WhatsappComponent";

export default function MainLayout({ children }) {
  return (
    <div className="flex flex-col container min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow mt-3">
        {children}
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky WhatsApp Button */}
      <WhatsappComponent />
    </div>
  );
}
