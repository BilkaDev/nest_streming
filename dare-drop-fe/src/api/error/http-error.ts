import { useCallback } from 'react';

import { isAxiosError } from 'axios';

type KnownHttpErrorStatus = '400' | '404' | '500';
type KnownHttpErrorMessage = string;

export type HttpErrorMap = Partial<Record<string | 'all', string>>;

const defaultHttpErrorMap: Record<KnownHttpErrorStatus, KnownHttpErrorMessage> =
  {
    '400': 'Something went wrong. Check the data provided',
    '404': 'Something went wrong. Not found item',
    '500': 'Something went wrong. Please try again late.'
  };

export type ValidateErrorsProps = {
  error: unknown;
  httpErrorMap?: HttpErrorMap;
};

function isExpectedCode(code: string): code is KnownHttpErrorStatus {
  return Object.keys(defaultHttpErrorMap).includes(code);
}

const defaultErrorMessage = (code: string): KnownHttpErrorMessage =>
  isExpectedCode(code) ? defaultHttpErrorMap[code] : defaultHttpErrorMap['500'];

export const useParseError = () => {
  return useCallback(({ error, httpErrorMap }: ValidateErrorsProps) => {
    if (httpErrorMap?.all) {
      return httpErrorMap.all;
    }
    if (isAxiosError(error) && error.response !== undefined) {
      return (
        httpErrorMap?.[error.response.status] ??
        defaultErrorMessage(`${error.response.status}`)
      );
    }
    return defaultHttpErrorMap['500'];
  }, []);
};
