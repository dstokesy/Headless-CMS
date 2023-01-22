import Content from './../Content/index';

type TwoColType = {
  _group: string;
  columnOne?: string;
  columnTwo?: string;
};

export default function TwoColumn({ Data }: { Data: TwoColType }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-7">
          {Data.columnOne ? <Content markup={Data.columnOne} /> : ''}
        </div>
        <div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13">
          {Data.columnTwo ? <Content markup={Data.columnTwo} /> : ''}
        </div>
      </div>
    </div>
  );
}
