import React, {Component} from 'react';

// Components
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';

//Utils
import {authenticate, signInWithGoogleAsync} from '../utils/UserAuthentication'
import {fetchUser, setUser} from '../actions/user-actions';
import {connect} from 'react-redux';

class LoginScreen extends Component {

    constructor(props){
        super(props);
        this.props.fetchUser();
    }

    _login = () => {
        signInWithGoogleAsync().then(user => {
            this.props.setUser(user);
        })
    }

    _logout = () => {
        this.props.setUser(null)
    }

    render(){
        if(authenticate(this.props.user)){
            return(
                <View>
                    <Button
                        style={{alignContent : 'center'}}
                        onPress={() => this._logout()}
                        title='Logout' />
                    <Text h3>{this.props.user.name}</Text>
                </View>
            )
        } else {
        return(
            <View>
                <Button
                    style={{alignContent : 'center'}}
                    onPress={() => this._login()}
                    icon={{name : 'google', type : 'font-awesome'}}
                    title='Login with Google' />
            </View>
        );
    }
    }
}

function mapStateToProps(state) {
    return {
        user : state.user
    }
}


export default connect(mapStateToProps, {setUser, fetchUser})(LoginScreen);