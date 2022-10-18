import React, { useEffect } from "react";

export const CallbackPage = () => {
  useEffect(() => {
    console.log("콜백 페이지");
  }, []);
  return <div>callback</div>;
};
