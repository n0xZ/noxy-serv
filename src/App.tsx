import { Route } from '@solidjs/router'
import { lazy } from 'solid-js';

const Main = lazy(() => import("./views/main"))
const ServiceOverviewPage = lazy(() => import("./views/services/[id]/overview"))
const ServicesOverviewPage = lazy(() => import("./views/services/overview"))
const CreateServicePage = lazy(() => import("./views/services/create"));

function App() {

  return (

    <>
      <Route path="/" component={Main} />
      <Route path="/services/overview" component={ServicesOverviewPage} />
      <Route path="/services/:id/overview" component={ServiceOverviewPage} />
      <Route path="/services/create" component={CreateServicePage} />
    </>
  );
}

export default App;
