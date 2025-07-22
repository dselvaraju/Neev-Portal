import { Icon } from '@chakra-ui/react';
import {
  MdAddAlert,
  MdDashboard,
  MdEvent,
  MdMessage,
  MdPeople,
  MdBuild,
  MdViewList,
  MdScanner,
} from 'react-icons/md';

// Auth Imports
import { IRoute } from 'types/navigation';

const routes: IRoute[] = [
  // --- Dashboards ---
  {
    name: 'Dashboard',
    path: '/dashboard',
    layout: '/neev',
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Interfaces',
    path: '/interfaces',
    layout: '/neev',
    icon: <Icon as={MdViewList} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Messages',
    path: '/messages',
    layout: '/neev',
    icon: <Icon as={MdMessage} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'User Management',
    path: '/users',
    layout: '/neev',
    icon: <Icon as={MdPeople} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Events',
    path: '/events',
    layout: '/neev',
    icon: <Icon as={MdEvent} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Alerts',
    path: '/alerts',
    layout: '/neev',
    icon: <Icon as={MdAddAlert} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'Administration',
    path: '/administration',
    layout: '/neev',
    icon: <Icon as={MdBuild} width="20px" height="20px" color="inherit" />,
  },
  {
    name: 'DICOM Viewer',
    path: '/dicomviewer',
    layout: '/neev',
    icon: <Icon as={MdScanner} width="20px" height="20px" color="inherit" />,
  },
];

export default routes;
