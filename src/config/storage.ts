// Storage configuration

const structures = {
    soilMoistureStructure: {
        "name": "soilMoisture",
        "description": "",
        "slug": "soilMoisture",
        "webhooks": null,
        "recordFieldStructures": [
            {
            "required": false,
            "unique": false,
            "description": "",
            "comment": "",
            "hashed": false,
            "name": "value",
            "slug": "value",
            "type": "NUMBER"
            },
            {
            "required": false,
            "unique": false,
            "description": "",
            "comment": "",
            "hashed": false,
            "name": "unit",
            "slug": "unit",
            "type": "TEXT"
            }
        ]
    }
}

const sensors = [
    {
        name: "Capacity soil moisture sensor",
        metric: "Soil Moisture",
        unit: "percent",
        structure: structures.soilMoistureStructure,
        record: {
            query: "/soilmoisture",
            // write: ""
        }
    },
    {
        name: "",
        metric: "Humidity",
        unit: "percent",
        record: {
            query: null,
            // write: null
        }
    },
    {
        name: "",
        metric: "Temperature",
        unit: "degree",
        record: {
            query: null,
            // write: null
        }
    }
]


const devices = [
    {
        name: "",
        type: "Esp8266"
    }
]


export {
    sensors,
    devices,
}