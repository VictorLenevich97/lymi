import { useState, useEffect } from "react";
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";

export const useScanner = () => {
  const [err, setErr] = useState<string>();
  const [hideBg, setHideBg] = useState("");

  useEffect(() => {
    const checkPermission = async () => {
      try {
        const status = await BarcodeScanner.checkPermission({ force: true });

        if (status.granted) {
          return true;
        }

        return false;
      } catch (error: any) {
        setErr(error.message);
      }
    };

    checkPermission();

    return () => {};
  }, []);

  const startScan = async () => {
    BarcodeScanner.hideBackground();

    setHideBg("hideBg");

    const result = await BarcodeScanner.startScan();

    stopScan();

    if (result.hasContent) {
      alert(result.content);
    }
  };

  const stopScan = () => {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    setHideBg("");
  };

  return { startScan, stopScan, err, hideBg };
};
