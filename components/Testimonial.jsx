"use client";

import { testimonials } from "@/helpers/data";
import { useState } from "react";
import Image from "next/image";

const Testimonial = () => {
  const [current, setCurrent] = useState(1);

  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-3xl text-center mx-auto">
          <h3 className="font-semibold pb-6">What people are saying</h3>

          <ul>
            {testimonials.map(({ id, avatar, name, title, quote }) =>
              current === id ? (
                <li key={id}>
                  <figure>
                    <blockquote>
                      <p className="text-xl font-semibold sm:text-2xl">
                        "{quote}"
                      </p>
                    </blockquote>
                    <div className="mt-6">
                      <Image
                        src={avatar}
                        alt={name}
                        width={65}
                        height={65}
                        className="mx-auto rounded-full"
                      />
                      <div className="mt-3">
                        <span className="block text-gray-800 font-semibold capitalize">
                          {name}
                        </span>
                        <span className="block text-gray-600 text-sm mt-0.5">
                          {title}
                        </span>
                      </div>
                    </div>
                  </figure>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>

        <div className="mt-6">
          <ul className="flex gap-x-3 justify-center">
            {testimonials.map((item) => (
              <li key={item.id}>
                <button
                  className={`w-2.5 h-2.5 ${
                    current === item.id ? "bg-indigo-600" : "bg-gray-300"
                  } rounded-full ring-indigo-600 ring-offset-2 duration-150`}
                  onClick={() => setCurrent(item.id)}
                ></button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
