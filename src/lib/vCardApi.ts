const API_BASE_URL = 'https://api1.simplyworkcrm.com/api:ua1V0Fa1';

export interface VCardApiResponse {
  vcf_json: any;
  // Add other fields that might be in the response
}

export interface ApiError {
  code: string;
  message: string;
  payload: string;
}

export class VCardApiError extends Error {
  constructor(public error: ApiError) {
    super(error.message);
    this.name = 'VCardApiError';
  }
}

export const vCardApi = {
  async getVCard(locationId: string): Promise<VCardApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/vcards/${locationId}`);
      
      if (!response.ok) {
        const errorData: ApiError = await response.json();
        throw new VCardApiError(errorData);
      }
      
      return await response.json();
    } catch (error) {
      if (error instanceof VCardApiError) {
        throw error;
      }
      throw new VCardApiError({
        code: 'NETWORK_ERROR',
        message: 'Failed to fetch VCard data',
        payload: ''
      });
    }
  },

  async saveVCard(vCardData: any): Promise<VCardApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/vcards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vCardData),
      });
      
      if (!response.ok) {
        const errorData: ApiError = await response.json();
        throw new VCardApiError(errorData);
      }
      
      return await response.json();
    } catch (error) {
      if (error instanceof VCardApiError) {
        throw error;
      }
      throw new VCardApiError({
        code: 'NETWORK_ERROR',
        message: 'Failed to save VCard data',
        payload: ''
      });
    }
  }
};