import React from 'react';
import { IonList, IonItem, IonSelect, IonSelectOption } from '@ionic/react';
function Select() {
  return (
    <IonList className='flex justify-center w-full text-center'>

      <IonItem className=' text-center'>
        <IonSelect className='text-center ' aria-label="Department" interface="action-sheet" placeholder="Select Your Department">
          <IonSelectOption value="IT">IT</IonSelectOption>
          <IonSelectOption value="Software Eng">Software Eng</IonSelectOption>
          <IonSelectOption value="CS">Computer Sci</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
  );
}
export default Select;