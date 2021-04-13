import Head from "next/head";
import AdminNavbar from "../navbar/AdminNavbar";
import AdminSidebar from "../sidebar/AdminSidebar";

export default function Admin(props) {
  return (
    <div className={`min-h-screen ${props.className && props.className} `}>
      <Head>
        <title>{props.title}</title>
      </Head>

      <AdminNavbar />

      <div className="mt-8">{props.children}</div>
    </div>
  );
}
