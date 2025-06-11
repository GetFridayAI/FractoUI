import { SystemIconProps } from '../../interfaces/SystemIcon';
import { SystemIconMap } from './Icons';
import "../../styles/systemIcon.less";

const SystemIcon = (props: SystemIconProps) => {
  const IconComponent = SystemIconMap[props.iconType];

  return (
    <div className={`system-icon ${props.className ? props.className : ''}`}>
      <IconComponent stroke={"currentColor"} />
    </div>
  );
}

export default SystemIcon;