import { useState } from 'react';
import { LoginValues } from '../_schemas/login.schema';
import { signIn } from '../actions';
import { HttpError } from '@/types/api.type';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

export function useLogin(onSuccess?: () => void) {
  const [error, setError] = useState<HttpError | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleLogin = async (loginData: LoginValues) => {
    setError(null);
    setIsPending(true);
    try {
      await signIn(loginData);
    } catch (error) {
      if (!isRedirectError(error)) {
        setError(error as HttpError);
        setIsPending(false);
      }
    }
    if (onSuccess) {
      onSuccess();
    }
  };

  return { handleLogin, error, isPending };
}
