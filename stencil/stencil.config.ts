import {Config} from '@stencil/core';

export const config: Config = {
    namespace: 'spx',
    taskQueue: 'async',
    outputTargets: [
        {
            type: 'www',
            serviceWorker: null,
            dir: '../assets/js',
        },
    ],
};
