import { confirmDialog } from "primereact/confirmdialog";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { TabView, TabPanel } from "primereact/tabview";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import ReactDice, { ReactDiceRef } from "react-dice-complete";
import { useRoll } from "../../../lib/react-dice/src";

export default function MainLayout() {
  const toast = useRef<Toast>();

  const itensMenu: MenuItem[] = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
              command: () => NaoImplementado(),
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
              command: () => NaoImplementado(),
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
          command: () => NaoImplementado(),
        },
        {
          separator: true,
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
          command: () => NaoImplementado(),
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
          command: () => NaoImplementado(),
        },
        {
          label: "Right",
          icon: "pi pi-fw pi-align-right",
          command: () => NaoImplementado(),
        },
        {
          label: "Center",
          icon: "pi pi-fw pi-align-center",
          command: () => NaoImplementado(),
        },
        {
          label: "Justify",
          icon: "pi pi-fw pi-align-justify",
          command: () => NaoImplementado(),
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
          command: () => NaoImplementado(),
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
          command: () => NaoImplementado(),
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                  command: () => NaoImplementado(),
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
              command: () => NaoImplementado(),
            },
          ],
        },
      ],
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
              command: () => NaoImplementado(),
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
              command: () => NaoImplementado(),
            },
          ],
        },
        {
          label: "Archieve",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
              command: () => NaoImplementado(),
            },
          ],
        },
      ],
    },
    {
      label: "Quit",
      icon: "pi pi-fw pi-power-off",
      command: () => Sair(),
    },
  ];

  function NaoImplementado() {
    toast.current.show({
      severity: "info",
      summary: "Aviso",
      detail: "Não implementado (ainda).",
    });
  }

  function Sair() {
    confirmDialog({
      message: "Tem certeza que deseja encerrar a aplicação?",
      header: "Confirmação",
      icon: "pi pi-exclamation-triangle",
      defaultFocus: "reject",
      accept: () => window.close(),
    });
  }

  const { roll, processing } = useRoll();

  return (
    <div>
      <Toast ref={toast} />
      <Menubar model={itensMenu} />
      <div>
        <TabView>
          <TabPanel key={1} header="Uh didi! 1" closable>
            Uh didi
            <button onClick={() => roll("d20")}>Didi</button>
            <ReactDice numDice={6} rollDone={() => {}} />
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
}
