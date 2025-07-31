import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';

// Assuming TikTok icon is not in lucide-react, using a placeholder or a custom SVG would be needed.
// For simplicity, we'll use a placeholder text/icon for now.
const TikTokIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.49 3.994C15.54 3.994 14.64 4.344 13.97 4.964C12.7 6.164 12.7 8.084 13.97 9.284C14.64 9.904 15.54 10.254 16.49 10.254C17.44 10.254 18.34 9.904 19.01 9.284C20.28 8.084 20.28 6.164 19.01 4.964C18.34 4.344 17.44 3.994 16.49 3.994Z"></path>
    <path d="M12.41 10.114C12.41 12.214 10.65 13.904 8.47 13.904C6.29 13.904 4.53 12.214 4.53 10.114C4.53 8.014 6.29 6.324 8.47 6.324C9.53 6.324 10.49 6.744 11.18 7.424"></path>
    <path d="M12.41 10.114V17.004C12.41 18.664 11.05 20.004 9.35 20.004H8.47C6.77 20.004 5.41 18.664 5.41 17.004V16.114"></path>
  </svg>
);


export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Future Fix. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="https://www.instagram.com/future_fix2025" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="https://www.tiktok.com/@future.fix6" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <TikTokIcon />
            <span className="sr-only">TikTok</span>
          </Link>
          <Link href="mailto:futurefix2025@gmail.com" className="text-muted-foreground hover:text-foreground">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Gmail</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
