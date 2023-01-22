import Content from './../Content/index';

type OneColType = {
  _group: string;
  columnOne?: string;
};

export default function OneColumn({ data }: { data: OneColType }) {
  return (
    <div className="container mx-auto">
      {data.columnOne ? <Content markup={data.columnOne} /> : ''}
    </div>
  );
}
