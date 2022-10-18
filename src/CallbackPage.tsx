import React, { useEffect } from "react";

export const CallbackPage = () => {
  useEffect(() => {
    console.log("콜백 페이지");
    window.close();
  }, []);
  return <div>callback</div>;
};
