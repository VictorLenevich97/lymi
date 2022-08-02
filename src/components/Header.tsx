import { ReactNode } from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface HeaderProps {
  children?: ReactNode;
}

export const Header = ({ children }: HeaderProps) => (
  <IonHeader>
    <IonToolbar>
      <IonTitle>Lymi</IonTitle>
      {children}
    </IonToolbar>
  </IonHeader>
);
