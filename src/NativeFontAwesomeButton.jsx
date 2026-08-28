import { FontAwesomeButton } from "./components/FontAwesomeButton";
import { useCallback } from "react";

export function NativeFontAwesomeButton(props) {
    const { onClickAction } = props;
    const onClickHandler = useCallback(() => {
        if (onClickAction && onClickAction.canExecute && !onClickAction.isExecuting) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    return (
        <FontAwesomeButton
            style={props.style}
            onClick={onClickAction ? onClickHandler : undefined}
            onClickExecuting={onClickAction && onClickAction.canExecute && onClickAction.isExecuting}
            caption={props.caption?.value || ""}
            iconName={props.iconName}
            iconNamePrefix={props.iconNamePrefix}
            widgetName={props.name}
            a11yEnabled={props.a11yEnabled}
            a11yLabel={props.a11yLabel?.value || ""}
            a11yHint={props.a11yHint?.value || ""}
        />
    );
}
