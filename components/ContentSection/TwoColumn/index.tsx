import Content from './../Content/index'

export default function TwoColumn({
	columnOne,
	columnTwo
}: {
	columnOne?: String,
	columnTwo?: String
}) {
	return (
		<div className="container mx-auto">
			<div className="grid grid-cols-12 gap-6">
				<div className="col-start-1 col-end-13 sm:col-start-1 sm:col-end-7">
					<Content markup={columnOne} />
				</div>
				<div className="col-start-1 col-end-13 sm:col-start-7 sm:col-end-13">
					<Content markup={columnTwo} />
				</div>
			</div>
		</div>
	);
}