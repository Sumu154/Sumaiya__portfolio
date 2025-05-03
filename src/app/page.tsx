import Banner from "@/components/headers/Banner";
import MySkills from "@/components/homeComponents/MySkills";
import WhatIDo from "@/components/homeComponents/WhatIDo";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <WhatIDo></WhatIDo>
      <MySkills></MySkills>
    </div>
  );
}
