"use client";

import { HeroUIProvider } from "@heroui/system";
import { I18nProvider } from "react-aria";

/**
 * Providers component that wraps its children with necessary context providers.
 *
 * This component includes:
 * - `NextUIProvider`: Provides the NextUI context for styling and theming.
 * - `I18nProvider`: Provides internationalization support with a default locale of "de-DE".
 *
 * @param {ProvidersProps} props - The properties for the Providers component.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the providers.
 *
 * @returns {JSX.Element} The wrapped children with the context providers.
 */
export default function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  return (
    <HeroUIProvider>
      <I18nProvider locale="de-DE">{children}</I18nProvider>
    </HeroUIProvider>
  );
}
