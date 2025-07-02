import "../../styles/card.less";
import { CardProps } from "../../interfaces/Card";
import { useEffect } from 'react';

export const Card = (props: CardProps) => {
  const elClassNames: string = "card-wrapper "
    + (props.className ? props.className : "");

  useEffect(() => {
    if (!props.cardHeader && !props.title && !props.description) {
      throw new Error("No content has been passed for the component! Consider passing either one of title, description or header props");
    }
  }, []);

  return (
    <div className={elClassNames}>
      {
        props.isDisabled && <div className={"disabled-wrapper"}></div>
      }
      <div className={`card-content ${(props.hasShadow ? "has-shadow " : "")}`}>
        {
          props.cardHeader && <div className={"card-header"}>
            {props.cardHeader}
          </div>
        }
        {
          props.title && <div className={"card-title"}><h3>{props.title}</h3></div>
        }
        {
          props.description && <div className={"card-description"}>
            {props.description}
          </div>
        }
      </div>
    </div>
  );
}