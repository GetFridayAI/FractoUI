import { ButtonPosition, ButtonShape, ButtonSize } from '../interfaces/Button';
import { PrimaryButton } from '../components/Button/PrimaryButton';
import { SecondaryButton } from '../components/Button/SecondaryButton';
import { FloatingButton } from '../components/Button/FloatingButton';
import "./less/buttonpage.less";

const ButtonPage = () => {
  return (
    <div className="button-section">
      <div className="button-container">
        <h3>Primary Button</h3>
        <div className="button-wrapper">
          <PrimaryButton
            className={"dynamic-primary-button-class"}
            text={"Primary Button"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Normal}/>
          <PrimaryButton
            className={"dynamic-primary-button-class"}
            text={"Primary Button"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Rounded}
            size={ButtonSize.Normal}/>
          <PrimaryButton
            className={"dynamic-primary-button-class"}
            text={"Primary Button"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Ellipse}
            size={ButtonSize.Normal}/>
          <PrimaryButton
            className={"dynamic-primary-button-class"}
            text={"Primary Button"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Compact}/>
          <PrimaryButton
            className={"dynamic-primary-button-class"}
            text={"Primary Button"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Normal}/>
          <PrimaryButton
            className={"dynamic-primary-button-class"}
            text={"Primary Button"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Wide}/>
          <PrimaryButton
            className={"dynamic-primary-button-class"}
            text={"Primary Button"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.ExtraWide}/>
          <PrimaryButton
            className={"dynamic-primary-button-class"}
            text={"Primary Button"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Giant}/>
        </div>
      </div>

      <div className="button-container">
        <h3>Secondary Button</h3>
        <div className="button-wrapper">
          <SecondaryButton
            className={"dynamic-secondary-button-class"}
            text={"SecondaryButton"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Normal}/>
          <SecondaryButton
            className={"dynamic-secondary-button-class"}
            text={"SecondaryButton"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Rounded}
            size={ButtonSize.Normal}/>
          <SecondaryButton
            className={"dynamic-secondary-button-class"}
            text={"SecondaryButton"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Ellipse}
            size={ButtonSize.Normal}/>
          <SecondaryButton
            className={"dynamic-secondary-button-class"}
            text={"SecondaryButton"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Compact}/>
          <SecondaryButton
            className={"dynamic-secondary-button-class"}
            text={"SecondaryButton"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Normal}/>
          <SecondaryButton
            className={"dynamic-secondary-button-class"}
            text={"SecondaryButton"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Wide}/>
          <SecondaryButton
            className={"dynamic-secondary-button-class"}
            text={"SecondaryButton"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.ExtraWide}/>
          <SecondaryButton
            className={"dynamic-secondary-button-class"}
            text={"SecondaryButton"}
            onClick={() => {}}
            type={"button"}
            disabled={false}
            shape={ButtonShape.Normal}
            size={ButtonSize.Giant}/>
        </div>
      </div>

      <FloatingButton
        className={"dynamic-floating-button-class"}
        text={"Floating Button"}
        onClick={() => {}}
        type={"button"}
        position={ButtonPosition.BottomRight}
        disabled={false} />
    </div>
  );
};

export default ButtonPage;