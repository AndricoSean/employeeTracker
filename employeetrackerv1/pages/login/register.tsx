import { useRef } from "react";
import Navbar from "../components/Navbar";
import styles from "@/styles/login/register.module.css";

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
    <>
      <Navbar />
      <div className={styles.formContainer}>
        <form onSubmit={sumbitFormHandler} className={styles.form}>
          <div className={styles.formFields}>
            <div>
              <label htmlFor="email">Email: </label>
            </div>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className={styles.formFields}>
            <div>
              <label htmlFor="password">Password: </label>
            </div>
            <input type="password" id="password" ref={passwordInputRef} />
          </div>
          <div className={styles.formBtn}>
            <button>Register</button>
          </div>
        </form>
      </div>
    </>
  );
}
