import { Button, NavList } from '@/component/atoms';
import React from 'react';

interface MegaDropdownProps {
  text: string;
}

const MegaDropdown = (props: MegaDropdownProps) => {
  const { text } = props;

  return (
    <div className="relative">
      <Button
        text={text}
        className="flex items-center gap-x-2"
        iconRight="carret-down"
        variant="ghost"
      />
      <div className="absolute top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-2xl bg-white ring-1 shadow-lg ring-gray-900/5">
        <div className="p-4">
          <NavList
            iconName="analytic"
            title="Analytics"
            detail="Get a better understanding of your traffic"
          />
          <NavList
            iconName="engagement"
            title="Engagement"
            detail="Speak directly to your customers"
          />

          <NavList
            iconName="security"
            title="Security"
            detail="Speak directly to your customers"
          />

          <NavList
            iconName="integrations"
            title="Integrations"
            detail="Connect with third-party tools"
          />
          <NavList
            iconName="automations"
            title="Automations"
            detail="Build strategic funnels that will converts"
          />
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          <Button
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
            iconLeft="watch"
            text="Watch demo"
            variant="ghost"
          />
          <Button
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
            iconLeft="contact"
            text="Contact sales"
            variant="ghost"
          />
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
