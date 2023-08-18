import React, { useEffect, useState } from "react";
import { Carousel, Pagination } from "antd";
import { SwapRightOutlined, SwapLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import CardFlowers from "./../../components/UI/CardFlowers";
import flowersApi from "../../service/Flowers";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
import "./style.scss";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const index = () => {
  const [current, setCurrent] = useState([]);
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };
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
      <Carousel autoplay afterChange={onChange}>
        <div>
          <div className="bg_image mt-10 h-[482px] carousel rounded-md px-[100px] py-24 relative">
            <div className=" absolute bottom-24">
              <h1 className="text-[32px] font-medium font-[Roboto] leading-7 my-5">
                Title
              </h1>
              <p className="text-[18px] font-medium mb-10">desciption</p>

              <button className="flex items-center gap-x-3 py-[16.5px] px-[29px] bg-[#595CFF] hover:bg-[#8C8EFF] active:bg-[#383BE4] text-white text-[14px] font-medium rounded-md">
                <p>Button</p> <SwapRightOutlined />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg_image mt-10 h-[482px] carousel rounded-md px-[100px] py-24 relative">
            <div className=" absolute bottom-24">
              <h1 className="text-[32px] font-medium font-[Roboto] leading-7 my-5">
                Title
              </h1>
              <p className="text-[18px] font-medium mb-10">desciption</p>

              <button className="flex items-center gap-x-3 py-[16.5px] px-[29px] bg-[#595CFF] hover:bg-[#8C8EFF] active:bg-[#383BE4] text-white text-[14px] font-medium rounded-md">
                <p>Button</p> <SwapRightOutlined />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg_image mt-10 h-[482px] carousel rounded-md px-[100px] py-24 relative">
            <div className=" absolute bottom-24">
              <h1 className="text-[32px] font-medium font-[Roboto] leading-7 my-5">
                Title
              </h1>
              <p className="text-[18px] font-medium mb-10">desciption</p>

              <button className="flex items-center gap-x-3 py-[16.5px] px-[29px] bg-[#595CFF] hover:bg-[#8C8EFF] active:bg-[#383BE4] text-white text-[14px] font-medium rounded-md">
                <p>Button</p> <SwapRightOutlined />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="bg_image mt-10 h-[482px] carousel rounded-md px-[100px] py-24 relative">
            <div className=" absolute bottom-24">
              <h1 className="text-[32px] font-medium font-[Roboto] leading-7 my-5">
                Title
              </h1>
              <p className="text-[18px] font-medium mb-10">desciption</p>

              <button className="flex items-center gap-x-3 py-[16.5px] px-[29px] bg-[#595CFF] hover:bg-[#8C8EFF] active:bg-[#383BE4] text-white text-[14px] font-medium rounded-md">
                <p>Button</p> <SwapRightOutlined />
              </button>
            </div>
          </div>
        </div>
      </Carousel>

      <div className="flex items-center justify-between mt-20">
        <h1 className="text-[24px] font-[Roboto] font-medium leading-7">New</h1>

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
    </>
  );
};

export default index;
