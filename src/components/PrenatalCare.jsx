import React from 'react';
import {
  FaCalendarAlt,
  FaInfoCircle,
  FaStethoscope,
  FaHeartbeat,
  FaVial,
  FaPrescriptionBottle,
  FaWeight,
  FaClipboardList,
} from 'react-icons/fa';

const PrenatalCare = () => {
  return (
    <div className='max-w-4xl mx-auto p-4 md:p-8'>
      <h1 className='text-2xl font-bold mb-4'>Prenatal Care</h1>

      {/* Section: Overview */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-2'>Overview</h2>
        <p className='text-gray-600'>
          Prenatal care is essential for a healthy pregnancy. Regular check-ups
          and tests can help prevent complications and ensure the well-being of
          both mother and baby. Prenatal care typically involves a series of
          checkups with a doctor, nurse, or midwife. These checkups will
          include:
        </p>
        <ul className='list-disc list-inside text-gray-600'>
          <li>A physical exam to check your overall health</li>
          <li>Weight and blood pressure checks</li>
          <li>Urine tests to check for infections</li>
          <li>
            Blood tests to screen for anemia, genetic conditions, and other
            health problems
          </li>
          <li>Abdominal exams to check the size and position of your baby</li>
          <li>
            Ultrasounds to see your baby and check for any developmental
            problems
          </li>
        </ul>
        <p className='text-gray-600 mt-2'>
          Your doctor or midwife will also talk to you about your health and
          your baby's health. They will answer any questions you have and
          provide you with information about what to expect during your
          pregnancy.
        </p>
        <p className='text-gray-600 mt-2'>
          Here are some of the benefits of prenatal care:
        </p>
        <ul className='list-disc list-inside text-gray-600'>
          <li>Reduces the risk of pregnancy complications</li>
          <li>Helps to identify and treat health problems early</li>
          <li>Increases the chances of a healthy birth</li>
          <li>
            Helps you to learn about your pregnancy and how to care for yourself
            and your baby
          </li>
        </ul>
      </section>

      {/* Section: Schedule Tests */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-2'>Schedule Tests</h2>
        <div className='bg-white p-4 rounded-lg shadow'>
          <div className='flex items-center mb-4'>
            <FaClipboardList className='text-color-primary text-2xl mr-4' />
            <div>
              <h3 className='font-semibold'>Book a Test</h3>
              <p className='text-gray-600'>
                Schedule your physical exams, blood tests, and ultrasounds
                online.
              </p>
            </div>
          </div>
          <button className='px-4 py-2 bg-color-primary text-white rounded-lg'>
            Schedule Now
          </button>
        </div>
      </section>

      {/* Section: Exercise Schedule */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-2'>Exercise Schedule</h2>
        <div className='bg-white p-4 rounded-lg shadow'>
          <div className='flex items-center mb-4'>
            <FaHeartbeat className='text-color-primary text-2xl mr-4' />
            <div>
              <h3 className='font-semibold'>View Exercise Schedule</h3>
              <p className='text-gray-600'>
                Get a personalized exercise plan that is safe and beneficial for
                you.
              </p>
            </div>
          </div>
          <button className='px-4 py-2 bg-color-primary text-white rounded-lg'>
            View Schedule
          </button>
        </div>
      </section>

      {/* Section: Weight and Blood Pressure Checks */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-2'>
          Weight and Blood Pressure Checks
        </h2>
        <div className='bg-white p-4 rounded-lg shadow'>
          <div className='flex items-center mb-4'>
            <FaWeight className='text-color-primary text-2xl mr-4' />
            <div>
              <h3 className='font-semibold'>Monitor Your Health</h3>
              <p className='text-gray-600'>
                Regularly check your weight and blood pressure to ensure a
                healthy pregnancy.
              </p>
            </div>
          </div>
          <button className='px-4 py-2 bg-color-primary text-white rounded-lg'>
            Check Now
          </button>
        </div>
      </section>

      {/* Section: Medicine Prescriptions */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-2'>Medicine Prescriptions</h2>
        <div className='bg-white p-4 rounded-lg shadow'>
          <div className='flex items-center mb-4'>
            <FaPrescriptionBottle className='text-color-primary text-2xl mr-4' />
            <div>
              <h3 className='font-semibold'>Manage Prescriptions</h3>
              <p className='text-gray-600'>
                Ensure you and your baby get the necessary nutrients with
                prenatal vitamins and other prescribed medications.
              </p>
            </div>
          </div>
          <button className='px-4 py-2 bg-color-primary text-white rounded-lg'>
            View Prescriptions
          </button>
        </div>
      </section>

      {/* Section: Frequently Asked Questions */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-2'>
          Frequently Asked Questions
        </h2>
        <div className='space-y-4'>
          {[
            {
              question: 'What is prenatal care?',
              answer:
                'Prenatal care is the health care you get while you are pregnant. It includes checkups and prenatal testing.',
            },
            {
              question: 'Why is prenatal care important?',
              answer:
                'Prenatal care helps keep you and your baby healthy. Babies of mothers who do not get prenatal care are more likely to have low birth weight and die than those born to mothers who do get care.',
            },
            {
              question:
                'How often should I visit my healthcare provider during pregnancy?',
              answer:
                'You should visit your healthcare provider every 4 weeks during the first 28 weeks of pregnancy, every 2 weeks from 28 to 36 weeks, and weekly after 36 weeks.',
            },
          ].map((faq, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow'>
              <h3 className='font-semibold mb-2'>{faq.question}</h3>
              <p className='text-gray-600'>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Contact Healthcare Provider */}
      <section className='mb-8'>
        <h2 className='text-xl font-semibold mb-2'>
          Contact Your Healthcare Provider
        </h2>
        <div className='bg-white p-4 rounded-lg shadow'>
          <div className='flex items-center mb-4'>
            <FaStethoscope className='text-color-primary text-2xl mr-4' />
            <div>
              <h3 className='font-semibold'>Dr. Smith</h3>
              <p className='text-gray-600'>+1 234 567 8901</p>
              <p className='text-gray-600'>smith@healthcare.com</p>
            </div>
          </div>
          <button className='px-4 py-2 bg-color-primary text-white rounded-lg'>
            Call Now
          </button>
        </div>
      </section>

      {/* Section: Emergency Information */}
      <section>
        <h2 className='text-xl font-semibold mb-2'>Emergency Information</h2>
        <div className='bg-white p-4 rounded-lg shadow'>
          <div className='flex items-center mb-4'>
            <FaInfoCircle className='text-color-primary text-2xl mr-4' />
            <div>
              <h3 className='font-semibold'>Emergency Contacts</h3>
              <p className='text-gray-600'>
                For emergencies, please contact the nearest hospital or dial
                911.
              </p>
            </div>
          </div>
          <button className='px-4 py-2 bg-color-primary text-white rounded-lg'>
            Get Emergency Help
          </button>
        </div>
      </section>
    </div>
  );
};

export default PrenatalCare;
