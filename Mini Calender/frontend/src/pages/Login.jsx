import { supabase } from "../supabase";

export default function Login({ setPage }) {
  const login = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    // ❌ DO NOT put window.location.reload()
    // Supabase auth listener in main.jsx will redirect automatically
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={login}>
        <h1>Mini Calendar</h1>

        <input name="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />

        <button type="submit">Login</button>

        <p className="auth-link" onClick={() => setPage("register")}>
          Create account
        </p>
      </form>
    </div>
  );
}
