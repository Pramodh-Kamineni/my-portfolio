// ✅ This is the server layout (can export metadata)
export const metadata = {
  title: "Pramodh's Portfolio",
  description: 'Portfolio built with Next.js and styled-components',
};

// Import the client layout (where the ThemeProvider lives)
import ClientLayout from './layout-client';

export default function RootLayout({ children }) {
  return <ClientLayout>{children}</ClientLayout>;
}