import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
    return (
        <>
          <li className="card-item">
              <Link className="card-link" to={props.path} >
                  <figure className="card-pic" data-category={props.label} >
                      <img src={props.src} alt="Imagem" className="card-img" />
                  </figure>
                  <div className="card-info">
                      <h4 className="card-text">{props.text}</h4>
                  </div>
              </Link>
          </li>  
        </>
    );
}

export default CardItem;