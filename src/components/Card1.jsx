import React from 'react'

const Card1 = ({img,company,role,type,level,price}) => {
  return (
    
      <div className="card">

      <div className="image">
        <img src={img}alt={company} />
        <h3 className="company-name">{company}</h3>
        <h1 className="role">{role}</h1>

        <div className="tags">
          <button>{type}</button>
          <button>{level}</button>
        </div>
      </div>

      <div className="footer">
        <p className="price">{price}</p>
        <button>Apply now</button>
      </div>

    </div>
   
 
  )
}

export default Card1
