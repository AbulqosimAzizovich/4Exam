import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import flowersApi from "../../service/Flowers";
import CardPlants from "../../components/UI/CardPlants";

const allElements = ({btn, setData}) => {
  const [current, setCurrent] = useState([]);

  const flower = () => {
    flowersApi
      .getFlowers()
      .then((res) => {
        if (res.status === 200) {
          setCurrent(res.data);
        }
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  useEffect(() => {
    flower();
  }, []);
  return (
    <>
      <div>
        <div className="flex items-center flex-wrap gap-x-10 mt-10">
          {current.length &&
            current.map((e) => {
              return (
                <>
                  <CardPlants
                    id={e.id}
                    image={e.image}
                    name={e.name}
                    price={e.price}
                    sale={e.sale}
                  />
                </>
              );
            })}
        </div>

        <div className="flex items-center justify-center mt-10">
          <button
            onClick={() => setData(!btn)}
            className="flex items-center gap-x-3 px-[16.5px] py-[14px] w-[223px] h-[46px] justify-center bg-[#000000] hover:bg-[#AFB1BD] active:bg-[#82828B] text-white text-[14px] font-medium rounded-md"
          >
            <p>Close</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default allElements;
