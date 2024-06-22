import React from 'react';
import {
  FaCalendar,
  FaHospital,
  FaStar,
  FaBrain,
  FaLungs,
  FaHeartbeat,
} from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className='p-4 md:p-6'>
      <h1 className='text-2xl md:text-3xl font-bold mb-6'>Dashboard</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6'>
        <StatCard icon={<FaCalendar />} title='Appointments' value={5} />
        <StatCard icon={<FaHospital />} title='Hospitals' value={12} />
        <StatCard icon={<FaStar />} title='Reviews' value={14} />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6'>
        <RecentDiagnoses />
        <UpcomingAppointments />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
        <EducationalUpdates />
        <RecentNotifications />
      </div>
    </div>
  );
};

const StatCard = ({ icon, title, value }) => (
  <div className='bg-white p-4 rounded-lg shadow-md flex items-center'>
    <div className='text-3xl text-color-primary mr-4'>{icon}</div>
    <div>
      <h2 className='text-xl font-semibold'>{value}</h2>
      <p className='text-gray-600'>{title}</p>
    </div>
  </div>
);

const RecentDiagnoses = () => (
  <div className='bg-white p-4 rounded-lg shadow-md'>
    <h2 className='text-xl font-semibold mb-4'>Recent diagnoses</h2>
    <DiagnosisItem icon={<FaBrain />} diagnosis='Headache' time='1 month ago' />
    <DiagnosisItem
      icon={<FaLungs />}
      diagnosis='Pneumonia'
      time='1 month ago'
    />
    <DiagnosisItem
      icon={<FaHeartbeat />}
      diagnosis='Pneumonia'
      time='1 month ago'
    />
  </div>
);

const DiagnosisItem = ({ icon, diagnosis, time }) => (
  <div className='flex items-center mb-3'>
    <div className='text-2xl text-gray-500 mr-3'>{icon}</div>
    <div>
      <p className='font-semibold'>{diagnosis}</p>
      <p className='text-sm text-gray-600'>{time}</p>
    </div>
  </div>
);

const UpcomingAppointments = () => (
  <div className='bg-white p-4 rounded-lg shadow-md'>
    <h2 className='text-xl font-semibold mb-4'>Upcoming Appointments</h2>
    {[1, 2, 3].map((_, index) => (
      <AppointmentItem key={index} />
    ))}
  </div>
);

const AppointmentItem = () => (
  <div className='mb-4 p-3 border rounded-lg'>
    <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-2'>
      <h3 className='font-semibold'>Family Doctor Visit</h3>
      <span className='text-sm text-gray-600'>@caresync</span>
    </div>
    <p className='text-sm text-green-600 mb-2'>16th June 2024</p>
    <p className='text-sm text-gray-600 mb-2'>Caresync Hospital</p>
    <div className='flex flex-wrap gap-2'>
      <button className='px-3 py-1 text-sm bg-gray-200 rounded'>
        Reschedule
      </button>
      <button className='px-3 py-1 text-sm bg-color-primary text-white rounded'>
        Details
      </button>
      <button className='px-3 py-1 text-sm bg-gray-200 rounded'>Pending</button>
      <button className='px-3 py-1 text-sm bg-gray-400 text-white rounded'>
        Physical
      </button>
    </div>
  </div>
);

const EducationalUpdates = () => (
  <div className='bg-white p-4 rounded-lg shadow-md'>
    <h2 className='text-xl font-semibold mb-4'>Educational updates</h2>
    <p className='text-gray-600'>No updates available at the moment.</p>
  </div>
);

const RecentNotifications = () => (
  <div className='bg-white p-4 rounded-lg shadow-md'>
    <h2 className='text-xl font-semibold mb-4'>Recent Notifications</h2>
    <NotificationItem
      title='Appointment Reminder'
      message='Your appointment with Dr. Smith is tomorrow at 2 PM.'
      time='2 hours ago'
    />
    <NotificationItem
      title='Lab Results Available'
      message='Your recent blood test results are now available.'
      time='1 day ago'
    />
    <NotificationItem
      title='Prescription Refill'
      message='Your prescription for Lisinopril is due for refill.'
      time='3 days ago'
    />
  </div>
);

const NotificationItem = ({ title, message, time }) => (
  <div className='mb-4 p-3 border-b last:border-b-0'>
    <h3 className='font-semibold'>{title}</h3>
    <p className='text-sm text-gray-600 mb-1'>{message}</p>
    <p className='text-xs text-gray-500'>{time}</p>
  </div>
);

export default Dashboard;
