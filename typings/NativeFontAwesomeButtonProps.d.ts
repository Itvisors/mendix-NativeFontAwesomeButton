/**
 * This file was generated from NativeFontAwesomeButton.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Team
 */
import { ActionValue, DynamicValue } from "mendix";

interface CommonProps<Style> {
    name: string;
    style: Style[];
}

export interface NativeFontAwesomeButtonProps<Style> extends CommonProps<Style> {
    caption?: DynamicValue<string>;
    iconName: string;
    iconNamePrefix?: string;
    onClickAction?: ActionValue;
}
