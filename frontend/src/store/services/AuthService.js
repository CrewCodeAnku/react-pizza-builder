import API from "./Api";
const url = process.env.REACT_APP_URL;

class AuthService {
  login = (params) => {
    let paramsdata = {
      email: params.email,
      password: params.password,
      platform: params.platform,
      usertype: params.usertype,
    };
    return API.post("/login", paramsdata);
  };

  signup = (params) => {
    const headers = {
      Url: url,
    };
    let paramsdata = {
      name: params.name,
      email: params.email,
      password: params.password,
      platform: params.platform,
      usertype: params.usertype,
      frontendurl: params.frontendurl,
      websitename: params.websitename,
    };
    return API.post("/signup", paramsdata, { headers: headers });
  };

  verify = (params) => {
    let paramsdata = {
      email: params.email,
      token: params.verifytoken,
      frontendurl: params.frontendurl,
      websitename: params.websitename,
    };
    return API.post("/verifyemail", paramsdata);
  };

  forgetPass = (params) => {
    const headers = {
      Url: url,
    };
    let paramsdata = {
      email: params.email,
      frontendurl: params.frontendurl,
      websitename: params.websitename,
    };

    return API.post("/forgetpassword", paramsdata, { headers: headers });
  };

  resetPass = (params) => {
    const headers = {
      Url: url,
    };
    let paramsdata = {
      password: params.password,
      token: params.resettoken,
    };
    return API.post("/resetpassword", paramsdata, { headers: headers });
  };

  updateProfile = (params) => {
    const headers = {
      Authorization: params.token,
    };
    let paramsdata = {
      name: params.name,
    };
    return API.post("/updateprofile", paramsdata, { headers: headers });
  };

  changePassword = (params) => {
    const headers = {
      Authorization: params.token,
    };
    let paramsdata = {
      oldpassword: params.oldpassword,
      password: params.newpassword,
      userid: params.userid,
    };
    return API.post("/changepassword", paramsdata, { headers: headers });
  };

  getProfile = (params) => {
    const headers = {
      Authorization: params.token,
    };
    return API.get("/profile", { headers: headers });
  };

  checkAuth = (token) => {
    let params = {
      token: token,
    };
    return API.post("/checkauth", params);
  };
}

export default AuthService;
