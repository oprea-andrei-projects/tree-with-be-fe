export default interface HttpReponse<T> extends Response{

    data?: T | null;
    message?: string;

}