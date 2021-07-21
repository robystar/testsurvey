export var json = {
    title: "Product Feedback Survey Example",
    showProgressBar: "top",
    pages: [
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
      },
      {
        questions: [
          {
            type: "myquestion",
            name: "xxxxxxx"
          },
          {
              name: "name",
              type: "text",
              title: "Please enter your namedddd:",
              placeHolder: "Jon Snow",
              isRequired: true,
              autoComplete: "off"
          }, {
              name: "birthdate",
              type: "text",
              inputType: "date",
              title: "Your birthdate:",
              isRequired: true,
              autoComplete: "bdate"
          }, {
              name: "color",
              type: "text",
              inputType: "color",
              title: "Your favorite color:"
          }, {
              name: "email",
              type: "text",
              inputType: "email",
              title: "Your e-mail:",
              placeHolder: "jon.snow@nightwatch.org",
              isRequired: true,
              autoComplete: "email",
              validators: [
                  {
                      type: "email"
                  }
              ]
          },
          {
            type: "radiogroup",
            name: "car",
            title: "What car are you driving?",
            isRequired: true,
            colCount: 4,
            choices: [
                "None",
                "Ford",
                "Vauxhall",
                "Volkswagen",
                "Nissan",
                "Audi",
                "Mercedes-Benz",
                "BMW",
                "Peugeot",
                "Toyota",
                "Citroen"
            ]
        }
      ]
      },
      {
        elements: [
          {
            type: "myquestion",
            name: "cq1",
            text: "Some Text"
          },
          {
            type: "tagbox",
            name: "position-tags",
            title: "Choose job positions (Select2 Tagbox)...",
            choices: [
              "1|Designer",
              "2|Front-end Developer",
              "3|Back-end Developer",
              "4|Database Administrator",
              "5|System Engineer"
            ]
          },
          {
            type: "dropdown",
            name: "position-s2",
            title: "Choose job position (Select2)...",
            renderAs: "select2",
            choices: [
              "1|Designer",
              "2|Front-end Developer",
              "3|Back-end Developer",
              "4|Database Administrator",
              "5|System Engineer"
            ]
          },
          {
            type: "radiogroup",
            name: "position",
            title: "Choose job position (iCheck)...",
            isRequired: true,
            colCount: 0,
            choices: [
              "1|Designer",
              "2|Front-end Developer",
              "3|Back-end Developer",
              "4|Database Administrator",
              "5|System Engineer"
            ]
          },
          {
            type: "radiogroup",
            name: "position-pc",
            title: "Choose job position (Pretty checkbox)...",
            isRequired: true,
            renderAs: "prettycheckbox",
            colCount: 0,
            choices: [
              "1|Designer",
              "2|Front-end Developer",
              "3|Back-end Developer",
              "4|Database Administrator",
              "5|System Engineer"
            ]
          },
          {
            type: "barrating",
            name: "barrating1",
            ratingTheme: "css-stars",
            title: "Please rate the movie you've just watched",
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "imagepicker",
            name: "choosepicture",
            title: "What animal would you like to see first ?",
            choices: [
              {
                value: "lion",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                value: "giraffe",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
              },
              {
                value: "panda",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                value: "camel",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ]
          },
          {
            type: "bootstrapslider",
            name: "bootstrapslider"
          },
          {
            type: "dropdown",
            renderAs: "select2",
            choicesByUrl: {
              url: "https://restcountries.eu/rest/v1/all"
            },
            name: "countries",
            title: "Please select the country you have arrived from:"
          },
          {
            type: "signaturepad",
            name: "sign",
            title: "Please enter your signature"
          },
          {
            type: "sortablelist",
            name: "lifepriopity",
            title: "Life Priorities ",
            isRequired: true,
            colCount: 0,
            choices: ["family", "work", "pets", "travels", "games"]
          },
          {
            name: "date",
            type: "text",
            inputType: "date",
            title: "Your favorite date:",
            dateFormat: "mm/dd/yy",
            isRequired: true,
            autoComplete: "bdate"
          }
        ]
      },
      {
        questions: [
          {
            type: "signaturepad",
            width: "500px",
            name: "Signature Pad - you can enter your signature here:"
          },
          {
            type: "matrix",
            name: "Quality",
            title:
              "Please indicate if you agree or disagree with the following statements",
            columns: [
              {
                value: 1,
                text: "Strongly Disagree"
              },
              {
                value: 2,
                text: "Disagree"
              },
              {
                value: 3,
                text: "Neutral"
              },
              {
                value: 4,
                text: "Agree"
              },
              {
                value: 5,
                text: "Strongly Agree"
              }
            ],
            rows: [
              {
                value: "affordable",
                text: "Product is affordable"
              },
              {
                value: "does what it claims",
                text: "Product does what it claims"
              },
              {
                value: "better then others",
                text: "Product is better than other products on the market"
              },
              {
                value: "easy to use",
                text: "Product is easy to use"
              }
            ]
          },
          {
            type: "rating",
            name: "satisfaction",
            title: "How satisfied are you with the Product?",
            mininumRateDescription: "Not Satisfied",
            maximumRateDescription: "Completely satisfied"
          },
          {
            type: "rating",
            name: "recommend friends",
            visibleIf: "{satisfaction} > 3",
            title:
              "How likely are you to recommend the Product to a friend or co-worker?",
            mininumRateDescription: "Will not recommend",
            maximumRateDescription: "I will recommend"
          },
          {
            type: "comment",
            name: "suggestions",
            title: "What would make you more satisfied with the Product?"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "price to competitors",
            title: "Compared to our competitors, do you feel the Product is",
            choices: [
              "Less expensive",
              "Priced about the same",
              "More expensive",
              "Not sure"
            ]
          },
          {
            type: "radiogroup",
            name: "price",
            title: "Do you feel our current price is merited by our product?",
            choices: [
              "correct|Yes, the price is about right",
              "low|No, the price is too low for your product",
              "high|No, the price is too high for your product"
            ]
          },
          {
            type: "multipletext",
            name: "pricelimit",
            title: "What is the... ",
            items: [
              {
                name: "mostamount",
                title: "Most amount you would every pay for a product like ours"
              },
              {
                name: "leastamount",
                title: "The least amount you would feel comfortable paying"
              }
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "text",
            name: "email",
            title:
              'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
          }
        ]
      }
    ]
};