export interface NavigationBarProps {
  className?: string;
  navigationBarPosition: NavigationBarPosition;
  menuItems: Array<NavigationMenuItem>;
  icon?: any;
}

export enum NavigationBarPosition {
  TOP = "top",
  LEFT = "left"
}

export interface NavigationMenuItem {
  menuTitle: string;
  subMenuOptions?: Array<NavigationMenuItem>;
  route?: string;
}