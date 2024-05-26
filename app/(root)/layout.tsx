import Footer from "@/components/shared/Footer";
import { Header } from "@/components/shared/Header";


// Componente funcional RootLayout que define la estructura básica del diseño de la aplicación
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Contenedor principal que ocupa toda la altura de la pantalla y es una columna flex
    <div className="flex h-screen flex-col">
      {/* Componente Header que se muestra en la parte superior */}
      <Header />
      {/* Contenedor principal para el contenido principal (children) */}
      <main className="flex-1">{children}</main>
      {/* Componente Footer que se muestra en la parte inferior */}
      <Footer />
    </div>
  );
}
