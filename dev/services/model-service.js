const API_BASE_URL = '/v1';
const models = [
  {
    name: 'IoT device detection',
    description: 'This is the IoT device detection model',
    version: '1.2.3',
    image: 'blabla:1.2.3',
    created: '2019-03-06T08:31:18Z',
    icon: 'dashboard',
    status: 'Packaging',
    message: 'Creating model image',
  },
  {
    name: 'IoT device detection',
    description: 'This is the IoT device detection model',
    version: '1.2.3',
    image: 'blabla:1.2.3',
    created: '2019-03-06T08:31:18Z',
    icon: 'dashboard',
    status: 'Packaging',
    message: 'Creating model image',
  },
  {
    name: 'IoT device detection',
    description: 'This is the IoT device detection model',
    version: '1.2.3',
    image: 'blabla:1.2.3',
    created: '2019-03-06T08:31:18Z',
    icon: 'dashboard',
    status: 'Packaging',
    message: 'Creating model image',
  },
];

module.exports = (app) => {
  app.get(`${API_BASE_URL}/models`, (req, res) => {
    res.send(models);
  });

  app.post(`${API_BASE_URL}/models`, (req, res) => {
    const modelToAdd = req.body;

    models.push(modelToAdd);

    res.send(models);
  });
};
