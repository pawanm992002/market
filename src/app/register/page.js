"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const styles = {
  btn: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  input:
    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
};

export default function Register() {
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [role, setRole] = useState("customer");

  const authData = useSelector((state) => state.Auth);

  useEffect(() => {
    // if user already logged in then redirect to home page
    if (authData.loggedIn) return router.replace("/home");
  }, [authData.loggedIn]);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password !== cpassword) {
        toast.warning("Password not matches");
        return;
      }
      const { data } = await axios.post("/api/register", {
        fname,
        email,
        password,
        role,
      });
      if (!data?.status) {
        throw data.msg;
      }
      toast.info(data?.msg);
      setTimeout(() => {
        router.replace("/");
      }, 2000);
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="max-w-lg mx-auto py-5 bg-slate-800 px-8 rounded-lg"
    >
      <h1 className="text-center text-xl font-bold  mb-5">Register</h1>
      <div className="mb-5">
        <label
          htmlFor="fname"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your Full Name
        </label>
        <input
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          type="text"
          id="fname"
          className={styles.input}
          placeholder="abc"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="username@gmail.com"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
      </div>

      <div className="mb-5">
        <label
          htmlFor="repeat-password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Repeat password
        </label>
        <input
          type="password"
          value={cpassword}
          onChange={(e) => setCPassword(e.target.value)}
          id="repeat-password"
          className={styles.input}
          required
        />
      </div>
      <div className="mb-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Register As
        </label>
        <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 gap-4">
          <button
            type="button"
            onClick={() => setRole("customer")}
            className={`inline-block px-4 py-3 text-white  rounded-lg ${
              role === "customer" ? "bg-blue-600" : "bg-slate-700"
            }`}
          >
            Customer
          </button>
          <button
            type="button"
            onClick={() => setRole("shopkeeper")}
            className={`inline-block px-4 py-3 text-white rounded-lg ${
              role === "shopkeeper" ? "bg-blue-600" : "bg-slate-700"
            }`}
          >
            Shopkeeper
          </button>
        </div>
      </div>
      <div className="flex items-start mb-5">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="terms"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          I agree with the{" "}
          <Link
            href="/terms"
            target="_blank"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            terms and conditions
          </Link>
        </label>
      </div>
      <div className="gap-3 flex">
        <input
          type="submit"
          className={styles.btn}
          value=" Register new account"
        />
        <Link href={"/"} className={styles.btn}>
          Login
        </Link>
      </div>
    </form>
  );
}
