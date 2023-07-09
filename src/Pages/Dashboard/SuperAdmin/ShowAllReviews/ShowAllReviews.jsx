import useMultipleAPIs from "../../../../Hooks/useMultipleAPIs";
import profile from "../../../../assets/profile.svg";

const ShowAllReviews = () => {
  const { rolesAndReviews } = useMultipleAPIs();
  console.log(rolesAndReviews);

  return (
    <div className="w-full justify-center flex">
      <div className="my-20"></div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <p className="text-center text-3xl font-semibold">
            Reviews ({rolesAndReviews.length})
          </p>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {rolesAndReviews.map((rolesAndReviews, index) => (
              <div key={index}>
                <blockquote className="rounded-lg bg-gray-50 p-8 h-full">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Man"
                      src={profile}
                      className="h-16 w-16 rounded-full object-cover"
                    />

                    <div>
                      <p className="mt-1 text-lg font-medium text-gray-700">
                        {rolesAndReviews.displayName}
                      </p>
                    </div>
                  </div>

                  <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                    {rolesAndReviews.serviceReview}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowAllReviews;
