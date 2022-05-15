import React from "react";
import { Link } from "react-router-dom";
import "../css/NoPages.css"

export default function NoPages() {
    return (
        <div className="error404">
            <h1>404</h1>
            <span>Oups! La page que vous demandez n'existe pas.</span>
            <Link className="back-app" to="/">Retourner sur la page d'accueil</Link>
        </div>

    )
}