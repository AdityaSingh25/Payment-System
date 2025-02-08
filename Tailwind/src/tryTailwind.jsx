import { useState } from "react";

function App() {
  // return (
  //   <div className="flex justify-between">
  //     <div className="bg-red-900">Hi</div>
  //     <div className="bg-green-200">Hi</div>
  //     <div className="bg-yellow-500">Hi</div>
  //     <div className="bg-white-400">Hi</div>
  //   </div>
  // );

  // return (
  //   <>
  //     <div className="grid grid-cols-10">
  //       <div className="bg-red-200 col-span-4">Hi there from first div</div>
  //       <div className="bg-yellow-300 col-span-4">Hi there from second div</div>
  //       <div className="bg-pink-200 col-span-2">Hi there from third div</div>
  //     </div>
  //     <div className="flex">
  //       <div className="bg-red-200 w-[40%]">Hi there from first div</div>
  //       <div className="bg-yellow-300 w-[40%]">Hi there from second div</div>
  //       <div className="bg-pink-200 w-[20%]">Hi there from third div</div>
  //     </div>
  //   </>

  // return (
  //   <>
  //     <div className="bg-red-500 md:bg-blue-500">Hi there</div>

  //     {/*by default it will be red & if width goes beyond md then it will change to blue*/}
  //   </>

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
        <div className="bg-red-300">First div</div>
        <div className="bg-green-300">Second div</div>
        <div className="bg-yellow-300">Third div</div>
        <div className="bg-yellow-300">Third div</div>
        <div className="bg-yellow-300">Third div</div>
        <div className="bg-yellow-300">Third div</div>
      </div>
    </>
  );
}

export default App;

// sm- 640px
// md- 768px
// lg- 1024px
// xl- 1280px
// 2xl- 1536px
