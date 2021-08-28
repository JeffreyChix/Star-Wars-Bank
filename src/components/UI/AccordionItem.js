import React from "react";

import usePopulateAccordion from "../../hooks/usePopulateAccordion";
import classes from "./AccordionItem.module.css";

const AccordionItem = (props) => {
  const formatData = usePopulateAccordion();

  const resourceName = props.resource.name;

  return (
    <div className={`accordion-item ${classes.accordion_item}`}>
      <h3
        className="accordion-header"
        id={props.id}
      >
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${resourceName}`}
          aria-expanded="true"
          aria-controls={`collapse${resourceName}`}
        >
          {`${resourceName} (${props.resource.value.data.length})`}
        </button>
      </h3>
      <div
        id={`collapse${resourceName}`}
        className={`accordion-collapse collapse ${props.show}`}
        aria-labelledby={props.id}
        data-bs-parent={`#${props.parentID}`}
      >
        <div className={`accordion-body ${classes.accordion_body}`}>
          <ol className={classes.ol}>
            {formatData(
              props.resource.value,
              props.resource.cat,
              true,
              resourceName.toLowerCase()
            )}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
