export function ServiceCard({ CardTitle, Product1, Product2, Product3, Product4,Product5,Product6,Product7,Product8,Product9,Product10,Product11,Product12,Product13}) {
  const products = [Product1, Product2, Product3, Product4,Product5,Product6,,Product7,Product8,Product9,Product10,Product11,Product12,Product13];

  return (
    <div className="contenido_card">
      <article className="card">
        <img className="card-icon" src={`src/assets/${CardTitle}.svg`} alt={`${CardTitle}`} />
        <h3 className="card-title">{CardTitle}</h3>
        <ul className="card-info">
          {products.map((product,producKey) => {
            if (product) {
              return <li key={producKey}>{product}</li>
            }
            return null;
          })}
        </ul>
      </article>
    </div>
  )
}