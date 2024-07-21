import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <div className="flex flex-col items-center space-y-4 m-8">
            <Image src="/Jwc - Website.zip - 12.PNG" alt="CashyBuddy" height={750} width={750} />
        </div>
    );
}