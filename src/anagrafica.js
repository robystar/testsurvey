import * as Survey from "survey-react";

const jsonElements = [
      {
       "type": "text",
       "name": "cognome",
       "startWithNewLine": false,
       "title": "Cognome",
       "isRequired": true
      },
      {
       "type": "text",
       "name": "nome",
       "startWithNewLine": false,
       "title": "Nome",
       "isRequired": true
      },
      {
       "type": "radiogroup",
       "name": "sesso",
       "startWithNewLine": false,
       "title": "Sesso",
       "isRequired": true,
       "choices": [
        "M",
        "F"
       ],
       "colCount": 2
      },
      {
       "type": "dropdown",
       "name": "comune_nato",
       "title": "Comune/stato di nascita",
       "isRequired": true,
       "choices": [
        {
         "value": "roma",
         "text": "Roma"
        },
        {
         "value": "genova",
         "text": "Genova"
        },
        {
         "value": "milano",
         "text": "Milano"
        },
        {
         "value": "napoli",
         "text": "Napoli"
        }
       ],
       "otherPlaceHolder": "ytutyu",
       "otherText": "ytuty",
       "showOptionsCaption": false
      },
      {
       "type": "text",
       "name": "prov_nato",
       "width": "200px",
       "minWidth": "200px",
       "maxWidth": "200px",
       "startWithNewLine": false,
       "title": "Provincia",
       "isRequired": true
      },
      {
       "type": "text",
       "name": "data_nato",
       "width": "200px",
       "minWidth": "200px",
       "maxWidth": "200px",
       "startWithNewLine": false,
       "title": "Data di nascita",
       "isRequired": true,
       "inputType": "date"
      },
      {
       "type": "dropdown",
       "name": "comune",
       "title": "Comune/stato di residenza",
       "hideNumber": true,
       "isRequired": true,
       "choices": [
        {
         "value": "roma",
         "text": "Roma"
        },
        {
         "value": "genova",
         "text": "Genova"
        },
        {
         "value": "milano",
         "text": "Milano"
        },
        {
         "value": "napoli",
         "text": "Napoli"
        }
       ],
       "hasOther": true,
       "showOptionsCaption": false
      },
      {
       "type": "text",
       "name": "prov",
       "width": "200px",
       "minWidth": "200px",
       "maxWidth": "200px",
       "startWithNewLine": false,
       "title": "Provincia",
       "isRequired": true
      },
      {
       "type": "text",
       "name": "cap",
       "width": "200px",
       "minWidth": "200px",
       "maxWidth": "200px",
       "startWithNewLine": false,
       "title": "Cap",
       "isRequired": false,
      }
     ]

export const Anagrafica = () => (
    Survey
    .ComponentCollection
    .Instance
    .add({
        name: "anagrafica",
        title: "Anagrafica",
        elementsJSON: jsonElements
    })
)
