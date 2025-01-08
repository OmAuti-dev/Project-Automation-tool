'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'



export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Explore the essence <br /> of Automation
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        we have built a platform to maintain projects using workflows with AI recommendations and <br />
        assigning issues and task to team members using generative AI.
      </p>
    </div>
  )
}

// export const ProductCard = ({
//   product,
//   translate,
// }: {
//   product: {
//     title: string
//     link: string
//     thumbnail: string
//   }
//   translate: MotionValue<number>
// }) => {
//   return (
//     <motion.div
//       style={{
//         x: translate,
//       }}
//       whileHover={{
//         y: -20,
//       }}
//       key={product.title}
//       className="group/product h-96 w-[30rem] relative flex-shrink-0"
//     >
//       <Link
//         href={product.link}
//         className="block group-hover/product:shadow-2xl "
//       >
//         <Image
//           src={product.thumbnail}
//           height="600"
//           width="600"
//           className="object-cover object-left-top absolute h-full w-full inset-0"
//           alt={product.title}
//         />
//       </Link>
//       <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
//       <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
//         {product.title}
//       </h2>
//     </motion.div>
//   )
// }