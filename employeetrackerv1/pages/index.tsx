import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/login/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}
