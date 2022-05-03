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

registerApplication({
  name: "@test/app2",
  app: () => System.import("http://localhost:8300/test-app2.js"),
  activeWhen: [location => location.pathname.startsWith("/about")],
  customProps: {
   token:"Passed token"
}
});

start({
  urlRerouteOnly: true,
});
