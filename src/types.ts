
export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  category: 'Hot Dishes' | 'Sides' | 'Beverages' | 'Coupons';
}

export interface RestaurantInfo {
  name: string;
  address: string;
  cityStateZip: string;
  phone: string;
  hours: {
    weekday: string;
    weekend: string;
  };
}
