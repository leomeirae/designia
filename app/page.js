"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Header from "./dashboard/_components/Header";
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#08002F] via-[#030014] to-[#000003]">
      <Header/>
      <div
        className="relative overflow-hidden h-screen"
        style={{
          backgroundImage: "url('/inter_land.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl">
              Inteligência Artificial
              <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> Design de Interiores</span>
            </h1>
          </div>
          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg" style={{ color: '#D4F462' }}>
              Transforme seus ambientes com IA: Crie seu Design de Interiores em apenas um clique!
            </p>
          </div>
          <div className="mt-8 gap-3 flex justify-center">
            <a className="inline-flex justify-center items-center 
            gap-x-4 text-center bg-gradient-to-tl from-blue-600
            to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-lg font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" 
            href="/dashboard">
              Comece agora gratuitamente!
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Sliders Section */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mt-14 flex flex-col md:flex-row justify-center gap-8">
          <div className="flex-1 max-w-lg w-full mx-auto">
            <div className="relative w-full aspect-[4/3]">
              <ReactBeforeSliderComponent
                firstImage={{
                  imageUrl: '/after.png',
                  alt: 'after'
                }}
                secondImage={{
                  imageUrl: '/before.png',
                  alt: 'before'
                }}
                className="custom-slider"
              />
            </div>
          </div>

          <div className="flex-1 max-w-lg w-full mx-auto">
            <div className="relative w-full aspect-[4/3]">
              <ReactBeforeSliderComponent
                firstImage={{
                  imageUrl: '/before1.png',
                  alt: 'before'
                }}
                secondImage={{
                  imageUrl: '/after1.jpg',
                  alt: 'after'
                }}
                className="custom-slider"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-stretch gap-2">
          <a className="group flex flex-col justify-between h-full hover:bg-[#08002E]/50 rounded-xl p-4 md:p-7 dark:hover:bg-[#08002E]/50" href="#">
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="10" height="14" x="3" y="8" rx="2"/><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"/><path d="M8 18h.01"/></svg>
            </div>
            <div className="mt-5 flex-1">
              <h3 className="group-hover:text-white text-lg font-semibold text-white dark:text-white dark:group-hover:text-white">Upload</h3>
              <p className="mt-1 text-white dark:text-white">Carregue sua imagem do seu quarto</p>
            </div>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </a>
         
          <a className="group flex flex-col justify-between h-full hover:bg-[#08002E]/50 rounded-xl p-4 md:p-7 dark:hover:bg-[#08002E]/50" href="#">
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
            </div>
            <div className="mt-5 flex-1">
              <h3 className="group-hover:text-white text-lg font-semibold text-white dark:text-white dark:group-hover:text-white">Selecione o Design</h3>
              <p className="mt-1 text-white dark:text-white">Selecione o Design e o tipo de ambiente</p>
            </div>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </a>
         
          <a className="group flex flex-col justify-between h-full hover:bg-[#08002E]/50 rounded-xl p-4 md:p-7 dark:hover:bg-[#08002E]/50" href="#">
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <div className="mt-5 flex-1">
              <h3 className="group-hover:text-white text-lg font-semibold text-white dark:text-white dark:group-hover:text-white">Pronto para Baixar</h3>
              <p className="mt-1 text-white dark:text-white">Seu Design de Interiores está pronto</p>
            </div>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </a>
        
          <a className="group flex flex-col justify-between h-full hover:bg-[#08002E]/50 rounded-xl p-4 md:p-7 dark:hover:bg-[#08002E]/50" href="#">
            <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
              <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
            </div>
            <div className="mt-5 flex-1">
              <h3 className="group-hover:text-white text-lg font-semibold text-white dark:text-white dark:group-hover:text-white">Suporte 24/7</h3>
              <p className="mt-1 text-white dark:text-white">Contate-nos 24 horas por dia, 7 dias por semana</p>
            </div>
            <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
              
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
