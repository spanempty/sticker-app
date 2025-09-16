import Item from "./_components/Items";
// import app from "@/firebase/credit";
// import { getAuth } from "firebase/auth";
// import SignOutButton from "./_components/SignoutButton";

// const auth = getAuth(app);
// const user = auth.currentUser;

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/mockup-b97fe7ce-Artguru.png",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "50",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/Stickers-01.webp",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "65",
    color: "Aspen White",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/Sticker-02.jpg",
    imageAlt: "Front of men's Basic Tee in dark gray.",
    price: "55",
    color: "Charcoal",
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc: "/Sticker-03.jpg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "50",
    color: "Iso Dots",
  },
  {
    id: 5,
    name: "hanna artwork Tee",
    href: "/hanna",
    imageSrc: "/Sticker-04.jpg",
    imageAlt:
      "Front of men's Artwork Tee in peach with white and brown dots forming an isometric cube.",
    price: "70",
    color: "Iso Dots",
  },
];

export default function Home() {
  return (
    <>
      <div className="h-auto flex flex-col justify-items-end  p-0 m-0 bg-neutral-800 text-white">
        <div className="min-h-lvh xl:max-w-9/12 max-w-full  m-auto bg-neutral-900">
          <header style={{ padding: "1rem ", borderBottom: "1px solid #eee" }}>
            <h1>Sticker Johns</h1>
            <h2>Welcome!</h2>
            <p>This is a basic Next.js website layout.</p>
          </header>
          <main className="flex flex-col m-0 p-0 justify-center">
            <div>
              <h2 className="text-4xl font-medium pt-10 px-4 sm:px-6 lg:px-8 @4xl:text-5xl">
                Featured Collection
              </h2>
              <div
                // className="flex m-0 p-0 flex-wrap w-auto justify-center"
                className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 m-0 p-4 sm:p-6 lg:p-8 justify-center"
              >
                {products.map((product) => (
                  <Item
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.imageSrc}
                    href={product.href}
                    imageAlt={product.imageAlt}
                  ></Item>
                ))}
                {/* <SignOutButton></SignOutButton> */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
  // } else {
  // return <SignIn></SignIn>;
  // }
}

// export default function Example() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
// {products.map((product) => (
//   <div key={product.id} className="group relative">
//     <img
//       alt={product.imageAlt}
//       src={product.imageSrc}
//       className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
//     />
//     <div className="mt-4 flex justify-between">
//       <div>
//         <h3 className="text-sm text-gray-700">
//           <a href={product.href}>
//             <span aria-hidden="true" className="absolute inset-0" />
//             {product.name}
//           </a>
//         </h3>
//         <p className="mt-1 text-sm text-gray-500">{product.color}</p>
//       </div>
//       <p className="text-sm font-medium text-gray-900">{product.price}</p>
//     </div>
//   </div>
// ))}
//         </div>
//       </div>
//     </div>
//   )
// }
