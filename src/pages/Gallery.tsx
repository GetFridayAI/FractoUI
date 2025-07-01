import ButtonPage from './ButtonPage';
import DropdownPage from './DropdownPage';
import SearchPage from './InputFields/SearchPage';
import TextFieldPage from './InputFields/TextFieldPage';
import './less/gallery.less';
import TablePage from './TablePage';
import { NavigationBarPosition, NavigationMenuItem } from '../interfaces/NavigationBar';
import SideBar from '../components/Navigation/SideBar';
import CardsPage from './CardsPage';

const Gallery = () => {
    const inputMenuItems: Array<NavigationMenuItem> = [
      {
        menuTitle: 'Search Field',
        route: '/components/inputs/search'
      },
      {
        menuTitle: 'Text Field',
        route: '/components/inputs/text'
      },
      {
        menuTitle: 'Numeric Field',
        route: '/components/inputs/numeric'
      }
    ]

    const componentMenuItems: Array<NavigationMenuItem> = [
      {
        menuTitle: 'Buttons',
        route: '/components/buttons'
      },
      {
        menuTitle: 'Dropdowns',
        route: '/components/dropdowns'
      },
      {
        menuTitle: 'Inputs',
        subMenuOptions: inputMenuItems
      },
    ]

    const navigationMenuItems: Array<NavigationMenuItem> = [
      {
        menuTitle: 'Home',
        route: '/home'
      },
      {
        menuTitle: 'Components',
        subMenuOptions: componentMenuItems
      },
      {
        menuTitle: 'Inputs',
        subMenuOptions: inputMenuItems
      }
    ];

    const icon = <span>App Icon | Sample</span>

    return (
      <div className={"page-container"}>
        {/* <NavigationBar
          menuItems={navigationMenuItems}
          navigationBarPosition={NavigationBarPosition.TOP}
          icon={icon}
        />*/}
        <SideBar
          navigationBarPosition={NavigationBarPosition.LEFT}
          menuItems={navigationMenuItems}
          icon={icon}
        />
        <div className="page-content">
            <ButtonPage />
            <DropdownPage />
            <SearchPage />
            <TextFieldPage />
            <TablePage />
            <CardsPage />
        </div>
      </div>
    );
};

export default Gallery;