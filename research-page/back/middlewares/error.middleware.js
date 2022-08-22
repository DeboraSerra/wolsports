const ErrorMid = (err, req, res, next) => {
  const { message, code } = err;
  res.status(code || 500).json({ message });
}

module.exports = ErrorMid;
