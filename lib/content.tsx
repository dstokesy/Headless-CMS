import content from '@/content';

export function getAllContentIds() {
    return (
        content &&
        content.map((page) => {
            return {
                params: {
                    id: page.url
                }
            };
        })
    );
}

export async function getContentData(id: string) {
    return content.filter((page) => {
        return page.url === id;
    })[0];
}
