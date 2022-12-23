import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPet } from '../../data/data';
import {PetDetailCard, 
    PetDetailCardInfo,
    PetCardDetailImg} from './PetDetail.CSS'

const PetDetail = () => {
    const params=useParams()
    // const navigate = useNavigate();
    const pet=useMemo(()=>{
        return getPet(Number(params.petId))
    }, [params.petId])
    return (
        <PetDetailCard>
            <PetDetailCardInfo>
                <h1>Name: {pet.name}</h1>
                <h1>Age: {pet.age}</h1>
            </PetDetailCardInfo>
            <PetCardDetailImg src={pet.image} alt={pet.name}>
            </PetCardDetailImg>
        </PetDetailCard>
    );
}

export default PetDetail;
