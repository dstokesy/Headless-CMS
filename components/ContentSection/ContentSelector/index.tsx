import OneColumn from './../OneColumn/index';
import TwoColumn from './../TwoColumn/index';
import ThreeColumn from './../ThreeColumn/index';

type ContentType = {
  _group: string;
  columnOne?: string;
  columnTwo?: string;
  columnThree?: string;
};

export default function ContentSelector({ Data }: { Data: ContentType }) {
  switch (Data._group) {
    case 'onecolumn':
      return <OneColumn Data={Data} />;
      break;
    case 'twocolumn':
      return <TwoColumn Data={Data} />;
      break;
    case 'threecolumn':
      return <ThreeColumn Data={Data} />;
      break;
    default:
      return <div>no</div>;
      break;
  }
}
