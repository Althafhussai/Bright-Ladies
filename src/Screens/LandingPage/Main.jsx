import { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Menu, X } from 'lucide-react';
import "./Main.css"
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="homepage">
      <header className="header">
        <nav className="navbar">
          {/* Logo */}
          <Link href="/" className="logo">Luxe Jewels</Link>

          {/* Centered Nav Items (visible on desktop only) */}
          <div className="nav-items">
            <Link href="/rings" className="nav-link">Rings</Link>
            <Link href="/necklaces" className="nav-link">Necklaces</Link>
            <Link href="/earrings" className="nav-link">Earrings</Link>
          </div>

          {/* Right-side icons and hamburger menu */}
          <div className="icons">
            <button className="icon-button">
              <ShoppingCart className="icon" />
            </button>

            {/* Hamburger Menu for Mobile/Tablet */}
            <button className="icon-button hamburger-menu" onClick={toggleMenu}>
              {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div>
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
