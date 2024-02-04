import Request from "../helpers/RequestHelper";

const getAllCompanies = async () => {
  const res = await Request("get", "/");
  return res;
};

const getTotalDonation = async () => {
  const res = await Request("get", "/totalDonation/");
  return res;
};

export default {
  getAllCompanies,
  getTotalDonation,
};
