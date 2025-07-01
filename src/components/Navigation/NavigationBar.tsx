import '../../styles/navigationBar.less';
import { NavigationBarProps, NavigationMenuItem } from '../../interfaces/NavigationBar';
import { SystemIcon } from '../IconPack/SystemIcon';
import { SystemIconTypes } from '../../interfaces/SystemIcon';
import { useState } from 'react';

export const NavigationBar = (props: NavigationBarProps) => {
  const elClassNames: string = "navigation-bar-wrapper " + (props.className ? props.className + " " : "") + (props.navigationBarPosition);
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState<number | null>(null);

  return (
    <div className={elClassNames}>
      <div className={"app-icon"}>
        {props.icon}
      </div>
      {
        props.menuItems.map((menuItem: NavigationMenuItem, index) => {
          return <div
            className={"navigation-bar-item"}
            key={index}
            onClick={() => {
              !menuItem.subMenuOptions && menuItem.onNavigate && menuItem.onNavigate(menuItem.route ?? "");
            }}
            onMouseEnter={() => setActiveMenuItem(index)}
            onMouseLeave={() => setActiveMenuItem(null)}>
            <div className={`navigation-menu-item ${activeMenuItem === index ? 'active':''}`}>
              <p>{menuItem.menuTitle}</p>
              {
                menuItem.subMenuOptions && <SystemIcon
                  iconType={SystemIconTypes.ChevronDown}
                  className={"navigation-menu-item-icon"} />
              }
            </div>

            {
              menuItem.subMenuOptions && activeMenuItem === index && <div className={'navigation-submenu'}>
                {
                  menuItem.subMenuOptions?.map((subMenuItem: NavigationMenuItem, index) => {
                    return <div
                      className={`navigation-submenu-item ${activeSubmenuItem === index ? 'active':''}`}
                      key={index}
                      onClick={() => setActiveSubmenuItem(index)}>
                      <p>{subMenuItem.menuTitle}</p>
                    </div>
                  })
                }
              </div>
            }
          </div>
        })
      }
    </div>
  );
}