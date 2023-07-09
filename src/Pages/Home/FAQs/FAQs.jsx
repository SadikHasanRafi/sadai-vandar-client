import React from "react";

const FAQs = () => {

  return (
    <div className="flex justify-center flex-col items-center min-h-[40vh] mb-32">
        <p className="text-center font-bold text-3xl mb-10">FAQs</p>
        <div className="join join-vertical w-[50vw]">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Is there any way to update my profile?
        </div>
        <div className="collapse-content">
          <p>No. But you can update your profile after our next update.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Is there any delivery Option?
        </div>
        <div className="collapse-content">
          <p>No.</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          How can I edit my buyings?
        </div>
        <div className="collapse-content">
          <p>Well, we don't add any option to edit your buyings. It will available soon.</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FAQs;
