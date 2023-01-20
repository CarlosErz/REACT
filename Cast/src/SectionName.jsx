import "/src/assets/Productos.svg"
import "/src/assets/Servicios.svg"
export function SectionName({ Section,CardId ,IconId,Icon}) {
  return (
    <div className="Section" id={CardId}>
      <h2 className="Section-name">{Section}</h2>
      <i className="Section-icon">
        <img className={IconId} src={Icon} alt={`${Section}`} />
      </i>
    </div>
  )
}