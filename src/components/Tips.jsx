// import { useEffect, useState } from "react";
import InputHeaders from "./InputHeaders";
import InputNumber from "./InputNumber";
import InputRadio from "./InputRadio";
import iconDollar from "../assets/icon-dollar.svg";
import iconPerson from "../assets/icon-person.svg";

function Tips() {
  const percentages = [5, 10, 15, 25, 50];

  // const { bill, setBill } = useState(0);
  // const { percentage, setPercentage } = useState(0);
  // const { persons, setPersons } = useState(0);

  return (
    <section>
      <div className="pb-8">
        <InputHeaders text={"Bill"} />
        <InputNumber icon={iconDollar} />
      </div>
      <div className="pb-8">
        <InputHeaders text={"Select Tip %"} />
        <div className="grid grid-cols-2 grid-flow-row gap-4">
          {percentages.map((item) => {
            return <InputRadio percentage={`${item}`} key={item} />;
          })}
          <input
            type="number"
            name="custom"
            placeholder="Custom"
            className="text-2xl text-very-dark-cyan bg-very-light-grayish-cyan h-12 text-right rounded-sm font-bold px-4 p-1"
          />
        </div>
      </div>
      <div className="pb-8">
        <InputHeaders text={"Number of Persons"} />
        <InputNumber icon={iconPerson} />
      </div>
    </section>
  );
}

export default Tips;
