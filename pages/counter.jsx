import { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";

export default function counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <Layout>
      <div className="p-10">
        <p> You clicked {count} times </p>
        <button
          className="bg-rose-500 hover:bg-rose-700 transition-all duration-150 text-white px-4 h-10"
          onClick={() => setCount(count + 1)}
        >
          Click Me!
        </button>
      </div>
    </Layout>
  );
}
