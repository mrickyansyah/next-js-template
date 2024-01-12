import { Props } from "react-apexcharts";
import ChartWrapper from "./ChartWrapper";

const options: Props["options"] = {
    chart: {
        type: "area",
        animations: {
            easing: "linear",
            speed: 300,
        },
        sparkline: {
            enabled: false,
        },
        brush: {
            enabled: false,
        },
        id: "basic-bar",
        fontFamily: "Inter, sans-serif",
        foreColor: "hsl(var(--nextui-default-800))",
        stacked: true,
        toolbar: {
            show: false,
        },
    },

    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        labels: {
            // show: false,
            style: {
                colors: "hsl(var(--nextui-default-800))",
                fontFamily: "Inter, sans-serif",
            },
        },
        axisBorder: {
            color: "hsl(var(--nextui-nextui-default-200))",
        },
        axisTicks: {
            color: "hsl(var(--nextui-nextui-default-200))",
        },
    },
    yaxis: {
        labels: {
            style: {
                // hsl(var(--nextui-content1-foreground))
                colors: "hsl(var(--nextui-default-800))",
                fontFamily: "Inter, sans-serif",
            },
        },
    },
    tooltip: {
        enabled: false,
    },
    grid: {
        show: true,
        borderColor: "hsl(var(--nextui-default-200))",
        strokeDashArray: 0,
        position: "back",
    },
    stroke: {
        curve: "smooth",
        fill: {
            colors: ["red"],
        },
    },
    // @ts-ignore
    markers: false,
};

const series: Props["series"] = [
    {
        name: "Series1",
        data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
        name: "Series2",
        data: [11, 32, 45, 32, 34, 52, 41],
    },
];

export default function CardChart() {
    return <ChartWrapper options={options} state={series} height={425} />;
}
