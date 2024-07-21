import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
      <div className="flex flex-col">
        <p>เนื้อหา</p>
        <h1>hsdfzg.iu</h1>
      </div>
      <div>
        <img src="cabibara.webp" alt="" />
      </div>
      </div>
      <div className="flex flex-row">
        <h1>รายละเอียดเว้ปไวต์</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo reprehenderit alias natus, enim atque corporis ratione esse expedita ea facilis! Dolorem eos animi sapiente necessitatibus cum! Unde animi vitae veniam!</p>
      </div>
    </div>
  );
}
