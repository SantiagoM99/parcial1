import { Col, Row } from 'react-bootstrap';
import TableDetail from '../TableDetail/TableDetail';
import { useState,useEffect } from 'react';
import './Table.css';
import { FormattedMessage } from "react-intl";

function Table() {
    
    const [cafes, setCafes] = useState([]);
    const [cafeId, setId] = useState(undefined);
    
    useEffect(() => {
        const urlBack = 'http://localhost:3001/cafes';
        fetch(urlBack)
            .then(response => response.json())
            .then(data => {
                setCafes(data);
            });
    }, []);
    const handleRowClick = (cafe_Id) => {
        if (cafeId === cafe_Id) {
            setId(undefined);
        } else {
            console.log(cafe_Id);
            setId(cafe_Id);
        }
        }

    const showDetail = () => {
        if (cafeId!== undefined) {
            return <TableDetail cafeId={cafeId} />
        } else {
            return null
        }
    }
    return (
        <Row>
            <Col lg="8">
                <table className="table">
                    <thead className="table-dark"  style={{textAlign:'left'}}>
                        <tr>
                            <th>#</th>
                            <th>
                                <FormattedMessage id="Nombre"/>
                            </th>
                            <th>
                                <FormattedMessage id="Tipo"/>
                            </th>
                            <th>
                                <FormattedMessage id="Region"/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cafes.map((item,index) => (
                            <tr key={index} onClick={() => handleRowClick(item.id)}  style={{textAlign:'left'}}>
                                <td><strong>{item.id}</strong></td>
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
} export default Table;