"use client";

import { Avatar, Dropdown } from "flowbite-react";

export default function Component() {
  return (
    <Dropdown
      label={<Avatar placeholderInitials="SI" rounded />}
      arrowIcon={false}
      inline
    >
      <Dropdown.Header>
        <span className="block text-sm">Samuel Inchwara</span>
        <span className="block truncate text-sm font-medium">
          si@plum.com
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Dashboard</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Earnings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Logout</Dropdown.Item>
    </Dropdown>
  );
}
