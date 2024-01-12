"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Chart, { Props } from "react-apexcharts";

interface ChartWrapperProps {
    options: Props["options"];
    state: Props["state"];
    height?: number;
}

const DynamicApexChart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

export default function ChartWrapper(props: ChartWrapperProps) {
    const { options, state, height } = props;
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsRendered(true);
        }
    }, []);

    return (
        <div className="w-full z-20">
            <div id="chart">
                {isRendered && (
                    <DynamicApexChart
                        options={options}
                        series={state}
                        type="area"
                        height={height}
                        width="100%"
                    />
                )}
            </div>
        </div>
    );
}
