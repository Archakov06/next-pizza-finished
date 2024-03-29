import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Title } from './title';
import { CountButton } from './count-button';

interface Props {
  className?: string;
}

export const PizzaCard: React.FC<Props> = ({ className }) => {
  const isAdded = false;

  return (
    <div className={cn(className)}>
      <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
        <img
          className="w-[215px] h-[215px]"
          src="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
          alt="Logo"
        />
      </div>
      <Title text="Сырный цыпленок" size="sm" className="mb-1 mt-3 font-bold" />
      <p className="text-sm text-gray-400">
        Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px]">
          от <b>395 ₽</b>
        </span>

        {isAdded ? (
          <CountButton size="lg" />
        ) : (
          <Button variant="secondary">
            <Plus className="w-4 h-4 mr-1" />
            Добавить
          </Button>
        )}
      </div>
    </div>
  );
};
