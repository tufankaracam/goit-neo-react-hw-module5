import Navbar from "../navbar/Navbar";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
