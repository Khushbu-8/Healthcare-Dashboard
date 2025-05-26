import LungsIcon from '../../public/Lung.png'; // Placeholder for actual icon import
import TeethIcon from '../../public/Teeth.png'; // Placeholder for actual icon import
import BoneIcon from '../../public/Bone.png'; // Placeholder for actual icon import
import HeartIcon from '../../public/Heart.png'; // Replace with actual path or import
import LegIcon from '../../public/leg.png'; // Replace with actual path or import

export const anatomicalIndicators = [
  { id: 'heart',icon:HeartIcon,  label: 'Healthy Heart', status: 'healthy', position: { top: '20%', left: '60%' } }, // Example positioning
  { id: 'leg',icon:LegIcon, label: 'Healthy Leg', status: 'warning', position: { top: '70%', left: '-5%' } }, // Example positioning
];

export const healthStatusCardsData = [
  {
    id: 'lungs',
    icon: LungsIcon,
    title: 'Lungs',
    date: 'Date: 26 Okt 2021',
    status: 'critical', // 'healthy', 'warning', 'critical'
    progress: 30, // Percentage for progress bar
  },
  {
    id: 'teeth',
    icon: TeethIcon,
    title: 'Teeth',
    date: 'Date: 26 Okt 2021',
    status: 'healthy',
    progress: 80,
  },
  {
    id: 'bone',
    icon: BoneIcon,
    title: 'Bone',
    date: 'Date: 26 Okt 2021',
    status: 'warning',
    progress: 60,
  },
];