// import CreateArticleForm from '@/app/form/page'
// import Header from '@/app/pages/header/page'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation';
// import React, { useEffect } from 'react';

// export default function page() {

//   const router = useRouter();

//   useEffect(() => {
//     const isAuthenticated = localStorage.getItem('auth');
//     if (!isAuthenticated) {
//       router.push('/login');
//     }
//   }, [router]);

//   return (
//     <div>
//       <Header />
//         <div className="text-center my-4">
//                 <Link href={'/admin'}>
                
//               <button
//                 // onClick={handleAdd}
//                 className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
//               >
//                 Back To Dahsboard
//               </button>
//               </Link>
//             </div>
//       <CreateArticleForm />
//     </div>
//   )
// }




'use client';

import CreateArticleForm from '@/app/form/page';
import Header from '@/app/pages/header/page';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function CreateArticlePage() { // Updated component name
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('auth');
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      <Header />
      <div className="text-center my-4">
        <Link href="/admin">
          <button
            className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:opacity-90 transition duration-300 ease-in-out"
          >
            Back To Dashboard
          </button>
        </Link>
      </div>
      <CreateArticleForm />
    </div>
  );
}
