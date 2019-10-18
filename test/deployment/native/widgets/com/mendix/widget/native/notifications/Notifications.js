import { Component } from 'react';
import firebase from 'react-native-firebase';

class Notifications extends Component {
    constructor() {
        super(...arguments);
        this.listeners = [];
    }
    componentDidMount() {
        this.checkForInitialNotification();
        this.listeners = [
            firebase.notifications().onNotification(notification => this.onReceive(notification)),
            firebase.notifications().onNotificationOpened(notificationOpen => this.onOpen(notificationOpen))
        ];
    }
    componentWillUnmount() {
        this.listeners.forEach(unsubscribe => unsubscribe());
    }
    render() {
        return null;
    }
    checkForInitialNotification() {
        return firebase
            .notifications()
            .getInitialNotification()
            .then(notificationOpen => {
            if (notificationOpen) {
                this.onOpen(notificationOpen);
            }
        });
    }
    onReceive(notification) {
        this.handleNotification(notification, action => action.onReceive);
    }
    onOpen(notificationOpen) {
        this.handleNotification(notificationOpen.notification, action => action.onOpen);
    }
    handleNotification(notification, getHandler) {
        const data = notification.data;
        const actions = this.props.actions.filter(item => item.name === data.actionName);
        if (actions.length === 0) {
            return;
        }
        if (this.props.guid) {
            this.props.guid.setValue(data.guid);
        }
        actions.forEach(action => {
            const handler = getHandler(action);
            if (handler && handler.canExecute) {
                handler.execute();
            }
        });
        if (notification.notificationId) {
            firebase.notifications().removeDeliveredNotification(notification.notificationId);
        }
    }
}

export { Notifications };
