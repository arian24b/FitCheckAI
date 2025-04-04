import { Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="container mx-auto border-t py-4 animate-fade-in">
      <div className="p-4 md:p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FitCheckAI All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Created with <Heart className="h-4 w-4 text-red-500" /> by{" "}
            <Link href="https://s2dio.ir/resume/">Arian Omrani</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
