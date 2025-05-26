import TeethIcon from '../../public/Teeth.png';
import HeartIcon from '../../public/Heart.png';
import EyeIcon from '../../public/Eye.png';
import SyringeIcon from '../../public/Syringe.png';
import ManIcon from '../../public/Mane.png';
import MuscleIcon from '../../public/muscle.png';





export const calendarAppointments = {
  '2021-10-25': [{ time: '10:00' }, { time: '11:00' },{ time: '12:00' }],
  '2021-10-26': [{ time: '08:00' }, { time: '09:00' },{ time: '09:00' }],
  '2021-10-27': [{ time: '12:00' },{ time: '-' },{ time: '09:00' }],
  '2021-10-28': [{ time: '12:00' },{ time: '09:00' },{ time: '-' }],
  '2021-10-29': [{ time: '-' },{ time: '14:00' },{ time: '16:00' }],
  '2021-10-30': [{ time: '12:00' },{ time: '14:00' },{ time: '15:00' }],
  '2021-10-31': [{ time: '09:00' },{ time: '10:00' },{ time: '11:00' }],
};

export const appointmentDetails = [
  {
    id: 'dentist',
    title: 'Dentist',
    time: '09:00-11:00',
    doctor: 'Dr. Cameron Williamson',
    icon:  TeethIcon 
    },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy Appointment',
    time: '11:00-12:00',
    doctor: 'Dr. Kevin Djones',
    icon: MuscleIcon, // Placeholder
  },
];

export const upcomingSchedule = {
  thursday: [
    {
      id: 'health-checkup',
      title: 'Health checkup complete',
      time: '11:00 AM',
      icon: SyringeIcon, // Placeholder
    },
    {
      id: 'ophthalmologist',
      title: 'Ophthalmologist',
      time: '14:00 PM',
      icon:EyeIcon, // Placeholder
    },
  ],
  saturday: [
    {
      id: 'cardiologist',
      title: 'Cardiologist',
      time: '12:00 AM',
      icon: HeartIcon, // Placeholder
    },
    {
      id: 'neurologist',
      title: 'Neurologist',
      time: '16:00 PM',
      icon: ManIcon, // Placeholder
    },
  ],
};

export const activityData = {
  appointmentsThisWeek: 3,
  // Simplified data for bar chart visualization
  // Each number represents the relative height of a bar
  dailyActivity: [2, 3, 1, 4, 2, 3, 1], // Mon, Tue, Wed, Thu, Fri, Sat, Sun
};