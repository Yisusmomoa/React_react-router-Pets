import React from 'react';
// import { petCardc, petCardHeader, petCardBody, petCardImg } from "./PetCard.CSS";
import { Link } from 'react-router-dom';
import { 
    PetCardWrapper,
    PetCardBody,
    PetCardBodyHeader,
    PetCardBodyImg } from './PetCard.CSS';

const PetCard = ({item}) => {
    console.log(item)
    return (
        <PetCardWrapper>
            <Link to={`${item.id}`}>
                <PetCardBody>
                    <PetCardBodyHeader><h2>{item.name}</h2></PetCardBodyHeader>
                    <PetCardBodyImg src={item.image}></PetCardBodyImg>
                </PetCardBody>
            </Link>
        </PetCardWrapper>
    );
}

export default PetCard;
