import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

interface PasswordModalProps {
  onClose: () => void;
  onSubmit: (password: string) => void;
}

const PasswordModal: React.FC<PasswordModalProps> = ({ onClose, onSubmit }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  const title = 'Portal para Padres';
  const description = 'Ingresá la contraseña de adulto para ver el progreso.';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-sm">
        <form onSubmit={handleSubmit}>
          <div className="p-6">
            <h3 className="text-xl font-bold text-dark-text text-center">{title}</h3>
            <p className="text-center text-gray-600 my-2">
              {description}
            </p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg p-2 mt-4 text-center text-lg"
              placeholder="Contraseña"
              autoFocus
            />
          </div>
          <div className="bg-gray-100 px-6 py-4 flex justify-end space-x-3">
            <Button onClick={onClose} variant="secondary" type="button">
              Cancelar
            </Button>
            <Button type="submit" onClick={() => {}}>
              Ingresar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default PasswordModal;