import { useRef } from "react";

export default function Home() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  function sumbitFormHandler(event: any) {
    event.preventDefault();

    const email = emailInputRef?.current?.value;
    const password = passwordInputRef?.current?.value;

    fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((responseData: any) => responseData.json())
      .then((data: any) => console.log(data));
  }

  return (
    <div>
      <h1>The Register Page</h1>
      <form onSubmit={sumbitFormHandler}>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" ref={passwordInputRef} />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
}
