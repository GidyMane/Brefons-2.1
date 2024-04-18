import React from 'react';

import styles from "./dashboard.module.css";
import ActivitiesCard from './ActivitiesCard';
import ProgressCard from './ProgressCard';
import Chart from './chart/chart';
import Card from './card/card';


interface DashboardCardProps {
  title: string;
  content: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, content }) => {
  return (
    <Card title={title} content={content} />
  );
};

const Dashboard: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className='w-full mt-2 '>
          {/* <TopCardNavigation /> */}
        </div>

        {/* CARDS AND CHARTS DIV */}
        <div className='md:grid grid-cols-2 w-full gap-4'>
          <div className={`md:grid grid-cols-3 gap-4 col-span-1`}>
            <DashboardCard title="Water pans Constructed" content="27/28" />
            <DashboardCard title="Boreholes constructed" content="21/28" />
            <DashboardCard title="Shallow wells constructed" content="19/28" />
            <DashboardCard title="Water Harvesting structures Developed" content="64%" />
            <DashboardCard title="Micro-irrigation Schemes" content="86%" />
            <DashboardCard title="No of Rural markets" content="+34%" />
          </div>
          <div className='col-span-1'>
            <Chart />
          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <ProgressCard />
        </div>
        <div className="mt-4 w-full">
          <ActivitiesCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
