import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {

  return (
    <div>
        <h2>ErrorPage</h2>

        <Link to="/">
          <button>Retourner à la page d'accueil</button>
        </Link>
    </div>
  )

}
