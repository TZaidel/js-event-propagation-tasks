/*    <form action="#" id="inputForm">
      <fieldset>
        <legend>Sign in</legend>
        <label>Enter your login</label>
        <input
          type="text"
          id="loginInput"
          data-min-length="3"
          data-max-length="10"
        />
        <label>Enter your password</label>
        <input
          type="password"
          id="passwordInput"
          data-min-length="6"
          data-max-length="12"
        />
      </fieldset>
    </form>*/

const form = document.getElementById('inputForm')
    
form.addEventListener('input', _.debounce((event) =>
{
    console.log(event.target.value)
    if (event.target.value.length < event.target.dataset.minLength || event.target.value.length > event.target.dataset.maxLength) {
        event.target.classList.add('wrong')
        event.target.classList.remove('correct')
    } else {
        event.target.classList.add('correct')
        event.target.classList.remove('wrong')
    }
}, 500))