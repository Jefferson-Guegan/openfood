import React, { useEffect, useState } from 'react';

import A from "../img/a.png";
import B from "../img/b.png";
import C from "../img/c.png";
import D from "../img/d.png";
import E from "../img/e.png";

const Product = (props) => {

    const [dataProduct, setDataProduct] = useState(null);

    useEffect(()=> {

        //récupération du code-barre
        let barcode = props.match.params.datacode;

        //Appel API
        fetch("https://world.openfoodfacts.org/api/v0/product/"+barcode+".json")
        .then  ((resp)=> resp.json())
        .then ((data) => setDataProduct(data.product))
    }, [])

    //Récupération conditionnelle de la bonne image du nutriscore
    const getNutriImg = (nutriscore) => {
        if(nutriscore !==undefined){
            switch(nutriscore.toUpperCase()){
                case "A":
                    return A;
                case "B":
                    return B;
                case "C":
                    return C;
                case "D":
                    return D;
                case "E":
                    return E;
                default:
                    return A;
            }
        }
    }

    return (
        <div className="productSection">
            <h1>Votre produit :</h1>

            {
                dataProduct != null &&
                <div className="productContainer">
                    <h2>{dataProduct.product_name}</h2>
                    <img className="nutriImg" src={getNutriImg(dataProduct.nutriscore_grade)}/>
                    <img src={dataProduct.image_url}/>
                    <h3>Composition</h3>
                    
                    <table border="1">
                        
                        <thead>
                        
                            <tr>
                                <td>Ingrédient</td>
                                <td>Pourcentage</td>
                            </tr>

                        </thead>
                        
                        <tbody>
                            {
                                //Mapping des ingrédients
                                dataProduct.ingredients.map((ingredient)=>{

                                    //Mise en forme à 2 chiffres après la virgule des pourcentages
                                    let percent = parseFloat(ingredient.percent_estimate).toFixed(2);
                                    if(percent < 1){
                                        percent = "< 1";
                                    }

                                    return(
                                    
                                        <tr>
                                            <td>{ingredient.text}</td>
                                            <td>{percent}%</td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    
                    </table>
                </div>
            }
              
        </div>
    );
};

export default Product;