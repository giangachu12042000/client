import {createFormAction} from 'redux-form-saga'
export const FORM_KEY = 'FORMKEY';
export const createLogin = createFormAction(FORM_KEY);