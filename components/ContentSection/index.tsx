import React from 'react';
import allContent from '../../content';
import ContentSelector from './ContentSelector/index';

interface IProps {
  pageId: string;
}

const ContentSection: React.FC<IProps> = ({ pageId }) => {
  const content = allContent[pageId];

  return (
    <div>
      {content.map((data, i) => (
        <div key={i}>
          <ContentSelector data={data} />
        </div>
      ))}
    </div>
  );
};

export default ContentSection;
