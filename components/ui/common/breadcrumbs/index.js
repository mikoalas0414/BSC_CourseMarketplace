import { ActiveLink } from '@components/ui/common'
import React from 'react'

const BreadcrumbItem = ({ item, index }) => {
  return (
    <li
      className={`${
        index == 0 ? 'pr-4' : 'px-4'
      } font-medium text-white-500 hover:text-white-900`}
    >
      <ActiveLink href={item.href}>
        <a>{item.value}</a>
      </ActiveLink>
    </li>
  )
}

export default function Breadcrumbs({ items, isAdmin }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex leading-none text-green-600 divide-x divide-green-400">
        {items.map((item, i) => (
          <React.Fragment key={item.href}>
            {!item.requireAdmin && <BreadcrumbItem item={item} index={i} />}
            {item.requireAdmin && isAdmin && (
              <BreadcrumbItem item={item} index={i} />
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  )
}
