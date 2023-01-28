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
        <Link href={`/posts/${post.slug}`} className={styles.card}>
            <Image
                src={post.image}
                className={styles.img}
                height={144}
                width={144}
                alt={post.title}
            />
            <div className={styles.card_inner}>
                <div className={styles.title}>{post.title}</div>
                <div>{post.date}</div>
            </div>
        </Link>
    );
}
