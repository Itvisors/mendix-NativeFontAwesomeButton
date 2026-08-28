import { hidePropertyIn } from "@mendix/pluggable-widgets-tools";

export function getProperties(values, defaultProperties) {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.

    if (!values.a11yEnabled) {
        hidePropertyIn(defaultProperties, values, "a11yLabel");
        hidePropertyIn(defaultProperties, values, "a11yHint");
    }

    return defaultProperties;
}

export function check(values) {
    const errors = [];
    // Add errors to the above array to throw errors in Studio and Studio Pro.
    /* Example
    if (values.myProperty !== "custom") {
        errors.push({
            property: `myProperty`,
            message: `The value of 'myProperty' is different of 'custom'.`,
            url: "https://github.com/myrepo/mywidget"
        });
    }
    */
    return errors;
}

export const getPreview = (values, _isDarkMode, _version) => {
    // data:image/png;base64,
    const imageData =
        "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";

    let text = values.iconName;

    // Place the icon name prefix behind the icon so at least the icon name is shown when space is limited
    if (values.iconNamePrefix) {
        text += " (" + values.iconNamePrefix + ")";
    }
    if (values.caption) {
        text += ": " + values.caption;
    }

    const result = {
        type: "RowLayout",
        borders: true,
        borderRadius: 1,
        padding: 1,
        columnSize: "grow",
        children: [
            {
                type: "Container",
                grow: 0,
                children: [{ type: "Image", data: imageData, width: 16 }]
            },
            {
                type: "Container",
                grow: 1,
                children: [{ type: "Text", content: text }]
            }
        ]
    };

    return result;
};
