
export function SectionName({ Section,CardId ,IconId}) {
  return (
    <div className="Section" id={CardId}>
      <h2 className="Section-name">{Section}</h2>
      <i className="Section-icon">
        <img className={IconId} src= {`src/assets/${Section}.svg`} alt="" />
      </i>
    </div>
  )
}