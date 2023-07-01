import {ErrorMessage} from '@/types/error';


export const ERROR_STATE_NAME = 'Error';

export enum ErrorDispatcherName {
  UPDATE = 'Error/UpdateErrorMessage',
  HIDE_ERROR = 'Error/HideError',
}

export type ErrorState = ErrorMessage & {
  show: boolean,
  epochMs: number | null,
};

export type ErrorSelectorReturn = ErrorState;
