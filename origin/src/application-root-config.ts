import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@application/base",
  app: () => System.import<LifeCycles>("@application/base"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@application/dashboard",
  app: () => System.import<LifeCycles>("@application/dashboard"),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@application/react-project",
  app: () => System.import<LifeCycles>("@application/react-project"),
  activeWhen: ["/react-project"],
});

start({
  urlRerouteOnly: true,
});
