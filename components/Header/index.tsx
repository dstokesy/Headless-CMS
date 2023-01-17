import styles from './index.module.scss'
import Link from 'next/link'
import cx from 'classnames'
import Navigation from '../Navigation/index'

export default function Header() {
	return (
		<header className={cx(styles.header, 'p-6')}>
      <div className="container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-start-1 col-end-13 md:col-start-1 md:col-end-5 lg:col-start-1 lg:col-end-4">
            <div className={cx(styles.logo, 'uppercase')}>
            	<Link href="/">
            		Headless CMS
            	</Link>
            </div>
          </div>
          <div className="col-start-1 col-end-13 md:col-start-5 md:col-end-13 lg:col-start-4 lg:col-end-13">
            <Navigation />
          </div>
        </div>
      </div>
    </header>
	);
}