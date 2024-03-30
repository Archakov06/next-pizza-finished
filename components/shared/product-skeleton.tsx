import React from 'react';

interface Props {
  className?: string;
}

export const ProductSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex justify-center items-center p-6 bg-gray-50 rounded-lg h-[260px] animate-pulse">
        <div className="w-[215px] h-[215px] rounded-full bg-gray-200 animate-pulse" />
      </div>

      <div className="h-7 bg-gray-100 rounded-[8px] w-11/12 my-3 animate-pulse" />

      <div className="h-2.5 bg-gray-100 rounded-[3px] w-full mb-1.5 animate-pulse" />
      <div className="h-2.5 bg-gray-100 rounded-[3px] w-full mb-1.5 animate-pulse" />
      <div className="h-2.5 bg-gray-100 rounded-[3px] w-11/12 mb-1.5 animate-pulse" />

      <div className="flex items-center justify-between mt-6 animate-pulse">
        <div className="h-6 bg-gray-100 rounded-md w-20 animate-pulse" />
        <div className="h-10 bg-gray-100 rounded-md w-[116px] animate-pulse" />
      </div>
    </div>
  );
};
