import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Link, useParams } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CardFlowers from "./../../components/UI/CardFlowers";
import flowersApi from "../../service/Flowers";
import free from "../../assets/images/free.svg";
import fresh from "../../assets/images/fresh.svg";
import photo from "../../assets/images/photo.svg";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";

const index = () => {
  const { id } = useParams();
  const [aloneflower, setAloneFlower] = useState([]);

  useEffect(() => {
    flowersApi
      .getSingleFlower(id)
      .then((res) => setAloneFlower(res.data))
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  const [count, setCount] = useState(0);

  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);

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
      <section>
        <div className="mx-auto max-w-[1160px]">
          <div className="wrapper">
            <Breadcrumb
              items={[
                {
                  title: <Link to={`/`}>Home</Link>,
                },
                {
                  title: <Link to={`/plants`}>Plants</Link>,
                },
                {
                  title: "An Application",
                },
              ]}
              className="py-4"
            />

            <div className="mt-[26px] flex gap-x-[75px]">
              <div className="">
                <img
                  src={aloneflower?.image}
                  alt=""
                  className="w-[568px] h-[568px]"
                />
                <div className="mt-5 flex items-center gap-x-10 justify-start">
                  <div className="w-[142px] h-[46px] flex items-center gap-x-[10px] cursor-pointer rounded-md ">
                    <img src={free} alt="free" />
                    <p>Benefits description</p>
                  </div>

                  <div className="w-[142px] h-[46px] flex items-center gap-x-[10px] cursor-pointer rounded-md ">
                    <img src={fresh} alt="free" />
                    <p>Benefits description</p>
                  </div>

                  <div className="w-[142px] h-[46px] flex items-center gap-x-[10px] cursor-pointer rounded-md ">
                    <img src={photo} alt="free" />
                    <p>Benefits description</p>
                  </div>
                </div>
              </div>

              <div className="w-[523px] h-[621px]">
                <div className="border_bot pb-[15px] font-[Roboto] mb-10">
                  <h1 className="text-[24px] font-medium leading-7 cursor-default">
                    {aloneflower?.name}
                  </h1>
                  <div className="flex items-end gap-x-5 mt-5">
                    <p className="text-[28px] font-medium leading-7 cursor-default">
                      {aloneflower?.price}
                    </p>
                    <p className="text-[18px] font-medium leading-[22px] cursor-default text-[#82828B]">
                      {aloneflower?.sale}
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[16px] leading-7">Count:</p>

                  <div className="flex items-center gap-x-4 mt-7 mb-11">
                    <button
                      onClick={() => setCount(count + 1)}
                      className="w-6 h-6 flex items-center justify-center bg-[#F0F0F5] hover:bg-slate-300 active:bg-slate-200 rounded-full text-[16px] text-[#595CFF] font-[Roboto]"
                    >
                      +
                    </button>
                    <p className="text-[14px] font-medium font-[Roboto]">
                      {count}
                    </p>
                    <button
                      onClick={() => setCount(count - 1)}
                      className="w-6 h-6 flex items-center justify-center bg-[#F0F0F5] hover:bg-slate-300 active:bg-slate-200 rounded-full text-[16px] text-[#595CFF] font-[Roboto]"
                    >
                      -
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-[16px] leading-7">Color:</p>

                  <div className="flex items-center gap-x-5 mt-5">
                    <a
                      href="#"
                      className="focus:ring-[2px] w-9 h-9 ring-[#595CFF] rounded-full p-[2px]"
                    >
                      <p className=" bg-[#F0F0F5] rounded-full w-full h-full "></p>
                    </a>
                    <a
                      href="#"
                      className="focus:ring-[2px] w-9 h-9 ring-[#595CFF] rounded-full p-[2px]"
                    >
                      <p className=" bg-[#EE7764] rounded-full w-full h-full "></p>
                    </a>
                    <a
                      href="#"
                      className="focus:ring-[2px] w-9 h-9 ring-[#595CFF] rounded-full p-[2px]"
                    >
                      <p className=" bg-[#FFBC2C] rounded-full w-full h-full "></p>
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-x-5 mt-[54px]">
                  <button className="w-[309px] h-[56px] bg-[#595CFF] rounded-md text-white">
                    Button
                  </button>

                  <button className="w-[56px] h-[56px] grid place-content-center hover:bg-gray-200 active:bg-gray-400 rounded-md duration-300">
                    <ShoppingCartOutlined className="text-[24px]" />
                  </button>
                </div>

                <div className="mt-10">
                  <div>
                    <h2 id="accordion-collapse-heading-1">
                      <button
                        type="button"
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-black hover:bg-gray-100"
                        data-accordion-target="#accordion-collapse-body-1"
                        aria-expanded="true"
                        aria-controls="accordion-collapse-body-1"
                        onClick={() => setOpen1(!open1)}
                      >
                        <span>Bouquet contents</span>
                        <p className="text-[20px] font-medium fomt-[Roboto] text-[#595CFF]">
                          +
                        </p>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-1"
                      className="block"
                      style={{ display: open1 ? "none" : "block" }}
                      aria-labelledby="accordion-collapse-heading-1"
                    >
                      <div className="py-1 border-[1px] border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Gullar vapshe zo'r narsada
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 id="accordion-collapse-heading-2">
                      <button
                        type="button"
                        onClick={() => setOpen2(!open2)}
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-black hover:bg-gray-100"
                        data-accordion-target="#accordion-collapse-body-2"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-2"
                      >
                        <span>Details</span>
                        <p className="text-[20px] font-medium fomt-[Roboto] text-[#595CFF]">
                          +
                        </p>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-2"
                      className="block"
                      style={{ display: open2 ? "none" : "block" }}
                      aria-labelledby="accordion-collapse-heading-2"
                    >
                      <div className="py-1 border-[1px] border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Gullar vapshe zo'r narsada
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <h2 id="accordion-collapse-heading-3">
                      <button
                        type="button"
                        onClick={() => setOpen3(!open3)}
                        className="flex items-center justify-between w-full py-5 font-medium text-left text-black hover:bg-gray-100"
                        data-accordion-target="#accordion-collapse-body-3"
                        aria-expanded="false"
                        aria-controls="accordion-collapse-body-3"
                      >
                        <span>Delivery & Pay policy</span>
                        <p className="text-[20px] font-medium fomt-[Roboto] text-[#595CFF]">
                          +
                        </p>
                      </button>
                    </h2>
                    <div
                      id="accordion-collapse-body-3"
                      className="block"
                      style={{ display: open3 ? "none" : "block" }}
                      aria-labelledby="accordion-collapse-heading-3"
                    >
                      <div className="py-1 border-[1px] border-gray-200 dark:border-gray-700">
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Gullar vapshe zo'r narsada
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-[190px] mb-11">
              <h1 className="text-[24px] font-[Roboto] font-medium leading-7">
                Similar flowers
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

            <div className="flex items-center gap-x-10 ">
              {current.length &&
                current.map((e) => {
                  if (e.id >= 1 && e.id <= 4) {
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
