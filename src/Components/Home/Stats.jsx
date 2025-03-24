import { UsersRound } from "lucide-react";
import CountUp from "react-countup";
import { FaBuilding, FaHandshakeAngle, FaUsers } from "react-icons/fa6";
import { TbUserScreen } from "react-icons/tb";

import { Card, CardHeader, CardContent } from "../../Components/ui/card";

export const StatCard = ({ IconComponent, count, suffix, description }) => {
  return (
    <Card className="flex flex-col items-center z-40 justify-center px-3  shadow-lg hover:shadow-xl transition-shadow duration-300 text-blue-950">
      <CardHeader className="text-5xl">
        {IconComponent && <IconComponent />}
      </CardHeader>
      <CardContent className="text-center font-quickSand">
        <h3 className="flex items-center justify-center text-4xl font-bold">
          <span>
            <CountUp end={count} duration={5} />
          </span>
          <span className="ml-1">{suffix}</span>
        </h3>
        <p className="text-lg font-medium  mt-2">{description}</p>
      </CardContent>
    </Card>
  );
};

const Stats = () => {
  return (
    <div className="mt-12 z-50">
      {/* <h1 className="text-center text-4xl font-dmSans  font-semibold tracking-wider">
        Our Facts and Figures
      </h1> */}
      <div className="max-w-7xl mx-auto grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-4">
        <StatCard
          IconComponent={FaUsers}
          count={150}
          suffix="+"
          description="Student Placed"
        />
        <StatCard
          IconComponent={FaHandshakeAngle}
          count={500}
          suffix="+"
          description="Companies TieUp"
        />
        <StatCard
          IconComponent={FaBuilding}
          count={36}
          suffix="+"
          description="Offices in India"
        />
        <StatCard
          IconComponent={TbUserScreen}
          count={50}
          suffix="+"
          description="Industry Courses"
        />
      </div>
    </div>
  );
};

export default Stats;
