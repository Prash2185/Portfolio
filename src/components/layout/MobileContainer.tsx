import { useIsMobile } from "@/hooks/useIsMobile";

interface MobileContainerProps {
  children: React.ReactNode;
  mobileClassName?: string;
  desktopClassName?: string;
}

export const MobileContainer = ({
  children,
  mobileClassName = "",
  desktopClassName = "",
}: MobileContainerProps) => {
  const isMobile = useIsMobile();
  return (
    <div className={isMobile ? mobileClassName : desktopClassName}>
      {children}
    </div>
  );
};
