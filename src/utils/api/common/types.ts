import {AxiosError} from 'axios';


export type ApiRequestCommonOpts = {
  /**
   * This has to start with `/`.
   */
  apiPath: string,
} & (
  ApiRetryableRequestOpts | {
    onRetryAttempt?: never,
    onRetrySuccess?: never,
  });

export type ApiRetryableRequestOpts = {
  onRetryAttempt: (err: AxiosError) => void,
  onRetrySuccess: () => void,
};

