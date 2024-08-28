const externals = {
  apps: [
    { path: 'dashboard', entry: 'Dashboard' },
    { path: 'model-list', entry: 'ModelList' },
    { path: 'flow-catalogue', entry: 'FlowCatalogue' },
  ],
  components: {
    default: [],
    shareable: [
      { path: 'model-list/main-container', entry: 'MainContainer' },
      { path: 'model-list/model-card', entry: 'ModelCard' },
      { path: 'model-list/sidebar', entry: 'Sidebar' },
    ],
  },
  panels: [],
  plugins: [],
};

module.exports = externals;
