import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/components/Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={80} height={80} priority />
        </Link>
        <div>
          <ul className={styles.navList}>
            <li className={styles.li}>
              <Link href="/login" className={styles.link}>
                Login
              </Link>
            </li>
            <li className={styles.li}>
              <Link href="/login/register" className={styles.link}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
