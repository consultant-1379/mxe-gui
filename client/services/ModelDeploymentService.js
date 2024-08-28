import { httpService } from 'utils/HttpService';
import { API_MODEL_DEPLOYMENTS_PATH } from 'utils/Config';
/**
 * MXE Model Service
 */
class ModelDeploymentService {
  /**
   * Get model list from the API
   * @returns {Promise<any>}
   */
  static getModelDeployments() {
    return httpService.getRequest(API_MODEL_DEPLOYMENTS_PATH);
  }

  /**
   * Delete model list from the API
   * @param modelDeploymentName {string} - Model Deployment name
   * @returns {Promise<any>}
   */
  static deleteModelDeployments(modelDeploymentName) {
    return httpService.deleteRequest(`${API_MODEL_DEPLOYMENTS_PATH}/${modelDeploymentName}`);
  }

  /**
   * Patch model deployment to the API
   * @param modelDeploymentName {string} - Model Deployment name
   * @param modelDeployment {Object} - Model data
   * @returns {Promise<any>}
   */
  static patchModelDeployment(modelDeploymentName, modelDeployment) {
    return httpService.patchRequest(
      `${API_MODEL_DEPLOYMENTS_PATH}/${modelDeploymentName}`,
      modelDeployment
    );
  }

  /**
   * Post modelDeployment to the API
   * @param modelDeployment {Object} - Model data
   * @returns {Promise<any>}
   */
  static postModelDeployment(modelDeployment) {
    return httpService.postRequest(API_MODEL_DEPLOYMENTS_PATH, modelDeployment);
  }
}

export default ModelDeploymentService;
