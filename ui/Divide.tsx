import React from 'react'

type Props = {
    title?: string | null;
}

const Divide = (props: Props) => {
    return (
<div className="py-3 flex items-center text-sm text-gray-800 before:flex-1 before:border-t before:border-gray-200 before:me-6 dark:text-white dark:before:border-neutral-600">Right aligned</div>
    )
}

export default Divide