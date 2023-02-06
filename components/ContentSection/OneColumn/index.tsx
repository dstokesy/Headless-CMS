import { IContent } from '@/content';
import { Content } from '@/components';

export default function OneColumn(props: IContent) {
    const { content_blocks } = props;

    return (
        <div className="container mx-auto">
            {content_blocks.content && (
                <Content markup={content_blocks.content} />
            )}
        </div>
    );
}
