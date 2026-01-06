
import type { MenuItem, RestaurantInfo } from './types.ts';

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "Halal Pizza Express",
  address: "725 Hillside Ave.",
  cityStateZip: "New Hyde Park, NY 11040",
  phone: "516-270-3170",
  hours: {
    weekday: "Sun - Thurs: 11 am - Midnight",
    weekend: "Fri - Sat: 11 am - 1 am"
  }
};

export const MENU_ITEMS: MenuItem[] = [
  // Hot Dishes
  { name: "Pasta with Marinara", price: "$13.95", category: "Hot Dishes", description: "Choice of Penne or Spaghetti" },
  { name: "Pasta with Tomato Sauce", price: "$13.95", category: "Hot Dishes", description: "Choice of Penne or Spaghetti" },
  { name: "Pasta with Meatball", price: "$15.95", category: "Hot Dishes", description: "Choice of Penne or Spaghetti" },
  { name: "Pasta with Sausage", price: "$15.95", category: "Hot Dishes", description: "Choice of Penne or Spaghetti" },
  { name: "Pasta with Chicken Cutlet", price: "$15.95", category: "Hot Dishes", description: "Choice of Penne or Spaghetti" },
  { name: "Pasta with Buffalo Chicken", price: "$15.95", category: "Hot Dishes", description: "Choice of Penne or Spaghetti" },
  { name: "Pasta with Eggplant", price: "$15.95", category: "Hot Dishes", description: "Choice of Penne or Spaghetti" },

  // Sides
  { name: "6 Pcs. Hot Wings (Honey BBQ or Buffalo)", price: "$10.95", category: "Sides" },
  { name: "10 Pcs. Hot Wings (Honey BBQ or Buffalo)", price: "$15.95", category: "Sides" },
  { name: "Chicken Roll", price: "$8.95", category: "Sides" },
  { name: "Sausage Roll", price: "$8.95", category: "Sides" },
  { name: "Beef Patty", price: "$4.00", category: "Sides" },
  { name: "Beef Patty w/ Cheese", price: "$5.00", category: "Sides" },
  { name: "Beef Patty w/ Cheese & Pepperoni", price: "$6.00", category: "Sides" },
  { name: "2 Pcs. Fish w/ Fries", price: "$10.95", category: "Sides" },
  { name: "Garlic Knots (5 Pcs.)", price: "$4.00", category: "Sides" },
  { name: "Garlic Knots (5 Pcs.) w/ Cheese", price: "$6.00", category: "Sides" },
  { name: "Mozzarella Sticks (9 Pcs.)", price: "$10.95", category: "Sides" },
  { name: "Side Fries", price: "$4.00", category: "Sides" },

  // Beverages
  { name: "Water", price: "$2.00", category: "Beverages" },
  { name: "Can Soda", price: "$2.00", category: "Beverages" },
  { name: "Snapple", price: "$3.00", category: "Beverages" },
  { name: "Bottle Soda", price: "$3.00", category: "Beverages" },
  { name: "2 Liter Soda", price: "$4.99", category: "Beverages" },

  // Coupons
  { name: "1 Lg. Pie, 12 Knots, 2 Liter Soda", price: "$27.02", category: "Coupons" },
  { name: "2 Lg. Pies, 12 Knots, 12 Wings", price: "$57.18", category: "Coupons" },
  { name: "1 Lg. Pie, 12 Knots, Pasta, 2 Liter Soda", price: "$51.99", category: "Coupons" }
];