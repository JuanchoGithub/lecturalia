
import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

interface PasswordModalProps {
  onClose: () => void;
  onSubmit: (password: string) => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ onClose, onSubmit }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim()) {
      onSubmit(password);
    }
  };

  const title = 'Portal para Padres';
  const description = 'Ingresá la contraseña de adulto para ver el progreso.';

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
      <Card className="w-full max-w-sm border-t-8 border-brand-purple shadow-2xl overflow-visible">
        <form onSubmit={handleSubmit} className="relative">
          <div className="p-8">
            <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
            </div>
            <h3 className="text-2xl font-black text-dark-text text-center tracking-tight mb-2">{title}</h3>
            <p className="text-center text-gray-500 font-medium text-sm leading-relaxed mb-6">
              {description}
            </p>
            
            <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-2 border-gray-200 focus:border-brand-purple rounded-xl p-3 text-center text-xl font-bold transition-all outline-none"
                  placeholder="••••"
                  autoFocus
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-purple transition-colors"
                >
                    {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                            <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                        </svg>
                    )}
                </button>
            </div>
          </div>
          <div className="bg-gray-50 px-8 py-5 flex flex-col sm:flex-row gap-3 rounded-b-lg">
            <button 
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-2 font-bold text-gray-500 hover:text-gray-700 transition-colors uppercase text-sm tracking-widest"
            >
              Cancelar
            </button>
            <Button type="submit" onClick={() => {}} className="flex-1">
              Ingresar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PasswordModal;
