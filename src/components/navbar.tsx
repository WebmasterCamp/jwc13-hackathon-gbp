import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full shadow-md dark:border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-[4rem] max-w-screen-2xl items-center">
                <div className="mr-6 flex items-center space-x-2">
                    <Link href="/">
                        <h1 className="font-bold">CashyBuddy</h1>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-10">
                    <Link href="/faq">ABOUT US</Link>
                    <Link href="/management">FAQ</Link>
                    <Button><Link href="/about">LOGIN</Link></Button>
                </div>
            
            </div>
        </header>
    );
}