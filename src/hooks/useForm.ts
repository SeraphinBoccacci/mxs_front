import { ChangeEvent, Dispatch, useCallback, useReducer } from "react";

export type BaseReducerState = { [x: string]: string };

type Event = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

export const useForm = <FormValues extends { [x: string]: string | undefined }>(
  initialValue: FormValues
): [FormValues, Dispatch<Event | { value: FormValues }>] => {
  const isFromInputEvent = useCallback(
    (event: Event | { value: FormValues }): event is Event =>
      !!(event as Event).target,
    []
  );

  const formReducer = useCallback(
    (state: FormValues, event: Event | { value: FormValues }): FormValues => {
      if (isFromInputEvent(event))
        return {
          ...state,
          [event.target.name]: event.target.value,
        };
      else {
        return { ...state, ...event.value };
      }
    },
    [isFromInputEvent]
  );

  const [formData, setFormData] = useReducer(formReducer, initialValue);

  return [formData, setFormData];
};
