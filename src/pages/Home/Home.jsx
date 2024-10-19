import React from "react";
import { Link } from "react-router-dom";
import bg from "./../../assets/images/bg.jpg";
export default function Home() {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-4 py-8 min-h-screen flex items-center">
          <div className="text-white w-full max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="mb-8 md:mb-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Welcome To
                  <br className="hidden sm:block" /> Paradise Nursery
                </h1>
                <p className="text-lg sm:text-xl mb-6">
                  Where Green Meets Serenity
                </p>
                <Link
                  to={"/store"}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
              <div className="space-y-4 text-sm sm:text-base">
                <p>Welcome to Paradise Nursery, where green meets serenity!</p>
                <p className="hidden sm:block">
                  At Paradise Nursery, we are passionate about bringing nature
                  closer to you. Our mission is to provide a wide range of
                  high-quality plants that not only enhance the beauty of your
                  surroundings but also contribute to a healthier and more
                  sustainable lifestyle. From air- purifying plants to aromatic
                  herbal ones, we have something for every plant enthusiast.
                </p>
                <p>
                  Our team of experts is dedicated to ensuring that each plant
                  meets our strict standards of quality and care. Whether you're
                  a seasoned gardener or just starting your green journey, we're
                  here to support you every step of the way. Feel free to
                  explore our collection, ask questions, and let us help you
                  find the perfect plant for your home or office.
                </p>
                <p className="hidden sm:block">
                  Join us in our mission to create a greener, healthier world.
                  Visit Paradise Nursery today and experience the beauty of
                  nature right at your doorstep.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
