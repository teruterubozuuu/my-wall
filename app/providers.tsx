// app/providers.tsx — Next.js App Router: the kit renders in Client Components
'use client';

import { PxlKitSurfaceProvider } from '@pxlkit/ui-kit';

export function Providers({ children }: { children: React.ReactNode }) {
  return <PxlKitSurfaceProvider surface="pixel">{children}</PxlKitSurfaceProvider>;
}

