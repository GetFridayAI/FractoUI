import { ButtonPosition, ButtonProps, ButtonShape, ButtonSize } from '../../interfaces/Button';
import '../../styles/button.less';

export const Button = (props: ButtonProps) => {
    const getButtonSizeClass = (size: ButtonSize) => {
        switch (size) {
            case ButtonSize.Compact:
                return "compact";
            case ButtonSize.Normal:
                return "normal";
            case ButtonSize.Wide:
                return "wide";
            case ButtonSize.ExtraWide:
                return "extra-wide";
            case ButtonSize.Giant:
                return "giant";
            default:
                return "normal";
        }
    }

    const getButtonShapeClass = (shape: ButtonShape) => {
        switch (shape) {
            case ButtonShape.Normal:
                return "normal-shape";
            case ButtonShape.Ellipse:
                return "ellipse-shape";
            case ButtonShape.Rounded:
                return "rounded-shape";
            default:
                return "normal-shape";
        }
    }

    const getButtonPositionClass = (position: ButtonPosition) => {
        switch (position) {
            case ButtonPosition.TopLeft:
                return "top-left";
            case ButtonPosition.TopRight:
                return "top-right";
            case ButtonPosition.BottomLeft:
                return "bottom-left";
            case ButtonPosition.BottomRight:
                return "bottom-right";
        }
    }

    const elClassNames = "button " + (props.className ? props.className + " " : '')
      + (getButtonSizeClass(props.size) + " " )
      + (props.position ? getButtonPositionClass(props.position) + " " : "")
      + (getButtonShapeClass(props.shape));
    const buttonType: string = props.type ? props.type : "button";

    return (
        <button
          id={`button ${props.id ? props.id : ''}`}
          className={elClassNames}
          type={buttonType}
          disabled={props.disabled}
          onClick={props.onClick}>
          {props.text}
        </button>
    );
};

