import React from "react";
import { Bell } from "lucide-react";

/**
 * Item visual de notificação, com ícone, título e data.
 */
export const NotificacaoItem = React.memo(({ title, date }: { title: string; date: string }) => (
  <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
    <div className="text-[#181611] flex items-center justify-center rounded-lg bg-[#f4f4f0] shrink-0 size-12">
      <Bell size={24} />
    </div>
    <div className="flex flex-col justify-center">
      <p className="text-[#181611] text-base font-medium leading-normal line-clamp-1">{title}</p>
      <p className="text-[#888163] text-sm font-normal leading-normal line-clamp-2">{date}</p>
    </div>
  </div>
)); 