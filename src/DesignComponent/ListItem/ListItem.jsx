import React from "react";

function ListItem({ heading, list }) {
  return (
    <div className="mb-4 md:mb-0">
      <h3 className="font-bold text-xs mb-2">{heading}</h3>
      <ul className="space-y-1">
        {list.map((li) => (
          <li>
            <a href={li.href} className="hover:underline">
              {li.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
