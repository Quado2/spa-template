import Home from "./components/Home";
import Layout from "./HOC/Layout/Layout";

export default function Root(props) {
  return (
    <Layout>
      <Home />
      <h1>{"Hello world"}</h1>;
    </Layout>
  );
}
