const ItemList = ({ item }) => {
  console.log(item);

  return (
    <div>
      {item.map((i) => (
        <div
          key={i.card.info.id}
          className="p-2 m-auto border-gray 300 border-b-2 text-left flex justify-between w-9/12 m-auto"
        >
          <div className="">
            
              <p className="">
                {i.card.info.itemAttribute.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}
              </p>
              <p className="text-red-400  ">{i.card.info.ribbon.text}</p>
            
            
              <p>{i.card.info.name}</p>
              <p>
                - ₹{i.card.info.defaultprice / 100 || i.card.info.price / 100}
              </p>
            
            <p className="text-xs ">{i.card.info.description}</p>
          </div>
          <div className="w-3/12">
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_960/" +
                i.card.info.imageId
              }
              className="w-[100px] h-[100px] rounded-lg"
            
            />
            <button className="p-2 bg-white shadow-lg text-green-600 rounded-lg w-24 text-lg  font-medium mt-2  ">Add</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
