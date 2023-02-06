import Link from 'next/link';
import Image from 'next/image';
import styles from './post.module.scss';
import { IBlogPost } from '../../content/blog';

type BlogPostType = {
    post: IBlogPost;
};

export default function BlogPosts(props: BlogPostType) {
    const post = props.post;
    return (
        <Link href={`/blog/${post.slug}`} className={styles.card}>
            <div className={styles.card_inner}>
                <div className={styles.title}>{post.title}</div>
                <div>{post.published_at}</div>
            </div>
        </Link>
    );
}
