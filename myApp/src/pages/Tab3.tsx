import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import List from '../components/List';

const Tab3: React.FC = () => {
  return (
    <IonPage>
           <IonHeader>
             <IonToolbar>
              <h2 className='font-semibold italic text-center'>User Lists</h2> 
             
             </IonToolbar>
           </IonHeader>
     
      <IonContent fullscreen>
        
       <List/>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
