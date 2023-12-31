import jwt from 'jsonwebtoken';

const generateToken = (res, userId, isDeleted = false) => {
  // Check if the user is deleted and act accordingly
  if (isDeleted) {
    // Perform actions to revoke or expire the token
    // You may want to add the token to a blacklist or use a different strategy
    console.log(isDeleted,'User is marked as deleted. Handle token revocation here.');
    throw new Error('User does not exists');
    // res.redirect('/login');
  }

  const token = jwt.sign({ userId, isDeleted }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;
