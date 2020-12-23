import { Platform } from "react-native";
import * as custom from "../app/custom-variables";
import adjustFont, { height, width } from "./helpers/_functions/adjustfont";
import { anyColorToRgbString, setContrastScale } from "./helpers/_functions/convertcolors";
import merge from "./helpers/_functions/mergeobjects";
//
//
// == Global variables
// ## Variables to be used during styling
// -------------------------------------------------------------------------------------------------------------------//
// System defined read-only values
export const deviceHeight = height;
export const deviceWidth = width;
//
// Brand Style
let brand = {
    primary: "#0595DB",
    success: "#76CA02",
    warning: "#f99b1d",
    danger: "#ed1c24",
    info: "",
    primaryLight: `rgba(${anyColorToRgbString("#0595DB")}, 0.14)`,
    successLight: `rgba(${anyColorToRgbString("#76CA02")}, 0.14)`,
    warningLight: `rgba(${anyColorToRgbString("#f99b1d")}, 0.14)`,
    dangerLight: `rgba(${anyColorToRgbString("#ed1c24")}, 0.14)`,
    infoLight: ""
};
brand = merge(brand, custom.brand || {});
//
// Background colors
let background = {
    primary: "#FFF",
    gray: "#c6c6cc",
    brandPrimary: brand.primary,
    brandSuccess: brand.success,
    brandWarning: brand.warning,
    brandDanger: brand.danger,
    brandInfo: brand.info
};
background = merge(background, custom.background || {});
//
// Contrast (Gray) colors based on background.primary
let contrast = {
    highest: setContrastScale(0.95, background.primary),
    higher: setContrastScale(0.8, background.primary),
    high: setContrastScale(0.65, background.primary),
    regular: setContrastScale(0.5, background.primary),
    low: setContrastScale(0.35, background.primary),
    lower: setContrastScale(0.2, background.primary),
    lowest: setContrastScale(0.05, background.primary)
};
contrast = merge(contrast, custom.contrast || {});
//
// Border Style
let border = {
    color: setContrastScale(0.17, background.primary),
    width: 1,
    radiusSmall: 5,
    radiusLarge: 5
};
border = merge(border, custom.border || {});
//
// Font Styles
let font = {
    size: adjustFont(14),
    sizeSmall: adjustFont(12),
    sizeLarge: adjustFont(18),
    sizeH1: adjustFont(31),
    sizeH2: adjustFont(26),
    sizeH3: adjustFont(24),
    sizeH4: adjustFont(18),
    sizeH5: adjustFont(14),
    sizeH6: adjustFont(12),
    lineHeight: adjustFont(14) * 1.5,
    lineHeightSmall: adjustFont(12) * 1.5,
    lineHeightLarge: adjustFont(16) * 1.5,
    lineHeightH1: adjustFont(40) * 1.5,
    lineHeightH2: adjustFont(34) * 1.5,
    lineHeightH3: adjustFont(28) * 1.5,
    lineHeightH4: adjustFont(24) * 1.5,
    lineHeightH5: adjustFont(20) * 1.5,
    lineHeightH6: adjustFont(16) * 1.5,
    colorTitle: "",
    colorParagraph: "",
    colorDisabled: "",
    weightLight: "100",
    weightNormal: "normal",
    weightSemiBold: "600",
    weightBold: "bold",
    family: Platform.select({ ios: "System", android: "normal" })
};
font = merge(font, custom.font || {});
//
// Spacing
let spacing = {
    smallest: 5,
    smaller: 10,
    small: 15,
    regular: 20,
    large: 25,
    larger: 30,
    largest: 40
};
spacing = merge(spacing, custom.spacing || {});
//
// Button Styles
let button = {
    container: {
        rippleColor: contrast.lowest,
        borderRadius: border.radiusLarge,
        minWidth: 48,
        minHeight: 48,
        paddingVertical: spacing.small,
        paddingHorizontal: spacing.small
    },
    containerDisabled: {
        borderColor: border.color,
        backgroundColor: border.color
    },
    icon: {
        size: font.sizeSmall
    },
    iconDisabled: {
        color: font.colorDisabled
    },
    caption: {
        fontSize: font.sizeSmall,
        fontWeight: font.weightBold
    },
    captionDisabled: {
        color: font.colorDisabled
    },
    header: {
        color: contrast.highest,
        borderColor: "transparent",
        backgroundColor: "transparent",
        fontSize: font.sizeSmall,
        fontSizeIcon: font.sizeSmall,
        paddingLeft: 0,
        paddingRight: 10
    },
    primary: {
        color: "#FFF",
        borderColor: brand.primary,
        backgroundColor: brand.primary
    },
    secondary: {
        color: brand.primary,
        borderColor: brand.primary,
        backgroundColor: "transparent",
        inversedColor: "#FFF"
    },
    success: {
        color: "#FFF",
        borderColor: brand.success,
        backgroundColor: brand.success
    },
    warning: {
        color: "#FFF",
        borderColor: brand.warning,
        backgroundColor: brand.warning
    },
    danger: {
        color: "#FFF",
        borderColor: brand.danger,
        backgroundColor: brand.danger
    }
};
button = merge(button, custom.button || {});
//
// Input Styles
let input = {
    label: {
        numberOfLines: 1,
        color: font.colorTitle,
        fontSize: font.size,
        textAlign: "left"
    },
    labelDisabled: {
        color: font.colorTitle
    },
    input: {
        color: font.colorTitle,
        borderColor: contrast.lower,
        backgroundColor: background.primary,
        selectionColor: contrast.lower,
        placeholderTextColor: contrast.regular,
        fontSize: font.size,
        lineHeight: font.lineHeight,
        borderWidth: border.width,
        borderRadius: border.radiusSmall,
        minWidth: 48,
        minHeight: 48,
        paddingVertical: spacing.small,
        paddingHorizontal: spacing.small
    },
    inputContainer: {
        underlayColor: `rgba(${anyColorToRgbString(contrast.low)},0.4)`
    },
    inputDisabled: {
        color: font.colorDisabled,
        borderColor: border.color,
        backgroundColor: background.gray
    },
    inputError: {
        color: brand.danger,
        borderColor: brand.danger,
        placeholderTextColor: brand.danger,
        backgroundColor: brand.dangerLight
    },
    validationMessage: {
        color: brand.danger,
        fontSize: font.size
    },
    // Dropdown & Reference selector only
    valueContainer: {
        rippleColor: contrast.lowest
    },
    itemContainer: {
        maxWidth: 500,
        paddingVertical: 12,
        paddingHorizontal: spacing.regular,
        backgroundColor: background.primary
    },
    item: {
        color: font.colorTitle,
        fontSize: font.size
    },
    selectedItemContainer: {
        borderWidth: border.width,
        borderRadius: border.radiusLarge,
        borderColor: brand.primary,
        backgroundColor: "transparent"
    },
    selectedItem: {
        color: font.colorTitle,
        fontSize: font.size
    }
};
input = merge(input, custom.input || {});
//
// Image Styles
let image = {
    image: {
        small: 24,
        medium: 40,
        large: 56,
        larger: 72
    },
    imageDisabled: {
        opacity: 0.6
    },
    icon: 24
};
image = merge(image, custom.image || {});
//
// Navigation Styles
let navigation = {
    statusBar: {
        backgroundColor: background.primary,
        barStyle: custom.darkMode ? "light-content" : "dark-content"
    },
    topBar: {
        backgroundColor: background.primary,
        backButtonColor: contrast.highest,
        titleColor: contrast.highest,
        titleFontSize: Platform.select({ android: font.sizeH4, ios: font.sizeH5 })
    },
    bottomBar: {
        color: contrast.high,
        selectedTextColor: contrast.high,
        selectedIconColor: brand.primary,
        backgroundColor: background.primary,
        fontSize: font.sizeSmall,
        iconSize: font.sizeSmall
    },
    progressOverlay: {
        color: font.colorTitle,
        activityIndicatorColor: font.colorTitle,
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        containerBackgroundColor: background.gray,
        fontSize: font.size,
        borderRadius: border.radiusSmall,
        elevation: 1.5,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 10 // Only for iOS
    }
};
navigation = merge(navigation, custom.navigation || {});
//
// Container Styles
let container = {
    containerDisabled: {
        opacity: 0.6
    }
};
container = merge(container, custom.container || {});
//
// Badge Styles
let badge = {
    fontWeight: font.weightBold,
    borderRadius: 30,
    paddingVertical: 3,
    paddingHorizontal: spacing.smaller,
    default: {
        color: contrast.higher,
        backgroundColor: contrast.lower
    },
    primary: {
        color: brand.primary,
        backgroundColor: brand.primaryLight
    },
    success: {
        color: brand.success,
        backgroundColor: brand.successLight
    },
    warning: {
        color: brand.warning,
        backgroundColor: brand.warningLight
    },
    danger: {
        color: brand.danger,
        backgroundColor: brand.dangerLight
    }
};
badge = merge(badge, custom.badge || {});
//
// Tabcontainer Styles
let tabContainer = {
    tabBar: {
        pressColor: contrast.lower,
        backgroundColor: background.primary
    },
    tab: {
        paddingVertical: spacing.smaller
    },
    indicator: {
        backgroundColor: brand.primary,
        height: Platform.select({ ios: 2, android: 2 })
    },
    label: {
        color: contrast.highest,
        fontSize: font.size,
        fontWeight: font.weightBold,
        textTransform: "uppercase"
    },
    activeLabel: {
        color: brand.primary,
        fontSize: font.size,
        fontWeight: font.weightBold,
        textTransform: "uppercase"
    },
    badgeContainer: {
        borderRadius: badge.borderRadius,
        backgroundColor: badge.default.backgroundColor,
        paddingVertical: badge.paddingVertical,
        paddingHorizontal: badge.paddingHorizontal,
        marginLeft: 8
    },
    badgeCaption: {
        fontSize: font.size,
        color: badge.default.color,
        fontWeight: badge.fontWeight
    }
};
tabContainer = merge(tabContainer, custom.tabContainer || {});
//
// Listview Styles
let listView = {
    listItemDisabled: {
        opacity: 0.6
    },
    border: {
        color: border.color,
        width: border.width
    }
};
listView = merge(listView, custom.listView || {});
//
// Layoutgrid Styles
let layoutGrid = {
    gutterSize: 15
};
layoutGrid = merge(layoutGrid, custom.layoutGrid || {});
//
//
// Floating Action Button Styles
let floatingActionButton = {
    container: {
        margin: 30
    },
    button: {
        size: 50,
        rippleColor: contrast.lowest,
        borderColor: brand.primary,
        backgroundColor: brand.primary
    },
    buttonIcon: {
        size: font.sizeLarge,
        color: contrast.lowest
    },
    secondaryButton: {
        size: 30,
        backgroundColor: background.gray
    },
    secondaryButtonIcon: {
        size: font.sizeSmall,
        color: contrast.high
    },
    secondaryButtonCaption: {
        color: font.colorTitle,
        fontSize: font.size
    },
    secondaryButtonCaptionContainer: {
        backgroundColor: background.primary
    }
};
floatingActionButton = merge(floatingActionButton, custom.floatingActionButton || {});
//
// Intro Screen Styles
let introScreen = {
    fullscreenContainer: {
        backgroundColor: background.primary
    },
    popupContainer: {
        paddingVertical: 150,
        paddingHorizontal: 50,
        backgroundColor: `rgba(0, 0, 0, 0.5)`
    },
    pagination: {
        text: {
            color: font.colorTitle,
            fontSize: font.size
        },
        dotStyle: {
            size: spacing.small,
            backgroundColor: contrast.lower
        },
        activeDotStyle: {
            size: spacing.small,
            backgroundColor: font.colorTitle
        }
    },
    button: {
        icon: {
            color: font.colorTitle,
            size: button.icon.size
        },
        caption: {
            color: font.colorTitle,
            fontSize: button.caption.fontSize,
            fontWeight: font.weightBold,
            textTransform: "uppercase",
            paddingHorizontal: spacing.smallest
        }
    },
    buttonPaginationAbove: {
        container: {
            paddingVertical: spacing.regular,
            backgroundColor: button.primary.backgroundColor
        }
    }
};
introScreen = merge(introScreen, custom.introScreen || {});
//
// List View Swipe Styles
let listViewSwipe = {
    leftAction: {
        panelSize: 144,
        panelSizeSmall: 108,
        panelSizeLarge: 216,
        backgroundColor: background.primary
    },
    rightAction: {
        panelSize: 144,
        panelSizeSmall: 108,
        panelSizeLarge: 216,
        backgroundColor: background.primary
    }
};
listViewSwipe = merge(listViewSwipe, custom.listViewSwipe || {});
//
// Progress Bar Styles
let progressBar = {
    bar: {
        height: 8,
        heightSmall: 4,
        heightLarge: 12,
        backgroundColor: contrast.lowest
    },
    fill: {
        backgroundColor: brand.primary
    }
};
progressBar = merge(progressBar, custom.progressBar || {});
//
// Progress Circle Styles
let progressCircle = {
    circle: {
        size: 64
    },
    fill: {
        width: 4,
        lineCapRounded: true,
        backgroundColor: brand.primary
    },
    text: {
        color: contrast.regular,
        fontSize: font.size,
        fontWeight: font.weightSemiBold
    }
};
progressCircle = merge(progressCircle, custom.progressCircle || {});
//
// Rating Styles
let rating = {
    containerDisabled: {
        opacity: 0.5
    },
    icon: {
        size: 24,
        color: contrast.lower,
        selectedColor: brand.warning
    }
};
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
rating = merge(rating, custom.rating || {});
//
// (Range)Slider Styles
let slider = {
    track: {
        height: 4,
        backgroundColor: contrast.lowest
    },
    trackDisabled: {
        backgroundColor: contrast.lower,
        opacity: 0.4
    },
    highlight: {
        backgroundColor: brand.primary
    },
    highlightDisabled: {
        backgroundColor: brand.primary
    },
    marker: {
        size: 24,
        borderColor: contrast.lowest,
        backgroundColor: background.gray
    },
    markerActive: {
        size: 32
    },
    markerDisabled: {
        size: 24,
        borderColor: contrast.lowest,
        backgroundColor: background.gray
    }
};
slider = merge(slider, custom.slider || {});
//
export { brand, background, border, button, contrast, font, input, image, layoutGrid, listView, navigation, spacing, container, tabContainer, badge, floatingActionButton, introScreen, listViewSwipe, progressBar, progressCircle, slider };
