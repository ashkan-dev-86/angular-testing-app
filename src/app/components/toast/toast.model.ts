export interface IToast {
    message: string;
    type: 'warning' | 'error' | 'normal';
    duration?: number;
}