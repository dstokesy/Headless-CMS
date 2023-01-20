import ContentSelector from './ContentSelector/index'
import allContent from './../../content/test'

export default function ContentSection() {
	return (
		<div>
			{allContent.map((data, i) => (
				<div key={i}>
					<ContentSelector Data={data} />
				</div>
			))}
		</div>
	);
}