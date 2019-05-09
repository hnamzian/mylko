module.exports = adminId => {
  return jwt.sign({ id: adminId, isAdmin: this.isAdmin }, config.jwtPrivateKey);
};
