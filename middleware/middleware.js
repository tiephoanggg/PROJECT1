// const loggerMiddle =(req, res, next) => {
//     console.log(`method:${req.method} and ${res.status(200)}`);
//     next()
// }
// export {loggerMiddle}

const respontData = (req, res, next) => {
  res.json({
    status: 200,
    data: "tiephoang",
  });
};
export { respontData };
