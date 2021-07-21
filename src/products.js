export const json = {
    title: "aaaaaaaaaaaaaaaaa",
    showProgressBar: "top",
    pages: [
        {
          elements: [
            {
              type: "panel",
              elements: [
                {
                  type: "panel",
                  elements: [
                    {
                      type: "paneldynamic",
                      minPanelCount: 1,
                      name: "member_arrray_employer_names",
                      valueName: "member_arrray_employer",
                      title: "Please enter all your employers",
                      panelAddText: "Add another employer",
                      panelCount: 1,
                      templateElements: [
                        {
                          type: "text",
                          name: "member_employer_name",
                          valueName: "name",
                          title: "Name of employer"
                        }
                      ]
                    }
                  ],
                  name: "panel2",
                  title: "You",
                },
                {
                  type: "panel",
                  elements: [
                    {
                      type: "paneldynamic",
                      minPanelCount: 1,
                      name: "partner_arrray_employer_names",
                      valueName: "partner_arrray_employer",
                      title: "Please enter all your partner employers",
                      panelAddText: "Add another employer",
                      panelCount: 1,
                      templateElements: [
                        {
                          type: "text",
                          name: "partner_employer_name",
                          valueName: "name",
                          title: "Name of employer"
                        }
                      ]
                    }
                  ],
                  name: "panel8",
                  startWithNewLine: false,
                  title: "Your Partner",
                }
              ],
              name: "panel6",
              title: "Who are you employed by?"
            }
          ],
          name: "page3.1",
        },
        {
          elements: [
            {
              type: "panel",
              elements: [
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
                              title: "Address"
                            },
                            {
                              type: "text",
                              name: "member_employer_phone",
                              valueName: "phone",
                              title: "Phone number:"
                            },
                            {
                              type: "text",
                              name: "member_employer_abn",
                              valueName: "abn",
                              title: "ABN"
                            }
                          ]
                        },
                        {
                          type: "panel",
                          name: "panel_member_employer_role",
                          title: "What is your role?",
                          elements: [
                            {
                              type: "radiogroup",
                              choices: [
                                "Full time",
                                "Part time",
                                "Casual",
                                "Seasonal"
                              ],
                              name: "member_employer_role",
                              title: "Your role",
                              valueName: "role"
                            }
                          ]
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
                              title: "Hours:"
                            },
                            {
                              type: "dropdown",
                              name: "member_employer_hours_worked_frequency",
                              title: "Worked Frequency:",
                              valueName: "hours_worked_frequency",
                              startWithNewLine: false,
                              defaultValue: "Year",
                              choices: [
                                "Day",
                                "Week",
                                "Fortnight",
                                "Month",
                                "Year"
                              ]
                            }
                          ]
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
                              title: "Income:"
                            },
                            {
                              type: "dropdown",
                              name: "member_employer_income_frequency",
                              title: "Income Frequency",
                              valueName: "income_frequency",
                              startWithNewLine: false,
                              defaultValue: "Year",
                              choices: [
                                "Day",
                                "Week",
                                "Fortnight",
                                "Month",
                                "Year"
                              ]
                            }
                          ]
                        }
                      ],
                      templateTitle: "Employer name: {panel.name}"
                    }
                  ],
                  name: "panel17",
                  title: "You",
                },
                {
                  type: "panel",
                  elements: [
                    {
                      type: "paneldynamic",
                      renderMode: "progressTop",
                      allowAddPanel: false,
                      allowRemovePanel: false,
                      name: "partner_arrray_employer_info",
                      title: "Your partner employers",
                      valueName: "partner_arrray_employer",
                      panelCount: 1,
                      templateElements: [
                        {
                          type: "panel",
                          name: "panel_partner_employer_address",
                          title: "Address",
                          elements: [
                            {
                              type: "text",
                              name: "partner_employer_address",
                              valueName: "address",
                              title: "Address:"
                            },
                            {
                              type: "text",
                              name: "partner_employer_phone",
                              valueName: "phone",
                              title: "Phone number"
                            },
                            {
                              type: "text",
                              name: "partner_employer_abn",
                              valueName: "abn",
                              title: "ABN"
                            }
                          ]
                        },
                        {
                          type: "panel",
                          name: "panel_partner_employer_role",
                          title: "What is your role?",
                          elements: [
                            {
                              type: "radiogroup",
                              choices: [
                                "Full time",
                                "Part time",
                                "Casual",
                                "Seasonal"
                              ],
                              name: "partner_employer_role",
                              title: "Your role",
                              valueName: "role"
                            }
                          ]
                        },
                        {
                          type: "panel",
                          name: "panel_partner_employer_hours_work",
                          title: "What hours do you work?",
                          elements: [
                            {
                              type: "text",
                              inputType: "number",
                              name: "partner_employer_hours_worked",
                              valueName: "hours_worked",
                              title: "Hours"
                            },
                            {
                              type: "dropdown",
                              name: "partner_employer_hours_worked_frequency",
                              valueName: "hours_worked_frequency",
                              title: "Worked Frequency:",
                              startWithNewLine: false,
                              defaultValue: "Year",
                              choices: [
                                "Day",
                                "Week",
                                "Fortnight",
                                "Month",
                                "Year"
                              ]
                            }
                          ]
                        },
                        {
                          type: "panel",
                          name: "panel_partner_employer_income",
                          title: "What income do you receive?",
                          elements: [
                            {
                              type: "text",
                              inputType: "number",
                              name: "partner_employer_income",
                              valueName: "income",
                              title: "Income:"
                            },
                            {
                              type: "dropdown",
                              name: "partner_employer_income_frequency",
                              valueName: "income_frequency",
                              title: "Income frequency:",
                              startWithNewLine: false,
                              defaultValue: "Year",
                              choices: [
                                "Day",
                                "Week",
                                "Fortnight",
                                "Month",
                                "Year"
                              ]
                            }
                          ]
                        }
                      ],
                      templateTitle: "Employer name: {panel.name}"
                    }
                  ],
                  name: "panel18",
                  startWithNewLine: false,
                  title: "You partner",
                }
              ],
              name: "panel16",
              title: "Tells us about your employer(s)"
            }
          ],
          name: "page3.2",
          visibleIf:
            "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
        },
        {
          elements: [
            {
              type: "panel",
              elements: [
                {
                  type: "panel",
                  elements: [
                    {
                      type: "radiogroup",
                      choices: [
                        {
                          value: "1",
                          text: "Yes"
                        },
                        {
                          value: "0",
                          text: "No"
                        }
                      ],
                      colCount: 2,
                      isRequired: true,
                      name: "member_receive_fringe_benefits",
                      title: " "
                    },
                    {
                      type: "panel",
                      elements: [
                        {
                          type: "text",
                          name: "member_fringe_benefits_type"
                        },
                        {
                          type: "text",
                          name: "member_fringe_benefits_value"
                        },
                        {
                          type: "radiogroup",
                          choices: ["Grossed up", "Not grossed up"],
                          name: "member_fringe_benefits_grossing"
                        }
                      ],
                      name: "panel11",
                      visible: false,
                      visibleIf: "{member_receive_fringe_benefits} = 1"
                    }
                  ],
                  name: "panel2",
                  title: "You",
                  visible: false,
                  visibleIf:
                    "{member_type_of_employment} contains 'All other types of employment'"
                },
                {
                  type: "panel",
                  elements: [
                    {
                      type: "radiogroup",
                      choices: [
                        {
                          value: "1",
                          text: "Yes"
                        },
                        {
                          value: "0",
                          text: "No"
                        }
                      ],
                      colCount: 2,
                      isRequired: true,
                      name: "partner_receive_fringe_benefits",
                      title: " "
                    },
                    {
                      type: "panel",
                      elements: [
                        {
                          type: "text",
                          name: "partner_fringe_benefits_type"
                        },
                        {
                          type: "text",
                          name: "partner_fringe_benefits_value"
                        },
                        {
                          type: "radiogroup",
                          choices: ["Grossed up", "Not grossed up"],
                          name: "partner_fringe_benefits_grossing"
                        }
                      ],
                      name: "panel12",
                      visible: false,
                      visibleIf: "{partner_receive_fringe_benefits} = 1"
                    }
                  ],
                  name: "panel1",
                  startWithNewLine: false,
                  title: "Your Partner",
                  visible: false,
                  visibleIf:
                    "{partner_type_of_employment} contains 'All other types of employment'"
                }
              ],
              name: "panel9",
              title: "Do any of your employers provide you with fringe benefits?"
            }
          ],
          name: "page4",
          visible: false,
          visibleIf:
            "{member_type_of_employment} contains 'All other types of employment' or {partner_type_of_employment} contains 'All other types of employment'"
        },
        {
          elements: [
            {
              type: "panel",
              elements: [
                {
                  type: "panel",
                  elements: [
                    {
                      type: "radiogroup",
                      choices: [
                        {
                          value: "1",
                          text: "Yes"
                        },
                        {
                          value: "0",
                          text: "No"
                        }
                      ],
                      colCount: 2,
                      isRequired: true,
                      name: "member_seasonal_intermittent_or_contract_work",
                      title: " "
                    }
                  ],
                  name: "panel2",
                  title: "You",
                  visible: false,
                  visibleIf: "{member_receives_income_from_employment} = 1"
                },
                {
                  type: "panel",
                  elements: [
                    {
                      type: "radiogroup",
                      choices: [
                        {
                          value: "1",
                          text: "Yes"
                        },
                        {
                          value: "0",
                          text: "No"
                        }
                      ],
                      colCount: 2,
                      isRequired: true,
                      name: "partner_seasonal_intermittent_or_contract_work",
                      title: " "
                    }
                  ],
                  name: "panel1",
                  startWithNewLine: false,
                  title: "Your Partner",
                  visible: false,
                  visibleIf: "{partner_receives_income_from_employment} =1 "
                }
              ],
              name: "panel10",
              title:
                "In the last 6 months, have you done any seasonal, intermittent or contract work?"
            }
          ],
          name: "page5",
          visible: false,
          visibleIf:
            "{member_receives_income_from_employment} = 1 or {partner_receives_income_from_employment} =1 "
        }
      ],
      requiredText: "",
      showQuestionNumbers: "off",
      storeOthersAsComment: false
    }

