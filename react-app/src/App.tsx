import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Home } from "./ui/pages";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
