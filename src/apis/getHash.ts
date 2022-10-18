import axios from "axios";

export const getHash = async (str: string) => {
  const res = await axios.get(
    `https://kkr-payment.goerli-alpha.kn.croffle.me/api/hash?t=${str}`
  );
  return res.data;
};
