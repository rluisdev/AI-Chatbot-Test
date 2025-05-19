import { QueryResponse } from '@/src/types';
const API_URL = 'http://localhost:8000';

export async function sendQuery(query: string): Promise<QueryResponse> {
  try {
    const response = await fetch(`${API_URL}/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error querying API:', error);
    throw error;
  }
}

export async function checkHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/`);
    return response.ok;
  } catch (error) {
    console.error('Error checking API health:', error);
    return false;
  }
} 