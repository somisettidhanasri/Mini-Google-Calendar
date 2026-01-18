import { supabase } from "../supabase";


export default function Register({ setPage }) {
  const register = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created! Please login.");
    setPage("login");
  };

  return (
    <div className="reg-container">
      <form className="reg-box" onSubmit={register}>
        <h1 className="reg-title">Create Account</h1>

        <input
          name="email"
          placeholder="Email"
          className="reg-input"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="reg-input"
        />

        <button className="reg-btn">Register</button>

        <p className="reg-link" onClick={() => setPage("login")}>
          Back to login
        </p>
      </form>
    </div>
  );
}
