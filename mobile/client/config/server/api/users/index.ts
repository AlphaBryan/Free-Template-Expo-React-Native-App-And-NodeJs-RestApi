import { useQuery, useMutation, UseMutationResult } from 'react-query';
import { UseMutationOptions, UseQueryOptions, UseQueryResult } from 'react-query';

import { deleteData, getData, postData } from '../../utils/httpClient';
import {
  createUserEndpoint,
  deleteUserEndpoint,
  fetchUserEndpoint,
  fetchUsersEndpoint,
  loginEndpoint,
  registerEndpoint,
  updateUserEndpoint
} from './endpoints';

// Fetch all users
export function fetchUsersQuery(options?: UseQueryOptions<User[], Error>): UseQueryResult<User[], Error> {
  return useQuery<User[], Error>('users', () => getData(fetchUsersEndpoint()), options);
}

// Fetch a single user by ID
export function fetchUserQuery(userId: string, options?: UseQueryOptions<User, Error>): UseQueryResult<User, Error> {
  return useQuery<User, Error>(['user', userId], () => getData(fetchUserEndpoint(userId)), options);
}

// Create a new user
export function createUserMutation(options?: UseMutationOptions<User, Error, NewUserData>): UseMutationResult<User, Error, NewUserData> {
  return useMutation<User, Error, NewUserData>(
    (newUserData) => postData(createUserEndpoint(), newUserData),
    options
  );
}

// Update a user's data
export function updateUserMutation(options?: UseMutationOptions<User, Error, { userId: string; updatedData: UpdatedUserData }>): UseMutationResult<User, Error, { userId: string; updatedData: UpdatedUserData }> {
  return useMutation<User, Error, { userId: string; updatedData: UpdatedUserData }>(
    ({ userId, updatedData }) => postData(updateUserEndpoint(userId), updatedData),
    options
  );
}

// Delete a user
export function deleteUserMutation(options?: UseMutationOptions<void, Error, string>): UseMutationResult<void, Error, string> {
  return useMutation<void, Error, string>(
    (userId) => deleteData(deleteUserEndpoint(userId)),
    options
  );
}

// User login
export function loginUserMutation(options?: UseMutationOptions<User, Error, UserCredentials>): UseMutationResult<User, Error, UserCredentials> {
  return useMutation<User, Error, UserCredentials>(
    (credentials) => postData(loginEndpoint(), credentials),
    options
  );
}

// User registration
export function registerUserMutation(options?: UseMutationOptions<User, Error, UserInfo>): UseMutationResult<User, Error, UserInfo> {
  return useMutation<User, Error, UserInfo>(
    (userInfo) => postData(registerEndpoint(), userInfo),
    options
  );
}
