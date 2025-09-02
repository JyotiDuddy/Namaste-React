import ItemList from "./ItemList";

const RestaurantCategory = ({ data, show,setShowIndex }) => {
  return (
    <div>
      <div className=" w-6/12 m-auto my-5 bg-grey-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={setShowIndex}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {show && <ItemList item={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
