export interface NavigationBarProps {
  className?: string;
  navigationBarPosition: NavigationBarPosition;
  menuItems: Array<NavigationMenuItem>;
  icon?: any;
  footerMenu?: readonly [NavigationMenuItem, NavigationMenuItem];
}

export enum NavigationBarPosition {
  TOP = "top",
  LEFT = "left"
}

export interface NavigationMenuItem {
  menuTitle: string;
  subMenuOptions?: Array<NavigationMenuItem>;
  route?: string;
  onNavigate?: (url: string) => void;
}

export interface SidebarProps extends NavigationBarProps {
  expandCollapseIconPlacement: SidebarMenuToggleIconPlacement;
  showNotifications: boolean;
  notificationType: SidebarMenuItemNotificationType;
}

export enum SidebarMenuToggleIconPlacement {
  LEFT = 'left',
  RIGHT = 'right'
}

export enum SidebarMenuItemNotificationType {
  Indicator = 0,
  Numeric = 1
}