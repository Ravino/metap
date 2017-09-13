module.exports = () => {

  return {
    "routes": [
      { "path": "/", "redirect": "/home" },
      { "path": "/home", "component": require("./components/home.vue") },
      { "path": "/sight", "component": require ("./components/sight.vue") },
      { "path": "/links", "component": require ("./components/links.vue") },
      { "path": "/backend", "component": require ("./components/backend.vue") },
      { "path": "/frontend", "component": require ("./components/frontend.vue") },
      { "path": "/good-access", "component": require ("./components/good-access.vue") },
      { "path": "/bad-access", "component": require ("./components/bad-access.vue") },
    ]
  };
};
