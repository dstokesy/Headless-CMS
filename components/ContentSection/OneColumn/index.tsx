import Content from './../Content/index'

export default function OneColumn({ columnOne }: {
	columnOne?: String
}) {
	return (
		<div className="container mx-auto">
			<Content markup={columnOne} />
		</div>
	);
}