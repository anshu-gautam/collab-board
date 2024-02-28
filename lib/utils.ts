import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Camera, Color } from "@/types/canvas";

const COLORS = [
  "#CD5C5C",
  "#F08080",
  "#DC143C",
  "#FFFF00",
  "#BA55D3",
  "#ADFF2F",
  "#9400D3",
  "#BC8F8F",
  "#8B4513",
  "#4169E1",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(
  e: React.PointerEvent,
  camera: Camera
) {
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y,
  };
}

export function colorToCss(color: Color) {
  return `#${color.r.toString(16).padStart(2, "0")}${color.g
    .toString(16)
    .padStart(2, "0")}${color.b.toString(16).padStart(2, "0")}`;
}