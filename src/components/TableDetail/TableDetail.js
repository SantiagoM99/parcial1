import { useState, useEffect } from "react";
import "./TableDetail.css";
import { FormattedMessage } from "react-intl";

function TableDetail({cafeId}) {
    console.log(cafeId);
        const [Cafe, setCafe] = useState({});
        useEffect(() => {
            const urlBack = `http://localhost:3001/cafes/${cafeId}`;
            fetch(urlBack)
                .then(response => response.json())
                .then(data => {
                    setCafe(data);
                });
        }, [cafeId]);
    

    return (
        <div className="estiloCard" style={{paddingTop:'0.5rem'}}>
            <strong style={{textTransform: 'uppercase'}}>
                {Cafe.nombre}
            </strong>
            <p>
                {Cafe.fecha_cultivo}
            </p>
            <div className="card-body" style={{paddingBottom: "0.5rem",paddingInline:'1rem'}}>
                <img
                    style={{ width: "116px", height: "150px" }}
                    variant="top"
                    src={Cafe.imagen}
                    alt={Cafe.nombre}
                />

                <p style={{margin:0,padding:0}}> 
                    <FormattedMessage id="Notas"/>
                </p>
                <p style={{marginTop:0,padding:0}}>
                    {Cafe.notas}
                </p>

                <strong>
                    <FormattedMessage id="CultivadoEn"/>
                    {" "}
                    {Cafe.altura}
                    {" "}
                    <FormattedMessage id="Nivel"/>
                </strong>
            </div>
        </div>
    );
}

export default TableDetail;