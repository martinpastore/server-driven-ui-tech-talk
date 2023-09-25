import { AlertColors, AlertMessages } from "./constants"
import { AlertTypes } from "./enum"

export class Builder {
    static home(config: any) {
        let alert;

        if (config.alert) {
            alert = Builder.alert({ alertType: config.alert.type, alertMessage: config.alert.message });
        }

        return {
            navbar: {
                title: `Welcome ${config.name}`,
                background: config.theme[0],
            },
            alert,
            [config.layout]: {
                items: config.products,
            },
        }
    }

    static alert(config: any) {
        return {
            title: config.title,
            text: AlertMessages[config.alertMessage as keyof typeof AlertMessages],
            color: AlertColors[config.alertType as keyof typeof AlertTypes].color,
            background: AlertColors[config.alertType as keyof typeof AlertTypes].background,
        }
    }
}
