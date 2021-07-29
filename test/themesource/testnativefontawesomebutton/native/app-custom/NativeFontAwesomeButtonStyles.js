// Native Font Awesome Button styles
// There is no easy way of getting hold of the theme in a native pluggable widget.
// Overriding from the theme is way easier.

import { border, brand, button, font } from "../../../../theme/native/custom-variables";

export const nativeFontAwesomeButtonCommon = {
    container: {
        borderRadius: border.radiusLarge
    },
    buttonView: {
        paddingVertical: button.container.paddingVertical,
        paddingHorizontal: button.container.paddingHorizontal
    },
    iconWrapper: {
        marginRight: 10
    },
    icon: {
        fontSize: font.sizeSmall
    },
    label: {
        fontSize: font.sizeSmall
    }
};

export const nativeFontAwesomeButtonPrimary = {
    ...nativeFontAwesomeButtonCommon,
    container: {
        borderColor: brand.primary,
        backgroundColor: brand.primary
    },
    icon: {
        color: "#FFF"
    },
    label: {
        color: "#FFF"
    }
};

export const nativeFontAwesomeButtonSecondary = {
    ...nativeFontAwesomeButtonCommon,
    container: {
        borderColor: brand.primary,
        backgroundColor: "transparent"
    },
    icon: {
        color: brand.primary
    },
    label: {
        color: brand.primary
    }
};

export const nativeFontAwesomeButtonSuccess = {
    ...nativeFontAwesomeButtonCommon,
    container: {
        borderColor: brand.success,
        backgroundColor: brand.success
    },
    icon: {
        color: "#FFF"
    },
    label: {
        color: "#FFF"
    }
};

export const nativeFontAwesomeButtonWarning = {
    ...nativeFontAwesomeButtonCommon,
    container: {
        borderColor: brand.warning,
        backgroundColor: brand.warning
    },
    icon: {
        color: "#FFF"
    },
    label: {
        color: "#FFF"
    }
};

export const nativeFontAwesomeButtonDanger = {
    ...nativeFontAwesomeButtonCommon,
    container: {
        borderColor: brand.danger,
        backgroundColor: brand.danger
    },
    icon: {
        color: "#FFF"
    },
    label: {
        color: "#FFF"
    }
};

export const nativeFontAwesomeButtonDashboardCommon = {
    container: {
        borderWidth: 0,
        borderRadius: 0,
        backgroundColor: "transparent",
        paddingVertical: 5,
        paddingHorizontal: 0,
        height: 80
    },
    buttonView: {
        flexDirection: "column"
    },
    iconWrapper: {
        marginRight: 0
    }
};

export const nativeFontAwesomeButtonDashboardPrimary = {
    ...nativeFontAwesomeButtonDashboardCommon,
    icon: {
        color: brand.primary,
        fontSize: font.sizeH1
    },
    label: {
        color: brand.primary
    }
};

export const nativeFontAwesomeButtonDashboardSuccess = {
    ...nativeFontAwesomeButtonDashboardCommon,
    icon: {
        color: brand.success,
        fontSize: font.sizeH1
    },
    label: {
        color: brand.success
    }
};

export const nativeFontAwesomeButtonDashboardWarning = {
    ...nativeFontAwesomeButtonDashboardCommon,
    icon: {
        color: brand.warning,
        fontSize: font.sizeH1
    },
    label: {
        color: brand.warning
    }
};

export const nativeFontAwesomeButtonDashboardDanger = {
    ...nativeFontAwesomeButtonDashboardCommon,
    icon: {
        color: brand.danger,
        fontSize: font.sizeH1
    },
    label: {
        color: brand.danger
    }
};

export const nativeFontAwesomeButtonTransparentCommon = {
    ...nativeFontAwesomeButtonCommon,
    container: {
        borderColor: "transparent",
        backgroundColor: "transparent"
    }
};

export const nativeFontAwesomeButtonTransparentPrimary = {
    ...nativeFontAwesomeButtonTransparentCommon,
    icon: {
        color: brand.primary
    },
    label: {
        color: brand.primary
    }
};

export const nativeFontAwesomeButtonTransparentSuccess = {
    ...nativeFontAwesomeButtonTransparentCommon,
    icon: {
        color: brand.success
    },
    label: {
        color: brand.success
    }
};

export const nativeFontAwesomeButtonTransparentWarning = {
    ...nativeFontAwesomeButtonTransparentCommon,
    icon: {
        color: brand.warning
    },
    label: {
        color: brand.warning
    }
};

export const nativeFontAwesomeButtonTransparentDanger = {
    ...nativeFontAwesomeButtonTransparentCommon,
    icon: {
        color: brand.danger
    },
    label: {
        color: brand.danger
    }
};

