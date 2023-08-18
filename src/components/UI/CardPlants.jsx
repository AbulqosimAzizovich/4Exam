import React, { useState } from "react";
import { Link } from "react-router-dom";
import right from "../../assets/images/rightwhite.svg";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const CardPlants = ({ image, sale, price, name, id }) => {
  const [btn, setBtn] = useState(true);
  const [cardBtn, setCardBtn] = useState(true);
  return (
    <>
      <div
        className="card w-[260px] h-[366px] hover:shadow-lg duration-300 relative rounded-md"
        onClick={() => setCardBtn(!cardBtn)}
      >
        <img onClick={() => setBtn(!btn)} src={image} alt={name} />
        <div className="text-start">
          <Link to={`flowers/${id}`} className="hover:text-[#595CFF]">
            <h1 className="mt-5 text-[18px] font-medium leading-[22px] font-[InterMedium] px-[10px]">
              {name}
            </h1>
            <div className="flex gap-x-4 justify-start px-[10px] mt-[8.5px]">
              <p className="text-[14px] font-medium font-[InterMedium]">
                {price}
              </p>
              <p className="text-[14px] cursor-default text-[#82828B] line-through">
                {sale}
              </p>
            </div>
          </Link>

          <Link to={`flowers/${id}`}>
            <button
              style={{ display: btn ? "none" : "grid" }}
              className="bg-[#595CFF] w-[46px] h-[46px] grid place-content-center rounded-full absolute right-4 bottom-[85px]"
            >
              <img className="w-6 h-6" src={right} alt="button" />
            </button>
          </Link>

          <div
            style={{ display: cardBtn ? "none" : "flex" }}
            className="flex items-center gap-x-[30px] justify-center absolute right-[69px] bottom-[121px]"
          >
            <button className="w-[46px] h-[46px] bg-white rounded-md">
              <ShoppingCartOutlined className="text-[24px]" />
            </button>
            <button className="w-[46px] h-[46px] bg-white rounded-md">
              <SearchOutlined className="text-[24px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPlants