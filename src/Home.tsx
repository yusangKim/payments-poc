import React, { useState } from "react";
import getPaymentsParameters, {
  IGetPaymentsParametersResponse,
} from "./apis/getPaymentsParameters";

import { SettlePay } from "./payments/AccountPayment";

export const Home = () => {
  //해싱 API 파라미터를 받는데 필요한 값 START
  const [collectionAddress, setCollectionAddress] = useState(
    "0x7810107ea3a38639b1ca9b1600f8a3c17c8294de"
  );
  const [productCount, setProductCount] = useState(2);
  const [accountAddress, setAccountAddress] = useState(
    "0x7810107ea3a38639b1ca9b1600f8a3c17c8294de"
  );

  //해싱 API 파라미터를 받는데 필요한 값 END

  //UI를 띄우기 위해 필요한 값 START
  const initialPaymentsParametersValue = {
    hdInfo: "",
    apiVer: "",
    processType: "",
    mercntId: "",
    ordNo: "",
    trDay: "",
    trTime: "",
    trPrice: "",
    productNm: "",
    criPsblYn: "",
    dutyFreeYn: "",
    addDeductionYn: "",
    shopNm: "",
    callbackUrl: "",
    regularpayYn: "",
    mercntParam1: "",
    signature: "",
  };

  const [paymentsParameters, setPaymentsParameters] =
    useState<IGetPaymentsParametersResponse>(initialPaymentsParametersValue);

  const getParameters = async () => {
    const res = await getPaymentsParameters({
      productCount,
      accountAddress,
      collectionAddress,
    });
    return res;
  };

  const handleSubmit = async (info: React.FormEvent<HTMLFormElement>) => {
    //TODO 1: 수량 , collectionAddress, collectionTitle 백엔드에 POST로 넘겨주기

    const res = await getPaymentsParameters({
      productCount,
      accountAddress,
      collectionAddress,
    });

    console.log("res: ", res);

    //TODO 2: 백엔드에서 받은 response를 가지고 formData 세팅 후, SettlePay.execute(info obj)로 결제창 띄우기
    info.preventDefault();
    // console.log(info.target);
    // SettlePay.execute(info.target);

    //TODO 2: 결제 팝업창 띄운 다음에 백엔드에 API GET요청 (최종 결제 응답을 받기 위해)
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
        <input type="hidden" name="hdInfo" value={paymentsParameters.hdInfo} />
        <input type="hidden" name="apiVer" value={paymentsParameters.apiVer} />
        <input
          type="hidden"
          name="processType"
          value={paymentsParameters.processType}
        />
        <input
          type="hidden"
          name="mercntId"
          value={paymentsParameters.mercntId}
        />
        <input type="hidden" name="ordNo" value={paymentsParameters.ordNo} />
        <input type="hidden" name="trDay" value={paymentsParameters.trDay} />
        <input type="hidden" name="trTime" value={paymentsParameters.trTime} />
        <input
          type="hidden"
          name="trPrice"
          value={paymentsParameters.trPrice}
        />
        <input
          type="hidden"
          name="productNm"
          value={paymentsParameters.productNm}
        />
        <input
          type="hidden"
          name="dutyFreeYn"
          value={paymentsParameters.dutyFreeYn}
        />
        <input
          type="hidden"
          name="criPsblYn"
          value={paymentsParameters.criPsblYn}
        />
        <input
          type="hidden"
          name="addDeductionYn"
          value={paymentsParameters.addDeductionYn}
        />
        <input type="hidden" name="shopNm" value={paymentsParameters.shopNm} />
        <input
          type="hidden"
          name="callbackUrl"
          value={paymentsParameters.callbackUrl}
        />
        <input
          type="hidden"
          name="regularpayYn"
          value={paymentsParameters.regularpayYn}
        />
        <input
          type="hidden"
          name="mercntParam1"
          value={paymentsParameters.mercntParam1}
        />
        <input
          type="hidden"
          name="signature"
          value={paymentsParameters.signature}
        />

        <button type="submit">결제요청</button>
      </form>
    </div>
  );
};
