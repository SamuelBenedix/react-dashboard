import React from 'react';
import IconNav from './IconNav';

interface NavListProps {
  title: string;
  detail: string;
  iconName: string;
}

const NavList = (props: NavListProps) => {
  const { title, detail, iconName } = props;
  return (
    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50">
      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
        <IconNav type={iconName} />
      </div>
      <div className="flex-auto">
        <a href="#" className="block font-semibold text-gray-900">
          {title}
          <span className="absolute inset-0"></span>
        </a>
        <p className="mt-1 text-gray-600">{detail}</p>
      </div>
    </div>
  );
};

export default NavList;
