import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Home = () => {

    const [searchBarCode, setSearchBarCode] = useState("Votre Code-Barre")
    
    //Ici on pousse dans l'URL le code-barre
    let history = useHistory();
    const handleSearch = () => {
        history.push('/product/'+searchBarCode)

    }

    return (
        <div className="homeSection">
            
            <div className="homeContainer">

                <h1>Retrouvez votre produit</h1>
                
                <input 
                    type="text"
                    //Ici on récupère la valeur entrée par l'utilisateur et on l'attribue à searchBarCode
                    onChange={(event)=>setSearchBarCode(event.target.value)}
                    value={searchBarCode}
                />

                <button onClick={()=>handleSearch()}>Rechercher</button>
            
            </div>

        </div>
    );
};

export default Home;