import { Pressable, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { defaultStyle } from "../ui/styles";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import { useMemo } from "react";

library.add(fab, far, fas);

export function FontAwesomeButton({
    iconName,
    iconNamePrefix,
    caption,
    onClick,
    onClickExecuting,
    style,
    widgetName,
    a11yEnabled,
    a11yLabel,
    a11yHint
}) {
    const styles = mergeNativeStyles(defaultStyle, style);

    const renderContent = useMemo(() => {
        // No value means solid.
        var iconStyle = iconNamePrefix ? iconNamePrefix : "fas";

        // Define the props as an object so the style can be included by spreading the props onto the JSX element.
        // Take size from the icon style.
        // Default style has fontSize, but Mendix classes use size
        const faProps = {
            icon: [iconStyle, iconName],
            size: styles.icon.fontSize ? styles.icon.fontSize : styles.icon.size,
            color: styles.icon.color,
            testID: `${widgetName}$icon`
        };

        const fontAwesomeIcon = <FontAwesomeIcon {...faProps} />;
        var buttonView;
        if (caption) {
            buttonView = (
                <View style={styles.buttonView} testID={widgetName}>
                    <View style={styles.iconWrapper}>{fontAwesomeIcon}</View>
                    <Text style={styles.label} testID={`${widgetName}$label`}>
                        {caption}
                    </Text>
                </View>
            );
        } else {
            buttonView = (
                <View style={styles.buttonView} testID={widgetName}>
                    {fontAwesomeIcon}
                </View>
            );
        }

        return buttonView;
    }, [styles, iconName, iconNamePrefix, caption, widgetName]);

    if (onClick) {
        return (
            <Pressable
                onPress={onClick}
                style={({ pressed }) => [
                    styles.container,
                    pressed || onClickExecuting ? styles.pressablePressed : styles.pressableNormal
                ]}
                accessible={a11yEnabled}
                accessibilityHint={a11yHint}
                accessibilityLabel={a11yLabel}
            >
                {renderContent}
            </Pressable>
        );
    } else {
        return (
            <View
                style={styles.container}
                accessible={a11yEnabled}
                accessibilityHint={a11yHint}
                accessibilityLabel={a11yLabel}
            >
                {renderContent}
            </View>
        );
    }
}
