export interface IntUsers {
  _id: string;
  name: string;
  favorites: [IntProducts];
  cart: [IntProducts];
  admin: boolean;
  picture: string;
}

export interface IntProducts {
  name: string;
  description: string;
  stock: number;
  price: number;
  enabled: boolean;
  image: IntImage;
}

export interface IntImage {
  url: string;
  name: string;
}
