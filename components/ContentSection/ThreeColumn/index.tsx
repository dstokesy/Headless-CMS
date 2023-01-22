import Content from './../Content/index';

type ThreeColType = {
  _group: string;
  columnOne?: string;
  columnTwo?: string;
  columnThree?: string;
};

export default function ThreeColumn({ data }: { data: ThreeColType }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
          {data.columnOne ? <Content markup={data.columnOne} /> : ''}
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-9">
          {data.columnTwo ? <Content markup={data.columnTwo} /> : ''}
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-9 sm:col-end-13">
          {data.columnThree ? <Content markup={data.columnThree} /> : ''}
        </div>
      </div>
    </div>
  );
}
