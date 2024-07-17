import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { useAuthContext } from "../../../context/authContex";
import { getTotalExpenseByCategoriesAPI } from "../../../services/api";

export default function ExpensesPieChart() {

    const { jwt } = useAuthContext();
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState([]);
    const [showChart, setShowChart] = useState(false);

    const handleShowChart = async () => {
        setShowChart(true)
    };

    const fetchChartData = async () => {
        try {
            const response = await getTotalExpenseByCategoriesAPI(jwt);
            const formattedData = response.totalExpenses.map((expense) => ({
                value: expense.totalAmount,
                name: expense.category,
            })).sort((a, b) => b.value - a.value);
            setChartData(formattedData);
        } catch (error) {
            console.error("Error fetching chart data:", error);
        }
    };

    useEffect(() => {

        if (showChart) {
            if (chartData.length === 0) return;
            const chartInstance = echarts.init(chartRef.current);

            const chartOptions = {
                title: {
                    text: "Gastos por categorias",
                    subtext: "UISEK",
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)",
                },
                legend: {
                    left: "center",
                    top: "bottom",
                    data: chartData.map(item => item.name),
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true },
                    },
                },
                series: [
                    {
                        name: "Area Mode",
                        type: "pie",
                        radius: [20, 140],
                        center: ["50%", "50%"],
                        roseType: "area",
                        itemStyle: {
                            borderRadius: 5,
                        },
                        data: chartData,
                    },
                ],
            };

            chartInstance.setOption(chartOptions);

            return () => {
                chartInstance.dispose();
            };
        }

    }, [showChart, chartData]);

    useEffect(() => {
        fetchChartData()
    }, [])

    return (
        <div className="my-10">
            {!showChart && 
                <button onClick={handleShowChart} className="bg-blue-600 px-4 py-2 rounded-lg mb-4 text-white">
                    Mostrar Gráfico de Gastos por Categorías
                </button>
            }
            <div className={`${showChart ? "" : "hidden"}`} style={{ width: "100%", height: "400px" }}>
                <div ref={chartRef} style={{ width: "100%", height: "100%" }}></div>
            </div>
        </div>
    )
}
