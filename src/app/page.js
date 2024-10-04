"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [contactInfo, setContactInfo] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Отправка данных на API route
    const response = await fetch("/api/bookLesson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contactInfo }),
    });

    const data = await response.json();

    if (data.success) {
      setMessage("Lesson booked successfully!");
    } else {
      setMessage("Something went wrong, please try again.");
    }
  };
  return (
    <div className="h-screen  box-border px-10 ">
      <header className="bg-[#eeee]  flex justify-start gap-40">
        <a href="#">Learn English </a>
        <ul className="flex gap-20">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#shedule">Shedule</a>
          </li>
        </ul>
      </header>
      <main className="flex mt-20 items-center justify-center gap-20">
        <div className="flex flex-col w-[650px] gap-10 ">
          <h1 className="text-5xl font-semibold">
            Unlock Your English Potential. Learn with Me and Speak with
            Confidence!
          </h1>
          <div className="conteiner_book-input">
            <form className="container_book-input" onSubmit={handleSubmit}>
              <p>Your email or phone</p>
              <input
                type="text"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="w-[200px] p-2"
              />
              <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
                Book a lesson!
              </button>
            </form>
          </div>
          <p>Join over 100 people who have already unlocked their potential!</p>
        </div>
        <div className="w-[500px] h-[400px] overflow-hidden rounded-md shadow-lg shadow-cyan-500/50">
          <img
            className=" object-contain"
            src="https://files.oaiusercontent.com/file-WKqq2JNMYLYVKPeHzQTbJrDD?se=2024-10-04T14%3A55%3A03Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D09467272-276c-4314-bba0-02f728b0ebea.webp&sig=wUAj606UHNnqGdnvxugzRrBbbdnKXi/v6ZZBVILprbQ%3D"
            alt=""
          />
        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
