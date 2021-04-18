import Admin from "../components/layout/Admin";
import BookTable from "../components/table/BookTable";

export default function employee() {
  return (
    <>
      <Admin title="book">
        <BookTable />
      </Admin>
    </>
  );
}
