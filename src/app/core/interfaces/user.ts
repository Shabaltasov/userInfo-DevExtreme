export interface IUser {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  gender: string;
  phone: string;
  email: string;
  location: {
    city: string;
    street: {
      name: string;
    };
  };
}
