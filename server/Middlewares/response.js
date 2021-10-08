"use strict";

const { responseCode } = require("../utils/constant");

module.exports = ({ code, data, error }, req, res, next) => {
  if (responseCode.SUCCESS.includes(code)) {
    console.log(code);
    console.log("ERROR", error);
    console.log("data", data);
    const newData = {
      code,
      messsage:
        code === 201
          ? `Success create data`
          : code === 200
          ? `Success get data`
          : `Success`,
      data,
    };
    console.log(data);
    res.status(code).json(newData);
  } else if (error) {
    next({ code, error });
  }
};
