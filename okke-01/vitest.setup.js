import { config } from '@vue/test-utils'

import { VueQueryPlugin } from '@tanstack/vue-query';

// Set plugin into global
config.global.plugins = [
    [VueQueryPlugin, {
        // this is just sample config of vue-query
        queryClientConfig: {
            defaultOptions: {
                queries: { refetchOnWindowFocus: false },
            },
        },
    }]
]