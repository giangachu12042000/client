import {createFormAction} from 'redux-form-saga';
export const FORM_KEY = 'CATEGORY_FORM';
export const categoryFormAction = createFormAction(FORM_KEY)