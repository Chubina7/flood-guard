import alertSender from "./alertSender";

let prevHumidity
let prevTemperature
let message
let type

const premiumAlertSystem = (rawData) => {
    let rawHumidity = rawData.Humidity
    let rawTemperature = rawData.Temperature

    // Check, if the data is changed or not
    if (rawHumidity === prevHumidity && rawTemperature === prevTemperature) return null

    // If any of the data changed, then return different type of messages
    if (rawHumidity >= 100) {
        message = "მიიღე ზომები! სტიქიური მოვლენა გარდაუვალია! დატოვე ადგილი!"
        type = "warn"
        prevHumidity = rawHumidity
        prevTemperature = rawTemperature
    } else if (rawHumidity >= 90) {
        message = "მობილიზდი! მდგომარეობა უარესდება!"
        type = "info"
        prevHumidity = rawHumidity
        prevTemperature = rawTemperature
    } else if (rawHumidity >= 60) {
        message = "ყურადღება! უხვი ნალექის რაოდენობამ შესაძლოა წყალდიდობის საფრთხე შექმნას"
        type = "info"
        prevHumidity = rawHumidity
        prevTemperature = rawTemperature
    }

    return alertSender(message, type)
}

export default premiumAlertSystem