// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getPaws } from '.';
import type { IPsmAutopilotDevice, IPsmDevice } from '../../../models';
import { PawService } from '../../../services';
import {
    COMMISSIONING_PAWS_REQUEST,
    COMMISSIONING_PAWS_SUCCESS,
    COMMISSIONING_PAWS_FAILURE,
    DECOMMISSIONING_PAWS_SUCCESS,
    DECOMMISSIONING_PAWS_FAILURE,
    DECOMMISSIONING_PAWS_REQUEST
} from './types';

const commissioningPawsRequest = () => ({
    type: COMMISSIONING_PAWS_REQUEST,
});
const commissioningPawsSuccess = (paws: IPsmDevice[]) => ({
    type: COMMISSIONING_PAWS_SUCCESS,
    payload: paws
});
const commissioningPawsFailure = (error: Error) => ({
    type: COMMISSIONING_PAWS_FAILURE,
    payload: error
});

export const commissionPaws = (paws: IPsmAutopilotDevice[], pawTypeToCommission: string) => {
    return async (dispatch) => {
        dispatch(commissioningPawsRequest());
        PawService.commissionPaw(paws, pawTypeToCommission)
        .then(paws => {
            dispatch(commissioningPawsSuccess([]));
            dispatch(getPaws());
        })
        .catch(error => dispatch(commissioningPawsFailure(error)))
    };
}

const decommissioningPawsRequest = () => ({
    type: DECOMMISSIONING_PAWS_REQUEST,
});

const decommissioningPawsSuccess = (paws: IPsmDevice[]) => ({
    type: DECOMMISSIONING_PAWS_SUCCESS,
    payload: paws
});

const decommissioningPawsFailure = (error: Error) => ({
    type: DECOMMISSIONING_PAWS_FAILURE,
    payload: error
});

export const decommissionPaws = (paws: IPsmDevice[]) => {
    return async (dispatch) => {
        dispatch(decommissioningPawsRequest())
        PawService.decommissionPaw(paws)
        .then(paws => {
            dispatch(decommissioningPawsSuccess([]));
            dispatch(getPaws())
        })
        .catch(error => dispatch(decommissioningPawsFailure(error)))
    };
}
