const API_BASE_URL = '/v1';
const modelDeployments = [
  {
    models: [
      {
        image: 'vmx-eea169:5000/img_vgg16:v0.0.1',
        endpointType: 'REST',
      },
      {
        image: 'vmx-eea169:5000/img_inception3:v0.0.1',
        endpointType: 'REST',
      },
    ],
    created: '2018-12-10T16:56:33Z',
    replicas: 1,
    name: 'img-abtest',
    type: 'abtest',
    status: 'Creating',
  },
  {
    models: [
      {
        image: 'vmx-eea169:5000/img_vgg16:v0.0.1',
        endpointType: 'REST',
      },
      {
        image: 'vmx-eea169:5000/img_inception3:v0.0.1',
        endpointType: 'REST',
      },
    ],
    created: '2018-12-06T12:16:32Z',
    replicas: 1,
    name: 'img-mab',
    type: 'mab',
    status: 'Creating',
  },
  {
    models: [
      {
        image: 'vmx-eea169:5000/img_inception3:v0.0.1',
        endpointType: 'REST',
      },
    ],
    created: '2018-12-07T14:52:56Z',
    replicas: 1,
    name: 'production-model-img',
    type: 'model',
    status: 'Creating',
  },
];

module.exports = (app) => {
  app.get(`${API_BASE_URL}/modeldeployments`, (req, res) => {
    res.send(modelDeployments);
  });

  app.post(`${API_BASE_URL}/modeldeployments`, (req, res) => {
    const modelDeploymentToAdd = req.body;

    modelDeployments.push(modelDeploymentToAdd);

    res.send(modelDeployments);
  });

  app.delete(`${API_BASE_URL}/modeldeployments/:name`, (req, res) => {
    const { name } = req.params;
    for (let i = 0; i < modelDeployments.length; i++) {
      if (modelDeployments[i].name === name) {
        modelDeployments.splice(i, 1);
        break;
      }
    }
    res.send(modelDeployments);
  });

  app.patch(`${API_BASE_URL}/modeldeployments/:name`, (req, res) => {
    const { name } = req.params;
    // @Todo
    res.send(modelDeployments);
  });
};
