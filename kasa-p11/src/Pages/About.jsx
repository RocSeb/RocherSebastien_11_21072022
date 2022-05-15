import React, { useState } from "react";
import DropdownTxt from "../Components/DropdownTxt/DropdownTxt";
import Carousel from "../Components/Carousel/Carousel";
//import data from "../data/data.json";
import "../css/About.css"

export default function About() {

    const [dropdownItems, setDropdownItems] = useState([
        {
            id: 1,
            text: "azerty",
            items: {
                 title: "Fiabilité",
                 content: "Les annonces postées sur notre site Kasa sont vérifiées par nos équipes afin de vous garantir une fiabilité optimale.",
            }
        },
        {
            id: 2,
            text: "azerty",
            items: {
                title: "Respect",
                content: "La bienveillance fait partie des valeurs fondatrice. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
            }
        },
        {
            id: 3,
            text: "azerty",
            items: {
                title: "Service",
                content: "Nos équipes restent joignable 24h/24 et 7j/7 pour vous offrir la meilleure expérience et veillent à votre confort pendant votre séjour",
            }
        },
        {
            id: 4,
            text: "azerty",
            items: {
                title: "Responsabilité",
                content: "Le respect de l'environnement fait parti de nos responsabilités, Kasa vous garanti des logements eco-responsable"
            }
        },
    ])
    return (
        <div className="about-container">
            <Carousel />
            <section className="about_txt">
            {dropdownItems.map(dropdownItem =>
                (
                <DropdownTxt
                    key={dropdownItem.id}
                    className="dropdown-txt"
                    label={dropdownItem.items.title}
                    content={dropdownItem.items.content}
                    updateText={setDropdownItems}
                />
            ))}
            </section>
        </div>
    );
  }