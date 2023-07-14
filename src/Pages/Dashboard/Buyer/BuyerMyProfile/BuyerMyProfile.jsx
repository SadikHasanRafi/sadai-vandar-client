/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import bgImg from "../../../../assets/114524.jpg";
import Loading from "../../../../Components/Loading/Loading";

const BuyerMyProfile = () => {
  const [isLoading, setisLoading] = useState();
  return isLoading ? (
    <Loading></Loading>
  ) : (
    <>
      <div className="min-h-screen flex-col flex w-full">
        <div
          className="hero h-[20vh]"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        <div className="mb-20 m-10 mx-14">
          <div>
            <div>
              <p className="font-semibold text-3xl">
                Welcome Back!
                <span className="text-primary"> Name.</span>
              </p>

              <div className="mt-8">
                <div className="px-4 sm:px-0">
                  <p className="mt-1 max-w-2xl leading-6">Personal details</p>
                </div>
                <div className="mt-6 border-t border-gray-100">
                  <dl className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-medium leading-6 text-gray-900">
                        Your Name
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        koukakolakojunjadabulajja
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-medium leading-6 text-gray-900">
                        Email Address
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        4d cat
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-medium leading-6 text-gray-900">
                        Phone Number
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        911
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-medium leading-6 text-gray-900">
                        Shop
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        catnip
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-medium leading-6 text-gray-900">
                        Location
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        cd
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-medium leading-6 text-gray-900">
                        Precise Location
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        compact disc
                      </dd>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt className="font-medium leading-6 text-gray-900">
                        Available Products
                      </dt>
                      <dd className="mt-1 leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        lengt
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerMyProfile;
