import classes from "./Auth.module.css";
export default function Auth() {
  return (
      <form className={classes.Auth}>
          <label>
              Email:
              <input type="email" name="email" placeholder="email"/>
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