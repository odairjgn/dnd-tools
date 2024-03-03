import { Menubar } from "primereact/menubar";
import { MenuItens } from "./menu-itens";

export default function MainLayout() {
  return (
    <div>
      <Menubar model={MenuItens} />
    </div>
  );
}
