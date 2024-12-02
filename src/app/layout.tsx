import "./globals.css";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className="py-10 px-4 bg-[#691834]">
        <h4 className="text-center text-3xl text-white">
          Calendário do Advento 2024
        </h4>
        <div className="w-full mt-10">{children}</div>
      </body>
    </html>
  );
}
