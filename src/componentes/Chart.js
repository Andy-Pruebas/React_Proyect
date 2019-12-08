import React,{Component}from 'react';
import './css/bootstrap.min.css';
import './css/estilo.css';
import {Pie} from 'react-chartjs-2'; 

class Chart extends Component{
    constructor(props){
        super(props);
        this.state={
            chartData:props.chartData
        }
    }
    componentWillMount(){
        this.getChartData();
    }
    getChartData(){
        this.setState({
            chartData:{
                labels:['Pregunta1','Pregunta2','Pregunta3','Pregunta4','Pregunta5'
                ,'Pregunta6','Pregunta7'],
                datasets:[
                    {   
                        label:'Repuestas',
                        data:[
                            600,
                            400,
                            360,
                            600,
                            700,
                            500,
                            400
                        ],
                        backgroundColor:[
                            'rgba(255, 99, 132,0.6)',
                            'rgba(54,162,235,0.6)',
                            'rgba(255.100,126,0.6)',
                            'rgba(75,192,192,0.6)',
                            'rgba(153,102,255,0.6)',
                            'rgba(55, 159, 64,0.6)',
                            'rgba(255,99,132,0.6)'
                        ]
                    }
                ]
            }
        });
    }
    static defaultProps={
        displayTitle:true,
        displayLegend: true,
        LegendPosition:"bottom"
    }
    render(){
        return(
            <div className="body" >
                <Pie
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:'Total de las respuestas',
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.LegendPosition
                        }
                    }}
                />
                <div className="container-login100-form-btn">
                    <a className="login100-form-btn" href="/Menu">
                    Regresar al menú.
                    </a>
                </div>  
            </div>

        )
    }
}
export default Chart;