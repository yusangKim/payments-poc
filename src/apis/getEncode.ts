import axios from "axios";

export const getEncode = async (str: string) => {
  const res = await axios.get(
    `https://kkr-payment.goerli-alpha.kn.croffle.me/api/encode?t=${str}`
  );
  return res.data;
};
