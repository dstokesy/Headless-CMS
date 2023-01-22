import Content from './../Content/index';

type ThreeColType = {
  _group: string;
  columnOne?: string;
  columnTwo?: string;
  columnThree?: string;
};

export default function ThreeColumn({ Data }: { Data: ThreeColType }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
          {Data.columnOne ? <Content markup={Data.columnOne} /> : ''}
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-9">
          {Data.columnTwo ? <Content markup={Data.columnTwo} /> : ''}
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-9 sm:col-end-13">
          {Data.columnThree ? <Content markup={Data.columnThree} /> : ''}
        </div>
      </div>
    </div>
  );
}
