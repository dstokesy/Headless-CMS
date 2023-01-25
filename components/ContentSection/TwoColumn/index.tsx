import Content from './../Content/index';

type TwoColType = {
    _group: string;
    columnOne?: string;
    columnTwo?: string;
};

export default function TwoColumn({ data }: { data: TwoColType }) {
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-7">
                    {data.columnOne ? <Content markup={data.columnOne} /> : ''}
                </div>
                <div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13">
                    {data.columnTwo ? <Content markup={data.columnTwo} /> : ''}
                </div>
            </div>
        </div>
    );
}
