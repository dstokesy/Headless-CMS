import OneColumn from './../OneColumn/index';
import TwoColumn from './../TwoColumn/index';
import ThreeColumn from './../ThreeColumn/index';

type ContentType = {
    _group: string;
    columnOne?: string;
    columnTwo?: string;
    columnThree?: string;
};

export default function ContentSelector({ data }: { data: ContentType }) {
    switch (data._group) {
        case 'onecolumn':
            return <OneColumn data={data} />;
            break;
        case 'twocolumn':
            return <TwoColumn data={data} />;
            break;
        case 'threecolumn':
            return <ThreeColumn data={data} />;
            break;
        default:
            return <div></div>;
            break;
    }
}
