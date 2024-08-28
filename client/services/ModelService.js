import { httpService } from 'utils/HttpService';

/**
 * MXE Model Service
 */
class ModelService {
  /**
   * Get model list from the API
   * @returns {Promise<any>}
   */
  static getModels() {
    return httpService.getRequest('/models');
  }

  /**
   * Post model to the API
   * @param model {Object} - Model data
   * @returns {Promise<any>}
   */
  static postModel(model) {
    return httpService.postRequest('/models', model);
  }
}

export default ModelService;
