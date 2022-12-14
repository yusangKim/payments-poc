import axios from "axios";

export interface IBaseResponse<T> {
  data: T;
  message: string;
}
export interface IGetPaymentsParametersResponse {
  hdInfo: string;
  apiVer: string;
  processType: string;
  mercntId: string;
  ordNo: string;
  trDay: string;
  trTime: string;
  trPrice: string;
  productNm: string;
  criPsblYn: string;
  dutyFreeYn: string;
  addDeductionYn: string;
  shopNm: string;
  callbackUrl: string;
  regularpayYn: string;
  mercntParam1: string;
  signature: string;
}
const getPaymentsParameters = async ({
  productCount,
  originalsId,
}: {
  productCount: number;
  originalsId: string;
}) => {
  const { data: data } = await axios.post<
    IBaseResponse<IGetPaymentsParametersResponse>
  >(
    "https://kkr-payment-seokjae.goerli-alpha.kn.croffle.me/api/bank-payments/checkout",
    {
      productCount,
      originalsId,
    }
  );
  return data;
};

export default getPaymentsParameters;
