import { ZodIssue } from "zod";

export function getZodErrorMessage(issues: ZodIssue[]): object {
    if (!issues) return {};

    const errors = issues.reduce((errors, issue) => {
        const field = issue.path[0];
        return errors.set(field, issue.message);
    }, new Map());

    return errors.size > 0 ? Object.fromEntries(errors) : {};
}