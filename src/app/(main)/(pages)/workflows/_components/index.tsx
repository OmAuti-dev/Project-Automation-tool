import React from "react";
import Workflow from "./workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="flex flex-col gap-4 p-2 py-1">
        <Workflow
          description="demo workflow"
          id="tempgibberish"
          name="automation workflow"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
