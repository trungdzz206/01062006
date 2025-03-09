import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const wishes = [
  "Chúc bạn một ngày thật vui vẻ và hạnh phúc! 🎉",
  "Mong rằng may mắn sẽ luôn đến với bạn! 🍀",
  "Chúc bạn thành công trong mọi lĩnh vực của cuộc sống! 💪",
  "Chúc bạn luôn khỏe mạnh và tràn đầy năng lượng! 💖",
  "Hãy luôn giữ nụ cười trên môi và tận hưởng cuộc sống! 😊"
];

const SendWishes = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const generateWish = () => {
    if (name.trim() === "") {
      setMessage("Vui lòng nhập tên của bạn!");
      return;
    }
    const randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    setMessage(`${name}, ${randomWish}`);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gray-100 h-screen">
      <h1 className="text-2xl font-bold">Gửi Lời Chúc 🎉</h1>
      <Input 
        type="text" 
        placeholder="Nhập tên của bạn" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
        className="p-2 border rounded"
      />
      <Button onClick={generateWish}>Gửi Lời Chúc</Button>
      {message && <div className="text-xl mt-4 text-center text-green-600 font-bold">{message}</div>}
    </div>
  );
};

export default SendWishes;
