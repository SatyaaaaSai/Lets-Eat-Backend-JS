const zod=require("zod");

const ownerSchema=zod.object({
    firstname: z.string().trim().max(50),
    lastname: z.string().trim().max(50),
    username: z.string().trim().min(3).max(30),
    email: z.string().email(),
    password: z.string(),  
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
    restaurants: z.array(z.string()), 
});

const CustomerSchema = zod.object({
    firstname: z.string().trim().max(50),
    lastname: z.string().trim().max(50),
    username: z.string().trim().min(3).max(30),
    email: z.string().email(),
    password: z.string(),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
    orders: z.array(z.string()),  // Assuming ObjectId is treated as string
    carts: z.array(z.string()),   // Assuming ObjectId is treated as string
  });
  
  // Zod schema for Restaurant
  const RestaurantSchema = zod.object({
    name: z.string().trim(),
    description: z.string().trim(),
    ownerId: z.string(),  // ObjectId
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
    menus: z.array(z.string()),  // ObjectId
  });
  
  // Zod schema for Menu
  const MenuSchema = zod.object({
    restaurantId: z.string(),  // ObjectId
    name: z.string().trim(),
    description: z.string().trim(),
    price: z.number().positive(),
    isVegetarian: z.boolean().default(false),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
  });
  
  // Zod schema for Cart
  const CartSchema = zod.object({
    userId: z.string(),  // ObjectId
    menuItemId: z.string(),  // ObjectId
    quantity: z.number().positive(),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
  });
  
  // Zod schema for Order
  const OrderSchema = zod.object({
    userId: z.string(),  // ObjectId
    totalPrice: z.number().positive(),
    status: z.enum(['PENDING', 'COMPLETED']),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
  });
  
  
  module.exports = {
    OwnerSchema,
    CustomerSchema,
    RestaurantSchema,
    MenuSchema,
    CartSchema,
    OrderSchema,
  };