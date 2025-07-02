import "../../styles/card.less";
import { SimpleCardProps } from "../../interfaces/Card";
import { useEffect } from 'react';

export const SimpleCard = (props: SimpleCardProps) => {
  const elClassNames: string = "card-wrapper simple-card "
    + (props.className ? props.className : "");

  useEffect(() => {
    if (!props.title) {
      throw new Error("Title prop is required for Simple Card, but is missing!");
    }
  }, []);

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