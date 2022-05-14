import React, {Component} from "react";

import './styles.css';

export default class User extends Component{
    render(){
        return(
            <form>
                <label>Usuário:</label>
                <input name="user"/>
            </form>
        )
    }
};