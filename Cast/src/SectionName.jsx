
export function SectionName({ Section,CardId ,IconId}) {
  return (
    <div className="Section" id={CardId}>
      <h2 className="Section-name">{Section}</h2>
      <i className="Section-icon">
        <img className={IconId} src= {`../assets/${Section}.svg`} alt={`${Section}`} />
      </i>
    </div>
  )
}