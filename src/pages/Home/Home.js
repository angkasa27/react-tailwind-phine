import React, { useEffect, useState } from 'react';
import Modal from './ModalGithub';
import image1 from '../../assets/1.jpg';
import image2 from '../../assets/2.jpg';

export default function Home() {
  let listener = null;
  const [scrollState, setScrollState] = useState('top');
  const [open, setOpen] = useState(false);

  const scrollNav = () => {
    listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 200) {
        if (scrollState !== 'showUp') {
          setScrollState('showUp');
        }
      } else {
        if (scrollState !== 'top') {
          setScrollState('top');
        }
      }
    });
    return () => {
      document.removeEventListener('scroll', listener);
    };
  };

  useEffect(() => {
    scrollNav();
  }, [scrollState]);

  return (
    <div>
      {scrollState === 'showUp' && <Nav />}
      <div id="home" className="h-screen overflow-hidden">
        <div className="bg-purple-600 rounded-b-4xl">
          <Top />
          <Section1 />
        </div>
      </div>
      <Section2 />
      <Footer />
      <Modal open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export function Top() {
  return (
    <div className="w-screen z-20">
      <nav className="flex justify-between px-16 py-4 items-center text-white ">
        <div className="flex items-baseline">
          <h1 className="text-2xl font-bold tracking-wide">Phine</h1>
          <h3 className="text-xl font-bold text-green-500 ">.com</h3>
        </div>
        <div>
          <a
            href="#tentang"
            className="mx-4 border-white hover:text-green-500 transition-default"
          >
            About
          </a>
          <a
            href="#fitur"
            className="mx-4 border-white hover:text-green-500 transition-default"
          >
            Feature
          </a>
          <a
            href="#tutorial"
            className="mx-4 border-white hover:text-green-500 transition-default"
          >
            Location
          </a>
        </div>
        <div>
          <button className="py-2 px-4 bg-green-500 hover:bg-green-600 transition-default rounded-full flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book An Apointment
          </button>
        </div>
      </nav>
    </div>
  );
}

export function Nav() {
  return (
    <div className="z-30 w-screen fixed bg-white shadow-md animate-navDown">
      <nav className="flex justify-between px-16 py-4 items-center text-gray-700 ">
        <div className="flex items-baseline">
          <h1 className="text-2xl font-bold tracking-wide">Phine</h1>
          <h3 className="text-xl font-bold text-green-500 ">.com</h3>
        </div>
        <div>
          <a
            href="#tentang"
            className="mx-4 border-white hover:text-green-500 transition-default"
          >
            About
          </a>
          <a
            href="#fitur"
            className="mx-4 border-white hover:text-green-500 transition-default"
          >
            Feature
          </a>
          <a
            href="#tutorial"
            className="mx-4 border-white hover:text-green-500 transition-default"
          >
            Location
          </a>
        </div>
        <div>
          <button className="py-2 px-4 bg-green-500 hover:bg-green-600 transition-default rounded-full flex items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Book An Apointment
          </button>
        </div>
      </nav>
    </div>
  );
}

export function Section1() {
  return (
    <section id="section1" className="mx-32 py-14">
      <div className="grid grid-cols-2 gap-2">
        <p className="absolute text-gray-900 opacity-25 font-bold text-15xl transform translate-x-1/2 translate-y-1/2 top-0 left-1/4 tracking-tighter  ">
          PHINE
        </p>
        <div className="col-span-1">
          <img
            src={image1}
            alt=""
            className="w-80 h-64 object-cover rounded-lg transform scale-165 origin-top-left shadow-md"
          />
        </div>
        <div className="text-white col-span-1 overflow-hidden py-12 z-20">
          <h1 className="text-5xl font-light">
            <span className="font-bold">Mental health </span>and <br />
            <span className="font-bold">relationship well-being</span>
            <br /> for all
          </h1>
          <p className="mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            numquam cum minima ea, itaque accusantium recusandae
          </p>
        </div>
      </div>
    </section>
  );
}

export function Section2() {
  return (
    <div className="mx-32">
      <div className="grid grid-cols-3">
        <div>
          <h2 className="font-bold text-gray-700 text-2xl">
            How We Can Help You
          </h2>
        </div>
        <div className="flex justify-end">
          <button className="bg-green-500 px-4 py-2 text-white rounded-full">
            Find A Place
          </button>
        </div>
        <div className="flex justify-end">
          <img
            src={image2}
            alt=""
            className="w-40 h-40 object-cover rounded-lg transform origin-top-right -translate-y-8 -translate-x-8 scale-200 shadow-md absolute"
          />
        </div>
      </div>
      <div className="bg-gray-100 rounded-xl p-10 mt-2 mb-10">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex-col flex col-span-1 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 text-green-500 p-2 rounded-lg bg-white mb-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-700">Comunicate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ipsa quis velit. Officiis quisquam dicta in velit
              reiciendis, ipsam sapiente repellat. Officiis veritatis fugit ex?
            </p>
          </div>
          <div className="flex-col flex col-span-1 mb-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 text-green-500 p-2 rounded-lg bg-white mb-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-700">Comunicate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ipsa quis velit. Officiis quisquam dicta in velit
              reiciendis, ipsam sapiente repellat. Officiis veritatis fugit ex?
            </p>
          </div>
          <div classNme="col-span-1" />
          <div className="flex-col flex col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 text-green-500 p-2 rounded-lg bg-white mb-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-700">Comunicate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ipsa quis velit. Officiis quisquam dicta in velit
              reiciendis, ipsam sapiente repellat. Officiis veritatis fugit ex?
            </p>
          </div>
          <div className="flex-col flex col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 text-green-500 p-2 rounded-lg bg-white mb-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-700">Comunicate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ipsa quis velit. Officiis quisquam dicta in velit
              reiciendis, ipsam sapiente repellat. Officiis veritatis fugit ex?
            </p>
          </div>
          <div className="flex-col flex col-span-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-16 text-green-500 p-2 rounded-lg bg-white mb-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-700">Comunicate</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam ipsa quis velit. Officiis quisquam dicta in velit
              reiciendis, ipsam sapiente repellat. Officiis veritatis fugit ex?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <div>
      <div className="py-2 bg-gray-700 text-sm font-mono text-white flex justify-center">
        <p>{'Create with'}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 text-red-500 mx-2"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
        <p>{'by'}</p>
        <a
          href="https://github.com/angkasa27"
          rel="noreferrer"
          target="_blank"
          className="hover:text-indigo-500 cursor-pointer ml-2"
        >
          angkasa27
        </a>
      </div>
    </div>
  );
}
