export const json = {
    "pages": [
        {
            "name": "page1",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "parenti",
                    "title": "Aggiungi un parente",
                    "renderMode": "progressTop",
                    "templateTitle": "Informazioni su: {panel.Parente.nome} {panel.Parente.cognome}",
                    "templateElements": [
                        {
                            name: "Parente",
                            type: "anagrafica",
                            showMiddleName: true
                        }
                    ],
                    "panelCount": 2,
                    "panelAddText": "Aggiungi un parente",
                    "panelRemoveText": "Elimina parente"
                }
            ]
        }
    ]
};