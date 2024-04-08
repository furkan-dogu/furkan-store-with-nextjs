import { stats } from "@/helpers/data";

const Stats = () => {
  return (
    <div className="pt-8">
      <div className="max-w-screen-2xl mx-auto text-gray-600 px-4 gap-x-12 justify-between md:px-8">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h3 className="text-4xl font-semibold">We do our best to make customers always happy</h3>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            est ut doloremque dolor in rem!
          </p>
        </div>
        <div className="mt-12 lg:mt-0">
          <div className="lg:grid lg:grid-cols-2 flex flex-col items-start gap-x-12 justify-center divide-y sm:divide-y-0 sm:flex-row">
            {stats.map(({ id, data, title }) => (
              <div key={id} className="text-center px-4 py-6 w-full sm:w-auto lg:py-4">
                <h4 className="text-4xl text-orange-500 font-semibold">{data}</h4>
                <p className="text-gray-600 mt-4 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
