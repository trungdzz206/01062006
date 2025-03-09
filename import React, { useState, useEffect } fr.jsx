import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ClawMachine = () => {
  const [position, setPosition] = useState(0);
  const [grabbing, setGrabbing] = useState(false);
  const prizes = ["🎁", "🧸", "🍫", "🎮", "💎"];
  const messages = {
    "🎁": "Chúc mừng! Bạn đã nhận được một hộp quà bí ẩn! 🎉",
    "🧸": "Thật đáng yêu! Bạn đã gắp được một chú gấu bông! 🧸",
    "🍫": "Ngon quá! Bạn đã nhận được một thanh socola! 🍫",
    "🎮": "Tuyệt vời! Bạn đã gắp được một bộ trò chơi! 🎮",
    "💎": "Wow! Bạn đã nhận được một viên kim cương quý giá! 💎"
  };
  const [grabbedPrize, setGrabbedPrize] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev < 4 ? prev + 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const grabPrize = () => {
    setGrabbing(true);
    setTimeout(() => {
      const prize = prizes[position];
      setGrabbedPrize(prize);
      setMessage(messages[prize]);
      setGrabbing(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 bg-gray-100 h-screen">
      <h1 className="text-2xl font-bold">Game Gắp Quà 🎯</h1>
      <div className="relative w-64 h-64 bg-blue-200 flex items-center justify-center border-4 border-blue-500 rounded-lg">
        <motion.div 
          animate={{ x: position * 50 - 100 }} 
          className="absolute top-0 w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-full">
          🏗️
        </motion.div>
        <div className="absolute bottom-4 flex gap-4">
          {prizes.map((prize, index) => (
            <div key={index} className="w-10 h-10 flex items-center justify-center bg-yellow-300 border rounded">
              {prize}
            </div>
          ))}
        </div>
      </div>
      <Button onClick={grabPrize} disabled={grabbing}>
        {grabbing ? "Đang gắp..." : "Gắp Quà!"}
      </Button>
      {grabbedPrize && (
        <div className="text-xl mt-4 text-center">
          <p>Bạn đã gắp được: {grabbedPrize}</p>
          <p className="mt-2 text-green-600 font-bold">{message}</p>
        </div>
      )}
    </div>
  );
};

export default ClawMachine;
