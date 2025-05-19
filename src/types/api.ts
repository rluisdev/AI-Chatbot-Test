export interface QueryResponse {
  answer: string;
  relevance_score: number;
  is_predefined: boolean;
}
export interface QueryRequest {
  query: string;
}

export interface FormEvent {
  preventDefault: () => void;
}

export interface ChangeEvent {
  target: {
    value: string;
  };
} 