import posts from '../content/blog';

export function getSortedPosts() {
    return posts;
}

export function getAllBlogPostIds() {
    return posts.map((post) => {
        return {
            params: {
                id: post.slug
            }
        };
    });
}

export function getBlogPostData(id: string) {
    return posts.filter((post) => {
        return post.slug === id;
    })[0];
}
