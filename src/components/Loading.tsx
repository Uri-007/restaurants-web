import { Icon } from "@iconify/react";

interface LoadingProps {
  text?: string;
}

export default function Loading({ text = "Cargando..." }: LoadingProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4 text-gray-600">
      <Icon
        icon="mdi:loading"
        className="text-4xl animate-spin text-blue-600"
      />
      <p className="text-sm font-medium">{text}</p>
    </div>
  );
}
