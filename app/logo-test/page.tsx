import React from 'react';
import Logo from '../components/Logo';

export default function LogoTestPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white gap-20 p-10">
            <div className="text-gray-400 mb-10">Logo Component Test</div>

            {/* Default Size */}
            <div className="border border-gray-100 p-10">
                <Logo />
            </div>

            {/* Scaled Up */}
            <div className="border border-gray-100 p-10 scale-150 origin-center">
                <Logo />
            </div>

            {/* Dark Background Test */}
            <div className="bg-gray-200 p-10">
                <Logo />
            </div>
        </div>
    );
}
