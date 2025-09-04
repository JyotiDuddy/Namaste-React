
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList = ({ item }) => {
  const dispatch = useDispatch();

  const handleItem = (i) => {
    dispatch(addItem(i));
  };

  return (
    <div>
      {item?.map((i) => {
        const info = i?.card?.info; // safe extract

        if (!info) return null; // skip if no info

        return (
          <div
            key={info.id}
            className="p-2 border-gray-300 border-b-2 text-left flex justify-between w-9/12 m-auto"
          >
            <div className="w-9/12">
              <p>{info?.itemAttribute?.vegClassifier === "VEG" ? "🟢" : "🔴"}</p>
              {info?.ribbon?.text && (
                <p className="text-red-400">{info.ribbon.text}</p>
              )}
              <p>{info?.name}</p>
              <p>
                - ₹
                {info?.defaultPrice
                  ? info.defaultPrice / 100
                  : info?.price / 100}
              </p>
              <p className="text-xs">{info?.description}</p>
            </div>

            <div className="w-3/12 p-4">
              <img
                src={`${CDN_URL}${info?.imageId}`}
                alt={info?.name}
                className="w-full h-[100px] rounded-lg"
              />
              <button
                className="p-2 bg-white shadow-lg text-green-600 rounded-lg w-24 text-lg font-medium mt-2"
                onClick={() => handleItem(i)}
              >
                Add
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
