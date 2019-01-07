import React from "react";
import { store } from "../store";
import setTechnology from "../actions";

const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map((tech, i) => (
      <button
      //customized data attribute.It is a way to store some extra information that doesn’t have any visual representation.
        //Ref: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
        data-tech={tech} 
        key={`btn-${i}`}
        className="hello-btn"
        onClick={dispatchBtnAction}
      >
        {tech}
      </button>
    ))}
  </div>
);
function dispatchBtnAction(e) {
    const tech = e.target.dataset.tech; //To get a data attribute through the dataset object, get the property by the part of the attribute name after data- (note that dashes are converted to camelCase).
    console.log (tech);
    store.dispatch(setTechnology(tech));
  }

  
export default ButtonGroup;