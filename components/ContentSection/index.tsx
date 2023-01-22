import allContent from './../../content/test';
import ContentSelector from './ContentSelector/index';

export default function ContentSection() {
  return (
    <div>
      {allContent.map((data, i) => (
        <div key={i}>
          <ContentSelector Data={data} />
        </div>
      ))}
    </div>
  );
}
