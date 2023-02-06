import { OneColumn, TwoColumn, ThreeColumn } from '@/components/ContentSection';
import type { IContent } from '@/content';

type ContentType = {
    data: IContent['content_blocks'];
};

export default function ContentSelector(props: ContentType) {
    const { data } = props;

    let group = data._group.replace('blocks[', '');
    group = group.replace(']', '');

    switch (group) {
        case 'onecolumn':
            return <OneColumn content_blocks={data} />;
            break;
        case 'twocolumn':
            return <TwoColumn content_blocks={data} />;
            break;
        case 'threecolumn':
            return <ThreeColumn content_blocks={data} />;
            break;
        default:
            return <></>;
            break;
    }
}
