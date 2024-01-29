import alertSender from "./alertSender";

const premiumAlertSystem = (params) => {

    return alertSender(`${params}`, "info")
}

export default premiumAlertSystem