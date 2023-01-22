import Content from './../Content/index';

type OneColType = {
  _group: string;
  columnOne?: string;
};

export default function OneColumn({ Data }: { Data: OneColType }) {
  return (
    <div className="container mx-auto">
      {Data.columnOne ? <Content markup={Data.columnOne} /> : ''}
    </div>
  );
}
