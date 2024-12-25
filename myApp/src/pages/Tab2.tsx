import React, { useState } from 'react';
import {
  IonInput,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonItem,
  IonLabel,
  IonRadioGroup,
  IonRadio,
  IonList,
  IonButton,
  useIonToast,
  IonSelect,
  IonSelectOption,
  IonCheckbox,
} from '@ionic/react';
import axios from 'axios'; // Import axios

const Tab2: React.FC = () => {
  const [present] = useIonToast();

  // State variables for form fields
  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState<number | undefined>(undefined);
  const [department, setDepartment] = useState('');
  const [programmingLanguages, setProgrammingLanguages] = useState<string[]>([]);

  const presentToast = (position: 'top' | 'middle' | 'bottom') => {
    present({
      message: 'Form submitted successfully!',
      duration: 1500,
      position: position,
      color: 'success'
    });
  };

  const handleLanguageChange = (language: string, isChecked: boolean) => {
    if (isChecked) {
      setProgrammingLanguages((prev) => [...prev, language]);
    } else {
      setProgrammingLanguages((prev) => prev.filter((lang) => lang !== language));
    }
  };

  const handleSubmit = async () => {
    
    const user = {
      userName,
      userId,
      gender,
      age,
      department,
      programmingLanguages,
    };

    try {
      // Make a POST request to the JSON server
      const response = await axios.post('http://localhost:3001/users', user);
      console.log('User saved successfully:', response.data);

      presentToast('top');
    } catch (error) {
      console.error('Error saving user:', error);
      present({
        message: 'Failed to save the user!',
        duration: 1500,
        position: 'top',
        color: 'danger',
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reg Form</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonItem className="m-3 mb-5 border border-blue-500 rounded-lg">
          <IonInput
            label="User Name"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter your name"
            onIonChange={(e) => setUserName(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonItem className="m-3 mb-5 border border-blue-500 rounded-lg">
          <IonInput
            label="User ID"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter your ID"
            onIonChange={(e) => setUserId(e.detail.value!)}
          ></IonInput>
        </IonItem>

        <IonList className="m-3 mb-5 p-2 border border-blue-500 rounded-lg">
          <IonRadioGroup
            value={gender}
            onIonChange={(e) => setGender(e.detail.value)}
          >
            <IonText>
              <h4>Gender</h4>
            </IonText>
            <IonItem>
              <IonLabel>Male</IonLabel>
              <IonRadio slot="start" value="male" />
            </IonItem>
            <IonItem>
              <IonLabel>Female</IonLabel>
              <IonRadio slot="start" value="female" />
            </IonItem>
          </IonRadioGroup>
        </IonList>

        <IonItem className="m-3 mb-5 p-2 border border-blue-500 rounded-lg">
          <IonInput
            label="Age"
            labelPlacement="floating"
            fill="outline"
            placeholder="Enter your age"
            type="number"
            onIonChange={(e) => setAge(parseInt(e.detail.value!))}
          ></IonInput>
        </IonItem>

        <IonItem className="m-3 mb-5 border border-blue-500 rounded-lg">
          <IonList className="flex justify-center w-full text-center">
            <IonItem>
              <IonSelect
                className="text-center"
                aria-label="Department"
                interface="action-sheet"
                placeholder="Select Your Department"
                onIonChange={(e) => setDepartment(e.detail.value)}
              >
                <IonSelectOption value="IT">IT</IonSelectOption>
                <IonSelectOption value="Software Eng">Software Eng</IonSelectOption>
                <IonSelectOption value="CS">Computer Sci</IonSelectOption>
              </IonSelect>
            </IonItem>
          </IonList>
        </IonItem>

        <div className="flex flex-col p-2 m-3 border border-blue-500 rounded-lg">
          <h3 className="mb-2 text-center text-lg font-semibold italic">
            Select your Programming Language
          </h3>
          <div className="flex justify-evenly">
            <IonCheckbox
              className="border border-blue-500 p-1 rounded-xl bg-slate-100"
              onIonChange={(e) => handleLanguageChange('Java', e.detail.checked)}
            >
              Java
            </IonCheckbox>
            <IonCheckbox
              className="border border-blue-500 p-1 rounded-xl bg-slate-100"
              onIonChange={(e) => handleLanguageChange('Rust', e.detail.checked)}
            >
              Rust
            </IonCheckbox>
            <IonCheckbox
              className="border border-blue-500 p-1 rounded-xl bg-slate-100"
              onIonChange={(e) => handleLanguageChange('C#', e.detail.checked)}
            >
              C#
            </IonCheckbox>
          </div>
        </div>

        <IonButton expand="block" onClick={handleSubmit}>
          Submit
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
