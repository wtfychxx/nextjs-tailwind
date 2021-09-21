import { useEffect } from "react";
import Admin from "../components/layout/Admin";
import BookTable from "../components/table/BookTable";
import { getCombo } from "./api/master";
import { useStoreOption } from "../lib/modal";

export default function Book(props) {
  const { setDataGenre } = useStoreOption();

  useEffect(() => {
    setDataGenre(props.genre);
  }, []);

  return (
    <>
      <Admin title="book" res="hehe">
        <BookTable />
      </Admin>
    </>
  );
}

export async function getStaticProps() {
  const returnData = await getCombo("genre", "");
  const genre = [];
  returnData.map((key) => {
    genre.push({ value: key.combo_key, label: key.combo_name });
  });

  return {
    props: {
      genre,
    },
  };
}
