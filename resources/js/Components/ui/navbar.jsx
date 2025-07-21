import { Link, router } from "@inertiajs/react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "@/Components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/Components/ui/avatar";
import { ModeToggle } from "@/Components/mode-toggle";

export function Navbar({ children, user }) {
    function handleLogout() {
        router.post(route('logout'));
    }
    return (
        <>
            <nav className="sticky top-0 z-30 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
                <div className="flex items-center justify-between h-16 px-4 md:px-8 max-w-7xl mx-auto">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-30 h-8">
                            <img src="/images/logo/logo.png" alt="Logo"  />
                        </span>
                    </div>
                    {/* Profile & Login */}
                    <div className="ml-auto flex gap-4 sm:gap-6 items-center">
                        <ModeToggle />
                        {user ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <span className="cursor-pointer">
                                        <Avatar>
                                            <AvatarImage
                                                src={
                                                    user.avatar
                                                        ? user.avatar.startsWith("http")
                                                            ? user.avatar
                                                            : `/storage/${user.avatar}`
                                                        : "/storage/avatar/avatar.svg"
                                                }
                                                alt={user.name || "User"}
                                            />
                                            <AvatarFallback className="rounded-lg">{user.name ? user.name.charAt(0).toUpperCase() : "CN"}</AvatarFallback>
                                        </Avatar>
                                    </span>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href={route('dashboard')}>Dashboard</Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={handleLogout}>Keluar</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <Link href={route('login')} className="font-medium hover:underline">Login</Link>
                        )}
                    </div>
                </div>
            </nav>
            {children}
        </>
    );
} 