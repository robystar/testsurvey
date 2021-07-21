export const json = {
    "pages": [
        {
            "name": "Pagina richiedenti",
            "elements": [
                {
                    "type": "paneldynamic",
                    "name": "richiedenti",
                    "title": "Aggiungi un richiedente",
                    "templateTitle": "Informazioni su: {panel.Richiedente.nome} {panel.Richiedente.cognome}",
                    "templateElements": [
                        {
                            name: "Richiedente",
                            type: "anagrafica",
                            showMiddleName: true
                        }
                    ],
                    "panelCount": 1,
                    "panelAddText": "Aggiungi un richiedente",
                    "panelRemoveText": "Elimina richiedente"
                }
            ]
        }
    ]
};