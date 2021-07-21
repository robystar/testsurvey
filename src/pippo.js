export const pippo = 
    {
      type: "panel",
      elements: [
        {
          type: "paneldynamic",
          renderMode: "progressTop",
          allowAddPanel: false,
          allowRemovePanel: false,
          name: "member_arrray_employer_info",
          title: "Your employers",
          valueName: "member_arrray_employer",
          panelCount: 1,
          templateElements: [
            {
              type: "panel",
              name: "panel_member_employer_address",
              title: "Address",
              elements: [
                {
                  type: "text",
                  name: "member_employer_address",
                  valueName: "address",
                  title: "Address",
                },
                {
                  type: "text",
                  name: "member_employer_phone",
                  valueName: "phone",
                  title: "Phone number:",
                },
                {
                  type: "text",
                  name: "member_employer_abn",
                  valueName: "abn",
                  title: "ABN",
                },
              ],
            },
            {
              type: "panel",
              name: "panel_member_employer_role",
              title: "What is your role?",
              elements: [
                {
                  type: "radiogroup",
                  choices: ["Full time", "Part time", "Casual", "Seasonal"],
                  name: "member_employer_role",
                  title: "Your role",
                  valueName: "role",
                },
              ],
            },
            {
              type: "panel",
              name: "panel_member_employer_hours_work",
              title: "What hours do you work?",
              elements: [
                {
                  type: "text",
                  inputType: "number",
                  name: "member_employer_hours_worked",
                  valueName: "hours_worked",
                  title: "Hours:",
                },
                {
                  type: "dropdown",
                  name: "member_employer_hours_worked_frequency",
                  title: "Worked Frequency:",
                  valueName: "hours_worked_frequency",
                  startWithNewLine: false,
                  defaultValue: "Year",
                  choices: ["Day", "Week", "Fortnight", "Month", "Year"],
                },
              ],
            },
            {
              type: "panel",
              name: "panel_member_employer_income",
              title: "What income do you receive?",
              elements: [
                {
                  type: "text",
                  inputType: "number",
                  name: "member_employer_income",
                  valueName: "income",
                  title: "Income:",
                },
                {
                  type: "dropdown",
                  name: "member_employer_income_frequency",
                  title: "Income Frequency",
                  valueName: "income_frequency",
                  startWithNewLine: false,
                  defaultValue: "Year",
                  choices: ["Day", "Week", "Fortnight", "Month", "Year"],
                },
              ],
            },
          ],
          templateTitle: "Employer name: {panel.name}",
        },
      ],
    };
