const dev = {
    STRIPE_KEY: "pk_test_51H1VGlI8ctnw0iEDfidr6XLLC7douqWflrycmXHySQzjuAL4DZ4jyHId2tA2PcBH4LCJpa055qOvvf4LaSmdayZS00MIv9Zu6e",
    s3: {
        REGION: "eu-central-1",
        BUCKET: "notes-app-2-api-dev-attachmentsbucket-majaorw0t9ix"
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://api.solenta-online.com/dev"
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_Sw9eyF6f1",
        APP_CLIENT_ID: "69cjobjn6oftn6ibokk4ntfml",
        IDENTITY_POOL_ID: "eu-central-1:70af9273-d40f-4bfa-b781-94211c289ee9"
    }
};

const prod = {
    STRIPE_KEY: "YOUR_STRIPE_PROD_PUBLIC_KEY",
    s3: {
        REGION: "eu-central-1",
        BUCKET: "notes-app-2-api-prod-attachmentsbucket-10efyl8h9momi"
    },
    apiGateway: {
        REGION: "eu-central-1",
        URL: "https://api.solenta-online.com/prod"
    },
    cognito: {
        REGION: "eu-central-1",
        USER_POOL_ID: "eu-central-1_fQlUKwndt",
        APP_CLIENT_ID: "1bct6rv1g5otce668enm810n75",
        IDENTITY_POOL_ID: "eu-central-1:d79babbb-fd57-43da-b674-b4d03d59de88"
    }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    // Add common config values here
    MAX_ATTACHMENT_SIZE: 5000000,
    ...config
};
