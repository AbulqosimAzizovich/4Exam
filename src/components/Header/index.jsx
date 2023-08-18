import {
  EnvironmentFilled,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import "./style.scss";
import NavBar from "./NavBar";

const index = () => {
  return (
    <>
      <header className=" bg-white w-full">
        <div className="max-w-[1160px] mx-auto">
          <div className="wrapper flex items-center justify-between">
            <div className="flex items-center gap-x-[7px] mt-[15px] mb-[20px] cursor-pointer">
              <EnvironmentFilled />
              <p>Tashkent</p>
            </div>

            <div className="flex items-center gap-x-5">
              <SearchOutlined className="text-[24px] cursor-pointer hover:bg-gray-200 p-1 rounded-md duration-300" />
              <ShoppingCartOutlined className="text-[24px] cursor-pointer hover:bg-gray-200 p-1 rounded-md duration-300" />
            </div>
          </div>

          <NavBar />
        </div>
      </header>
    </>
  );
};

export default index;
