import React, { useEffect } from "react";

export const CallbackPage = () => {
  useEffect(() => {
    console.log(
      "콜백 페이지, 여기로 리다이렉트 되며 URL에서 success 판단해서 opner.location.href로 부모 옮기기"
    );
    window.opener.location.href = `http://localhost:3000/success`;

    //모바일 분기처리해서 모바일이면 close 안하고, 모바일이 아니면 close
    window.close();
  }, []);
  return <div>callback</div>;
};
