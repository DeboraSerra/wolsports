const ErrorMid = (err, req, res, next) => {
  const { message, code } = err;
  console.log(message, err);
  res.status(code || 500).json({ message });
}

module.exports = ErrorMid;
