
import { useEffect, useState } from "react";
import SinglePackage from "../Packages/Packages";

import "./Package.css";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
   fetch("http://localhost:5000/packges")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);

  return (
    <div className='container' id="packages">
      <h2 className=" mt-5 text-center mb-5">
        Our <span className="text-warning">Packages</span>
      </h2>
      <div className="package-container">
        {packages.map(packge => (
          <SinglePackage key={packge.key} packge={packge}></SinglePackage>
        ))}
      </div>
    </div>
  );
};

export default Packages;
