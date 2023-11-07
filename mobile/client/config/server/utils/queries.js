import { useQuery } from 'react-query';
import { deleteData, getData, postData } from './httpClient';

// How to use: const { data, isLoading, error } = useGetQuery(usersEndpoint.fetchUser(userId));
export function useGetQuery(endpoint, queryKey, options = {}) {
  return useQuery([queryKey, endpoint], () => getData(endpoint), options);
}

// How to use: const { mutate, isLoading, error } = usePostMutation(usersEndpoint.login(userId), body);
export function usePostMutation(endpoint, body) {
  return useMutation(() => postData(endpoint, body));
}

// How to use: const { mutate, isLoading, error } = useDeleteMutation(usersEndpoint.deleteUser(userId));
export function useDeleteMutation(endpoint) {
  return useMutation(() => deleteData(endpoint));
}