import * as Button from "../button/Button";

export default function LoginModal() {
  return (
    <div className="w-full lg:w-1/3">
      <div className="p-4 bg-white shadow rounded-lg">
        <form>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-500"
            />
          </div>
          <Button.danger type="submit">Login</Button.danger>
        </form>
      </div>
    </div>
  );
}
