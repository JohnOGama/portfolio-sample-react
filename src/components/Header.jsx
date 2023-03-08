import React from "react";

export function Header() {
  return (
    <div className="text-center mb-5 py-4">
      <h1 className="font-bold text-stone-900 text-5xl md:text-6xl mb-4">
        OGAMA
      </h1>
      <div>
        <h3 className="font-medium  text-stone-900 uppercase mb-3">
          Software Engineer
        </h3>
        <p className="font-normal text-stone-900 mx-auto w-full max-w-sm md:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus iusto
          accusamus quas quaerat magni ipsum expedita repellendus nemo facilis
          accusantium? Nesciunt impedit dolores neque deserunt, repudiandae qui
          rem placeat magnam?
        </p>
      </div>
    </div>
  );
}

export default Header;
