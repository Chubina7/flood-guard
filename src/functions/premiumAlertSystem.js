import alertSender from "./alertSender";

let prevHumidity
let prevTemperature
let message

const premiumAlertSystem = (rawData) => {
    let rawHumidity = rawData.Humidity
    let rawTemperature = rawData.Temperature

    if (rawHumidity !== prevHumidity || rawTemperature !== prevTemperature) {
        if (rawHumidity == 22 && rawTemperature == 23) {
            message = "ერთი ქეისი ტესტი"
        }
        prevHumidity = rawHumidity
        prevTemperature = rawTemperature
        return alertSender(message, "info")
    }
}

export default premiumAlertSystem