import {Record, RecordProps, Stringify} from './record';


type HeaderRecord = Stringify<RecordProps>;

export const RecordList = (props: any) => {
  const headers: Stringify<RecordProps> = {
    name: 'Name',
    price: 'Price',
    percentageChange24h: '24h',
    percentageChangeMonth: 'Month',
    amount: 'Amount',
    totalGain: 'Total gain',
    value: 'Value',
    roi: 'ROI',
    allocation: 'Allocation'
  }

  return (
    <div className="my-8">
      <Record <HeaderRecord> {...headers} />
      {props.children}
    </div>
  );
};
