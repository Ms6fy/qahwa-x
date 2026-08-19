export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  variants?: string;
}

export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "hot-coffee",
    label: "Hot Coffee",
    items: [
      { name: "Espresso ",  description: "Single / Double", price: "40 / 59 " },
      { name: "Flat White",  description:"DOUBLE SHOT" ,price: "75" },
      { name: "Cortado", price: "72" },
      { name: "Latte", price: "68" },
      { name: "Cappuccino", price: "75" },
      { name: "Macchiato",  description:"Single / Double", price: "50 / 68" },
      { name: "Caramel Macchiato", price: "84" },
      { name: "Spanish Latte", price: "84" },
      { name: "Americano", price: "55" },
      { name: "Long Black", price: "60" },
      { name: "Hot Mocha", price: "80" },
      { name: "Hot White Mocha", price: "84" },
      { name: "Hazelnut Coffee", price: "54" },
      { name: "Turkish Coffee ",description:"Single / Double", price: "34 / 49" },
      { name: "Nutella Coffee", price: "70" },
      { name: "French Coffee", price: "54" },
      { name: "Affogato", price: "70" },
      { name: "Nescafe With Milk", price: "70" },
      { name: "Nescafe Black", price: "60" },
    ],
  },

  {
    id: "specialty-coffee",
    label: "Specialty Coffee",
    items: [
      { name: "V60", price: "120" },
      { name: "Siphon", price: "120" },
      { name: "Chemex", price: "120" },
      { name: "Cold Brew", price: "120" },
      { name: "American Coffee With Milk", price: "90" },
      { name: "American Coffee Black", price: "80" },
    ],
  },

  {
    id: "ice-coffee",
    label: "Ice Coffee",
    items: [
      { name: "Iced Latte", price: "85" },
      { name: "Iced Spanish Latte", price: "99" },
      { name: "Iced Mocha", price: "93" },
      { name: "Iced White Mocha", price: "95" },
      { name: "Iced Cappuccino", price: "93" },
      { name: "Iced Caramel Macchiato", price: "110" },
      { name: "Frappuccino Classic", price: "99" },
      { name: "Frappuccino Flavour", price: "120" },
      { name: "Iced Americano", price: "78" },
      { name: "Iced Salted Caramel", price: "115" },
      { name: "Iced Cocoa", price: "87" },
      { name: "Ice X", price: "120" },
    ],
  },

  {
    id: "milkshake",
    label: "Milkshake",
    items: [
      { name: "Vanilla milkshake", price: "90" },
      { name: "Chocolate milkshake", price: "99" },
      { name: "Caramel milkshake", price: "105" },
      { name: "Black & White milkshake", price: "105" },
      { name: "Oreo milkshake", price: "110" },
      { name: "Nutella milkshake", price: "115" },
      { name: "Kinder milkshake", price: "115" },
      { name: "Pistachio milkshake", price: "115" },
      { name: "Strawberry milkshake", price: "115" },
      { name: "Blueberry milkshake", price: "120" },
      { name: "Lotus milkshake", price: "120" },
      { name: "Cookies milkshake", price: "130" },
      { name: "Blueberry Yogurt ", price: "130" },
      { name: "Cheesecake milkshake", price: "150" },
    ],
  },

  {
    id: "frappe",
    label: "Frappe",
    items: [
      { name: "Chocolate Frappe", price: "100" },
      { name: "Vanilla Frappe", price: "90" },
      { name: "Coffee Frappe", price: "110" },
      { name: "Yogurt Frappe", price: "98" },
      { name: "Caramel Frappe", price: "100" },
      { name: "Kinder Frappe", price: "130" },
    ],
  },

  {
    id: "soda-drinks",
    label: "Soda Drinks",
    items: [
      { name: "Sunshine", price: "85" },
      { name: "Sunrise", price: "85" },
      { name: "Sunset", price: "115" },
      { name: "Classic Mojito", price: "80" },
      { name: "Mojito Rose", price: "110" },
      { name: "Mojito Blueberry", price: "120" },
      { name: "Mojito Passion Fruit", price: "110" },
      { name: "Mojito Pineapple", price: "110" },
      { name: "Mojito Peach", price: "110" },
      { name: "Mojito Mango", price: "110" },
      { name: "Mojito X", price: "120" },
      { name: "Red Bull Mojito", price: "125" },
      { name: "Red Bull Mojito Flavour", price: "150" },
      { name: "Blue Sky", price: "80" },
      { name: "Blue Hawaii", price: "90" },
      { name: "Power X", price: "125" },
      { name: "Monster", price: "80" },
    ],
  },

  {
    id: "hot-chocolate",
    label: "Hot Chocolate",
    items: [
      { name: "Classic Hot Chocolate", price: "70" },
      { name: "Marshmallow Hot Chocolate", price: "80" },
      { name: "Smoked Hot Chocolate", price: "80" },
      { name: "Snow White Chocolate", price: "80" },
    ],
  },

  {
    id: "croissant",
    label: "Croissant",
    items: [
      { name: "Plain Croissant", price: "37" },
      { name: "Chocolate Croissant", price: "37" },
      { name: "Roumy Cheese Croissant", price: "42" },
      { name: "White Cheese Croissant", price: "42" },
    ],
  },

  {
    id: "desserts",
    label: "Desserts",
    items: [
      { name: "Cookies Box",description:"5 SMALL COOKIES + SOUCE", price: "90" },
      { name: "Choco Cookie ",description:"x LARGE", price: "50" },
      { name: "Nutella Cookie ", description:"x LARGE",price: "55" },
      { name: "Cheesecake", price: "70" },
      { name: "Tiramisu", price: "110" },
      { name: "Red Velvet", price: "120" },
      { name: "Toffee Caramel Cake", price: "99" },
      { name: "Ferrero Rocher Cake", price: "110" },
    ],
  },
  {
    id: "Ice-Cream",
    label: "Ice Cream",
    items: [
      { name: "ICE CREAM VANILLA", price: "30 / 50 / 80" },
      { name: " ICE CREAM CHOCOLATE", price: "30 / 50 / 80" },
      { name: "ICE CREAM MOCHA ", price: "38 / 60 / 85" },
{ name: "ICE CREAM COFFEE ", price: "38 / 60 / 85" },     
 { name: "FERRERO ROCHER ICE CREAM ", price: "38 / 60 / 85" },
 { name: "BLUEBERRY YOGURT ICE CREAM ", price: "38 / 60 / 85" },
    ],
  },
];