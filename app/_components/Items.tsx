export default function Item({
  href,
  image,
  imageAlt,
  name,
  price,
}: {
  href: string;
  image: string;
  name: string;
  imageAlt: string;
  price: string;
}) {
  return (
    <a href={href}>
      <div
        // className="h-80 w-80 flex items-center justify-center p-4 m-4 border border-gray-700 rounded-lg"
        // className="flex flex-col min-w-auto w-full bg-blue-50 sm:bg-blue-500 md:bg-green-500 lg:bg-yellow-500 2xl:bg-red-500"
        className="flex flex-col min-w-auto w-full"
      >
        <img src={image} alt={imageAlt} className="rounded-lg" />
        <div className="p-2">
          <h2 className="font-mono mb-2">{name}</h2>
          <p className="text-sm text-neutral-400">5 pc 60 * 80 mm</p>
          <p className="text-lg font-bold text-neutral-200">{price} ETB</p>
        </div>
      </div>
    </a>
  );
}
