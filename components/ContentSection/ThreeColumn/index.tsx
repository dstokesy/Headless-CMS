import { IContent } from '@/content';
import { Content } from '@/components';

export default function ThreeColumn(props: IContent) {
    const { content } = props;

    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
                    {content?.content_left && (
                        <Content markup={content.content_left} />
                    )}
                </div>
                <div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-9">
                    {content?.content_centre && (
                        <Content markup={content.content_centre} />
                    )}
                </div>
                <div className="col-start-1 col-end-13 sm:col-start-9 sm:col-end-13">
                    {content?.content_right && (
                        <Content markup={content.content_right} />
                    )}
                </div>
            </div>
        </div>
    );
}
