import axios from 'axios';
import { logIn } from '../utils/utils.js';

const Login = function (props) {

    const submitLoginForm = function(event){
        event.preventDefault();
        let username = event.target.elements.username.value
        let password = event.target.elements.password.value
        logIn(username, password)
        return
    }

    if (props.user) {
        return (
            <div>
                Logged in as user: {props.user}<br/>
                <a href="#/"><button>Home</button></a>
            </div>
        )
    }

    return (
    <div className="login">
        <h1 class="light-header">Login</h1>
        <form onSubmit={submitLoginForm}>
            <label for="username">User Name</label>
            <input id="username" name="username" />
            <hr/>
            <label for="password">Password</label>
            <input id="password" type="password" name="password" />
            <button type="submit">Submit</button>
        </form>
    </div>
    );
  }
  
  export default Login;