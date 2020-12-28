import React from 'react'
import axios from 'axios';


export default class PushMessaging extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            receiveToken: 'cprTLQWxSD4:APA91bFFzprzjBdPxl0Te2Fom7ELtJ3xm5-MO3zKs7lE6HPQOEOAnjk6AUGFU0Mq5eGhhdPpvThjZS2IguTeiJaXE90_TqxBL-ZzkHOyLotIV2l2GOeYu78A9ctukGYA5RDZx--JP0Ch',
        }
    }

    componentDidMount = () => {

    }

    onChangeNotificationTitle = (e) => {
        this.setState({ title: e.target.value })
    }
    onChangeNotificationBody = (e) => {
        this.setState({ body: e.target.value })
    }
    onChangeNotificationReceiveToken = (e) => {
        this.setState({ receiveToken: e.target.value })
    }
    onSendMessage = () => {
        let apiURL = "https://fcm.googleapis.com/fcm/send"
        let HeaderData = {
            "Content-Type": "application/json",
            "Authorization": "key=AAAAvqM8OGw:APA91bHUimPqO5MY6nLh9Xxz2wQ64959a_wEilloj1-Mul4-OxNIzdGij_MQ6X2pPQJ67zBmyb50ekY0n2v3E7hT7zhyfTD1oMGwng4vyaHIif-JguWDMpeQnB8lf6ExV5iY4oSCaHHD"
        }
        let BodyData = {
            "notification": {
                "title": "Firebase",
                "body": "Firebase is awesome",
                "click_action": "https://fir-notification-react.web.app/",
                "icon": "https://fir-notification-react.web.app/notification.jpg"
            },
            "to": this.state.receiveToken
        }

        axios({
            method: 'post',
            url: apiURL,
            data: BodyData,
            headers: HeaderData,
        }).then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });


    }

    render() {

        return (
            <div className="App">
                <p>
                    Look24 :: Cloud Messaging Notification<br />{window.btoa(process.env.REACT_APP_API_KEY)}
                </p>
                Notification Title:<input type="text" onChange={this.onChangeNotificationTitle} /><br />
                Notification Title:<input type="text" onChange={this.onChangeNotificationTitle} /><br />
                Notification Receive Device Token:<input type="text" onChange={this.onChangeNotificationReceiveToken} /><br />
                <button onClick={this.onSendMessage}>Send Notification</button>

            </div>
        )
    }
}

