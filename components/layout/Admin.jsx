import loadable from "@loadable/component";

const Head = loadable(() => import("next/head"));
const AdminNavbar = loadable(() => import("../navbar/AdminNavbar"));
const AdminSidebar = loadable(() => import("../sidebar/AdminSidebar"));
const ModalComponent = loadable(() => import("../Modal-Component"));

import { useStoreModal } from "../../pages/lib/modal";
import { useMemo } from "react";

const LoginModal = loadable(() => import("../modal/LoginModal"));
const BookModal = loadable(() => import("../modal/BookModal"));

export default function Admin(props) {
  const { tipeModalStore } = useStoreModal();

  const renderModal = useMemo(() => {
    if (tipeModalStore === "login") {
      return <LoginModal></LoginModal>;
    } else if (tipeModalStore === "book-add") {
      return <BookModal></BookModal>;
    }
  }, [tipeModalStore]);

  return (
    <div
      className={`min-h-screen ${
        props.className && props.className
      } bg-gray-200`}
    >
      <Head>
        <title>{props.title}</title>
      </Head>

      <AdminSidebar />

      <ModalComponent>{renderModal}</ModalComponent>

      <div className="relative md:ml-64">
        <AdminNavbar />
        <div className="mt-8">{props.children}</div>
      </div>
    </div>
  );
}
