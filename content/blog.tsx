export interface IBlogPost {
    slug: string;
    title: string;
    image: string;
    date: string;
}

const posts: IBlogPost[] = [
    {
        slug: 'prerendering-one',
        title: 'Two Forms of Pre-rendering (1)',
        image: '/images/post.png',
        date: '2023-01-01'
    },
    {
        slug: 'prerendering-two',
        title: 'Two Forms of Pre-rendering (2)',
        image: '/images/post.png',
        date: '2022-01-01'
    },
    {
        slug: 'prerendering-three',
        title: 'Two Forms of Pre-rendering (3)',
        image: '/images/post.png',
        date: '2021-01-01'
    },
    {
        slug: 'prerendering-four',
        title: 'Two Forms of Pre-rendering (4)',
        image: '/images/post.png',
        date: '2023-01-01'
    },
    {
        slug: 'prerendering-five',
        title: 'Two Forms of Pre-rendering (5)',
        image: '/images/post.png',
        date: '2022-01-01'
    },
    {
        slug: 'prerendering-six',
        title: 'Two Forms of Pre-rendering (6)',
        image: '/images/post.png',
        date: '2021-01-01'
    }
];

export default posts;
