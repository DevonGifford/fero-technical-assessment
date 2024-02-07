import PieChart from "./charts/PieChart";
import { pieChartData, pieChartOptions } from "./../constants/charts";
import { Card } from "@tremor/react";

const PieChartCard = () => {
  return (
    <Card className="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white pb-1">
            Budget
          </h4>
          <h6 className="text-sm font-medium leading-4 text-gray-400 tracking-wider">
            Monthly Allocation
          </h6>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 mr-2 flex items-center justify-center text-sm font-bold text-gray-600 hover:cursor-pointer dark:!bg-navy-800 dark:text-white rounded-xl">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        <PieChart chartOptions={pieChartOptions} chartData={pieChartData} />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-brand-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">Current Spend</p>
          </div>
          <p className="mt-px text-xl font-bold text-navy-700  dark:text-white">
            63%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <p className="ml-1 text-sm font-normal text-gray-600">Fero Savings</p>
          </div>
          <p className="mt-px text-base font-bold text-navy-700 dark:text-white">
            4.8%
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PieChartCard;
