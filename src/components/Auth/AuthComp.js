import classes from "./AuthComp.module.css";
function AuthComp() {
  return (
    <form className={classes.AuthComp}>
      <label>
        Email:
        <input type="email" name="email" placeholder="email" />
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder="password" />
      </label>

      <button>Sign in</button>
      <button>Sign up</button>
    </form>
  );
}

export default AuthComp;
