export interface Restaurant {
  id: string;
  name: string;
  type: string;
  rating: number;
  contact: {
    site: string;
    email: string;
    phone: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    location: {
      lat: number;
      lng: number;
    };
  };
}
