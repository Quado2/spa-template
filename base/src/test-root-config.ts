import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "@test/React-test",
  app: () => System.import("http://localhost:8500/test-React-test.js"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
