import fs from 'fs';
import path from 'path';
import content from './../content/index';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllContentIds() {
    return (
        content &&
        content.map((page) => {
            return {
                params: {
                    id: page.slug
                }
            };
        })
    );
}

export async function getContentData(id: string) {
    return content.filter((page) => {
        return page.slug === id;
    });
}
