import { Chart } from "react-google-charts";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useMemo } from "react";

const Result = () => {

    const _data = JSON.parse(sessionStorage.getItem("data"));

    const getMajors = () => useMemo(() => {
        return _data.majors
    }, [_data])

    const getMessage = () => useMemo(() => {
        return _data.message;
    }, [_data])

    const getData = () => useMemo(() => {
        const data = [["Subtes", "Nilai Subtes"]];

        const subtes = Object.keys(_data.scores);
        const scores = Object.values(_data.scores);

        subtes.forEach((item, index) => {
            data.push([subtes[index], scores[index]])
        })

        return data
    }, [_data]);

    const score = getData();
    const majors = getMajors();
    const message = getMessage();

    const options = {
        chartArea: { width: "80%" },
        hAxis: {
            title: "Skor SNBT",
            minValue: 0,
            maxValue: 1000,
            textStyle: { fontName: 'Nunito' }
        },
        vAxis: {
            textStyle: { fontName: 'Nunito' }
        },
        animation: {
            duration: 1000,
            easing: "out",
            startup: true,
        },
        legend: { position: "top", textStyle: { fontName: 'Nunito' } },
    };



    return (<>
        <div className="md:flex md:flex-col md:justify-center">
            <h1 className="text-black font-semibold text-2xl text-center">Hasil Anda:</h1>
            <div className="chart h-[50vh] md:h-[65vh]">
                <Chart
                    chartType="BarChart"
                    width="100%"
                    height="100%"
                    data={score}
                    options={options}
                />
            </div>
            <div className="result-info mb-12">
                <Alert variant="filled" severity={majors.length ? 'success' : 'warning'}>
                    <AlertTitle><h2 className="font-bold text-xl md:text-2xl">{majors.length ? 'Selamat,' : 'Sayang Sekali,'}</h2></AlertTitle>
                    <div className="content text-sm md:text-base">
                        <p>{message}</p>
                        <ul className="list-disc list-inside">
                            {(majors && majors.length) && majors.map((item, id) => <li key={id}>{item}</li>)}
                        </ul>
                    </div>
                </Alert>
            </div>
        </div>
    </>);
}

export default Result;