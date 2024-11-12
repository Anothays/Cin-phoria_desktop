export default function LoginForm() {
  const handleClick = () => {
    console.log("handleCLick");
  };

  return (
    <form className="loginForm">
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Mot de passe" />
      <button type="submit" onClick={handleClick}>
        Se connecter
      </button>
    </form>
  );
}
