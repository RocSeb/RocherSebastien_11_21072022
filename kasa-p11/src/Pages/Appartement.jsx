import React from "react";
import { useParams }  from "react-router-dom";
import { useFetch } from '../utils/useFetch'
import DropdownTxt from "../Components/Dropdown/DropdownTxt/DropdownTxt";
import DropdownList from "../Components/Dropdown/DropdownList/DropdownList";
import Carousel from "../Components/Carousel/Carousel";
import Tags from "../Components/Tags/Tags";
import ErrorPage from "../Pages/NoPages";
import Rating from "../Components/Rating/Rating";

import "./css/Appartement.css";

export default function Appartement() {
    const { data } = useFetch('data.json');
    console.log( { data }, "<==========other data");



    const id = useParams('/Appartement?id=');
    
    const arrOfData = []
    Object.keys(data).forEach((key) => {
        
        arrOfData.push(data[key])
    })
    const currentProduct = arrOfData.find((d) => d.id === id.id)
    
   

    if (currentProduct) {
        const [firstName, lastName] = currentProduct.host.name.split(' ');
        console.log(currentProduct, "currentProduct");
        return(
            <div>
                <Carousel cover={currentProduct.pictures} />
                <div className="appartement-details">
                    <div className="details-appart">
                        <h1>{currentProduct.title}</h1>
                        <span>{currentProduct.location}</span>
                        <Tags content={currentProduct.tags}></Tags>
                    </div>
                    <div className="details-user">
                        <div className="user-flex">
                            <div className="user-name">
                                <span> {firstName} </span>
                                <span> {lastName} </span>
                            </div>
                            <img className="profile-picture" src={currentProduct.host.picture} alt= {currentProduct.host.name} />
                        </div>
                        <Rating rating={currentProduct.rating}></Rating>
                    </div>    
                </div>
                <div className="dropdown-appart">
                    <DropdownTxt
                        className="dropdown"
                        label='Description'
                        content={currentProduct.description}
                    />
                    <DropdownList
                        className="dropdown"
                        label='equipement'
                        content={currentProduct.equipments}
                    />
                </div>
                
            </div>
        )
    } else {
        return <ErrorPage />
    }
}