export interface IBlogPost {
    id: string;
    user_id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    content_html: string;
    published_at: string;
    published: string;
    created_at: string;
    updated_at: string;
    metadata: boolean;
    summary: string;
    has_summary: boolean;
}
