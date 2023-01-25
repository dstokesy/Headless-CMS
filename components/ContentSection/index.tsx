import React from 'react';
import ContentSelector from './ContentSelector/index';

interface IProps {
    content: {
        slug: string;
        title: string;
        content: {
            _group: string;
            columnOne?: string;
            columnTwo?: string;
            columnThree?: string;
        }[];
    };
}

const ContentSection: React.FC<IProps> = ({ content }) => {
    return (
        <div>
            {content.content &&
                content.content.map((data, i) => (
                    <div key={i}>
                        <ContentSelector data={data} />
                    </div>
                ))}
        </div>
    );
};

export default ContentSection;
