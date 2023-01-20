import Content from './../Content/index'

export default function ThreeColumn({
	columnOne,
	columnTwo,
	ColumnThree
}: {
	columnOne?: String,
	columnTwo?: String,
	ColumnThree?: String
}) {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-12 gap-6">
				<div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-5">
					<Content markup={columnOne} />
				</div>
				<div className="col-start-1 col-end-13 sm:col-start-5 sm:col-end-9">
					<Content markup={columnTwo} />
				</div>
				<div className="col-start-1 col-end-13 sm:col-start-9 sm:col-end-13">
					<Content markup={ColumnThree} />
				</div>
			</div>
		</div>
	);
}