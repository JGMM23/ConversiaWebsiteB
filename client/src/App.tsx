import { Route, Switch } from "wouter";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import NotFound from "@/pages/not-found";
import { MobileMenuProvider } from "@/context/MobileMenuContext";

function App() {
  return (
    <MobileMenuProvider>
      <Layout>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </MobileMenuProvider>
  );
}

export default App;
