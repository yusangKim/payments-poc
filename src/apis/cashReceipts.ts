import axios from "axios";

export const cashReceipts = async () => {
  const res = await axios.post(
    `https://tcash.settlebank.co.kr/pgtrans/CashReceiptMultiAction.do?_method=insertReceiptInfo`,
    {
      mid: "M2286221",
      assort: "0",
      transNo: "STFP_PNPTM228622100221013190136M1478641",
      trDt: "20221013190136",
      amt: 1000,
      vat: 0,
      purpose: "0",
      identityGb: 4,
      identity: "0100001234",
    }
  );
  console.log("현금영수증: ", res.data);
  return res.data;
};
