import {
  IonContent,
  IonPage,
  IonButton,
  IonRow,
  IonText,
  IonIcon,
} from "@ionic/react";
import { useScanner } from "../hooks/useScanner";
import { Header } from "../components/Header";
import { scanCircle } from "ionicons/icons";

import "./Home.css";

const Home: React.FC = () => {
  const { startScan, stopScan, err, hideBg } = useScanner();

  if (err) {
    return (
      <IonPage>
        <Header />
        <IonContent className="ion-padding">
          <IonRow>
            <IonText color="danger">{err}</IonText>
          </IonRow>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <Header>
        <IonButton
          size="small"
          shape="round"
          color="warning"
          slot="end"
          onClick={stopScan}
          hidden={!hideBg}
        >
          Stop scan
        </IonButton>
      </Header>

      <IonContent className={hideBg}>
        <div className="home-container">
          <IonIcon hidden={!!hideBg} icon={scanCircle} className="scan-icon" />
          <IonButton
            size="large"
            shape="round"
            color="primary"
            expand="full"
            onClick={startScan}
            hidden={!!hideBg}
          >
            Click to scan
          </IonButton>
        </div>

        <div hidden={!hideBg} className="scan-box" />
      </IonContent>
    </IonPage>
  );
};

export default Home;
