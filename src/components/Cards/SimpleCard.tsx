import "../../styles/card.less";
import { SimpleCardProps } from "../../interfaces/Card";

export const SimpleCard = (props: SimpleCardProps) => {
  const elClassNames: string = "card-wrapper simple-card "
    + (props.className ? props.className : "");

  return (
    <div className={elClassNames}>
      {
        props.isDisabled && <div className={"disabled-wrapper"}></div>
      }
      <div className={`card-content ${(props.hasShadow ? "has-shadow " : "")}`}>
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}