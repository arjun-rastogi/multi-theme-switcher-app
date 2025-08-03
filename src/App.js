import { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Header, Loader } from "./component";
import { About, Contact, Error, Home } from "./pages";
import { ThemeContext, ThemeProvider } from "./ThemeContext";

function AppContent() {
  const { loading } = useContext(ThemeContext);

  return (
    <>
      {loading && <Loader />}

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
