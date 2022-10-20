import React, { useEffect, useState } from "react";
import getPaymentsParameters, {
  IGetPaymentsParametersResponse,
} from "./apis/getPaymentsParameters";

import { SettlePay } from "./payments/AccountPayment";

export const Home = () => {
  //해싱 API 파라미터를 받는데 필요한 값 START
  const [collectionAddress, setCollectionAddress] = useState(
    "0x7810107ea3a38639b1ca9b1600f8a3c17c8294de"
  );
  const [productCount, setProductCount] = useState(28400);
  const [accountAddress, setAccountAddress] = useState(
    "0x7810107ea3a38639b1ca9b1600f8a3c17c8294de"
  );

  // useEffect(() => {
  //   console.log(paymentsParameters);
  // }, []);

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

  const handleSubmit = async (info: React.FormEvent<HTMLFormElement>) => {
    const res = await getPaymentsParameters({
      productCount,
      accountAddress,
      collectionAddress,
    });
    setPaymentsParameters({
      hdInfo: res.data.hdInfo,
      apiVer: res.data.apiVer,
      processType: res.data.processType,
      mercntId: res.data.mercntId,
      ordNo: res.data.ordNo,
      trDay: res.data.trDay,
      trTime: res.data.trTime,
      trPrice: res.data.trPrice,
      productNm: res.data.productNm,
      criPsblYn: res.data.criPsblYn,
      dutyFreeYn: res.data.dutyFreeYn,
      addDeductionYn: res.data.addDeductionYn,
      shopNm: res.data.shopNm,
      callbackUrl: res.data.callbackUrl,
      regularpayYn: res.data.regularpayYn,
      mercntParam1: res.data.mercntParam1,
      signature: res.data.signature,
    });

    // console.log("res: ", res.data);
    // console.log(info.target);
    const obj = SettlePay.execute(info.target);
    console.log("obj ::: ", obj);
    obj.submit();
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
