const base = 'publications';

export const fetchPublicationsEndpoint = () => `${base}`;
export const fetchPublicationEndpoint = (publicationId: string) => `${base}/${publicationId}`;

export const createPublicationEndpoint = () => `${base}/create`;
export const deletePublicationEndpoint = (publicationId: string) => `${base}/${publicationId}`;