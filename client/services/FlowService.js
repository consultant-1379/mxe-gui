import { httpService } from 'utils/HttpService';
import { API_FLOWS_PATH, API_FLOW_DEPLOYMENTS_PATH } from 'utils/Config';

/**
 * MXE Model Service
 */
class FlowService {
  /**
   * Get Flow list from the API
   * @returns {Promise<any>}
   */
  static getFlows() {
    return httpService.getRequest(API_FLOWS_PATH);
  }

  /**
   * Post Flow to the API
   * @param flow {Object} - Flow data
   * @returns {Promise<any>}
   */
  static postFlow(flow) {
    return httpService.postRequest(API_FLOWS_PATH, flow);
  }

  /**
   * Get Flow Deployments list from the API
   * @returns {Promise<any>}
   */
  static getFlowDeployments() {
    return httpService.getRequest(API_FLOW_DEPLOYMENTS_PATH);
  }

  /**
   * Delete Flow Deployment from the API
   * @param flowDeploymentName {string} - Model Deployment name
   * @returns {Promise<any>}
   */
  static deleteFlowDeployments(flowDeploymentName) {
    return httpService.getRequest(`${API_FLOW_DEPLOYMENTS_PATH}/${flowDeploymentName}`);
  }

  /**
   * Post Flow Deployment to the API
   * @param flowDeploy {Object} - Flow data
   * @returns {Promise<any>}
   */
  static postFlowDeployment(flowDeploy) {
    return httpService.postRequest(API_FLOW_DEPLOYMENTS_PATH, flowDeploy);
  }
}

export default FlowService;
