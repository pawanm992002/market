"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/actions/authAction";

const styles = {
  btn: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  input:
    "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light",
};

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const AuthData = useSelector((state) => state.Auth);

  useEffect(() => {
    // if user already logged in then redirect to home page
    if (AuthData.loggedIn) return router.replace("/home");
  }, [AuthData.loggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    dispatch(loginUser({ email, password }));
  };
  return (
    <form
      onSubmit={handleLogin}
      className="max-w-lg mx-auto py-5 bg-slate-800 px-8 rounded-lg"
    >
      <h1 className="text-center text-xl font-bold  mb-5">Login</h1>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          name="email"
          id="email"
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
          name="password"
          id="password"
          className={styles.input}
          placeholder="user_pass#123"
          required
        />
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
        <input type="submit" value="Login" className={styles.btn} />
        <Link href={"/register"} className={styles.btn}>
          Register Yourself
        </Link>
      </div>
    </form>
  );
}
