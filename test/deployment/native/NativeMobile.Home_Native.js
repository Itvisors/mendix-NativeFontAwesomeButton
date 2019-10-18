import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { IconProperty } from "mendix/IconProperty";
import { OfflineObjectListProperty } from "mendix/OfflineObjectListProperty";
import { WidgetVariableProperty } from "mendix/WidgetVariableProperty";

import { Button } from "mendix/Button";
import { ClickableArea } from "mendix/ClickableArea";
import { ConditionalVisibilityWrapper } from "mendix/ConditionalVisibilityWrapper";
import { Container } from "mendix/Container";
import { itvisors_nativefontawesomebutton_NativeFontAwesomeButton } from "externalWidgets";
import { NativeList } from "mendix/NativeList";
import { Text } from "mendix/Text";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent } from "./Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "../../theme/styles.js";

const { $ConditionalVisibilityWrapper, $Button, $Container, $itvisors_nativefontawesomebutton_NativeFontAwesomeButton, $NativeList, $ClickableArea, $Text } = asPluginWidgets({ ConditionalVisibilityWrapper, Button, Container, itvisors_nativefontawesomebutton_NativeFontAwesomeButton, NativeList, ClickableArea, Text });

const main = () => [
    <$Container key="0_4"
        $widgetId="0_4"
        name="container1"
        style={[ styles.Container, styles.flexMain, styles.backgroundPrimary, styles.spacingInnerTopMedium, styles.spacingInnerBottomMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]}
        content={[
            <$Container key="0_5"
                $widgetId="0_5"
                name="container2"
                style={[ styles.Container, styles.flexRow ]}
                content={[
                    <$Button key="0_6"
                        $widgetId="0_6"
                        name="actionButton2"
                        style={[ styles.ActionButton ]}
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "New" ], [ "Nieuw" ] ] ), "friendlyId": "NativeMobile.Home_Native.actionButton2" }
                        })}
                        icon={undefined}
                        onClick={ActionProperty({
                            action: { "type": "createObject", "argMap": {}, "config": { "entity": "NativeMobile.TestData", "pageSettings": { "name": "NativeMobile.TestData_NewEdit_Native", "location": "content" } } },
                            abortOnServerValidation: false
                        })}
                        disabledDuringAction={true} />,
                    <$itvisors_nativefontawesomebutton_NativeFontAwesomeButton key="0_7"
                        $widgetId="0_7"
                        name="nativeFontAwesomeButton1"
                        caption={DynamicTextProperty({
                            template: { "elements": t( [ [ "New" ], [ "Nieuw" ] ] ), "friendlyId": "NativeMobile.Home_Native.nativeFontAwesomeButton1" }
                        })}
                        iconName={"faplus"}
                        iconNamePrefix={""}
                        onClickAction={ActionProperty({
                            action: { "type": "createObject", "argMap": {}, "config": { "entity": "NativeMobile.TestData", "pageSettings": { "name": "NativeMobile.TestData_NewEdit_Native", "location": "content" } } },
                            abortOnServerValidation: false
                        })}
                        style={[ styles.itvisors_nativefontawesomebutton_NativeFontAwesomeButton, styles.spacingOuterLeft ]} />
                ]} />,
            <$NativeList key="0_3"
                $widgetId="0_3"
                name="listView1"
                style={[ styles.ListView, styles.spacingOuterTopMedium ]}
                listInfo={OfflineObjectListProperty({
                    entity: "NativeMobile.TestData",
                    friendlyId: "NativeMobile.Home_Native.listView1",
                    constraints: [],
                    sort: [
                        [
                            "Name",
                            "asc"
                        ]
                    ]
                })}
                itemTemplate={() => [
                    <$ClickableArea key="0_8"
                        $widgetId="0_8"
                        name=""
                        content={[
                            <$Container key="0_9"
                                $widgetId="0_9"
                                name="container5"
                                style={[ styles.Container, styles.borderBottom, styles.flexRow, styles.alignChildrenCenter, styles.spacingInnerLeft ]}
                                content={[
                                    <$Text key="0_10"
                                        $widgetId="0_10"
                                        name="text1"
                                        style={[ styles.Text, styles.flexMain ]}
                                        text={DynamicTextProperty({
                                            scope: "0_3",
                                            template: { "elements": t( [ [ 1 ], [ 1 ] ] ), "friendlyId": "NativeMobile.Home_Native.text1", "parameters": { "1": "NativeMobile.TestData/Name" }, "formats": { "1": t( [ {}, {} ] ) } }
                                        })} />,
                                    <$Button key="0_11"
                                        $widgetId="0_11"
                                        name="actionButton3"
                                        style={[ styles.ActionButton, styles.btnIconSecondary, styles.listItemIconSmall ]}
                                        caption={DynamicTextProperty({
                                            template: { "elements": t( [ [], [ "Knop" ] ] ), "friendlyId": "NativeMobile.Home_Native.actionButton3" }
                                        })}
                                        icon={IconProperty({
                                            icon: { "type": "glyph", "iconClass": "glyphicon-menu-right" }
                                        })}
                                        onClick={undefined}
                                        disabledDuringAction={true} />
                                ]} />
                        ]}
                        onClick={ActionProperty({
                            action: { "type": "openPage", "argMap": { "$pageParameter": { "widget": "0_3", "source": "object" } }, "config": { "name": "NativeMobile.TestData_NewEdit_Native", "location": "content" } },
                            abortOnServerValidation: false
                        })} />
                ]}
                amount={WidgetVariableProperty({
                    widgetId: "0_3",
                    slot: "amount",
                    type: "Decimal",
                    initialValue: 10
                })}
                pageSize={10}
                id={DerivedUniqueIdProperty({
                    widgetId: "0_3"
                })}
                scrollDirection={"vertical"}
                numberOfColumns={1}
                onPullDown={ActionProperty({
                    action: { "type": "synchronize", "argMap": {}, "config": {} },
                    abortOnServerValidation: false
                })} />
        ]} />
];

export const header = () => [
    <$ConditionalVisibilityWrapper key="0_1"
        $widgetId="0_1"
        name=""
        needsNamedUser={true}
        contents={[
            <$Button key="0_2"
                $widgetId="0_2"
                name="actionButton1"
                style={[ styles.ActionButton, styles.ActionButtonHeader ]}
                caption={DynamicTextProperty({
                    template: { "elements": t( [ [], [] ] ), "friendlyId": "NativeMobile.Home_Native.actionButton1" }
                })}
                icon={IconProperty({
                    icon: { "type": "glyph", "iconClass": "glyphicon-log-out" }
                })}
                onClick={ActionProperty({
                    action: { "type": "signOut", "argMap": {}, "config": { "namedUser": true } },
                    abortOnServerValidation: false
                })}
                disabledDuringAction={true} />
        ]} />
];

export const $$title = t([
    "Home",
    "Home"
] );

export const $$style = [];

export const $$page = () => mainContent(main);
