import { useState } from "react";

export const useToast = () => {
  const [toasts, setToasts] = useState<{ title: string; description: string; variant?: string }[]>([]);

  const toast = ({ title, description, variant }: { title: string; description: string; variant?: string }) => {
    console.log(`[${variant || "info"}] ${title} - ${description}`);
    setToasts((prev) => [...prev, { title, description, variant }]);
  };

  return { toast };
};
