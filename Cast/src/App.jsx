import './css/Style.css'
import { ServiceCard } from './components/ServiceCard.jsx'
import { SectionName } from './components/SectionName.jsx'
import { HeaderApp } from './components/HeaderApp.jsx'
import { Navbar } from './components/Navbar.jsx'

import servicios from '/src/assets/Servicios.svg'
import Celulares from '/src/assets/Reparacion de celulares.svg'
import Computadoras from '/src/assets/Computadoras.svg'
import Desbloqueos from '/src/assets/Desbloqueos.svg'
import sobreNosotros from '/src/assets/Sobre nosotros.svg'

const card = [
  {
    CardTitle: 'Reparacion de celulares',
    Icon: Celulares,
    Product1: 'Reparación de pantallas',
    Product2: 'Reparacion de centros de carga',
    Product3: 'Cambio de baterias',
    Product4: 'Cambios de bocinas',
    Product5: 'Cambios de cristal trasero de iPhone',
    Product6: 'Cambio de baterias de iPhone'
    ,
    Product7: 'Flasheos'
    ,
    Product8: 'Diagnosticos'
    ,
    Product9: 'Mantenimientos'
    ,
    Product10: 'Liberación de equipos americanos y mexicanos'
    ,
    Product11: 'Y mas!'
    ,
    Product12: ''
    ,
    Product13: ''
  },
  {
    CardTitle: 'Computadoras',
    Icon: Computadoras,
    Product1: 'Activacion de paqueterias Office',
    Product2: 'Activacion de paqueterias Windows',
    Product3: 'Instalacion de punto de ventas',
    Product4: 'Cambio de pasta termica',
    Product5: 'Diagnosticos',
    Product6: 'Mantenimientos'
  },
  {
    CardTitle: 'Desbloqueos',
    Icon: Desbloqueos,
    Product1: 'Cuenta de Google',
    Product2: 'Cuenta de Samsung',
    Product3: 'Cuenta de Huawei',
    Product4: 'Cuenta de Xiaomi',
    Product5: '',
    Product6: ''
  },

]

export function App() {
  return (

    <main>
      <div id='Header'>
        <Navbar></Navbar>
        <HeaderApp />
      </div>
      <section className='Service'>
        <SectionName Section='Servicios'
          CardId="Servicios"
          IconId="rotate"
          Icon={servicios}
        ></SectionName>
        <div className="Card-direccion">
          {
            card.map(({ CardTitle, Icon, Product1, Product2, Product3, Product4, Product5, Product6, Product7, Product8, Product9, Product10, Product11, Product12, Product13 }) => (
              <ServiceCard
                key={CardTitle}
                Icon={Icon}
                CardTitle={CardTitle}
                Product1={Product1}
                Product2={Product2}
                Product3={Product3}
                Product4={Product4}
                Product5={Product5}
                Product6={Product6}
                Product7={Product7}
                Product8={Product8}
                Product9={Product9}
                Product10={Product10}
                Product11={Product11}
                Product12={Product12}
                Product13={Product13}
              >
              </ServiceCard>
            ))

          }
        </div>
      </section>
      <section>
        <SectionName
          Section="Sobre nosotros"
          CardId="Sobre nosotros"
          Icon={sobreNosotros}
        ></SectionName>

        <div className='AboutUs'>
        </div>
      </section>
    </main>
  )
}
