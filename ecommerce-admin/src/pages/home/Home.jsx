import FeaturedInfo from '../../components/featureInfo/FeatureInfo';
import './home.css';
import { userData } from '../../dummyData';
import Chart from '../../components/chart/Chart';

export const Home = () => {
  return (
    <div className="home">
        <FeaturedInfo />
        <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </div>
  )
}
