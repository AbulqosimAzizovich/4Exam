import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import flowersApi from "../../service/Flowers";

import "./style.scss";
const index = (id) => {
  const [aloneflower, setAloneFlower] = useState([]);

  useEffect(() => {
    flowersApi
      .getSingleFlower(id)
      .then((res) => setAloneFlower(res.data))
      .catch((e) => {
        console.log(e.message);
      });
  }, []);
  return (
    <>
      <div className="w-[800px] bg-red-600 absolute right-0 top-0 rounded-md">
        ddd
      </div>
    </>
  );
};

export default index;
