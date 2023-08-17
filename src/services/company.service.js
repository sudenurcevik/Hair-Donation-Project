import Request from "../helpers/RequestHelper";

const getAllCompanies = async () => {
  const res = await Request("post", "/mainpage/");
  return res;
};

const getTotalDonation = async () => {
  const res = await Request("post", "/totalDonation/");
  return res;
};

export default {
  getAllCompanies,
  getTotalDonation,
};
