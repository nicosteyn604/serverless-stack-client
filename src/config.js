export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "eu-central-1",
        BUCKET: "com.solenta.aviation.notes-app-upload"
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://p2seytuxbd.execute-api.eu-central-1.amazonaws.com/prod"
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_ysmuL47oh",
        APP_CLIENT_ID: "6e5j2kp51v3rm7o8nlol9isbna",
        IDENTITY_POOL_ID: "eu-central-1:de9e254e-1be1-4e1e-b5b5-6c02c8434c02"
    },
    STRIPE_KEY: "pk_test_51H1VGlI8ctnw0iEDfidr6XLLC7douqWflrycmXHySQzjuAL4DZ4jyHId2tA2PcBH4LCJpa055qOvvf4LaSmdayZS00MIv9Zu6e",
};
