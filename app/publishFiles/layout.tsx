import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PublishFiles',
  description: 'description',
};

export default function PublishListLayout({
  children,
}: {
  children: React.ReactNode;
}){
  return (
    <html lang="en">
      <body className="bg-none">
        <main className="w-[450px] h-screen mx-auto bg-white">
          {children}
        </main>
        
      </body>
    </html>
  );
}