import { Record, RecordProps } from "./record";
import { RecordList } from "./record-list";
import { useTable } from "react-table";
import { useAppContext } from "../contexts/app.context";
import { Authentication } from "./authenitcation";

export const Dashboard: React.FC = () => {
  // todo: try out react-table https://react-table.tanstack.com/
  const columns = {};
  const data = [];

  const { state, setState } = useAppContext();

  const mock: RecordProps = {
    name: "BTC",
    price: 16000,
    percentageChange24h: 5,
    percentageChangeMonth: 24,
    amount: 2.5,
    totalGain: 4000,
    value: 24000,
    roi: 15,
    allocation: 100,
  };

  return (
    <div>
      <h1 className="text-6xl">Dashboard</h1>
      <RecordList>
        <Record<RecordProps> {...mock} />
      </RecordList>
      <Authentication />
    </div>
  );
};
