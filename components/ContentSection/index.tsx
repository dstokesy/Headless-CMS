import allContent from '../../content';
import ContentSelector from './ContentSelector/index';

type ContentType = {
  _group: string;
  columnOne?: string;
  columnTwo?: string;
  columnThree?: string;
};

export default function ContentSection({ pageId }: { pageId: string }) {
  const content = allContent[pageId];

  return (
    <div>
      {content.map(({ data, i }: { data: ContentType; i: number }) => (
        <div key={i}>
          <ContentSelector data={data} />
        </div>
      ))}
    </div>
  );
}
