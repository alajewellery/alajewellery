"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function AlandJewelleryLandingPage() {
  const headerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      if (window.scrollY > 0) {
        header.classList.add("shadow-md");
      } else {
        header.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: "smooth",
      });
    }
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <div className="min-h-screen bg-purple-50">
        <header
          ref={headerRef}
          className="from-orange-900 to-purple-800 text-purple-100 w-full z-10 bg-gradient-to-r"
          style={{ background: "linear-gradient(to right, #7b341e, #6b46c1)" }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 sm:mb-0">
              {/* <img
                src="/logo.jpeg?height=40&width=40"
                alt="Aland Jewellery Logo"
                width={40}
                height={40}
                className="rounded-full"
              /> */}
              <span className="text-xl sm:text-2xl font-bold">
                ALA Jewellery
              </span>
            </div>
            <nav>
              <ul className="flex space-x-4 sm:space-x-6 text-sm sm:text-base">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, "home")}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={(e) => scrollToSection(e, "products")}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#locations"
                    onClick={(e) => scrollToSection(e, "locations")}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Locations
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "contact")}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Add the Slider directly below the header */}
          <div className="slider-container">
            <Slider
              ref={sliderRef}
              {...carouselSettings}
              className="welcome-carousel"
            >
              <div className="text-center px-4 py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Welcome to ALA Jewellery
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6">
                  Discover exquisite gold jewelry and investment opportunities
                  in the UAE
                </p>
                <a
                  href="#products"
                  onClick={(e) => scrollToSection(e, "products")}
                  className="inline-block bg-yellow-500 text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Explore Our Collection
                </a>
              </div>
              <div className="text-center px-4 py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Luxury Meets Tradition
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6">
                  Experience the finest craftsmanship in every piece
                </p>
                <a
                  href="#locations"
                  onClick={(e) => scrollToSection(e, "locations")}
                  className="inline-block bg-yellow-500 text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Visit Our Stores
                </a>
              </div>
              <div className="text-center px-4 py-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Invest in Timeless Beauty
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-6">
                  Secure your future with our premium gold investment options
                </p>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "contact")}
                  className="inline-block bg-yellow-500 text-purple-900 px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </Slider>
          </div>
        </header>

        <main>
          <section id="products" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-900">
                Our Premium Gold Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {["Gold Bars", "Necklaces", "Rings"].map((product, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <img
                      src={`/img${index + 1}.jpg`}
                      alt={product}
                      width={200}
                      height={200}
                      className="mx-auto mb-4 rounded-md"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-purple-900">
                      {product}
                    </h3>
                    <p className="text-purple-700">
                      Exquisite {product.toLowerCase()} crafted with the finest
                      gold.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="locations" className="py-20 bg-purple-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-10 text-center text-purple-900">
                Our Locations in UAE
              </h2>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
                  {["Gold Center Bldg"].map((location, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md"
                    >
                      <MapPin className="w-10 h-10 text-yellow-500 mb-4 mx-auto" />
                      <h3 className="text-xl font-semibold mb-2 text-center text-purple-900">
                        {location}
                      </h3>
                      <p className="text-purple-700 text-center">
                        Visit our store at {location}, 2nd Flr, Zone 4, Office
                        49 for a wide selection of gold products.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer id="contact" className="bg-purple-900 text-purple-100 py-10 ">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center justify-center sm:justify-start">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+97142971633</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>alandjewellery49@gmail.com</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start">
                  <Search className="w-5 h-5 mr-2" />
                  <span>TRN : 100571884400003</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, "home")}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={(e) => scrollToSection(e, "products")}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#locations"
                    onClick={(e) => scrollToSection(e, "locations")}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Locations
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Facebook
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-yellow-400 transition-colors">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>&copy; 2024 ALA Jewellery L.L.C. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
