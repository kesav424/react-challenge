import { useState } from "react";

type ValidatorFn = (value: string) => string | null;

export const useValidation = (validators: ValidatorFn[]) => {
  const [error, setError] = useState<string | null>(null);

  const validate = (value: string) => {
    for (const validator of validators) {
      const result = validator(value);
      if (result) {
        setError(result);
        return false;
      }
    }
    setError(null);
    return true;
  };

  return { error, validate };
};

// Example validators
export const required = (msg = "This field is required") => (value: string) =>
  value.trim() === "" ? msg : null;

export const email = (msg = "Enter a valid email address") => (value: string) =>
  /\S+@\S+\.\S+/.test(value) ? null : msg;
