import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Legend, Tooltip, Adaptor } from '@syncfusion/ej2-react-heatmap';
import axios from "axios";


function HeatMap() {

    const [heatmapData, setHeatMapData] = React.useState([])


    React.useEffect(()=>{
        axios.get("https://carfeaturesanalysis.herokuapp.com/corr_coeffs")
                    .then((res)=>{
                        setHeatMapData(res.data["coeffs"]);
                    })
            

    }, []);

    const tooltipTemplate = (args) => {
        args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' %'];
    }

    return (
        <HeatMapComponent id="heatmap"  xAxis={{
            labels: [
                "Wheelbase",
                "Width",
                "Fuel_capacity",
                "Engine_size",
                "Length",
                "Power_perf_factor",
                "Horsepower",
                "Fuel_efficiency",
                "Year_resale_value",
                "Price",
                "Sales"
            ],
            labelRotation: 45,
            labelIntersectAction: 'None',
            textStyle: {
                size: '12px',
            }
        }} yAxis={{
            labels: [
                "Wheelbase",
                "Width",
                "Fuel_capacity",
                "Engine_size",
                "Length",
                "Power_perf_factor",
                "Horsepower",
                "Fuel_efficiency",
                "Year_resale_value",
                "Price",
                "Sales"
            ],
            textStyle: {
                size: '12px',
            }
        }} paletteSettings={{
            palette: [
                { value: -1, color: '#F24C4C' },
                { value: 0, color: '#FAF0D7' },
                { value: 3.5, color: '#d7c7a7' },
                { value: 6.0, color: '#6e888f' },
                { value: 7.5, color: '#466f86' },
                { value: 1, color: '#19547B' }
            ]
        }} legendSettings={{
            visible: false
        }} tooltipRender={tooltipTemplate} dataSource={heatmapData}>
            <Inject services={[Legend, Tooltip, Adaptor]} />
        </HeatMapComponent>);

}

export default HeatMap;