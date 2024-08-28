import { API_BASE_URL } from './Config';

/**
 * Network error class
 */
export class NetworkError extends Error {
  constructor(status, response) {
    super();
    this.status = status;
    this.response = response;
  }
}

class HttpService {
  /**
   * Make API Request
   * @param path {string} - path to query
   * @param options {Object} - options config
   * @returns {Promise<any>}
   * @private
   */
  async _makeRequest(path, options) {
    try {
      const url = `${API_BASE_URL}${path}`;
      const response = await fetch(url, options);
      const contentType = response.headers.get('Content-Type');
      if (contentType.includes('application/json')) {
        const responseObject = response.json();
        if (response.status >= 400 || response.status < 200) {
          throw new NetworkError(response.status, responseObject);
        }
        return responseObject;
      }
      throw new NetworkError(response.status, null);
    } catch (error) {
      // TODO: common error handling
      throw error;
    }
  }

  /**
   * Get from API endpoint
   * @param path {string} - path to query
   * @returns {Promise<any>}
   */
  async getRequest(path) {
    const options = {
      method: 'GET',
    };
    return this._makeRequest(path, options);
  }

  /**
   * Post to API endpoint
   * @param path {string} - path to query
   * @param data {Object} - data to send
   * @returns {Promise<any>}
   */
  async postRequest(path, data) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return this._makeRequest(path, options);
  }

  /**
   * Post to API endpoint
   * @param path {string} - path to query
   * @returns {Promise<any>}
   */
  async deleteRequest(path) {
    const options = {
      method: 'DELETE',
    };
    return this._makeRequest(path, options);
  }

  /**
   * Patch to API endpoint
   * @param path {string} - path to query
   * @param data {Object} - data to delete
   * @returns {Promise<any>}
   */
  async patchRequest(path, data) {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    return this._makeRequest(path, options);
  }
}

export const httpService = new HttpService();
