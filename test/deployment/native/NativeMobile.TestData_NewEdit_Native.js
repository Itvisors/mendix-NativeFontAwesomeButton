import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";

import { Button } from "mendix/Button";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { itvisors_nativefontawesomebutton_NativeFontAwesomeButton } from "externalWidgets";
import { TextBox } from "mendix/TextBox";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent } from "./Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "../../theme/styles.js";

const { $Container, $DataView, $TextBox, $itvisors_nativefontawesomebutton_NativeFontAwesomeButton, $Button } = asPluginWidgets({ Container, DataView, TextBox, itvisors_nativefontawesomebutton_NativeFontAwesomeButton, Button });

const main = () => [
    <$Container key="0_12"
        $widgetId="0_12"
        name="container5"
        style={[ styles.Container, styles.spacingInnerTopLarge, styles.spacingInnerBottomLarge, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.flexMain, styles.backgroundPrimary ]}
        content={[
            <$DataView key="0_13"
                $widgetId="0_13"
                name="dataView2"
                style={[ styles.DataView ]}
                object={AssociationObjectProperty({
                    scope: "$pageParameter"
                })}
                content={[
                    <$TextBox key="0_14"
                        $widgetId="0_14"
                        name="textBox1"
                        style={[ styles.TextBox, styles.TextBoxVertical ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_13",
                            path: "",
                            entity: "NativeMobile.TestData",
                            attribute: "Name",
                            friendlyId: "NativeMobile.TestData_NewEdit_Native.textBox1",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: null,
                            formatting: { }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ], [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Name" ], [ "Name" ] ] ), "friendlyId": "NativeMobile.TestData_NewEdit_Native.textBox1" }
                        })}
                        maxLength={200}
                        keyboardType={"default"} />,
                    <$TextBox key="0_15"
                        $widgetId="0_15"
                        name="textBox2"
                        style={[ styles.TextBox, styles.TextBoxVertical, styles.spacingOuterTop ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_13",
                            path: "",
                            entity: "NativeMobile.TestData",
                            attribute: "TestInteger",
                            friendlyId: "NativeMobile.TestData_NewEdit_Native.textBox2",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: null,
                            formatting: {
                                numberFormat: {
                                    groupDigits: false
                                }
                            }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ], [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Test integer" ], [ "Test integer" ] ] ), "friendlyId": "NativeMobile.TestData_NewEdit_Native.textBox2" }
                        })}
                        maxLength={undefined}
                        keyboardType={"number-pad"} />,
                    <$itvisors_nativefontawesomebutton_NativeFontAwesomeButton key="0_16"
                        $widgetId="0_16"
                        name="nativeFontAwesomeButton1"
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Save" ], [ "Opslaan" ] ] ), "friendlyId": "NativeMobile.TestData_NewEdit_Native.nativeFontAwesomeButton1" }
                        })}
                        iconName={"faCheck"}
                        iconNamePrefix={""}
                        onClickAction={ActionProperty({
                            action: { "type": "callNanoflow", "argMap": { "TestData": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/marcel/Documents/GitHub/mendix-NativeFontAwesomeButton/test/deployment/native/nanoflows/NativeMobile.ACT_TestData_Save").ACT_TestData_Save } },
                            abortOnServerValidation: false
                        })}
                        style={[ styles.itvisors_nativefontawesomebutton_NativeFontAwesomeButton ]} />,
                    <$Button key="0_17"
                        $widgetId="0_17"
                        name="actionButton1"
                        style={[ styles.ActionButton, styles.spacingOuterTop ]}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Save" ], [ "Opslaan Mx" ] ] ), "friendlyId": "NativeMobile.TestData_NewEdit_Native.actionButton1" }
                        })}
                        icon={undefined}
                        onClick={ActionProperty({
                            action: { "type": "callNanoflow", "argMap": { "TestData": { "widget": "$pageParameter", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/marcel/Documents/GitHub/mendix-NativeFontAwesomeButton/test/deployment/native/nanoflows/NativeMobile.ACT_TestData_Save").ACT_TestData_Save } },
                            abortOnServerValidation: false
                        })}
                        disabledDuringAction={true} />
                ]} />
        ]} />
];

export const header = () => null;

export const $$title = t([
    "Details",
    "Details"
] );

export const $$style = [];

export const $$page = () => mainContent(main);
