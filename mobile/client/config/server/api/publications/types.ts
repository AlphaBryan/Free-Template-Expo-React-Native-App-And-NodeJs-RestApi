export interface Publication {
    id: string;
    title: string;
    content: string;
    // ... other publication fields
  }
  
  export interface NewPublicationData {
    title: string;
    content: string;
  }
  
  export interface UpdatePublicationData {
    id: string;
    updates: {
      title?: string;
      content?: string;
    };
  }