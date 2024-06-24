import React from 'react'

type Props = {}

const IdentityCard = (props: Props) => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="card-background max-w-sm rounded-xl overflow-hidden shadow-lg p-6 bg-black text-white relative">
                <div className="absolute top-3 left-3">
                    <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 4a8 8 0 100 16 8 8 0 000-16zM2 12a10 10 0 1115.34 8.16L2.34 6.82A9.953 9.953 0 012 12zm12.66-8.16L21.66 5.84A9.953 9.953 0 0122 12c0 5.52-4.48 10-10 10a9.953 9.953 0 01-8.16-3.34l18.32-18.32z" />
                    </svg>
                </div>
                <div className="mt-16">
                    <div className="text-2xl font-semibold tracking-wider mb-6">4562 1122 4594 7852</div>
                    <div className="flex justify-between items-center">
                        <div>
                            <div className="uppercase text-xs">Card holder</div>
                            <div className="font-medium text-sm">Jack Peterson</div>
                        </div>
                        <div>
                            <div className="uppercase text-xs">Expires</div>
                            <div className="font-medium text-sm">11/22</div>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="w-8 h-8 bg-red-600 rounded-full inline-block"></span>
                            <span className="w-8 h-8 bg-yellow-500 rounded-full inline-block"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IdentityCard