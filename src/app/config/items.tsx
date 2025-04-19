import { MenuItem } from 'primereact/menuitem/menuitem';
import GlobeIcon from '@icons/globe.svg';
import Image from 'next/image';


const getIcon = () => <Image alt='globe-icon' src={GlobeIcon} />;
const items: MenuItem[] = [
  {id: 'search', label: 'search', icon: 'pi-search', 
  url: '/'}
]
export default items;