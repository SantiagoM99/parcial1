import { useState, useEffect } from "react";
const data = [
        {
            "id": 1,
            "nombre": "Café Espresso",
            "tipo": "Espresso",
            "region": "Italia"
        },
        {
            "id": 2,
            "nombre": "Café Antioqueño",
            "tipo": "Tueste Oscuro",
            "region": "Colombia"
        },
        {
            "id": 3,
            "nombre": "Café Etiopiano",
            "tipo": "Yirgacheffe",
            "region": "Etiopía"
        },
        {
            "id": 4,
            "nombre": "Café Francés",
            "tipo": "Café con Leche",
            "region": "Francia"
        },
        {
            "id": 5,
            "nombre": "Café Kona",
            "tipo": "Kona",
            "region": "Hawái"
        }
    ];

function TableDetail(cafeId) {
        const [Cafe, setCafe] = useState({});
        
        
        useEffect(() => {
            const foundCafe = data.find(item => item.id === cafeId);
            if (foundCafe) {
                console.log('encontrado'+ foundCafe);
                setCafe(foundCafe);
            }
        }, [cafeId]);
    

    return (
        <div className="card mb-3">
            <strong>
                {Cafe.nombre}
            </strong>
            <p>
                {Cafe.fecha_cultivo}
            </p>
            <div className="card-body">
                <img
                    style={{ width: "116px", height: "150px" }}
                    variant="top"
                    src={Cafe.imagen}
                    alt={Cafe.nombre}
                />
                <p>
                </p>
                <p>
                    {Cafe.notas}
                </p>
                <br />
                <strong>
                    {Cafe.altura}
                </strong>
            </div>
        </div>
    );
}

export default TableDetail;