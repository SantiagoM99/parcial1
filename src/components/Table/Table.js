import { Col, Row } from 'react-bootstrap';
import Cafe from '../TableDetail/TableDetail';
import { useState } from 'react';

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
  

function Cafes() {
    
    const [cafes, setCafes] = useState(data);
    const [cofeeId, setId] = useState(undefined);

    const handleRowClick = (cafeId) => {
        if (cofeeId === cafeId) {
            setId(undefined);
        } else {
            console.log(cafeId);
            setId(cafeId);
        }
    }

    const showDetail = () => {
        if (cofeeId!== undefined) {
            return <Cafe id={cofeeId} />
        } else {
            return null
        }
    }
    return (
        <Row>
            <Col lg="8">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cafes.map((item) => (
                            <tr key={item.id} onClick={() => handleRowClick(item.id)}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.tipo}</td>
                                <td>{item.region}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Col>
            <Col lg="4">
                {showDetail()}
            </Col>
        </Row>
    );
}

export default Cafes;