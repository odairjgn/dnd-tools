import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { createRoot } from "react-dom/client";
import MainLayout from "./components/layout/main-layout";
import { ConfirmDialog } from "primereact/confirmdialog";

const root = createRoot(document.body);
root.render(<App />);

function App() {
  return (
    <>
      <MainLayout />
      <ConfirmDialog />{" "}
    </>
  );
}
