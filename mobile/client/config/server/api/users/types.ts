interface User {
    id: string;
    name: string;
    email: string;
    // ...other user properties
  }
  
  interface NewUserData {
    name: string;
    email: string;
    password: string;
    // ...other properties needed to create a user
  }
  
  interface UpdatedUserData {
    name?: string;
    email?: string;
    // ...other properties that can be updated
  }
  
  interface UserCredentials {
    email: string;
    password: string;
  }
  
  interface UserInfo extends NewUserData {
    // Additional properties for user registration if needed
  }