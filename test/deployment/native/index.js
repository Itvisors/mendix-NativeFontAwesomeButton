import { NativeUI, startApp, t } from "mendix/native";
import { navigationStyle } from "../../theme/styles.js";

startApp({
    "cacheBust": "637069771969362164",
    "languages": [
        "en_US",
        "nl_NL"
    ],
    "navigationStyle": navigationStyle,
    "getTabs": () => ( [
        {
            "pageName": "NativeMobile.Home_Native",
            "caption": t( [
                "Home",
                "Home"
            ] ),
            "icon": "glyphicon-home"
        }
    ] ),
    "onStartupNativeClient": () => {
        NativeUI.registerPage("NativeMobile.Home_Native", require("./NativeMobile.Home_Native"), {"headerRegionName":"header","showBottomBar":true});
        NativeUI.registerPage("NativeMobile.TestData_NewEdit_Native", require("./NativeMobile.TestData_NewEdit_Native"), {"headerRegionName":"header","showBottomBar":true});
        NativeUI.registerPage("NativeMobile.Login", require("./NativeMobile.Login"), {"headerRegionName":"header","showBottomBar":true});
    }
});