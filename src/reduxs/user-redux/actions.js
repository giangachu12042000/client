import {createFormAction} from 'redux-form-saga';
export const FORM_KEY = 'FORM_KEY';
export const userCreateForm = createFormAction(FORM_KEY);