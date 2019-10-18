import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { NanoflowObjectProperty } from "mendix/NanoflowObjectProperty";

import { Button } from "mendix/Button";
import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { Text } from "mendix/Text";
import { TextBox } from "mendix/TextBox";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent } from "./Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "../../theme/styles.js";

const { $Container, $Text, $DataView, $TextBox, $ConditionalVisibilityWrapper, $Button } = asPluginWidgets({ Container, Text, DataView, TextBox, ConditionalVisibilityWrapper, Button });

const main = () => [
    <$Container key="0_18"
        $widgetId="0_18"
        name="container1"
        style={[ styles.Container, styles.spacingInnerTopLarge, styles.spacingInnerBottomLarge, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.flexMain, styles.justifyContentCenter ]}
        content={[
            <$Container key="0_19"
                $widgetId="0_19"
                name="container2"
                style={[ styles.Container, styles.spacingOuterBottomLarge ]}
                content={[
                    <$Text key="0_20"
                        $widgetId="0_20"
                        name="text1"
                        style={[ styles.Text, styles.TextHeading1, styles.textSemiBold, styles.textContrastHigher ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Login" ], [ "Tekst" ] ] ), "friendlyId": "NativeMobile.Login.text1" }
                        })} />,
                    <$Text key="0_21"
                        $widgetId="0_21"
                        name="text2"
                        style={[ styles.Text, styles.textContrastLow, styles.spacingOuterBottom ]}
                        text={DynamicTextProperty({
                            template: { "elements": t( [ [ "Sign in to access your account." ], [ "Tekst" ] ] ), "friendlyId": "NativeMobile.Login.text2" }
                        })} />
                ]} />,
            <$DataView key="0_22"
                $widgetId="0_22"
                name="dataView1"
                style={[ styles.DataView ]}
                object={NanoflowObjectProperty({
                    source: { "nanoflow": () => require("C:/Users/marcel/Documents/GitHub/mendix-NativeFontAwesomeButton/test/deployment/native/nanoflows/NativeMobile.DSS_CreateLoginContext").DSS_CreateLoginContext },
                    argMap: {},
                    friendlyId: "NativeMobile.Login.dataView1"
                })}
                content={[
                    <$TextBox key="0_23"
                        $widgetId="0_23"
                        name="textBox1"
                        style={[ styles.TextBox, styles.TextBoxVertical, styles.spacingOuterBottomMedium ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_22",
                            path: "",
                            entity: "NativeMobile.Login",
                            attribute: "Username",
                            friendlyId: "NativeMobile.Login.textBox1",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: { "message": t( [ "Username is required", "Username is required" ] ), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                            formatting: { }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ], [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Username" ], [ "Username" ] ] ), "friendlyId": "NativeMobile.Login.textBox1" }
                        })}
                        maxLength={200}
                        keyboardType={"default"} />,
                    <$TextBox key="0_24"
                        $widgetId="0_24"
                        name="textBox2"
                        style={[ styles.TextBox, styles.TextBoxVertical, styles.spacingOuterBottomMedium ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_22",
                            path: "",
                            entity: "NativeMobile.Login",
                            attribute: "Password",
                            friendlyId: "NativeMobile.Login.textBox2",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: { "message": t( [ "Password is required", "Password is required" ] ), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
                            formatting: { }
                        })}
                        isPassword={true}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ], [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Password" ], [ "Password" ] ] ), "friendlyId": "NativeMobile.Login.textBox2" }
                        })}
                        maxLength={200}
                        keyboardType={"default"} />,
                    <$ConditionalVisibilityWrapper key="0_25"
                        $widgetId="0_25"
                        name=""
                        visible={ExpressionProperty({
                            expression: { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ValidationMessage" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": "0_22" } },
                            friendlyId: "NativeMobile.Login."
                        })}
                        needsNamedUser={false}
                        contents={[
                            <$Text key="0_26"
                                $widgetId="0_26"
                                name="text3"
                                style={[ styles.Text, styles.textSmall, styles.textDanger ]}
                                text={DynamicTextProperty({
                                    scope: "0_22",
                                    template: { "elements": t( [ [ 1 ], [ "Tekst" ] ] ), "friendlyId": "NativeMobile.Login.text3", "parameters": { "1": "NativeMobile.Login/ValidationMessage" }, "formats": { "1": t( [ {}, {} ] ) } }
                                })} />
                        ]} />,
                    <$Button key="0_27"
                        $widgetId="0_27"
                        name="actionButton1"
                        style={[ styles.ActionButton, styles.spacingOuterTopMedium, styles.spacingOuterBottom ]}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "Sign in" ], [ "AC t  login" ] ] ), "friendlyId": "NativeMobile.Login.actionButton1" }
                        })}
                        icon={undefined}
                        onClick={ActionProperty({
                            action: { "type": "callNanoflow", "argMap": { "Login": { "widget": "0_22", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/marcel/Documents/GitHub/mendix-NativeFontAwesomeButton/test/deployment/native/nanoflows/NativeMobile.ACT_SignInUser").ACT_SignInUser } },
                            abortOnServerValidation: false
                        })}
                        disabledDuringAction={true} />
                ]} />
        ]} />
];

export const header = () => null;

export const $$title = t([
    "Login",
    "Login"
] );

export const $$style = [];

export const $$page = () => mainContent(main);
