import OneColumn from './../OneColumn/index'
import TwoColumn from './../TwoColumn/index'
import ThreeColumn from './../ThreeColumn/index'

type ContentType = {
	_group: string
	columnOne?: String
	columnTwo?: String
	columnThree?: String
};

export default function ContentSelector({ Data }: {
	Data: ContentType
}) {
	switch(Data._group) {
		case 'onecolumn':
			return (
				<OneColumn columnOne={Data.columnOne}/>
			);
		break;
		case 'twocolumn':
			return (
				<TwoColumn columnOne={Data.columnOne} columnTwo={Data.columnTwo} />
			);
		break;
		case 'threecolumn':
			return (
				<ThreeColumn columnOne={Data.columnOne} columnTwo={Data.columnTwo} ColumnThree={Data.columnThree} />
			);
		break;
	};
}