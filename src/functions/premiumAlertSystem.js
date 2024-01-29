import alertSender from "./alertSender";

let prevHumidity
let prevTemperature
let message
let type

const premiumAlertSystem = (rawData) => {
    let rawHumidity = rawData.Humidity
    let rawTemperature = rawData.Temperature

    if (rawHumidity >= 100 && rawHumidity !== prevHumidity) {
        message = "მიიღე ზომები! სტიქიური მოვლენა გარდაუვალია! დატოვე ადგილი!"
        type = "warn"
        prevHumidity = rawHumidity
    } else if (rawHumidity >= 90 && rawHumidity !== prevHumidity) {
        message = "მობილიზდი! მდგომარეობა უარესდება!"
        type = "info"
        prevHumidity = rawHumidity
    } else if (rawHumidity >= 60 && rawHumidity !== prevHumidity) {
        message = "ყურადღება! უხვი ნალექის რაოდენობამ შესაძლოა წყალდიდობის საფრთხე შექმნას"
        type = "info"
        prevHumidity = rawHumidity
    } else if (rawHumidity === prevHumidity) { // სატესტო ნოტიფიკაცია; რომ უფრო თვალსაჩინო იყოს კოდის მუშაობის სისტემატიურობა
        message = `ტენიანობა არის ${rawHumidity}mm, ტემპერატურა კი ${rawTemperature}°`
        type = "info"
        prevHumidity = rawHumidity
    }

    return alertSender(message, type)

}

export default premiumAlertSystem