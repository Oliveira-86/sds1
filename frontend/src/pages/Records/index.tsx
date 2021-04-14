import axios from 'axios';
import { useEffect, useState } from 'react';
import './styles.css';
import { RecordResponse } from '../../core/utils/types';
import { formatDate } from '../../core/utils/helpers';
import Pagination from '../../core/components/Pagination';

const BASE_URL = 'http://localhost:8080';

const Records = () => {
    const [recordResponse, setRecordResponse] = useState<RecordResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPages=12&page=${activePage}`)
        .then(reponse => setRecordResponse(reponse.data));
    }, [activePage]);

    const handlePageChange = (index: number) => {
        setActivePage(index);
    }

    return (
        <div className="page-container">
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>
                </thead>
                <tbody>
                    {recordResponse?.content.map(record => (
                        <tr key={record.id}>
                            <td>{formatDate(record.moment)}</td>
                            <td>{record.name}</td>
                            <td>{record.age}</td>
                            <td className="text-secondary">{record.gamePlatform}</td>
                            <td>{record.genreGame}</td>
                            <td className="text-primary">{record.gameTitle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination 
                activePage={activePage}
                goToPage={handlePageChange}
                totalPages={recordResponse?.totalPages}
            />
        </div>
    );
}

export default Records;
