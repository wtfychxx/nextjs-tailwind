import Admin from "../components/layout/Admin";
import BookTable from "../components/table/BookTable";

export default function Book() {
  return (
    <>
      <Admin title="book">
        <BookTable />
      </Admin>
    </>
  );
}
