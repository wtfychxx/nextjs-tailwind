import { getData } from "../../api";
import useSWR from "swr";

const MultipleCard = () => {
  const { data } = useSWR(`/api/data`, () => {
    return getData();
  });
  // return false;

  if (data != undefined) {
    return (
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {data.map((entry, i) => {
          return (
            <div className="rounded overflow-hidden shadow-lg" key={i}>
              <img src={entry.image} alt="image" className="w-full" />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> {entry.title} </div>
                <p className="text-gray-700 text-base">{entry.description}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                {entry.tags.map((value, j) => {
                  return (
                    <span
                      className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                      key={j}
                    >
                      {value.text}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default MultipleCard;
