import axios from "axios";
import SessionHelper from "./SessionHelper";

const url = "https://dd2f-176-88-142-176.ngrok-free.app"; // base url is not determined yet

/**
 * Manages the requests made to the REST api.
 * @param {string} action get/post/patch etc.
 * @param {string} urlExtension api part of the url
 * @param {string} body json object given as a string for the body of the request
 * @param {string} params json object given as a string for the params of the request
 * @param {string} headers json object given as a string for the extra headers of the request
 * @returns {obj} the json object
 */
const Request = async (action, urlExtension, body, params, headers) => {
  // check if user is logged in and session time is expired
  if (SessionHelper.getUser()) {
    if (isSessionTimeExpired()) {
      window.location.href = "/login";
      SessionHelper.deleteUser(); // logout
      return;
    } else {
      SessionHelper.setLoginTime(); // set last request time
    }
  }

  let header = SessionHelper.getUser()
    ? {
        Authorization: "Bearer " + SessionHelper.getUser().accessToken,
        "Accept-Language": "tr-TR",
      }
    : null;
  if (headers) {
    header = { ...header, ...headers };
  }
  let fetch;
  let new_url = url + urlExtension;

  await axios({
    method: action,
    url: new_url,
    data: body,
    params: params,
    headers: header,
  })
    .then((response) => {
      fetch = response;
    })
    .catch((error) => {
      fetch = error.response;
      if (fetch?.status === 401) {
        window.location = "/login";
        SessionHelper.deleteUser();
      }
    });
  return fetch;
};

export const RequestAll = async (requests) => {
  let axiosReqs = [];
  for (let i = 0; i < requests.length; i++) {
    const req = requests[i];
    const { action, urlExtension, body, params, headers } = req;
    let header = SessionHelper.getUser()
      ? {
          Authorization: "Bearer " + SessionHelper.getUser().accessToken,
          "Accept-Language": "tr-TR",
        }
      : null;
    if (headers) {
      header = { ...header, ...headers };
    }
    const new_url = url + urlExtension;
    axiosReqs.push(
      axios({
        method: action,
        url: new_url,
        data: body,
        params: params,
        headers: header,
      })
    );
  }
  let fetch;
  await axios
    .all(axiosReqs)
    .then(
      axios.spread((...responses) => {
        fetch = responses;
      })
    )
    .catch((error) => {
      fetch = error.response;
      if (fetch.status === 401) {
        window.location = "/login";
        SessionHelper.deleteUser();
      }
    });
  return fetch;
};

function isSessionTimeExpired() {
  let requestTime = new Date();
  let sessionTime = new Date(SessionHelper.getLoginTime());
  var diffMs = requestTime - sessionTime;
  var diffHrs = Math.floor((diffMs % 86400000) / 3600000);
  if (diffHrs >= 0.01) {
    return true;
  } else {
    return false;
  }
}

export default Request;
