import * as Survey from "survey-react";

export const Nominativo = () => (
    Survey
    .ComponentCollection
    .Instance
    .add({
        name: "nominativo",
        title: "Nominativo",
        elementsJSON: [
            {
                type: "text",
                name: "nome",
                valueName: "nome",
                title: "Nome",
                isRequired: true
            }, {
                type: "text",
                name: "cognome",
                title: "Cognome",
                isRequired: true,
                startWithNewLine: false
            },
            //Adding new middle name question
            {
                type: "text",
                name: "middleName",
                title: "Middle Name",
                startWithNewLine: false,
                //Initially makes middle name invisible
                visible: false
            }
        ]

    })
)

