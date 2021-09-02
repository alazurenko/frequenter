export type RecordProps = {
  name: string;
  price: number;
  percentageChange24h: number;
  percentageChangeMonth: number;
  amount: number;
  value: number;
  allocation: number;
  totalGain: number;
  roi: number;
};

export type Stringify<T> = {
  [Property in keyof T]: string;
};

export type Unknownify<T> = {
  [Property in keyof T]: unknown;
};

export const Record = <T extends Unknownify<RecordProps>>(props: T) => {
  return (
    <div className="container mx-auto flex">
      <p className="mr-2 w-32">{props.name}</p>
      <p className="mx-2 w-32">{props.price}</p>
      <p className="mx-2 w-32">{props.percentageChange24h}</p>
      <p className="mx-2 w-32">{props.percentageChangeMonth}</p>
      <p className="mx-2 w-32">{props.amount}</p>
      <p className="mx-2 w-32">{props.value}</p>
      <p className="mx-2 w-32">{props.allocation}</p>
      <p className="mx-2 w-32">{props.totalGain}</p>
      <p className="mx-2 w-32">{props.roi}</p>
    </div>
  );
};
