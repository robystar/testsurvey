import React from "react";
import SurveyCreator from "./SurveyCreator";


SurveyCreator.JSON = {
  elements: [
      {
          type: "nominativo",
          name: "Nominativo"
      }
  ]
};

export function CreatorPage() {
    return (
      <div>
        <h2>Survey Creator - create a new survey</h2>
        <SurveyCreator />
      </div>
    );
  }
  