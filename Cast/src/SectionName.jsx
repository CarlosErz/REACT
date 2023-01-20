import "/src/assets/Productos.svg"
import "/src/assets/Servicios.svg"
import "/src/assets/Sobre nosotros.svg"
export function SectionName({ Section,CardId ,IconId}) {
  return (
    <div className="Section" id={CardId}>
      <h2 className="Section-name">{Section}</h2>
      <i className="Section-icon">
        <img className={IconId} src= {`/src/assets/${Section}.svg`} alt={`${Section}`} />
      </i>
    </div>
  )
}