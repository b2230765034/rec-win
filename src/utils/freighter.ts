import freighterApi from "@stellar/freighter-api";

export async function connectFreighter(passive = false) {
    console.log("Checking if Freighter is connected...");
    if (!freighterApi.isConnected()) {
      console.warn("Freighter extension is not connected or installed.");
      return null;
    }
  
    try {
      if (!passive) {
        console.log("Requesting permission with setAllowed()...");
        const allowed = await freighterApi.setAllowed();
        console.log("setAllowed response:", allowed);
      }
  
      const { address } = await freighterApi.getAddress();
      console.log("Got address:", address);
      return address;
    } catch (error) {
      console.error("Freighter connection failed:", error);
      return null;
    }
  }
  
