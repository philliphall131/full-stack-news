import { signup } from "../utils/utils";


const Signup = function (props) {

    const submitSignupForm = function(event){
        event.preventDefault();
        let username = event.target.elements.username.value
        let email = event.target.elements.email.value
        let password = event.target.elements.password.value
        signup(username, email, password)
    }

    return (
    <div className="signup">
        <h1 class="light-header">Create an account</h1>
        <form onSubmit={submitSignupForm}>
            <label for="username">User Name</label>
            <input id="username" name="username" />
            <hr/>
            <label for="email">Email</label>
            <input id="email" name="email" />
            <hr/>
            <label for="password">Password</label>
            <input id="password" type="password" name="password" />
            <button type="submit">Submit</button>
        </form>
    </div>
    );
  }
  
  export default Signup;
  