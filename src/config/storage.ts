// Storage configuration


// Soil moisture
const sensors = [
    {
        name: "Capacity soil moisture sensor",
        metric: "Soil Moisture",
        unit: "percent",
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
    devices
}