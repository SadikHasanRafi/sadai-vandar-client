import useMultipleAPIs from "../../../Hooks/useMultipleAPIs"

export default function Stat() {
  const { transactions, shopkeepers, registeredUsers }= useMultipleAPIs()
  const transLength = transactions.length;
  const shopkeeperLength = shopkeepers.length;
  const userLength = registeredUsers.length;

  const stats = [
      { id: 1, name: 'Transactions', value: transLength },
      { id: 2, name: 'Shop Keepers', value: shopkeeperLength },
      { id: 3, name: 'Registered Buyers', value: userLength},
    ]
    

    return (
      <div className="py-24 sm:py-32">
        <p className="text-center text-3xl font-bold mb-10">Current Users & Transactions</p>
        <div className="mx-auto max-w-5xl px-6 py-16 lg:px-8 bg-gray-50 shadow-md rounded-lg shadow-slate-200">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-lg leading-7">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  