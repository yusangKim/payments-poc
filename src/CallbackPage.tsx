import React, { useEffect } from "react";

export const CallbackPage = () => {
  //TODO 1: 백엔드에서 결제요청까지 한 뒤에 callback 페이지로 리다이렉트 되면 팝업창 닫기
  // opener.location.href = 'http://www.naver,com?${쿼리 값으로 status 주기}'
  // self.close()

  useEffect(() => {
    console.log("콜백 페이지");
    // window.close();
  }, []);
  return <div>callback</div>;
};
