import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import "./Main.css"
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import logo from "../../assets/Images/logo/logo.png";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen)

  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
          {/* Logo */}
          <Image
            src={logo} // Make sure to replace this with your logo image path
            alt="Bright"
            className="product-image"
          />

          {/* Centered Nav Items (visible on desktop only) */}
          <div className="nav-items">
            <Link href="/about-us" className="nav-link">Home</Link>
            <Link href="/about-us" className="nav-link">About Us</Link>

            {/* Products with Submenu */}
            <div className="nav-link" onMouseEnter={toggleSubMenu} onMouseLeave={toggleSubMenu}>
              Products
              <div className={`submenu ${isSubMenuOpen ? 'open' : ''}`}>
                <Link href="/rings" className="submenu-link">Rings</Link>
                <Link href="/necklaces" className="submenu-link">Necklaces</Link>
                <Link href="/earrings" className="submenu-link">Earrings</Link>
              </div>
            </div>

            <Link href="/contact" className="nav-link">Contact Us</Link>
          </div>

          {/* Right-side icons and hamburger menu */}
          <div className="icons">
            <button className="icon-button hamburger-menu" onClick={toggleMenu}>
              {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>

          {/* Mobile Menu (visible on mobile/tablet) */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <Link href="/about-us" className="mobile-link">Home</Link>
              <Link href="/about-us" className="mobile-link">About Us</Link>
              <div className="mobile-link" onClick={toggleSubMenu}>
                Collections
                {isSubMenuOpen && (
                  <div className="mobile-submenu">
                    <Link href="/rings" className="mobile-submenu-link">Rings</Link>
                    <Link href="/necklaces" className="mobile-submenu-link">Necklaces</Link>
                    <Link href="/earrings" className="mobile-submenu-link">Earrings</Link>
                  </div>
                )}
              </div>
              <Link href="/contact" className="mobile-link">Contact Us</Link>
            </div>
          )}
        </nav>

        {/* Mobile Menu - visible only when open */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mobile-menu"
          >
            <Link href="/rings" className="mobile-link">Rings</Link>
            <Link href="/necklaces" className="mobile-link">Necklaces</Link>
            <Link href="/earrings" className="mobile-link">Earrings</Link>
          </motion.div>
        )}
      </header>

      <main className="main-content">
        <section className="section">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-title"
          >
            Exquisite Jewelry for Every Occasion
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="section-subtitle"
          >
            Discover our collection of handcrafted, luxury pieces
          </motion.p>
          <div className="product-grid">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="product-card"
            >
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Elegant Ring"
                width={400}
                height={300}
                className="product-image"
              />
              <div className="product-info">
                <h2 className="product-title">Elegant Rings</h2>
                <p className="product-description">Explore our stunning collection of rings</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="product-card"
            >
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Luxurious Necklace"
                width={400}
                height={300}
                className="product-image"
              />
              <div className="product-info">
                <h2 className="product-title">Luxurious Necklaces</h2>
                <p className="product-description">Adorn yourself with our exquisite necklaces</p>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="product-card"
            >
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Sparkling Earrings"
                width={400}
                height={300}
                className="product-image"
              />
              <div className="product-info">
                <h2 className="product-title">Sparkling Earrings</h2>
                <p className="product-description">Complete your look with our dazzling earrings</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3 className="footer-title">Luxe Jewels</h3>
            <p className="footer-text">Exquisite jewelry for every occasion</p>
          </div>
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <p className="footer-text">Email: info@luxejewels.com</p>
            <p className="footer-text">Phone: (123) 456-7890</p>
          </div>
          <div className="footer-bottom">
            <p className="footer-bottom-text">&copy; 2023 Luxe Jewels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
