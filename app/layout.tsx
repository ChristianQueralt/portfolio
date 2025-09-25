// app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Root shell mínimo (los fondos/nav van en cada idioma)
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
