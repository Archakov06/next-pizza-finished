import { cn } from '@/lib/utils';
import React from 'react';
import { CountButton } from './count-button';

interface Props {
  className?: string;
}

export const CartItem: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex bg-white h-36 p-5 gap-6', className)}>
      <img
        className="w-[65px] h-[65px]"
        src="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
        alt="Logo"
      />

      <div>
        <h2 className="text-lg font-bold">Чизбургер-пицца</h2>
        <p className="text-sm text-gray-400">Средняя 30 см, традиционное тесто</p>
        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton />

          <h2 className="font-bold">965 ₽</h2>
        </div>
      </div>
    </div>
  );
};
