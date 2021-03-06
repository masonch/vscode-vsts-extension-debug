/// <reference types="vss-web-extension-sdk" />

import Service = require("VSS/Service");


export class VSCodeVSTSApp {
    constructor() {

    }

    onLoaded(args: any) {
        this.render();
    }

    private render() {
        let context = VSS.getWebContext();
        $("#user").text(context.user.name);
    }
}

$(() => {
    let app = new VSCodeVSTSApp();
    app.onLoaded(null);
});