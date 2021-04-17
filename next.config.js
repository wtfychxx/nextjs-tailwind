module.exports = {
    env: {
        appName: 'SIS',
    },
    async rewrites() {
        return [{
                source: '/login',
                destination: '/auth/login'
            },
            {
                source: '/register',
                destination: '/auth/register'
            }
        ]
    }
}