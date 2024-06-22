import React from 'react';
import { FaCalendarAlt, FaInfoCircle, FaStethoscope } from 'react-icons/fa';

const PrenatalCare = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">Prenatal Care</h1>

      {/* Section: Overview */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Overview</h2>
        <p className="text-gray-600">
          Prenatal care is essential for a healthy pregnancy. Regular check-ups and tests can help prevent complications and ensure the well-being of both mother and baby.
        </p>
      </section>

      {/* Section: Appointments */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Upcoming Appointments</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-color-primary text-2xl mr-4" />
            <div>
              <h3 className="font-semibold">Dr. Smith</h3>
              <p className="text-gray-600">Monday, June 30th, 2024 - 10:00 AM</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-color-primary text-white rounded-lg">View Details</button>
        </div>
      </section>

      {/* Section: Educational Resources */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Educational Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['Healthy Eating', 'Exercise During Pregnancy', 'Warning Signs', 'Birth Plans'].map((topic, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{topic}</h3>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button className="mt-2 px-3 py-2 bg-color-primary text-white rounded-lg text-sm">Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Frequently Asked Questions */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            { question: 'What is prenatal care?', answer: 'Prenatal care is the health care you get while you are pregnant. It includes checkups and prenatal testing.' },
            { question: 'Why is prenatal care important?', answer: 'Prenatal care helps keep you and your baby healthy. Babies of mothers who do not get prenatal care are more likely to have low birth weight and die than those born to mothers who do get care.' },
            { question: 'How often should I visit my healthcare provider during pregnancy?', answer: 'You should visit your healthcare provider every 4 weeks during the first 28 weeks of pregnancy, every 2 weeks from 28 to 36 weeks, and weekly after 36 weeks.' },
          ].map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Contact Healthcare Provider */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact Your Healthcare Provider</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <FaStethoscope className="text-color-primary text-2xl mr-4" />
            <div>
              <h3 className="font-semibold">Dr. Smith</h3>
              <p className="text-gray-600">+1 234 567 8901</p>
              <p className="text-gray-600">smith@healthcare.com</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-color-primary text-white rounded-lg">Call Now</button>
        </div>
      </section>

      {/* Section: Emergency Information */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Emergency Information</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <FaInfoCircle className="text-color-primary text-2xl mr-4" />
            <div>
              <h3 className="font-semibold">Emergency Contacts</h3>
              <p className="text-gray-600">For emergencies, please contact the nearest hospital or dial 911.</p>
            </div>
          </div>
          <button className="px-4 py-2 bg-color-primary text-white rounded-lg">Get Emergency Help</button>
        </div>
      </section>
    </div>
  );
};

export default PrenatalCare;
