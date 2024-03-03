import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.body);
root.render(<App />);

function App() {
  return <h2>Hello from React!</h2>;
}
