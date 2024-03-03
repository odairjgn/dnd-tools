import "primereact/resources/themes/md-dark-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { createRoot } from "react-dom/client";
import MainLayout from "./components/layout/main-layout";
import { ConfirmDialog } from "primereact/confirmdialog";
import portugues from "./pt-br.json";
import { locale, addLocale } from "primereact/api";

const root = createRoot(document.body);
root.render(<App />);

function App() {
  addLocale("pt-br", portugues["pt-br"]);
  locale("pt-br");
  return (
    <>
      <MainLayout />
      <ConfirmDialog />{" "}
    </>
  );
}
