import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider, QueryErrorResetBoundary } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import { ROUTES } from "./constants/routes";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Spinner from "./components/spinner/Spinner";
import Error from "./components/error/Error";

const Dashboard = lazy(() => import("./pages/dashboard/Dashboard"));
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      suspense: true,
    },
  },
});

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <QueryClientProvider client={queryClient}>
        <QueryErrorResetBoundary>
          {({ reset }) => (
            <ErrorBoundary onReset={reset} fallbackRender={Error}>
              <Suspense fallback={<Spinner />}>
                <Routes>
                  <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          )}
        </QueryErrorResetBoundary>
      </QueryClientProvider>
    </div>
  );
}

export default App;
