import React from "react";

import { assets } from "@/assets/assetimports";

const Representitive = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-4 mt-10">
      <div>
        <h1 className="text-center text-4xl font-bold text-blue-950 mb-10">
          Our Regular Recruiters (Representative List)
        </h1>
      </div>
      <div>
        <img src={assets.representitive} alt="representitive" />
      </div>
    </div>
  );
};

export default Representitive;
