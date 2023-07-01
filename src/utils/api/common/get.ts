import axios, {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';

import {ApiRequestCommonOpts} from '@/utils/api/common/types';
import {getCommonAxiosConfig} from '@/utils/api/common/utils';


type ApiGetOpts = ApiRequestCommonOpts & {
  params?: AxiosRequestConfig['params'],
};

export const apiGet = <R>(opts: ApiGetOpts): Promise<AxiosResponse<R, URLSearchParams>> => {
  return apiGetInternal({
    apiUrl: process.env.NEXT_PUBLIC_API_URL,
    ...opts,
  });
};

type ApiGetCommonOpts = ApiGetOpts & {
  apiUrl?: string,
  isTimeoutRetry?: boolean,
};

const apiGetInternal = async <R>(opts: ApiGetCommonOpts): Promise<AxiosResponse<R, URLSearchParams>> => {
  const {apiUrl, apiPath, params, onRetryAttempt, onRetrySuccess, isTimeoutRetry} = opts;

  if (!apiUrl) {
    throw new Error(`API URL unavailable for API GET call to ${apiPath}`);
  }

  try {
    const response: AxiosResponse<R, URLSearchParams> = await axios.request({
      ...getCommonAxiosConfig({
        ...opts,
        apiUrl,
        method: 'GET',
      }),
      params,
    });

    if (isTimeoutRetry && onRetryAttempt && response.status === 200) {
      onRetrySuccess();
    }

    return response;
  } catch (err) {
    if (err instanceof AxiosError && err.code === 'ECONNABORTED' && onRetryAttempt) {
      onRetryAttempt(err);
      return apiGetInternal(opts);
    }
    throw err;
  }
};
