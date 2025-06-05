import React from 'react';

const About = () => {
  return (
    <section className="bg-pink-50 py-16 px-4 font-sans text-gray-800">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-pink-600 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold">Your Company Name</span> – where creativity meets technology. We're a passionate team of developers, designers, marketers, and visionaries focused on delivering top-tier digital experiences.
        </p>
        <p className="text-lg text-gray-700 mt-6 leading-relaxed">
          Since our inception in <span className="font-semibold">[Year]</span>, we've helped businesses grow through modern websites, mobile apps, cloud solutions, and digital strategy.
        </p>
        <div className="mt-10">
          <img
            src="public/6-home.jpg"
            alt="About"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            A Design That Teaches
          </h3>
          <p className="text-gray-600">
            This design was made to help you learn step-by-step how to create amazing websites easily.
            It's flexible, industry-agnostic, and you can switch colors or fonts in one click.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Dedicated Effort
          </h3>
          <p className="text-gray-600">
            Every element was crafted with care, making this one of the best templates you can build on.
            We’ve prioritized accessibility, responsiveness, and ease of use.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Inspired by Nature
          </h3>
          <p className="text-gray-600 mb-4">
            Hope is a design inspired by nature’s calmness. We've used it for everything from gyms to restaurants.
            Built with performance in mind, it's powered by a new container system for speed.
          </p>
          <img
            src="public/2-about.jpg"
            alt="Nature inspired"
            className="rounded-lg shadow-md mt-4"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            Designed for You
          </h3>
          <p className="text-gray-600">
            We want you to build a website you're proud of — beautifully designed, performance optimized, and totally you.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all text-center">
          <h3 className="text-xl font-semibold text-pink-600 mb-3">
            💬 Astrid Hartman
          </h3>
          <p className="italic text-gray-600">
            “Excellent tutorial, one of the best I've seen and I sorely needed this step-by-step instruction. Thank you!”
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-pink-600 mb-3">Support & Maintenance</h3>
          <p className="text-gray-600">
            We’re here to support and evolve your tech long after launch day — from maintenance to improvements.
          </p>
        </div>
      </div>
      <div className='justify--center'>
        <img src="public/3-about.jpg" alt="" />
      </div>


      {/* Call to Action */}
      <div className="text-center mt-24">
        <h2 className="text-4xl font-bold text-gray-800">Let’s Build Something Great Together</h2>
        <p className="text-gray-600 mt-3 mb-8 text-lg">
          Ready to collaborate or have a question? We’re just a click away.
        </p>
        <a
          href="/contact"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default About;
