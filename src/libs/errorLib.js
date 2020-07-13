import * as Sentry from "@sentry/browser";

const isLocal = process.env.NODE_ENV === "development";

export function initSentry() {
    if (isLocal) {
        return;
    }

    Sentry.init({dsn: "https://0e8d7f8fa34f4a0294dff0814c7e1d79@o417001.ingest.sentry.io/5314771"});
}

export function logError(error, errorInfo = null) {
    if (isLocal) {
        return;
    }

    Sentry.withScope((scope) => {
        errorInfo && scope.setExtras(errorInfo);
        Sentry.captureException(error);
    });
}

export function onError(error) {
    let errorInfo = {};
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
        errorInfo = error;
        message = error.message;
        error = new Error(message);
        // API errors
    } else if (error.config && error.config.url) {
        errorInfo.url = error.config.url;
    }

    logError(error, errorInfo);

    alert(message);
}
