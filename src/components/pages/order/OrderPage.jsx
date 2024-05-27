import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderPage() {

    const {name} = useParams();

  return (

    <div>
        <p><label>Bonjour {name}</label></p>
    
        <h2>OrderPage</h2> 

        <Link to="/">
            <button>Déconnexion</button>
        </Link>
    </div>

  )
}
