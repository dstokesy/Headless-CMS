import styles from './navigation.module.scss';
import Link from 'next/link';

interface INavProps {
    id: string;
    title: string;
    url: string;
}

const navItems: INavProps[] = [
    {
        id: 'home',
        title: 'Home',
        url: '/'
    },
    {
        id: 'frontend',
        title: 'Frontend',
        url: '/frontend'
    },
    {
        id: 'cms',
        title: 'CMS',
        url: '/cms'
    },
    {
        id: 'blog',
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 'contact',
        title: 'Contact',
        url: '/contact'
    }
];

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className="flex justify-end gap-6">
                {navItems.map(({ id, title, url }) => (
                    <li key={id}>
                        <Link href={url} className={styles.nav_item}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
