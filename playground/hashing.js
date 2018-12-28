const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(password, salt, (err, hash) => {
    console.log('hash: ', hash);
  });
});

var hashedpassword = '$2a$10$jZ.dq2Y5.uYQEmSv2OY34efG0zh6UtHmt4ZJWoD2YN1LOFYrBV3sK';

bcrypt.compare(password, hashedpassword, (err, res) => {
  console.log(res);
});
