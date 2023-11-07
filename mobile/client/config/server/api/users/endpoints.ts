const base = 'users';

export const loginEndpoint = () => `${base}/login`;
export const logoutEndpoint = () => `${base}/logout`;
export const registerEndpoint = () => `${base}/register`;

export const fetchUserEndpoint = (userId: string) => `${base}/${userId}`;
export const fetchUsersEndpoint = () => `${base}`;

export const createUserEndpoint = () => `${base}/create`;
export const updateUserEndpoint = (userId: string) => `${base}/${userId}`;
export const deleteUserEndpoint = (userId: string) => `${base}/${userId}`;
