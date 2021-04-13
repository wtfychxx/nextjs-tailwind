import { useState } from "react";
import Router from "next/router";
import * as Button from "../button/Button";
import Swal from "sweetalert2";
import { auth } from "../../api";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkState = (field = "") => {
    return field == "" ? false : true;
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const stateMail = checkState(email);
    const statePass = checkState(password);
    if (stateMail && statePass) {
      try {
        const res = await auth(email, password);
        if (res.response == "ok") {
          Swal.fire({
            icon: "success",
            title: res.message,
          }).then(() => {
            Router.push("/card");
          });
        } else {
          Swal.fire({
            icon: "warning",
            title: res.message,
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops..Something went wrong!",
        });
      }
    } else if (!stateMail && !statePass) {
      Swal.fire({
        title: "Please fill the field first!",
      });
    } else if (!stateMail) {
      Swal.fire({
        title: "Please fill email!",
      });
    } else if (!statePass) {
      Swal.fire({
        title: "Please fill password!",
      });
    }
  };

  // if you want use onSubmit use a funtion name without ()
  // example <form onSubmit={submitForm}>
  return (
    <div className="container">
      <div className="flex justify-center items-center">
        <div className="w-full lg:w-1/3">
          <div className="p-4 bg-white shadow rounded-lg">
            <form>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm">
                  {" "}
                  Email{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm">
                  {" "}
                  Password{" "}
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
                />
              </div>
              <Button.danger
                type="submit"
                onClick={(e) => {
                  submitForm(e);
                }}
              >
                Login
              </Button.danger>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
