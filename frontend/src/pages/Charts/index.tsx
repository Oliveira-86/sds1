import './styles.css';
import Filters from '../../core/components/Filters';
import Chart from 'react-apexcharts';
import { barOptions, pieOptions } from '../../core/utils/charts-options';

const chartData = [
    {
        x: 'egberto',
        y: 34
    },
    {
        x: 'jessica',
        y: 28
    },
]

const Charts = () => {
    return (
        <div className="page-container">
            <Filters link="/records" textLink="VER TABELA" />
            <div className="chart-container">
                <div className="top-related">
                    <h1 className="top-related-title">
                        Jogos mais Votados
                    </h1>
                    <div className="games-container">
                        <Chart 
                            options={barOptions}
                            type="bar"
                            width="900"
                            height="150"
                            series={[{ data: chartData }]}
                        />
                    </div>
                </div>
                <div className="charts">
                    <div className="platform-chart">
                        <h2 className="chart-title">
                            Plataformas
                        </h2>
                        <Chart 
                            options={{ ...pieOptions, labels: ['Egberto', 'Jéssica']}}
                            type="donut"
                            series={[30, 70]}
                            width="350"
                        />
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Charts;