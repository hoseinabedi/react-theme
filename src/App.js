import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Price from "./pages/Price";
import Faq from "./pages/Faq";
import BlogHome from "./pages/BlogHome";
import BlogPost from "./pages/BlogPost";
import PortfolioOverview from "./pages/PortfolioOverview";
import PortfolioItem from "./pages/PortfolioItem";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import logo from "./logo.svg";

function App() {
    return (
        <>
            <main className="flex-shrink-0">
                <Router>
                    {/* Navigation */}
                    <Header />
                    {/* Body */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<About />} />
                        <Route path="/contact-us" element={<Contact />} />
                        <Route path="/pricing" element={<Price />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/blog-home" element={<BlogHome />} />
                        <Route path="/blog-post" element={<BlogPost />} />
                        <Route path="/portfolio-overview" element={<PortfolioOverview />} />
                        <Route path="/portfolio-item" element={<PortfolioItem />} />
                    </Routes>
                    <Footer />
                </Router>
            </main>
        </>
    );
}

export default App;
