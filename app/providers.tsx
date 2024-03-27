// app/providers.tsx
'use client';
import { NextUIProvider } from '@nextui-org/react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import React, { useState } from 'react';
import { Toaster } from 'sonner';
// import { Toaster } from "react-hot-toast";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from '@tanstack/react-query';

// const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 60 * 1000,
        },
      },
    })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="light">
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
