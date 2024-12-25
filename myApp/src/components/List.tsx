import React, { useState, useEffect } from 'react';
import {
  IonAvatar,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/react';
import axios from 'axios';
import { add, colorPalette, document, globe } from 'ionicons/icons';
interface User {
  id: string;
  userName: string;
  userId: string;
  gender: string;
  age: number;
  department: string;
  programmingLanguages: string[];
}

function List() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get<User[]>('http://localhost:3001/users');
      setUsers(response.data); 
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <IonContent>
       <IonFab className='fixed bottom-0 right-0'>
      <IonFabButton size="small">
        <IonIcon icon={add}></IonIcon>
      </IonFabButton>
      <IonFabList side="start">
        <IonFabButton>
          <IonIcon icon={document}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={colorPalette}></IonIcon>
        </IonFabButton>
        <IonFabButton>
          <IonIcon icon={globe}></IonIcon>
        </IonFabButton>
      </IonFabList>
    </IonFab>

      <IonList >
        
        {users.map((user) => (
          <IonItem key={user.id} className=' border border-blue-500 p-1 rounded-xl bg-slate-100 m-2 shadow-xl'  button>
            <IonAvatar slot="start" >
              <img
                src={`https://avatars.dicebear.com/api/initials/${user.userName}.svg`}
                alt="avatar"
              />
            </IonAvatar>
            <IonLabel >
              <h2>{user.userName}</h2>
              <p>ID: {user.userId}</p>
              <p>Gender: {user.gender}</p>
              <p>Age: {user.age}</p>
              <p>Department: {user.department}</p>
              <p>Languages: {user.programmingLanguages.join(', ')}</p>
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
}

export default List;
