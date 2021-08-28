import React from "react";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  let count = 0;
  return (
    <div className="accordion accordion-flush" id="resourceAccordion">
      {props.resources.map((resource) => {
        count++;
        return (
          <AccordionItem
            key={`Resource-${resource.name}`}
            parentID="resourceAccordion"
            id={`Resource-${resource.name}`}
            resource={resource}
            show={count > 1 ? "" : "show"}
          />
        );
      })}
    </div>
  );
};

export default Accordion;
