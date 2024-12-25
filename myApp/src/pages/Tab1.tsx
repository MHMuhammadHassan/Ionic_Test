import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonItem,
  IonButton,
  useIonToast,
} from "@ionic/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Tab1: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [present] = useIonToast();

  const history = useHistory(); 
  const checkUserId = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      const users = response.data;

      const isValid = users.some((user: any) => user.userId === userId);

      if (isValid) {
        present({
          message: "User ID is valid!",
          duration: 1500,
          color: "success",
        });
        history.push('/tab3')

      } else {
        present({
          message: "Invalid User ID!",
          duration: 1500,
          color: "danger",
        });
      }
    } catch (error) {
      console.error("Error fetching users:", error);
      present({
        message: "Error connecting to server.",
        duration: 1500,
        color: "danger",
      });
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItem className="p-0">
          <div className="flex flex-col justify-center items-center min-h-[500px] w-full">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-blue-500 to-slate-400 font-bold italic text-3xl">
              Welcome to Ionic
            </h1>
            <IonInput
              className="w-full border shadow-xl m-5 border-blue-500 bg-transparent rounded-lg"
              label="User ID"
              labelPlacement="floating"
              fill="outline"
              placeholder="Enter your ID"
              onIonChange={(e) => setUserId(e.detail.value!)}
            ></IonInput>
            <IonButton
              className="w-full h-14 text-xl"
              onClick={checkUserId}
            >
              Sign In
            </IonButton>
          </div>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
