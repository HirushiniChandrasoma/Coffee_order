
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ success: false, message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(400).json({ success: false, message: 'Invalid token' });
  }
};

export const authenticateUser = (req, res, next) => {
 
  return verifyToken(req, res, next);
};

export const login = async (req, res, next) => {
  

  const { email, password } = req.body;

 
  const user = await user.findOne({ email });
  
  if (!user || user.password !== password) {
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }


  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({
    success: true,
    message: 'Login successful',
    token
  });
};

export const register = async (req, res, next) => {
  

  const { email, password, name } = req.body;


  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ success: false, message: 'User already exists' });
  }

  
  const newUser = new User({
    email,
    password,
    name
  });

  await newUser.save();

  res.status(201).json({ success: true, message: 'User registered successfully' });
};
