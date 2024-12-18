"use client";
import Swal from "sweetalert2";

export const toastHandler = (
  icon: string,
  title: string,
  text = "",
  timer = 5000
) => {
  Swal.fire({
    icon: icon,
    title: title,
    html: text,
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer,
    timerProgressBar: true,
    didOpen: (toast: any) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  } as any);
};

export const useSwal = () => {
  const toast = toastHandler;
  return { toast };
};
