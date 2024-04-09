"use client";

import notFound from "@/public/404.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 h-screen flex justify-center items-center flex-col md:px-8">
        <div>
          <Image src={notFound} alt="404 not found" />
        </div>
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <div className="flex flex-wrap justify-center items-center gap-3">
            <button className="bg-orange-500 text-white py-2 px-4 block font-medium rounded-lg duration-150 hover:bg-blue-600 active:bg-indigo-700" onClick={() => router.back()}>
              Go Back
            </button>
            <button className="border py-2 px-4 block rounded-lg text-white bg-gray-700 font-medium duration-150 hover:bg-blue-600 hover:text-white active:bg-gray-100 active:text-gray-600" onClick={() => router.push("/dashboard")}>
              Go Home
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
