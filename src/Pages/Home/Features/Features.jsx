import { Icon24Hours, IconCalculator, IconCheese, IconDiscountCheck, IconMoodDollar } from "@tabler/icons-react"

const features = [
  {
    name: 'Make buying and selling easier',
    description:
      'Making buying and selling easier: This feature focuses on streamlining the process of buying and selling products on your website. It may include user-friendly interfaces for browsing and searching products, simplified registration and login processes, clear product descriptions and images, secure payment options, and efficient order management systems.',
    icon: <IconMoodDollar></IconMoodDollar>,
  },
  {
    name: 'Calculate every transaction more precisely',
    description:
      'Calculating transactions more precisely: This feature aims to provide accurate calculations for each transaction made on your website. It may involve automated pricing algorithms that consider factors like product costs, profit margins, taxes, shipping fees, and discounts. This ensures that buyers and sellers can rely on the system to handle pricing and financial calculations correctly.',
    icon: <IconCalculator></IconCalculator>,
  },
  {
    name: 'Make things more cost effective',
    description:
      'Making things more cost-effective: This feature focuses on optimizing costs for both buyers and sellers. It may include features such as price comparison tools to help buyers find the best deals, bulk order discounts or special offers for buyers, and cost analysis tools for sellers to identify areas where they can reduce expenses and improve profitability.',
    icon: <IconDiscountCheck></IconDiscountCheck>,
  },
  {
    name: 'Manage all products',
    description:
      'Managing all products: This feature enables efficient product management for sellers on your website. It may include functionalities such as an inventory management system to keep track of available stock, automated notifications for low stock levels or out-of-stock products, the ability to add, edit, and remove products easily, and analytics tools to track product performance and sales trends.',
    icon: <IconCheese></IconCheese>,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="font-bold text-3xl text-center">
            Features
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                    {feature.icon}
                  </div>
                  
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
