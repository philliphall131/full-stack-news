import axios from 'axios';


const Preferences = function (props) {

    const submitPreferencesForm = function(event){
        // event.preventDefault();
        // const colorTheme = document.getElementById('color-theme').value

        // axios.put('/preferences', {'color-theme': colorTheme}).then((response)=>{
        //     console.log('response from server: ', response)
        // })
    }

    return (
    <div className="preferences">
        <h1 class="light-header">Change your preferences!</h1>
        <form onSubmit={submitPreferencesForm}>
            <label for="color-theme">Color Theme</label>
            <select id="color-theme" name="color-theme" >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
            <hr/>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
  }
  
  export default Preferences;