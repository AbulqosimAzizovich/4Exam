import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import flowersApi from "../../service/Flowers";
import CardPlants from "../../components/UI/CardPlants";
import AllElements from  "./allElements"
const index = () => {
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

  const [btn, setData] = useState(true);

  return (
    <>
      <section>
        <div className="mx-auto max-w-[1160px]">
          <div className="wrapper">
            <Breadcrumb
              className="my-[17px]"
              items={[
                {
                  title: <Link to={`/`}>Home</Link>,
                },
                {
                  title: "Plants",
                },
              ]}
            />

            <h1 className="text-[32px] font-medium leading-[38px] mt-[20.17px]">
              All Plants
            </h1>

            <div className="flex items-center justify-between mt-10 border_bot pb-4">
              <div className="flex items-center gap-x-20">
                <select className=" outline-none">
                  <option selected disabled>
                    Sort by
                  </option>
                  <option>Lotus</option>
                  <option>Jasmine</option>
                  <option>Blood Lily</option>
                </select>

                <select className=" outline-none">
                  <option selected disabled>
                    Color
                  </option>
                  <option>Red</option>
                  <option>Green</option>
                  <option>Blue</option>
                </select>

                <select className=" outline-none">
                  <option selected disabled>
                    Price
                  </option>
                  <option>10 $</option>
                  <option>20$</option>
                  <option>Other</option>
                </select>

                <select className=" outline-none">
                  <option selected disabled>
                    Flower type
                  </option>
                  <option>Hydrangea</option>
                  <option>Chrysanthemum</option>
                  <option>Carnation</option>
                  <option>Iris</option>
                  <option>Daffodil</option>
                </select>

                <select className=" outline-none flex">
                  <option selected disabled>
                    Occasion
                  </option>
                  <option>Wedding Flowers</option>
                  <option>Valentine's Day Flowers</option>
                  <option>Special Occasion Flowers</option>
                  <option>Birthday Blooms</option>
                </select>
              </div>

              <p className=" cursor-default text-[16px]">
                {current.length} items
              </p>
            </div>

            <div style={{ display: btn ? "block" : "none" }}>
              <div className="flex items-center gap-x-10 mt-10">
                {current.length &&
                  current.map((e) => {
                    if (e.id >= 7 && e.id <= 10) {
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
                    } else {
                      return;
                    }
                  })}
              </div>

              <div className="flex items-center gap-x-10 mt-10">
                {current.length &&
                  current.map((e) => {
                    if (e.id >= 11 && e.id <= 14) {
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
                    } else {
                      return;
                    }
                  })}
              </div>

              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setData(!btn)}
                  className="flex items-center gap-x-3 px-[16.5px] py-[14px] w-[223px] h-[46px] justify-center bg-[#000000] hover:bg-[#AFB1BD] active:bg-[#82828B] text-white text-[14px] font-medium rounded-md"
                >
                  <p>See more</p>
                </button>
              </div>
            </div>

            {btn ? "" : <AllElements btn={btn} setData={setData}/>}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
