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
  collectionAddress,
  accountAddress,
}: {
  productCount: number;
  collectionAddress: string;
  accountAddress: string;
}) => {
  const { data: data } = await axios.post<
    IBaseResponse<IGetPaymentsParametersResponse>
  >(
    "https://kkr-payment.goerli-alpha.kn.croffle.me/api/bank-payments/checkout",
    {
      productCount,
      collectionAddress,
      accountAddress,
    }
  );
  return data;
};

export default getPaymentsParameters;
