import React from 'react';
import {pets} from '../../data/data'
import PetCard from './PetCard/PetCard';
import { PetList } from './Pets.CSS';
const Pets = () => {
    return (
        <PetList>
            {
                pets.map(element=>{
                    return (
                            <PetCard item={element} key={element.id}></PetCard>
                        )
                })
            }
        </PetList>
    );
}

export default Pets;
