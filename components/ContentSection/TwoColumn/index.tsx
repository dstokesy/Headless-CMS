import { IContent } from '@/content';
import { Content } from '@/components';

export default function TwoColumn(props: IContent) {
    const { content_blocks } = props;
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-7">
                    {content_blocks?.content_left && (
                        <Content markup={content_blocks.content_left} />
                    )}
                </div>
                <div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13">
                    {content_blocks?.content_right && (
                        <Content markup={content_blocks.content_right} />
                    )}
                </div>
            </div>
        </div>
    );
}
