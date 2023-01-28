import { OneColumn, TwoColumn, ThreeColumn } from '@/components/ContentSection';
import type { IContent } from '@/content';

type ContentType = {
    data: IContent['content'];
};

export default function ContentSelector(props: ContentType) {
    const { data } = props;

    switch (data._group) {
        case 'onecolumn':
            return <OneColumn content={data} />;
            break;
        case 'twocolumn':
            return <TwoColumn content={data} />;
            break;
        case 'threecolumn':
            return <ThreeColumn content={data} />;
            break;
        default:
            return <></>;
            break;
    }
}
