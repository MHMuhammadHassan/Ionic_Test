import React from 'react';

import { IonPicker, IonPickerColumn, IonPickerColumnOption } from '@ionic/react';


function Picker1() {
  return (
    <>
      <IonPicker>
        <IonPickerColumn value="PhP">
          <IonPickerColumnOption value="" disabled={true}>
            --
          </IonPickerColumnOption>
          <IonPickerColumnOption value="red">IT</IonPickerColumnOption>
          <IonPickerColumnOption value="blue">SE</IonPickerColumnOption>
          <IonPickerColumnOption value="green">CS</IonPickerColumnOption>
        </IonPickerColumn>
      </IonPicker>
    </>
  );
}

export default Picker1;