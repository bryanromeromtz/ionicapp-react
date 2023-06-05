import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, pencil, search, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';


const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const [clientes, setClientes] = useState<any>([]);

  useEffect(()  => {
    // fetch(`http://localhost:8080/api/clientes/${name}`)
    // .then(res => res.json())
    // .then(data => setClientes(data));
    search();
  }, []);

  const search = () => {
    const datosClientes = [
        {
            id: 1,
            nombre: 'Juan',
            apellido: 'Perez',
            telefono: '123456789',
            direccion: 'Calle 123',
            email: 'kenaa@example.com',
            foto: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        },
        {
            id: 2,
            nombre: 'Juan',
            apellido: 'Perez',
            telefono: '123456789',
            direccion: 'Calle 123',
            email: 'kenaa@example.com',
            foto: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        },
        {
            id: 3,
            nombre: 'Juan',
            apellido: 'Perez',
            telefono: '123456789',
            direccion: 'Calle 123',
            email: 'kenaa@example.com',
            foto: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        },
        {
            id: 4,
            nombre: 'Juan',
            apellido: 'Perez',
            telefono: '123456789',
            direccion: 'Calle 123',
            email: 'kenaa@example.com',
            foto: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        }
    ];
    setClientes(datosClientes);
    console.log(clientes);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonTitle style={{marginTop: "30px"}}>Gestión de Clientes</IonTitle>

            <IonItem>
              <IonButton  style={{marginBottom: "30px"}} color="primary" fill="solid" slot="end" size="default">
                <IonIcon  icon={add}/>
                Agregar Cliente
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Teléfono</IonCol>
                <IonCol>Dirección</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              
                <IonRow>
                  <IonCol>Bryan</IonCol>
                  <IonCol>cryptomtz@hotmail.com</IonCol>
                  <IonCol>5580761942</IonCol>
                  <IonCol>galeana 950</IonCol>
                  <IonCol>
                    <IonButton color="primary" fill="clear"
                     >
                      <IonIcon icon={pencil} slot="icon-only" />
                    </IonButton>

                    <IonButton color="danger" fill="clear"
                      >
                      <IonIcon icon={trash} slot="icon-only" />
                    </IonButton>
                  </IonCol>
                </IonRow>
              
            </IonGrid>
          </IonCard>


        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
