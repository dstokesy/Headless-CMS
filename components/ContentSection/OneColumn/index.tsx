import { IContent } from '@/content';
import { Content } from '@/components';

export default function OneColumn(props: IContent) {
    const { content } = props;

    return (
        <div className="container mx-auto">
            {content.content && <Content markup={content.content} />}
        </div>
    );
}
