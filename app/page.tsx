"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [password, setPassword] = useState<string>("");
  const [altPassword, setAltPassword] = useState<string>("");
  const [wiggleForPassword, setWiggleForPassword] = useState<boolean>(false);
  const [wiggleForAltPassword, setWiggleForAltPassword] =
    useState<boolean>(false);

  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isCopiedAlt, setIsCopiedAlt] = useState<boolean>(false);

  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  function generatePassword() {
    let tempPasswordOne = "";
    let tempPasswordTwo = "";
    for (let i = 0; i < 15; i++) {
      tempPasswordOne +=
        characters[Math.floor(Math.random() * characters.length)];
      tempPasswordTwo +=
        characters[Math.floor(Math.random() * characters.length)];
    }
    setPassword(tempPasswordOne);
    setAltPassword(tempPasswordTwo);
  }

  function copyToClipboard() {
    navigator.clipboard.writeText(password);
    setWiggleForPassword(true);
    setIsCopied(true);
    setTimeout(() => setWiggleForPassword(false), 300);
    setTimeout(() => setIsCopied(false), 500);
  }

  function copyToClipboardAlt() {
    navigator.clipboard.writeText(altPassword);
    setWiggleForAltPassword(true);
    setIsCopiedAlt(true);

    setTimeout(() => setWiggleForAltPassword(false), 300);
    setTimeout(() => setIsCopiedAlt(false), 500);
  }

  return (
    <div className="grid grid-rows-[10px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Quick and Easy{" "}
          <span className="text-purple-600"> Password Generator</span>
        </h1>

        <h2 className="text-xl text-center  font-[family-name:var(--font-geist-mono)]">
          Click the button and take your pick!
        </h2>

        <div className="flex items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center 
          bg-purple-700 text-white gap-2 hover:bg-[#383838] dark:hover:bg-purple-600 text-sm 
          sm:text-base h-10 sm:h-12 px-4 sm:px-5
          font-[family-name:var(--font-geist-mono)]"
            onClick={generatePassword}
          >
            Generate Passwords
          </button>
        </div>

        {/* First Password */}
        <div className="flex flex-row justify-start gap-4 w-full relative">
          <div className="flex flex-col gap-2">
            <div
              className={`rounded-md flex items-center h-8 w-auto p-4 sm:p-5 bg-slate-700 
              hover:cursor-pointer ${wiggleForPassword ? "wiggle" : ""}`}
              onClick={copyToClipboard}
            >
              {password}
            </div>
            <div
              className={`text-xs ${
                isCopied ? "pop-in" : "fade-out"
              } absolute top-10`}
            >
              Copied!
            </div>
          </div>

          {/* Second Password */}
          <div className="flex flex-col gap-2">
            <div
              className={`rounded-md flex items-center h-8 w-auto p-4 sm:p-5 bg-slate-700 
              hover:cursor-pointer ${wiggleForAltPassword ? "wiggle" : ""}`}
              onClick={copyToClipboardAlt}
            >
              {altPassword}
            </div>
            <div
              className={`text-xs ${
                isCopiedAlt ? "pop-in" : "fade-out"
              } absolute top-10`}
            >
              Copied!
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
