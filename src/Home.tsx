import React, { useState } from "react";
import { getEncode } from "./apis/getEncode";
import { getHash } from "./apis/getHash";
import { SettlePay } from "./payments/AccountPayment";

export const Home = () => {
  const formData = new FormData();

  const handleSubmit = (info: React.FormEvent<HTMLFormElement>) => {
    getHashingStr();

    //TODO 1: 수량 , collectionAddress, collectionTitle 백엔드에 넘겨주기

    //TODO 2: 백엔드에서 받은 response를 가지고 formData 세팅 후, SettlePay.execute(info obj)로 결제창 띄우기
    info.preventDefault();
    console.log(info.target);
    SettlePay.execute(info.target);

    //TODO 2: 결제 팝업창 띄운 다음에 백엔드에 API GET요청 (최종 결제 응답을 받기 위해)

    //TODO 3: 백엔드에서 결제요청까지 한 뒤에 응답이 오면 일단 window.close()로 팝업창 닫기
  };

  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [payments, setPayments] = useState();

  const [price, setPrice] = useState("");
  const [signature, setSignature] = useState("");
  const [trTime, setTrTime] = useState("");
  const [ordNo, setOrdNo] = useState("test5909");

  const getHashingStr = async () => {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    const currentTime = `${currentHours}${currentMinutes}${currentSeconds}`;
    setTrTime(currentTime);
    const hashingPrice = await getHash("1000");
    setPrice(hashingPrice);
    const hashingSignature = await getEncode(
      `M2286221${ordNo}20221017${currentTime}1000$SETTLEBANKISGOODSETTLEBANKISGOOD`
    );
    console.log(hashingSignature);
    setSignature(hashingSignature);
  };

  const createFormData = () => {
    formData.append("hdInfo", "IA_AUTHPAGE_1.0_1.0");
    formData.append("apiVer", "1.0");
    formData.append("processType", "D");
    formData.append("mercntId", "M2286221");
    formData.append("ordNo", "test2434");
    formData.append("trDay", "20221018");
    formData.append("trTime", "112434");
    formData.append("trPrice", "71e07123bc5bb2ca7d9a5cfd851cd327");
    formData.append("productNm", "test");
    formData.append("dutyFreeYn", "N");
    formData.append("criPsblYn", "Y");
    formData.append("addDeductionYn", "N");
    formData.append("shopNm", "test shop");
    formData.append(
      "callbackUrl",
      "https://kkr-payment.goerli-alpha.kn.croffle.me/api/bank-payments/callback"
    );
    formData.append("regularpayYn", "N");
    formData.append(
      "signature",
      "cd751400e5ecd83bb4272f0d9f9bb56ca71883b756fd561b4896552f0c806542"
    );
    SettlePay.execute(formData);

    console.log(formData);
  };

  return (
    <div className="w-full border-2 border-red-600">
      <form
        name="sampleFm"
        className="flex flex-col gap-10 justify-center items-center pt-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        {/* <label
          htmlFor="name"
          className="border-2 border-red-600 w-[300px] flex justify-between items-center"
        >
          <div>고객 이름</div>
          <input
            name="name"
            value=""
            className="border-2 border-red-600 w-[200px]"
          />
        </label>
        <label
          htmlFor="email"
          className="border-2 border-red-600 w-[300px] flex justify-between items-center"
        >
          <div>이메일</div>
          <input
            name="email"
            value=""
            className="border-2 border-red-600 w-[200px]"
          />
        </label> */}

        <input type="hidden" name="hdInfo" value="IA_AUTHPAGE_1.0_1.0" />

        <input type="hidden" name="apiVer" value="1.0" />

        <input type="hidden" name="processType" value="D" />

        <input type="hidden" name="mercntId" value="M2286221" />

        <input type="hidden" name="ordNo" value="test5457" />

        <input type="hidden" name="trDay" value="20221018" />

        <input type="hidden" name="trTime" value="145457" />

        <input
          type="hidden"
          name="trPrice"
          value="71e07123bc5bb2ca7d9a5cfd851cd327"
        />

        <input type="hidden" name="taxPrice" value="" />

        <input type="hidden" name="vatPrice" value="" />

        <input type="hidden" name="dutyFreePrice" value="" />

        <input type="hidden" name="productNm" value="test" />

        <input type="hidden" name="dutyFreeYn" value="N" />

        <input type="hidden" name="criPsblYn" value="Y" />

        <input type="hidden" name="addDeductionYn" value="N" />

        <input type="hidden" name="shopNm" value="test shop" />

        <input type="hidden" name="cphoneNo" value="" />

        <input type="hidden" name="email" value="" />

        <input type="hidden" name="custCi" value="" />

        <input
          type="hidden"
          name="callbackUrl"
          value="https://kkr-payment.goerli-alpha.kn.croffle.me/api/bank-payments/callback"
        />

        <input type="hidden" name="cancelUrl" value="" />

        <input type="hidden" name="regularpayYn" value="N" />

        <input type="hidden" name="mercntParam1" value="" />

        <input type="hidden" name="mercntParam2" value="" />

        <input type="hidden" name="payLimitCd" value="" />

        <input
          type="hidden"
          name="signature"
          value="c25412dbdc4c81eb7a5096e746bdac3527b33ce8900f7eee7fbd40abd3dea69f"
        />

        <button type="submit">결제요청</button>
      </form>
      <button onClick={getHashingStr}>해싱</button>
    </div>
  );
};
