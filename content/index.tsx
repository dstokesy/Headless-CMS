export interface IPageContent {
    title: string;
    url: string;
    layout: string;
    is_hidden: string;
    navigation_hidden: string;
    hero_title: string;
    hero_subtitle: string;
    content_blocks: IContent['content_blocks'][];
}

export interface IContent {
    content_blocks: {
        _group: ColumnTypes;
        background?: string;
        content?: string;
        content_left?: string;
        content_centre?: string;
        content_right?: string;
    };
}

type ColumnTypes = 'onecolumn' | 'twocolumn' | 'threecolumn'; // only these values will be valid when entering _group val
