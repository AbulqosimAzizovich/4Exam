import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
const index = () => {
  const navigate = useNavigate();
  return (
    <>
      <Result
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={<Button onClick={() => navigate(-1)}>Back Home</Button>}
      />
    </>
  );
};

export default index;
