import Head from "next/head";
import AdminNavbar from "../navbar/AdminNavbar";
import AdminSidebar from "../sidebar/AdminSidebar";

export default function Admin(props) {
  return (
    <div className={`min-h-screen ${props.className && props.className} `}>
      <Head>
        <title>{props.title}</title>
      </Head>

      <AdminSidebar />

      <div className="relative md:ml-64">
        <AdminNavbar />
        <div className="mt-8">{props.children}</div>
      </div>
    </div>
  );
}
