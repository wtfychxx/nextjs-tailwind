import useSWR from "swr";
import { getBook } from "../../pages/api/book";
import * as Button from "../button/Button";
import BookModal from "../modal/BookModal";

const thClass =
  "px-6 align-middle border- border-solid py-3 text-xs border-1-0 border-r-0 whitespace-no-wrap font-semibold text-left bg-gray-100 text-gray-600 border-gray-200";

const DataBook = () => {
  const { data } = useSWR(`/api/book`, () => {
    return getBook();
  });

  if (data != undefined) {
    return (
      <>
        {data.result.map((entry, i) => {
          return (
            <>
              <tr key={i}>
                <td className={thClass}>{entry.number}</td>
                <td className={thClass}>{entry.title}</td>
                <td className={thClass}>{entry.genre}</td>
                <td className={thClass}>
                  <Button.danger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </Button.danger>
                </td>
              </tr>
            </>
          );
        })}
      </>
    );
  }

  return null;
};

const BookTable = () => {
  return (
    <>
      <div
        className={
          "p-4 mx-auto relative flex flex-col min-w-0 break-words w-11/12 mb-6 shadow-lg rounded-lg bg-white"
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h1 className="font-semibold text-lg text-gray-800">Book</h1>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <Button.danger
                className="float-right"
                onClick={(e) => setOpen(true)}
              >
                Add
              </Button.danger>
            </div>
          </div>

          <div className="block-w-full overtime-x-auto mt-4">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className={thClass + ` uppercase`}>Number</th>
                  <th className={thClass + ` uppercase`}>Name</th>
                  <th className={thClass + ` uppercase`}>Genre</th>
                  <th className={thClass + ` uppercase`}></th>
                </tr>
              </thead>
              <tbody>
                <DataBook />
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <BookModal />
    </>
  );
};

export default BookTable;
