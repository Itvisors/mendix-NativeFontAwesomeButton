import { __awaiter } from '../../../node_modules/tslib/tslib.es6';
import { Component } from 'react';
import { AppState, NetInfo } from 'react-native';

class AppEvents extends Component {
    constructor() {
        super(...arguments);
        this.onAppStateChangeHandler = this.onAppStateChange.bind(this);
        this.onConnectionChangeHandler = this.onConnectionChange.bind(this);
        this.appState = AppState.currentState;
        this.lastOnResume = Date.now();
        this.lastOnOnline = 0;
        this.lastOnOffline = 0;
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            executeAction(this.props.onLoadAction);
            if (this.props.onResumeAction) {
                AppState.addEventListener("change", this.onAppStateChangeHandler);
            }
            if (this.props.onTimeoutAction) {
                const schedule = this.props.timerType === "once" ? setTimeout : setInterval;
                this.timeoutHandle = schedule(() => executeAction(this.props.onTimeoutAction), this.props.delayTime * 1000);
            }
            if (this.props.onOnlineAction || this.props.onOfflineAction) {
                this.isConnected = yield NetInfo.isConnected.fetch();
                NetInfo.isConnected.addEventListener("connectionChange", this.onConnectionChangeHandler);
            }
        });
    }
    componentWillUnmount() {
        if (this.props.onResumeAction) {
            AppState.removeEventListener("change", this.onAppStateChangeHandler);
        }
        if (this.props.onOnlineAction || this.props.onOfflineAction) {
            NetInfo.isConnected.removeEventListener("connectionChange", this.onConnectionChangeHandler);
        }
        if (this.props.onTimeoutAction && this.timeoutHandle != null) {
            const clear = this.props.timerType === "once" ? clearTimeout : clearInterval;
            clear(this.timeoutHandle);
        }
    }
    render() {
        return null;
    }
    onAppStateChange(nextAppState) {
        if (this.appState === nextAppState) {
            return;
        }
        if (nextAppState === "active" && isPastTimeout(this.lastOnResume, this.props.onResumeTimeout)) {
            executeAction(this.props.onResumeAction);
            this.lastOnResume = Date.now();
        }
        this.appState = nextAppState;
    }
    onConnectionChange(nextIsConnected) {
        if (this.isConnected === nextIsConnected) {
            return;
        }
        if (nextIsConnected && isPastTimeout(this.lastOnOnline, this.props.onOnlineTimeout)) {
            executeAction(this.props.onOnlineAction);
            this.lastOnOnline = Date.now();
        }
        if (!nextIsConnected && isPastTimeout(this.lastOnOffline, this.props.onOfflineTimeout)) {
            executeAction(this.props.onOfflineAction);
            this.lastOnOffline = Date.now();
        }
        this.isConnected = nextIsConnected;
    }
}
function executeAction(action) {
    if (action && action.canExecute && !action.isExecuting) {
        action.execute();
    }
}
function isPastTimeout(last, timeoutSeconds) {
    return Date.now() - last >= timeoutSeconds * 1000;
}

export { AppEvents };
