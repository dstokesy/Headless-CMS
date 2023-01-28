import { IContent } from '@/content';
import { Content } from '@/components';

export default function TwoColumn(props: IContent) {
    const { content } = props;
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-6">
                <div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-7">
                    {content?.columnOne && (
                        <Content markup={content.columnOne} />
                    )}
                </div>
                <div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13">
                    {content?.columnTwo && (
                        <Content markup={content.columnTwo} />
                    )}
                </div>
            </div>
        </div>
    );
}
