import express from 'express';
import User from '../models/user.js'; 


const router = express.Router();


router.post('/api/cart/add', authenticateUser, async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user.id; 

  try {
    const user = await User.findById(userId);

    
    if (!user.cart) {
      user.cart = { items: [] };
    }

  
    const existingProduct = user.cart.items.find(
      (item) => item.productId.toString() === productId.toString()
    );

    if (existingProduct) {
      
      existingProduct.quantity += quantity;
    } else {
     
      user.cart.items.push({ productId, quantity });
    }

    await user.save();
    res.status(200).json({ success: true, message: "Product added to cart", cart: user.cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Error adding product to cart" });
  }
});

export default router;
