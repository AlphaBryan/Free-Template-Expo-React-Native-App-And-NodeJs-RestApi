import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';

import { deleteData, getData, postData } from '../../utils/httpClient';
import {
  fetchPublicationsEndpoint,
  fetchPublicationEndpoint,
  createPublicationEndpoint,
  deletePublicationEndpoint,
} from './endpoints';
import { NewPublicationData, Publication } from './types';


// Fetch all publications
export function fetchPublicationsQuery(options?: UseQueryOptions<Publication[]>) {
  return useQuery<Publication[]>('publications', () => getData(fetchPublicationsEndpoint()), options);
}

// Fetch a single publication by ID
export function fetchPublicationQuery(publicationId: string, options?: UseQueryOptions<Publication>) {
  return useQuery<Publication>(['publication', publicationId], () => getData(fetchPublicationEndpoint(publicationId)), options);
}

// Create a new publication
export function createPublicationMutation(options?: UseMutationOptions<Publication, Error, NewPublicationData>) {
  return useMutation<Publication, Error, NewPublicationData>(
    (newPublicationData) => postData(createPublicationEndpoint(), newPublicationData),
    options
  );
}

// Delete a publication
export function deletePublicationMutation(options?: UseMutationOptions<Publication, Error, string>) {
  return useMutation<Publication, Error, string>(
    (publicationId) => deleteData(deletePublicationEndpoint(publicationId)),
    options
  );
}
