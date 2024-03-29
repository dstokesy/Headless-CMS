import Link from 'next/link';
import Image from 'next/image';
import styles from './post.module.scss';
import { IBlogPost } from '../../content/blog';

type BlogPostType = {
    post: IBlogPost;
};

export default function BlogPosts(props: BlogPostType) {
    const post = props.post;

    let imageMarkup;

    if (post.image) {
        imageMarkup = (
            <Image
                src={post.image}
                width={568}
                height={349}
                alt={post.title}
                className={styles.img}
            />
        );
    }

    return (
        <Link href={`/blog/${post.slug}`} className={styles.card}>
            <div className={styles.card_inner}>
                {imageMarkup}
                <div className={styles.title}>{post.title}</div>
                <div>{post.excerpt}</div>
            </div>
        </Link>
    );
}
