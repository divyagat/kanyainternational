import React from 'react';

const About = () => {
  return (
    <div className="font-sans bg-pink-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-pink-100 py-16 text-center">
        <h1 className="text-5xl font-bold text-pink-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Empowering businesses with creative, efficient, and scalable digital solutions since <strong>[Year]</strong>.
        </p>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          <strong>Your Company Name</strong> is a passionate team of designers, developers, and strategists dedicated to turning ideas into innovative solutions. With a commitment to excellence, we strive to deliver digital experiences that truly matter.
        </p>
      </section>

      {/* What We Do / Features */}
      <section className="py-16 bg-white px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            ['Web Development', 'Fast, responsive, and secure websites tailored to your business goals.'],
            ['Software Testing', 'Ensuring applications are bug-free and reliable.'],
            ['SEO & Marketing', 'Boosting your visibility and engagement online.'],
            ['UI/UX Design', 'Creating intuitive and elegant interfaces that delight users.'],
            ['Cloud Integration', 'Deploying scalable solutions using AWS & DevOps.'],
            ['Support & Maintenance', 'Continuous support to keep you running smoothly.'],
          ].map(([title, desc], index) => (
            <div key={index} className="bg-pink-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-pink-600 mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600 mb-3">Our Mission</h3>
            <p className="text-gray-700">
              To empower clients by delivering exceptional digital solutions with honesty, creativity, and technological excellence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-pink-600 mb-3">Our Vision</h3>
            <p className="text-gray-700">
              To be a global leader in innovative digital transformation that makes life easier and businesses smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section Placeholder (Optional) */}
      <section className="py-16 bg-white text-center px-6">
        <h2 className="text-3xl font-semibold mb-8">Meet Our Team</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We’re a close-knit team of passionate professionals—dedicated, innovative, and driven to deliver excellence.
        </p>
        {/* Add your team members here if needed */}
        <p className="text-gray-500 italic">[Team section coming soon]</p>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center bg-pink-100 px-4">
        <h2 className="text-3xl font-bold text-gray-800">Let’s Work Together</h2>
        <p className="text-gray-600 mt-2 mb-6">
          Have a project in mind? We'd love to hear from you!
        </p>
        <a
          href="/contact"
          className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default About;
