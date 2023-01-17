import styles from './index.module.scss'

type ContentType = {
	title: string
	content: string
};

export default function ContentSection({ children }: {
	children: React.ReactNode
}) {
	return (
		<div className="pt-12 pb-12">
			<div className="container mx-auto">
				<div className="grid grid-cols-12 gap-6">
					<div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-7">
						{children}
					</div>
					<div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13">
						{children}
					</div>
				</div>
			</div>
		</div>
	);
}