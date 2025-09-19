import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube, FaPinterest } from "react-icons/fa";
import { useState } from "react";
import { Users, Award, Clock, Layers } from "lucide-react";
import Navbar from "../components/navbar";

export default function LandingPage() {
  // FAQ state
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Are the courses beginner-friendly?",
      a: "Yes! All our courses are designed to guide beginners step by step while also offering depth for advanced learners.",
    },
    {
      q: "Do I get lifetime access?",
      a: "Yes, once enrolled, you can access the lessons anytime, anywhere at your own pace.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, upon successful completion of each course you’ll receive a digital certificate of completion.",
    },
    {
      q: "Are classes live or recorded?",
      a: "We offer both — pre-recorded structured modules and live sessions for interaction and doubt clearing.",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-r from-pink-50 via-white to-pink-100">
        {/* Decorative Blur */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <h2 className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-900 tracking-tight">
          Where Creativity <br /> Meets{" "}
          <span className="text-pink-600">Fashion & Art</span>
        </h2>
        <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          Learn Fashion Designing, Tanjore Painting, Mural Art & Aari Embroidery
          — anytime, anywhere with expert guidance.
        </p>
        <div className="flex justify-center gap-6 mt-10">
          <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-full shadow-lg hover:opacity-90 transition transform hover:scale-105">
            Explore Courses
          </button>
          <button className="px-8 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition transform hover:scale-105">
            Contact Us
          </button>
        </div>
      </section>

      <section id="about" className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Text / about us */}
          <div className="space-y-6">
            <h3 className="text-4xl font-extrabold tracking-tight">
              Why{" "}
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Choose Us?
              </span>
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="font-semibold text-gray-900">Renu Arts</span>,
              we blend tradition with modern creativity. Our mission is to make
              professional Fashion Designing, Mural, Tanjore Painting, and Aari
              Embroidery accessible to everyone through structured online
              learning.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
                Start from basics and advance step-by-step, no prior experience
                needed.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
                Access all recorded classes anytime for 6 months, at your own
                pace.
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
                Get personalized guidance and solutions to your questions.
              </li>
            </ul>
          </div>

          {/* Image / Illustration */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1616627455872-2d3799b391d8?auto=format&fit=crop&w=900&q=80"
              alt="Fashion & Art"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-pink-100 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-28 px-6 bg-white">
        <h3 className="text-4xl font-extrabold text-center mb-16">
          What Makes Us <span className="text-pink-600">Different</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: <Users className="w-10 h-10 text-pink-600" />,
              title: "Expert Instructor",
              desc: "Learn directly with practical, real-world projects.",
            },
            {
              icon: <Clock className="w-10 h-10 text-pink-600" />,
              title: "Flexible Learning",
              desc: "Access lessons anytime, anywhere — at your own pace.",
            },
            {
              icon: <Award className="w-10 h-10 text-pink-600" />,
              title: "Certification",
              desc: "Get digital certificates to boost your portfolio.",
            },
            {
              icon: <Layers className="w-10 h-10 text-pink-600" />,
              title: "Community Support",
              desc: "Join a network of like-minded creative learners.",
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="p-8 bg-gray-50 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition transform text-center"
            >
              <div className="flex justify-center mb-4">{f.icon}</div>
              <h4 className="text-xl font-semibold mb-3">{f.title}</h4>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-28 px-6 bg-gray-50">
        <h3 className="text-4xl font-extrabold text-center mb-16">
          Our <span className="text-pink-600">Courses</span>
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Fashion Designing",
              desc: "Master modern and traditional techniques in fashion.",
              img: "https://images.unsplash.com/photo-1602810312859-0ed5d2de3950?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Mural Painting",
              desc: "Create breathtaking wall art with expert guidance.",
              img: "https://images.unsplash.com/photo-1581091215364-7f9f02da34c7?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Tanjore Painting",
              desc: "Learn this timeless classical South Indian art form.",
              img: "https://images.unsplash.com/photo-1616627455872-2d3799b391d8?auto=format&fit=crop&w=600&q=80",
            },
            {
              title: "Aari Embroidery",
              desc: "Discover the elegance of intricate hand embroidery.",
              img: "https://images.unsplash.com/photo-1596448904411-3f0d8f680c2a?auto=format&fit=crop&w=600&q=80",
            },
          ].map((course, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition transform"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h4 className="font-semibold text-xl mb-3 text-gray-900">
                  {course.title}
                </h4>
                <p className="text-gray-600 mb-6">{course.desc}</p>
                <button className="px-6 py-2 bg-gradient-to-r from-pink-600 to-pink-800 text-white rounded-full shadow hover:scale-105 transition transform">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-28 px-6 bg-white">
        <h3 className="text-4xl font-extrabold text-center mb-16">
          What Our <span className="text-pink-600">Students Say</span>
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Ananya",
              feedback:
                "The Fashion Designing course transformed my career. The mentors were supportive and inspiring!",
            },
            {
              name: "Karthik",
              feedback:
                "Tanjore painting lessons were beautifully structured. I can now create professional artwork confidently.",
            },
            {
              name: "Meera",
              feedback:
                "Aari embroidery was a dream skill for me. Renu Arts made it simple and enjoyable.",
            },
          ].map((t, idx) => (
            <div
              key={idx}
              className="bg-gray-50 shadow p-6 rounded-xl text-center hover:shadow-lg transition"
            >
              <p className="text-gray-600 italic mb-4">“{t.feedback}”</p>
              <h5 className="font-semibold text-gray-900">— {t.name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-28 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border rounded-lg bg-white shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
              >
                {faq.q}
                <span className="ml-4">{openIndex === idx ? "−" : "+"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-4 text-gray-600">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 px-6 text-center bg-white">
        <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
        <p className="text-lg text-gray-600 mb-8">
          Have questions? We’d love to hear from you.
        </p>
        <button className="px-8 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition">
          Contact Us
        </button>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center bg-gray-900 text-gray-400">
        <div className="flex justify-center gap-6 mb-6">
          <a
            href="https://www.instagram.com/ha_riharan182/"
            className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition"
          >
            <FaInstagram size={22} className="text-white" />
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition"
          >
            <FaFacebook size={22} className="text-white" />
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-red-600 p-3 rounded-full transition"
          >
            <FaYoutube size={22} className="text-white" />
          </a>
          <a
            href="#"
            className="bg-gray-800 hover:bg-pink-500 p-3 rounded-full transition"
          >
            <FaPinterest size={22} className="text-white" />
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Renu Thread & Brush Arts. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
