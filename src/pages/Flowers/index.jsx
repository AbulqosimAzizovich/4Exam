import React, { useEffect, useState } from "react";
import { Breadcrumb, Carousel } from "antd";
import { Link } from "react-router-dom";
import CardFlowers from "./../../components/UI/CardFlowers";
import flowersApi from "../../service/Flowers";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
import righta from "../../assets/images/Icon.svg";
import righta1 from "../../assets/images/Icon1.svg";

import "./style.scss";

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

   const onChange = (currentSlide) => {
     // console.log(currentSlide);
   };

  return (
    <>
      <section className="">
        <div className="mx-auto max-w-[1160px]">
          <div className="wrapper">
            <Breadcrumb
              items={[
                {
                  title: <Link to={`/`}>Home</Link>,
                },
                {
                  title: "All Flowers",
                },
              ]}
            />

            <Carousel autoplay afterChange={onChange} className="w-full ">
              <div>
                <div className="bg_img px-20 py-[43px] mt-[26px]">
                  <h1 className="text-[28px] font-medium font-[Roboto] leading-7">
                    40% OFF
                  </h1>
                  <p className="text-[18px] font-medium mt-[10px] mb-6">
                    Best deals this week. Fresh flowers, plants and gifts
                  </p>
                  <button className="flex items-center gap-x-3 py-[16.5px] px-[29px] bg-[#000000] hover:bg-[#AFB1BD] active:bg-[#82828B] text-white text-[14px] font-medium rounded-md">
                    <p>Shop now</p>
                    <img src={righta} alt="right" />
                  </button>
                </div>
              </div>
              <div>
                <div className="bg_img px-20 py-[43px] mt-[26px]">
                  <h1 className="text-[28px] font-medium font-[Roboto] leading-7">
                    40% OFF
                  </h1>
                  <p className="text-[18px] font-medium mt-[10px] mb-6">
                    Best deals this week. Fresh flowers, plants and gifts
                  </p>
                  <button className="flex items-center gap-x-3 py-[16.5px] px-[29px] bg-[#000000] hover:bg-[#AFB1BD] active:bg-[#82828B] text-white text-[14px] font-medium rounded-md">
                    <p>Shop now</p>
                    <img src={righta} alt="right" />
                  </button>
                </div>
              </div>
              <div>
                <div className="bg_img px-20 py-[43px] mt-[26px]">
                  <h1 className="text-[28px] font-medium font-[Roboto] leading-7">
                    40% OFF
                  </h1>
                  <p className="text-[18px] font-medium mt-[10px] mb-6">
                    Best deals this week. Fresh flowers, plants and gifts
                  </p>
                  <button className="flex items-center gap-x-3 py-[16.5px] px-[29px] bg-[#000000] hover:bg-[#AFB1BD] active:bg-[#82828B] text-white text-[14px] font-medium rounded-md">
                    <p>Shop now</p>
                    <img src={righta} alt="right" />
                  </button>
                </div>
              </div>
            </Carousel>

            <div className="flex items-center justify-between mt-10">
              <div className="two px-20 py-[46px] w-[560px] h-[221px]">
                <h1 className="text-[28px] font-medium font-[Roboto] leading-7">
                  Nice little gifts
                </h1>
                <p className="text-[18px] font-medium mt-[10px] mb-6">
                  for loved ones
                </p>
                <button className="flex items-center gap-x-3 active:bg-[#fff] p-1 rounded-sm text-[14px] font-medium">
                  <p>View now</p>
                  <img src={righta1} alt="right" />
                </button>
              </div>

              <div className="three px-20 py-[46px] w-[560px] h-[221px]">
                <h1 className="text-[28px] font-medium font-[Roboto] leading-7">
                  Plants
                </h1>
                <p className="text-[18px] font-medium mt-[10px] mb-6">
                  for home comfort
                </p>
                <button className="flex items-center gap-x-3 active:bg-[#fff] p-1 rounded-sm text-[14px] font-medium">
                  <p>View now</p>
                  <img src={right} alt="right" />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-20">
              <h1 className="text-[24px] font-[Roboto] font-medium leading-7">
                New
              </h1>

              <div className="flex items-center gap-x-[19px]">
                <button>
                  <img src={left} alt="Left" />
                </button>
                <button>
                  <img src={right} alt="Right" />
                </button>
              </div>
            </div>

            <div className="flex mt-11 items-center gap-x-10">
              {current.length &&
                current.map((e) => {
                  if (e.id <= 4) {
                    return (
                      <>
                        <CardFlowers
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

            <div className="flex items-center justify-between mt-[60px] mb-11">
              <h1 className="text-[24px] font-[Roboto] font-medium leading-7">
                Title
              </h1>

              <div className="flex items-center gap-x-[19px]">
                <button>
                  <img src={left} alt="Left" />
                </button>
                <button>
                  <img src={right} alt="Right" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-x-10">
              {current.length &&
                current.map((e) => {
                  if (e.id >= 5 && e.id <= 8) {
                    return (
                      <>
                        <CardFlowers
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
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
