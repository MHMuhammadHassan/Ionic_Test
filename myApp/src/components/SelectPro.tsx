import React, { useRef, useState } from 'react';
import {
  IonCheckbox,
  IonModal,
  IonToolbar,
  IonButtons,
  IonButton,
  IonPicker,
  IonPickerColumn,
  IonPickerColumnOption,
} from '@ionic/react';



function Pro() {
  const modal = useRef<HTMLIonModalElement>(null);
  const [value, setValue] = useState<string | number | undefined>('javascript');

  return (
    <>
    <div className='flex flex-col p-2 m-3 border border-blue-500 rounded-lg'>
      <h3 className='mb-2 text-center text-lg font-semibold italic'>Select your Programming Language</h3>
    <div className='flex justify-evenly '>

       <IonCheckbox className='border border-blue-500 p-1 rounded-xl bg-slate-100' indeterminate={true}>Java</IonCheckbox>
       <IonCheckbox className='border border-blue-500 p-1 rounded-xl bg-slate-100' indeterminate={true}>Rust</IonCheckbox>
       <IonCheckbox className='border border-blue-500 p-1 rounded-xl bg-slate-100' indeterminate={true}>C#</IonCheckbox>;
       </div>
       </div>
    </>
  );
}

export default Pro;