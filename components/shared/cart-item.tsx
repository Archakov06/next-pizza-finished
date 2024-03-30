import { cn } from '@/lib/utils';
import React from 'react';
import { CountButton } from './count-button';

interface Props {
  imageUrl?: string;
  name?: string;
  price?: number;
  className?: string;
  count?: number;
}

export const CartItem: React.FC<Props> = ({ imageUrl, name, price, count, className }) => {
  return (
    <div className={cn('flex bg-white h-36 p-5 gap-6', className)}>
      <img className="w-[65px] h-[65px]" src={imageUrl} alt="Logo" />

      <div>
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-sm text-gray-400">Средняя 30 см, традиционное тесто</p>
        <hr className="my-3" />

        <div className="flex items-center justify-between">
          <CountButton value={count} />

          <h2 className="font-bold">{price} ₽</h2>
        </div>
      </div>
    </div>
  );
};
