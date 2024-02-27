export enum ResponseTypeEnum {
    FORM_NULL = "FORM_NULL",
    FORM_INVALID = "FORM_INVALID",
    TABLE_ERROR = "TABLE_ERROR"
}

export type responseObjectType = {
    status: "success" | "error",
    message?: string;
    results?: any;
    type?: string;
}

export function responseObject({status, message, results, type}: responseObjectType) {
    return { status, message, results, type }
}

export function responseJson(props: responseObjectType) {
    return Response.json(responseObject(props));
}