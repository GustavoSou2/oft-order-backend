import jwt from 'jsonwebtoken';


export default class CryptoDirective {

    private CRYPTOGRAPH_ALGORITMO: string = 'aes256';
    private CRYPTOGRAPH_TYPE: string = 'hex';

    constructor() {}

    public cryptograph (content: Object): string {
        let type: string  = this.CRYPTOGRAPH_TYPE;
        let algoritmo: string = this.CRYPTOGRAPH_ALGORITMO;

        return jwt.sign(content, algoritmo);
    }

    /*public descryptograph (type = this.CRYPTOGRAPH_TYPE, algoritmo = this.CRYPTOGRAPH_ALGORITMO, content: Object | string | number ): Object | string {
        return '';
    }*/

}