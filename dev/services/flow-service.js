const API_BASE_URL = '/v1';
const flows = ['flow1', 'flow2', 'flow3'];
const flowDeployments = [
  {
    name: 'flow1',
    flowName: 'flow1',
    creationTime: 1551451822000,
    externalPort: 30998,
  },
  {
    name: 'flow2',
    flowName: 'flow2',
    creationTime: 1551451822010,
    externalPort: 30881,
  },
];

module.exports = (app) => {
  /**
   * Flows
   */
  app.get(`${API_BASE_URL}/flows`, (req, res) => {
    res.send(flows);
  });

  app.post(`${API_BASE_URL}/flows`, (req, res) => {
    const flowToAdd = req.body;

    flows.push(flowToAdd.name);

    res.send(flows);
  });
  /**
   * Flow deployments
   */
  app.get(`${API_BASE_URL}/flow-deployments`, (req, res) => {
    res.send(flowDeployments);
  });

  app.post(`${API_BASE_URL}/flow-deployments`, (req, res) => {
    const flowToAdd = req.body;

    flowDeployments.push(flowToAdd);

    res.send(flowDeployments);
  });

  app.delete(`${API_BASE_URL}/flow-deployments/:name`, (req, res) => {
    const { name } = req.params;

    for (let i = 0; i < flowDeployments.length; i++) {
      if (flowDeployments[i].name === name) {
        flowDeployments.splice(i, 1);
        break;
      }
    }

    res.send(flowDeployments);
  });
};
